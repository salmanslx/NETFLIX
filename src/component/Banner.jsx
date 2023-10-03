import React,{ useState, useEffect} from 'react'
import './Banner.css'
import tmdbAxiosInstance from '../tmdbAxiosInstance'

export default function Banner({fetchUrl}) {

    
    const [Movie,setMovies] = useState()
    const base_url = "https://image.tmdb.org/t/p/original/";
  
    const fetchData = async ()=>{
        const {data}  = await tmdbAxiosInstance.get(fetchUrl)
        console.log(data.results[Math.floor(Math.random()*data.results.length)])
        setMovies(data.results[Math.floor(Math.random()*data.results.length)])
        // setAllMovies(data.results)
    }
  
    console.log(Movie);
  
    useEffect(()=>{
      fetchData()
    },[]) 



  return (
    <div style={{
      height:'600px',
      backgroundImage:`url(${base_url}/${Movie?.backdrop_path})`,
      backgroundSize:'cover',
      backgroundAttachment:'fixed'
    }}>
      <div className="banner-content">
        <h1> {Movie?.name} </h1>
        <h2> {Movie?.overview.slice(0,200)}... </h2>

      </div>

    </div>
  )
}
