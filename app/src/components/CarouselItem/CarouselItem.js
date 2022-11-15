import MainBtn from "../Buttons/MainBtn";
import "./carouselitem.scss"
import Tilt from "react-parallax-tilt"

const CarouselItem = ({img, title, price, desc, btnText, type}) => {


        return(
    
            <div class={'card'}>
              <Tilt scale={1.1} tiltMaxAngleY='10' tiltMaxAngleX='10'>
            <div class={'card__image'}>
              <div className={'rgb'}></div>
              <img src={img}alt='card image'/>
            </div>
              </Tilt>
            <div class={'card__content'}>
              <span class={'card__title'}>{title}</span>
              <span class={'card__name'}>{price}</span>
              <p class={'card__text'}>{desc}
              </p>
             {type ==='participant'?<div className={'participantbtn'}><h4>{btnText}</h4></div>: <MainBtn title={btnText} color='purple'/>}
            </div>
          </div>
        )
    
    }
    
export default CarouselItem;
