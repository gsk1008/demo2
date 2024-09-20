 import React  from "react";
 import style from './Dashboard.module.scss';


 const Dashboard =()=>{
    return (
    <div className={style.main}>
        <ul className={style.head}>
            <li><a href="#">Aadhaar Bank Link</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">All Scheme</a></li>
            <li><a href="#">My Applied Scheme</a></li>
            <li><a href="#">My Concelled Scheme</a></li>
            <li><a href="#">Right To Give Up</a></li>
            <li><a href="#">Grievance/Suggestion</a></li>
            <li><a href="#">Declaraton Forms</a></li>
            <li><a href="#">Notification</a></li>
            <li><a href="#">My Applied Scheme History</a></li>
        </ul>
    </div>
    )
 }


 export default Dashboard ;