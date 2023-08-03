import React, { useState, lazy, startTransition } from 'react';
import '../../styles/searchWrapper.scss';
import { GrSearch } from 'react-icons/gr';
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
// import SearchResultsWrapper from './SearchResultsWrapper';

const SearchResultsWrapper = lazy( () => import ('./SearchResultsWrapper'));

// interface searchResponseType {
//     adult: string,
//     backdrop_path:string,
//     id:number,
//     media_type: string,
//     original_language: string,
//     title: string,
//     original_title: string,
//     release_date:string,
//     vote_average: number,
//     popularity: number,
//     poster_path:string,
//     overview:string,

// }

const SearchWrapper = () => {

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState<string>("Search for Movies, Shows..");
    // const [searchResponse, setSearchResponse] = useState<Array<searchResponseType>>([]);

    const handleInputChange = (ele: any) => {

        setInputValue(ele.target.value);
    }

    const handleSearch = ( )=> {
       
        navigate(`/search/${inputValue}`);

        // searchCall(inputValue);
        
    }

    console.log(inputValue, 'inputValue')

    // const searchCall = async ( inputValue:string)=>{
    //     try{
    //         let response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=3e85d84a2d3e58168179cf80ecdecea5&query=${inputValue}&include_adult=false&language=en-US&page=1`)
            
    //         console.log("search", response?.data?.results);
    //         setSearchResponse(response?.data.results)
            
    //                 } catch (error){
    //                     console.log(error)
    //                 }
    // }

    return (
        <div className='searchWrapper'>
            <div className='innerWrapper'>

                <div className='inputSection'>
                    <Routes>
                        <Route path='/search' element={<SearchResultsWrapper /> }/>
                        </Routes>
                    <input type='text' name="search" value={inputValue} onChange={(ele) => handleInputChange(ele)} /> 
                    <button onClick={handleSearch}><GrSearch /></button>
                
                    
                </div>
                <div className='resultSection'>

                </div>
            </div>
            {/* {
                <SearchResultsWrapper inputValue={inputValue}/>
            } */}
        </div>
    )
}

export default SearchWrapper;