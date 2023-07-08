import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';

function GalleryList ({ galleryList }) {
    return (
        <div className="galleryList">
            {
                galleryList.map((item) =>
                <GalleryItem key={item.id} item={item} />
                )
            }                    
            
        </div>
    )
}

export default GalleryList;