import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance'
import './Row.css'

function Row({title,fetchUrl,isPoster}) {
 const [allMovies,setAllMovie] = useState()
 const base_url = "https://image.tmdb.org/t/p/original/";

 const fetchData = async ()=>{
  const {data} =await tmdbAxiosInstance.get(fetchUrl)
  setAllMovie(data.results)
 }
 console.log(allMovies);

 useEffect(()=>{
  fetchData()
 },[])

  return (
    <div>
      <h1>{title}</h1>
      <div className="movie-row">
        {
          allMovies?.map(item=>
            <img className={`${isPoster && 'movie-poster'} movie` } src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path} `} alt='no image'/>
            )}
      </div>
      </div>
  )
}

export default Row