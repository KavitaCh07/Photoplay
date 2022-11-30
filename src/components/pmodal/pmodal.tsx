import React from 'react';
import './pmodal.css';
import Footer from '../footer/footer';

const Pmodal = (props: any) => {
  return (
    <div>
       <div className="header">
                <div className="brownLogo">
                    <img src={require("../../assets/brownLogo.png")} alt="image" />
                </div>
                <div className='searchPosition'>
                    <input type="text" placeholder='Search photos, videos, artists' className='searchInput' />
                    <button className='search-button'>SEARCH</button>
                </div>
            </div>
            <div className="displayPhoto">
                <img src={require("../../assets/photoModal.png")} alt="image" className='modalPhoto'/>
            </div>
            <Footer />
    </div>
  )
}

export default Pmodal;
