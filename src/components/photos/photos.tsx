import React from 'react';
import './photos.css';
import r4 from '../../assets/Rectangle4.png';
import whiteHeart from '../../assets/icon_favourite.png';
import profileImg from '../../assets/Oval.png';
import Pmodal from '../pmodal/pmodal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Photos = () => {
  const navigate = useNavigate();
  const [podal, setPModal] = useState(false);

  const state = useSelector((state: any) => state.photoVideos.photo) // for the data to get from header page

  // useEffect(() => {  // useEffect for the data to get from header page
  //   console.log("20", state.photo);
  // }, [state])

  return (
    <div className='photo'>
      <div className="photos-div">
        <div className="photo-row">
          <div className='photo-part' onClick={() => navigate('/pmodal')}><img src={r4} className='p-img' alt="" />
          <div className="heart"><img src={whiteHeart} className='h-img' alt="" /></div>
          <div className='user-details'>
          <div className="profile"><img src={profileImg} className='profile-img' alt="" /></div>
          <div className='profile-user-name'>Ariana Barros</div>
          </div>
          </div>

         
          
        </div>
      </div>
    </div>
  )
}

export default Photos