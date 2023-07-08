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


    return (
      <div className="App">
        <Header />
        <p>Gallery goes here</p>
        <GalleryList galleryList={galleryList}/>
      </div>
    );
}

export default App;
