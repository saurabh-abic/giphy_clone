import React, {useCallback, useState, forwardRef} from 'react';


const Content = ({refs, list, loading})=>{
    const [playGif, setPlayGif] = useState({play: false, id: ''});
    const onClick = useCallback((data)=>{
            let {play , id} = playGif;
            if(data.id === id){
                setPlayGif({play: !play, id: data.id});
            }else{
                setPlayGif({play: true, id: data.id});
            }
    }, [playGif]);
    
    return (
        <div style = {{display: 'flex', flexDirection: 'row', flexWrap: "wrap", width: "100%", justifyContent: "center"}}>
            {
                list.map((item, index)=>{
                    let source = playGif.id === item.id && playGif.play ? "downsized_large" : "480w_still"
                    return(
                        <div key = {item.id + '_' + index}  style = {{display: 'flex', cursor: "pointer"}}>
                            <picture>
                                <img onClick = {()=>{onClick(item)}} style = {{width: "300px", height: "300px"}} src={item.images[source].url} alt="loading..." />
                            </picture>
                        </div>
                    )
                })
            }
             {loading && <p>Loading...</p>}
             <div ref={refs} />
        </div>
    )

}

export default forwardRef((props, refs)=> <Content {...props} refs = {refs}/>);