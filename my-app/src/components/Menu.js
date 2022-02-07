
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../App2.css";
import snackmenu from "../images/menuspics/snackmenu.jpg"
import burgermenu from "../images/menuspics/foodmenu.jpg"
import pizzatakeaway from "../images/menuspics/pizzatakeaway2.jpg"
import maltesetmenu from "../images/menuspics/maltesetmenu2.jpg"


const slideImages = [
  snackmenu,
  burgermenu,
  pizzatakeaway,
  maltesetmenu
    
];

const style ={
    width:"1000px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
}

export default function Slideshow() {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <img  style={style} src={slideImages[0]} alt="snack">
            </img>
          </div>
          <div className="each-slide">
            <img style={style} src={slideImages[1]} alt="burger">
              {/*<span>Slide 2</span>*/}
            </img>
          </div>
          <div className="each-slide">
            <img style={style} src={slideImages[2]} alt="pizza">
              {/*<span>Slide 2</span>*/}
            </img>
          </div>
          <div className="each-slide">
            <img style={style} src={slideImages[3]} alt="maltese">
              {/*<span>Slide 2</span>*/}
            </img>
          </div>         
         
        </Slide>
      </div>
    )
};

