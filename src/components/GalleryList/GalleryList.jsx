import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';
import Grid from '@mui/material/Grid';

function GalleryList ({ galleryList, likePost }) {

    return (
        <div className="galleryList">

            <Grid container rowSpacing={1} columnSpacing={1}>
            {
                galleryList.map((item) =>
                <GalleryItem key={item.id} item={item} likePost={likePost}/>
                )
            }                    
            </Grid>

        </div>
    )
}

export default GalleryList;