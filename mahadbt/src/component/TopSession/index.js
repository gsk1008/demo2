import React from 'react';
import style from './topSession.module.scss';
import Img from '../../assets/Img/firstimg.png';
import second from '../../assets/Img/secondimg.png';

const TopSession =()=>{

return (
    <>
    <img src={Img} className={style.img}></img>
    <div>
    <img src={second} className={style.second}></img>
    </div>
    
    {/* <h1>hey i am kakade</h1> */}

    </>
)

}

export default TopSession;