
import React, {useState} from 'react';
import { Slide } from 'react-slideshow-image';
import * as Icon from 'react-bootstrap-icons';
import "../App2.css";
import img1 from "../images/apetizers.jpg"
import img2 from "../images/appetizers2.jpg"
import img3 from "../images/baguettes.jpg"
import img4 from "../images/beersnappetizers.jpg"
import img5 from "../images/burgers.jpg"
import img6 from "../images/cherrytomatoes.jpg"
import img7 from "../images/food1.jpg"
import img8 from "../images/frontbarview.jpg"
import img9 from "../images/ftira.jpg"
import img10 from "../images/ftirabfast.jpg"
import img11 from "../images/nicepotatoes.jpg"
import img12 from "../images/pizzapeperoni.jpg"
import img13 from "../images/quichelorraine.jpg"
import img14 from "../images/toastcoffee.jpg"
import img15 from "../images/pasta.jpg"
import img16 from "../images/morebaguettes.jpg"





const style ={
    width:"1000px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
}

export default function Gallery() {
  const data = [
    {
      id:1,
      imgSrc:img1
    },
  
    {
      id:2,
      imgSrc:img2
    },
  
    {
      id:3,
      imgSrc:img3
    },
  
    {
      id:4,
      imgSrc:img4
    },
  
    {
      id:5,
      imgSrc:img5
    },
  
    {
      id:6,
      imgSrc:img6
    },
  
    {
      id:7,
      imgSrc:img7
    },
  
    {
      id:8,
      imgSrc:img8
    },
  
    {
      id:9,
      imgSrc:img9
    },
  
    {
      id:10,
      imgSrc:img10
    },
  
    {
      id:11,
      imgSrc:img11
    },
  
    {
      id:12,
      imgSrc:img12
    },
  
    {
      id:13,
      imgSrc:img13
    },
  
    {
      id:14,
      imgSrc:img14
    },
  
    {
      id:15,
      imgSrc:img15
    },
  
    {
      id:16,
      imgSrc:img16
    }
  ];


  const [model, setModel] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')
  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc)
    setModel(true)
  }


    return <div>

      <div className={model? "model open" : "model"}>
        <img src={tempImgSrc}/>
        <Icon.XCircle onClick={()=> setModel(false)}></Icon.XCircle>
      </div>
     
     <div className='gallery'>
        {data.map((item, index)=>{
          return (
            <div className='picsGallery' key={index} onClick={()=> getImg(item.imgSrc)}>
                <img src={item.imgSrc} alt={item.imgSrc} style={{width: "100%"}}/>
            </div>
          )
        })}

    </div>
      
    </div>
};

