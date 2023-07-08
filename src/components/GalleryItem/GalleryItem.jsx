import React from "react"
import { useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from "@mui/material";
import { useTheme } from '@mui/material/styles';

function GalleryItem (props) {

    const[showCard, setShowCard] = useState(false);

    const handleCard = () => {
        setShowCard(!showCard)
        console.log('Card Clicked')
    }

    const handleLike = () => {
        console.log('Like button clicked');
    }

    let content
    if(!showCard) {
            content = <CardActionArea onClick={handleCard} ><CardMedia
                  sx={{ height: 200 }}
                  image={props.item.path}
                  alt={props.item.description}
                />
                </CardActionArea>
        } else {
            content = <CardActionArea onClick={handleCard} ><CardContent sx={{ height: 200}}><div className="inside-card">
            <Typography gutterBottom variant="h5" component="div">
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.item.description}
            </Typography></div>
          </CardContent></CardActionArea>
        }
    return (
            <div className="single-card">
            
              <Card sx={{ width: 345 }}>
                {content}
                

                <CardActions>
                  <span><Button size="small" onClick={handleLike}>Like</Button></span>
                </CardActions>
                <span>Likes: </span>{props.item.likes}
                <p></p>
              </Card></div>
            );
          }



export default GalleryItem