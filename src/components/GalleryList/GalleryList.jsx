import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


function GalleryList({ galleryList, likePost }) {

    return (
        <div className="galleryList">
            {/* <Container>
                <Grid container spacing={3}> */}
                    {
                        galleryList.map((item) =>

                            <GalleryItem key={item.id} item={item} likePost={likePost} />

                        )
                    }
                {/* </Grid>
            </Container> */}
        </div>
    )
}

export default GalleryList;