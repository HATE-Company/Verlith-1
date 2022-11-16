import {Swiper, SwiperSlide} from "swiper/react"
import "./carousel.scss"
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import "../CarouselItem/carouselitem.scss"
import GoldMonolith from "../../assets/Card_HC_GoldFront.jpg"
import SilverMonolith from "../../assets/Card_HC_SilverFront.jpg"
import BronzeMonolith from "../../assets/Card_HC_BronzeFront.jpg"
import BlackMonolith from "../../assets/Card_HC_BlackFront.jpg"
import BonusMonolith from "../../assets/Card_HC_BlackBonusFront.jpg"
import Profile from "../../assets/images.png"

import { Controller, EffectCoverflow, FreeMode, Grid, Keyboard, Manipulation, Mousewheel, Navigation, Pagination, Parallax, Virtual } from "swiper";
import CarouselItem from "../CarouselItem/CarouselItem";
const Carousel = ({nft}) => {
  const params = {
    modules:[Navigation, EffectCoverflow, Pagination, Keyboard],
    effect: "coverflow",
    loop: false,
    pagination:true,
    grabCursor: true,
    spaceBetween: 100,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide:2,
    coverflowEffect: {
      rotate: 20,
      stretch: 10,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation:true,
      keyboard: {
        enabled: true,
      },
     
  }
  const params2 = {
    modules:[Navigation, EffectCoverflow, Pagination, Keyboard],
    effect: "coverflow",
    loop: true,
    pagination:true,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 100,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 10,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation:true,
      keyboard: {
        enabled: true,
      }
    
  
 
}
    return (
      <>
{nft? 
      <Swiper {...params}>
        <SwiperSlide>
        <CarouselItem img={GoldMonolith} title='HEADLINE CREATOR' price='$49' desc='begin your journey without any limits and become a pianoeer of the deserve to earn concept'  btnText={'Buy Now'}/>
        </SwiperSlide>

        <SwiperSlide>
        <CarouselItem img={SilverMonolith} title='STORYTELLER' price='$39' desc='share your thoughts and experiences in the existing headlines and monetize your content to earn more'  btnText={'Buy Now'}/>
        </SwiperSlide>

        <SwiperSlide>
        <CarouselItem img={BronzeMonolith} title='NEWCOMER' price='$9' desc='start your journey as a newcomer and build your reputation from scratch to mint other NFTs for free' btnText={'Buy Now'}/>
        </SwiperSlide>

        <SwiperSlide>
        <CarouselItem img={BlackMonolith} title='ADVERTISEMENT' price='for brands only' desc='experience the interactive advertisement concept and be in touch with your target audience in seconds' btnText='CONTACT US'/>
        </SwiperSlide>

        <SwiperSlide>
        <CarouselItem img={BonusMonolith} title='HASHTAG CREATOR' price='$99' desc='create your own community to monetize your content as a group and expand your dedicated hashtag' btnText='COMING SOON'/>
        </SwiperSlide>
      </Swiper>
      :
      <Swiper {...params2}>

      <SwiperSlide>
        <CarouselItem type='participant' img={Profile} title="Participant's Role" price='Your Name Here' desc='This line contains some info about participant. Here is some random filler text content' btnText='Linkedin GitHub etc.'/>
      </SwiperSlide>   

      <SwiperSlide>
        <CarouselItem type='participant' img={Profile} title="Participant's Role" price='Your Name Here' desc='This line contains some info about participant. Here is some random filler text content' btnText='Linkedin GitHub etc.'/>
      </SwiperSlide> 

      <SwiperSlide>
        <CarouselItem type='participant' img={Profile} title="Participant's Role" price='Your Name Here' desc='This line contains some info about participant. Here is some random filler text content' btnText='Linkedin GitHub etc.'/>
      </SwiperSlide>  

      <SwiperSlide>
        <CarouselItem type='participant' img={Profile} title="Participant's Role" price='Your Name Here' desc='This line contains some info about participant. Here is some random filler text content' btnText='Linkedin GitHub etc.'/>
      </SwiperSlide>  

      <SwiperSlide>
        <CarouselItem type='participant' img={Profile} title="Participant's Role" price='Your Name Here' desc='This line contains some info about participant. Here is some random filler text content' btnText='Linkedin GitHub etc.'/>
      </SwiperSlide>    

      </Swiper>
      }
      </>
      );

}

export default Carousel;