import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../../styles/searchResultsWrapper.scss';
import { img_300 } from '../config/config';
import axios from 'axios';
import { useParams } from "react-router-dom";

interface searchResponseType {
    adult: string,
    backdrop_path: string,
    id: number,
    media_type: string,
    original_language: string,
    title: string,
    original_title: string,
    release_date: string,
    vote_average: number,
    popularity: number,
    poster_path: string,
    overview: string,
    original_name:string,
    name:string,

}
// type searchResponseProps = {
//     inputValue: string;
// }

const SearchResultsWrapper = () => {

    let params = useParams();
    const [searchResponse, setSearchResponse] = useState<Array<searchResponseType>>([]);

    const searchCall = async (inputValue: string) => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=3e85d84a2d3e58168179cf80ecdecea5&query=${inputValue}&include_adult=false&language=en-US&page=1`)

            console.log("search", response?.data?.results);
            setSearchResponse(response?.data.results)

        } catch (error) {
            console.log(error)
        }
    }

    console.log(params, 'inputValue2')

    useEffect(() => {
        if (params.data) {
            searchCall(params.data);
        }



    }, [params]);



    return (
        <div>
            <Header />
            <div className='resultsWrapper'>
                <div className='innerWrapper'>
                    <h3>Results for search term</h3>

                    <div className='resultsContainer'>
                        {searchResponse && searchResponse.length > 1 ?
                            <div className='resultsList'>
                                {
                                    searchResponse.map((ele, index) => {
                                        const title = ele.title || ele.original_title || ele.name ||ele.original_name ||  'no data';
                                        return (
                                            <div key={index} className='resultListIndividulaElem'>
                                                <div className='leftSection'>
                                                    <img width={65} height={65} src={`${img_300}${ele.poster_path !== '' ? ele.poster_path : ele.backdrop_path}`} alt="No Data" />
                                                </div>
                                                <div className='rightSection'>
                                                    <h3>{title} </h3>
                                                    {ele.media_type !== '' ? <p><span>Media Type :&nbsp;</span> {ele.media_type}</p> : ''}
                                                    {ele.popularity !== null ? <p> <span>Popularity :&nbsp;</span>{ele.popularity}</p> : ''}
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>


                            : <div> <p className='errorMessage'>No Results for the term.</p></div>

                        }
                    </div>
                </div>

            </div>

        </div>

    )
}
export default SearchResultsWrapper;