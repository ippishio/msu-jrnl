import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css"
import '../img/1.jpg'
import '../img/2.jpg'
import '../img/3.jpg'
import '../img/4.jpg'
import '../img/5.jpg'
import '../img/6.jpg'
import '../img/7.jpg'
import '../img/8.jpg'
import '../img/9.jpg'
import '../img/10.jpg'
import '../img/11.jpg'
import '../img/12.jpg'
import '../img/13.jpg'
import '../img/14.jpg'
import '../img/15.jpg'
import '../img/16.jpg'
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


export default class Swip extends React.Component{
  render(){
return (
    <div className="about_swip">
  <>
    <Swiper 
    spaceBetween={100}
    centeredSlides={true}
    autoplay={{
      delay: 10000,
      disableOnInteraction: false,
    }}
      pagination={true
      }
      navigation={false}
      modules={[ Navigation,Pagination,Autoplay]}
      className="mySwiper"
    >
      
      <SwiperSlide>
        <div className="S-flex">
          <div className="S"><img src='19.jpg' ></img></div>
          <div className="S-p"><p>"Люди зажаты между прошлым, за которое им стыдно, и будущим, которое их пугает"</p></div>
        </div>
         
         </SwiperSlide>
         <SwiperSlide>
        <div className="S-flex">
          <div className="S"><img src='20.jpg' ></img></div>
          <div className="S-p"><p>"Сильные люди не любят свидетелей своей слабости"</p></div>
        </div>
         
         </SwiperSlide>
         <SwiperSlide>
        <div className="S-flex">
          <div className="S"><img src='21.jpg' ></img></div>
          <div className="S-p"><p>"К черту совершенство. Не надо его добиваться. Надо развиваться. Пусть фишки ложатся как ложатся."</p></div>
        </div>
         
         </SwiperSlide>
         <SwiperSlide>
        <div className="S-flex">
          <div className="S"><img src='22.jpg' ></img></div>
          <div className="S-p"><p>"Лучше сделать и ошибиться, чем не сделать и жалеть об этом"</p></div>
        </div>
         
         </SwiperSlide>
         <SwiperSlide>
        <div className="S-flex">
          <div className="S"><img src='23.jpg' ></img></div>
          <div className="S-p"><p>"Чьо какая цитата я сплю..."</p></div>
        </div>
         
         </SwiperSlide>
         <SwiperSlide>
        <div className="S-flex">
          <div className="S"><img src='24.jpg' ></img></div>
          <div className="S-p"><p>"Мы знаем, кто мы есть, но не знаем, кем мы можем быть"</p></div>
        </div>
         
         </SwiperSlide>
      <SwiperSlide>
        <div className="S-flex">
          <div className="S"><img src='1.jpg' ></img></div>
          <div className="S-p"><p>"Что наша жизнь? Семь лет до школы и три года после пенсии"</p></div>
        </div>
         
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='2.jpg' ></img></div>
          <div className="S-p"><p>"Если чувствуешь, что начинаешь тупеть, не расстраивайся: тупеть может только умный"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='3.jpg' ></img></div>
          <div className="S-p"><p> "Верь в себя и не теряй надежду"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
         
          <div className="S-flex">
          <div className="S"><img src='4.jpg' ></img></div>
          <div className="S-p"><p> "Не можешь противостоять — противолежи"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='5.jpg' ></img></div>
          <div className="S-p"><p>"Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили. Да и в гимназии учиться было бы незачем."</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='6.jpg' ></img></div>
          <div className="S-p"><p>"Терпенье и труд - все, я устал"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='7.jpg' ></img></div>
          <div className="S-p"><p>"Чистая совесть — лучшее снотворное."</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='8.jpg' ></img></div>
          <div className="S-p"><p>"В Гимназии МГУ! День 9!"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
         
          <div className="S-flex">
          <div className="S"><img src='9.jpg' ></img></div>
          <div className="S-p"><p>"Амогус"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='10.jpg' ></img></div>
          <div className="S-p"><p>"Помни, что сегодня в завтрашний день не все могут смотреть. Вернее, смотреть могут не только лишь все. Мало, кто может это делать"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='11.jpg' ></img></div>
          <div className="S-p"><p>"Забей"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='12.jpg' ></img></div>
          <div className="S-p"><p>"Звонили из цирка, говорят, у них клоун сбежал, я тебя не выдал"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='13.jpg' ></img></div>
          <div className="S-p"><p>"Сотни дверей закрываются и открываются с каждым твоим выбором"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='14.jpg' ></img></div>
          <div className="S-p"><p> "Делай, что должно, и будь, что будет"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='15.jpg' ></img></div>
          <div className="S-p"><p>"Если хочешь сделать всë сам - сделай всë сам"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='16.jpg' ></img></div>
          <div className="S-p"><p>"Никогда не отказывайся от того, о чем ты не сможешь ни дня не думать"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='17.jpg' ></img></div>
          <div className="S-p"><p>"Никогда не отказывайся от того, о чем ты не сможешь ни дня не думать"</p></div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
          
          <div className="S-flex">
          <div className="S"><img src='18.jpg' ></img></div>
          <div className="S-p"><p>"Хинкали топ тема советую"</p></div>
        </div>
         </SwiperSlide>
      
    </Swiper>
  </>
  </div>
);
  }
}
