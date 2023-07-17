import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/Constants'
import YouTube from 'react-youtube';

function RowPost(props) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [state,setState]=useState([])
  const [uid, setUid] = useState('')
  useEffect(()=>{
   axios.get(props.url).then((response)=>{
    if (response.data.length!==0) {
      setState(response.data.results)
    }else{
      console.log('emty');
    }
    
   })
  });
 const handleMovie=(id)=>{

  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    setUid(response.data.results[0])
  })
}
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          state.map((obj)=>
              <img onClick={()=>handleMovie(obj.id)} src={`${imageUrl+obj.backdrop_path}`} className={props.isSmall ? 'smallposters':'poster'} alt='posters'/>
          )}
      </div>
     { uid &&<YouTube videoId={uid.key} opts={opts}  />}
     </div>
  )
}

export default RowPost
