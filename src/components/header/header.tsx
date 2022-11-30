import React from 'react';
import './header.css';
import logo from '../../assets/Logo.png';
import Tabs from '../tabs/tabs';
import search from '../../assets/Search.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AddPhoto } from '../../redux/photoSlice';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
    const [searchInputData, setSearchInputData] = useState('');  //to take input data from search bar
    const [fetchedData, setFetchedData] = useState<any>('');
    const dispatch = useDispatch();

    const onSubmit = (event: any) => {
        event.preventDefault();
        // console.log(searchInputData);
        setSearchInputData(event.target.searchInputData.value);
        // console.log(searchInputData)
        // localStorage.setItem("searchTerm", JSON.stringify(searchInputData)); //this line is inserting the searchInputData as searchTerm in local storage
      };

      

      const url=`https://api.pexels.com/v1/search?query=${searchInputData}&per_page=1`;

      const options={
        method: "GET",
          headers: {
              Accept: "application/json",
              Authorization: "563492ad6f9170000100000132c593fe670b4a79af21cc7805e93875",     //use the apikey you have generated
          },
      };

      useEffect(() => {
        fetch(url, options)
          .then(res => {console.log(res)})
          .then(json => setFetchedData(json))
          .catch(err => console.error('error:' + err));
      }, [searchInputData])

      useEffect(() => {
        dispatch(AddPhoto(fetchedData));
        // recentSearchHandler();
      }, [fetchedData]);
      console.log("1",fetchedData);

    //   const data=await fetch(`https://api.pexels.com/v1/search?query=${searchInputData}&per_page=1`,
    //   {
    //       method: "GET",
    //       headers: {
    //           Accept: "application/json",
    //           Authorization: "563492ad6f917000010000013d0acbd1ac014e059dcd1b450b798fb3",     //use the apikey you have generated
    //       },
    //   });
    
    //   const response=await data.json();   //convert the response to json
    
    //   console.log(response);

    return (
        <div className='background'>
            <div className="maskImage">
                <div className="mask-inner">
                    <div className="logo-img">
                        <img src={logo} className='logo' alt="" />
                    </div>
                    <div className="written-content">
                        <div className='w1'>Discover the world's best photos & videos</div>
                        <div className='mob-w1'>Discover the world's <br /> best photos & videos</div>
                        <div className='w2'>Best memories online</div>
                    </div>

                    <div className='searchPosition'>
                        <form action="" className='search-form' onSubmit={onSubmit}>
                            <input type="text" placeholder='Search photos, videos, artists' name='searchInputData' className='search-input'/>
                        </form>
                        <button className='searchButton'>SEARCH</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;