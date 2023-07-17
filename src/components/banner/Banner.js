import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY } from '../../constants/Constants'
import { imageUrl } from '../../constants/Constants'



function Banner() {
  const [state, setState] = useState([])
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0]);
      setState(response.data.results[0])
    })
  }, [])

  return (
    <div className='banner'
      style={{ backgroundImage: `url(${imageUrl + state.backdrop_path})` }}>
      <div className='content'>
        <h1 className='title'>{state.title}</h1>
        <div className='banner_buttons'>
          <button className='button'>play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{state.overview}</h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
