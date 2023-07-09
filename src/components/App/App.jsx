import React from 'react';
import './App.css';
import axios from "axios";
import {useState, useEffect} from 'react';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';



function App() {
    const [galleryList, setGalleryList] = useState([])

    // GET to pull items from server
    const getGallery = () => {
      axios({
        method: "GET",
        url: "/gallery"
      })
      .then((response) => {
        console.log('Response received: ', response.data);
        setGalleryList(response.data);
      }) 
      .catch((error) => {
        console.log('Error on GET: ', error)
      })
    }

    // useEffect to pull list once
    useEffect(() => {
      getGallery();
    }, []);

    // PUT request to update like count
    const likePost = (itemToUpdate) => {
      console.log('in likePost grabbing itemToUpdate: ', itemToUpdate);
      axios({
        method: "PUT",
        url: `/gallery/${itemToUpdate.id}`
      })
      .then((response) => {
        getGallery();
      })
      .catch((error) => {
        alert("Error in UPDATEing item in database: ", error);
        console.log(error);
      })
    }

    return (
      <div className="App">
        <Header />
        <div className='outside-title'>
        <div className="title-block">
        <p>Life Experiences Which Got Me to Who I am Today</p>
        </div></div>
        <br/>
        <br />
        <GalleryList galleryList={galleryList} likePost={likePost}/>
      </div>
    );
}

export default App;
