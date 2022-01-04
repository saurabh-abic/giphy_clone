import React from 'react';
import {BsSearch} from 'react-icons/bs';
import {debounce} from '../utils/utils';
import '../../styles/styles.scss';

const SearchIcon = ()=>{
    return (
        <div className = "searchIcon">
          <BsSearch/>
        </div>
    )
}

const SearchBar = ({handleChange})=>{
    const onChange = debounce(handleChange, 1000);
    return(
        <div className = "searchBar">
            <input onChange = {onChange}/>
            <SearchIcon/>
        </div>
    )
}

export default SearchBar;