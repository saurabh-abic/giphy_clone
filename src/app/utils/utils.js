import {useState, useCallback, useEffect, useRef} from 'react';
import dataSources from './dataSources';

const getGifs = async ({page, search})=>{
    let endPoint = search && search.trim() ? dataSources.getGif(search, page) : dataSources.getTrendingGif(page);
    return fetch(endPoint).then((res)=>{
        return res.json();
      }).then(res=>{
          return res;
      })
  };


function useFetch(page, search) {
    const [loading, setLoading] = useState(true),
          [error, setError] = useState(false),
          [list, setList] = useState([]);
  
    const sendQuery = useCallback(async () => {
      try {
        await setLoading(true);
        await setError(false);
        const res = await getGifs({search, page});
        await setList((prev) => [...prev, ...res.data]);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }, [page, search]);
  
    useEffect(() => {
      sendQuery();
    }, [sendQuery]);
  
    return { loading, error, list, setList };
}

const debounce = (callback, delay)=>{
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            callback(...args);
        }, delay);
    }
}


function useScroll(){
    const [page, setPage] = useState(0),
         [search, setSearch] = useState(""),
         { loading, error, list, setList } = useFetch(page, search),
         loader = useRef(null);

         const handleChange = (e) => {
            setList([]);
            setSearch(e.target.value);
            setPage(0);
        };

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      }, []);
    
      useEffect(() => {
        const option = {
          root: null,
          rootMargin: "20px",
          threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
      }, [handleObserver]);

      return {loading, handleChange, loader, list}
}



  export {
      useScroll,
      debounce
  }