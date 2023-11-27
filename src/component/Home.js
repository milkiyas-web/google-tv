import React, { useEffect, useState, useRef } from 'react'
import logo from './GT_icon.png'
import video from './little-women-clip.mp4'
import './Home.css'
import {TweenMax, Power3,} from 'gsap'
import got from './got.webp'
import AG from './AG.webp'
import SW from './SW.webp'
import MM from './MM.webp'
import PL from './PL.webp'
import TS from './TS.webp'
import JR from './JR.webp'
import WM from './WM.webp'
import GH from './GH.webp'
import ML from './ML.webp'
import AOU from './AOU.webp'
import CRA from './CRA.jpg'

function Home() {
    let videoItem = useRef(null)
    let firstI = useRef(null)
    let secondI = useRef(null)
    let thirdI = useRef(null)
    let fourthI = useRef(null)
    let fifthI = useRef(null)
    let sixthI = useRef(null)
    let seventhI = useRef(null)
    let eighthI = useRef(null)
    let seventhII = useRef(null)
    let thirdII = useRef(null)
    let left = useRef(null);
    let mid = useRef(null);
    let right = useRef(null);
    let firstII = useRef(null);
    let device = useRef(null);
    useEffect(() => {
        console.log(videoItem);
        window.onscroll = function (e) {
            //  console.log('curretn scroll from the top: ', window.scrollY); // Value of scroll Y in px
              let scrolled = window.scrollY
              console.log(scrolled)
              if(scrolled > 300 && scrolled < 550){
                  TweenMax.to(
                    videoItem,
                     2,
                    {
                        y: 0,
                        width: 500
                    }
                )
                TweenMax.to(
                    firstI,
                    2,
                    {   
                        delay: .5,
                        opacity: 1
                    }
                )
                TweenMax.to(
                    secondI,
                    2,
                    {   
                        delay: .5,
                    }
                )
                TweenMax.to(
                    thirdI,
                    2,
                    {   
                        delay: .5,
                        opacity: 1
                    }
                )
                TweenMax.to(
                    fourthI,
                    2,
                    {   
                        delay: .5,
                        opacity: 1
                    }
                )
                TweenMax.to(
                    fifthI,
                    2,
                    {   
                        delay: .5,
                        opacity: 1
                    }
                )
                TweenMax.to(
                    sixthI,
                    2,
                    {   
                        delay: .5,
                        opacity: 1
                    }
                )
                TweenMax.to(
                    seventhI,
                    2,
                    {   
                        delay: .5,
                        opacity: 1
                    }
                )
                TweenMax.to(
                    eighthI,
                    2,
                    {   
                        delay: .5,
                        opacity: 1
                    }
                )
              }
              if(scrolled > 950){
                  console.log('greater than 500')
                  TweenMax.to(
                      left,
                      .8,
                      {
                          y: 285
                      }
                  )
                  TweenMax.to(
                    mid,
                    .8,
                    {
                        y: 0
                    }
                  )
                  TweenMax.to(
                    right,
                    .8,
                    {
                        y: 285
                    }
                  )
                  TweenMax.to(
                    firstII,
                    2,
                    {
                        delay: .5,
                        opacity: 1
                    }
                )
                TweenMax.to(
                    seventhII,
                    2,
                    {
                        delay: .5,
                        opacity: 1
                    }
                )
                TweenMax.to(
                    thirdII,
                    2,
                    {
                        delay: .5,
                        opacity: 1
                    }
                )
                TweenMax.to(
                    secondI,
                    {
                        delay: .5,
                        opacity: 0
                    }
                )
                TweenMax.to(
                    sixthI,
                    {
                        delay: .5,
                        opacity: 0
                    }
                )
                TweenMax.to(
                    eighthI,
                    {
                        delay: .5,
                        opacity: 0
                    }
                )
              }
              if(scrolled > 2125){
                  /*TweenMax.to(
                    device,
                    2,
                    {
                        delay: .1,
                        x: 250
                    }
                  )*/
                //   TweenMax.to(
                //       ScrollTrigger, {
                //           device,
                //           x: 400
                //       },
                      
                //   )
              }
            }
    }, []);
    return (
        <div className="home">
             <div className="home__title" >
               <img src={logo} alt="" className="home__logo"/>
               <h3>Google TV</h3>
             </div>
             <div className="home__text" >
                 <h1>With a little help <br/> from Google.</h1>
             </div>
             {/**/}
             <div className="home__container">
             <div ref={el => {left = el}} className="home__col left">
                <img className="home__firstII" ref={el => {firstII = el}} src={ML} alt=""/>
                <img ref={el => {firstI = el}} src={got} alt=""/>
                <img ref={el => {fourthI = el}} src={SW} alt=""/>
                <img ref={el => {sixthI = el}} src={JR} alt=""/>
             </div>
             <div ref={el => {mid = el}} className="home__col mid">
                <img ref={el => {secondI = el}} src={PL} alt=""/>
                <video ref={el => {videoItem = el}}  src={video} preload="true" autoPlay loop></video>
                <img ref={el => {seventhI = el}} src={TS} alt=""/>
                <img className="home__seventhII" ref={el => {seventhII = el}} src={AOU} alt=""/>
             </div>
             <div ref={el => {right = el}} className="home__col right">
                <img src={GH} ref={el => {thirdII = el}} alt=""/>
                <img ref={el => {thirdI = el}} src={MM} alt=""/>
                <img ref={el => {fifthI = el}} src={AG} alt=""/>
                <img ref={el => {eighthI = el}}src={WM} alt=""/>
            </div>
             </div>
             <div className="home__deviceWrapper">
                 <div className="home__deviceWrapperText">
                 <h1>Browse content <br/> from across your <br/> apps, intelligently <br/> organized just for <br/> you.</h1>
                 
                 </div>
                 <img ref={el => {device = el}} src={CRA} alt=""/>
             </div>
        </div>
    )
}

export default Home
