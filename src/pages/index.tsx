import React, { useEffect } from "react";
import type { NextPage } from "next";
import gsap, { Power0, Power3, Linear } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.container__img',
        scrub: true,
        start: 'top top',
        end: '+=2000',
        pin: true
      }
    })
    .to('.img1', {
      duration: 2,
      y: 10,
      ease: Power0.easeNone
    }, 'start')
    .to('.img2', {
      duration: .5,
      y: 10,
      ease: Linear.easeNone
    }, 'start')
    .to('.img3', {
      duration: .5,
      y: 20,
      ease: Linear.easeNone
    }, 'start')
    .to('.img4', {
      duration: .5,
      y: -40,
      ease: Linear.easeNone
    }, 'start')
    .to('.img5', {
      duration: 2,
      y: -70,
      easeNone: Linear.easeNone
    }, 'start')
    .to('.img6', {
      duration: 2,
      y: -110,
      ease: Linear.easeNone
    }, 'start')
    .to('.img7', {
      duration: 2,
      y: -130,
      ease: Linear.easeNone
    }, 'start')
    .to('.img8', {
      duration: 2,
      y: -150,
      scaleY: 1.2,
      ease: Linear.easeNone
    }, 'start')
    .to('.box', {
      duration: 2,
      height: '21vh',
      y: 100,
      ease: Linear.easeNone
    }, 'start')

    gsap.timeline({
      scrollTrigger: {
        trigger: '.boxs',
        scrub: true,
        start: 'top top',
        end: '+=1500',
        pin: true,
        toggleActions: 'restart none none reset'
      }
    })
    .from('h2', {
      x: 500,
      opacity: 0,
      ease: Power3.easeInOut
    })
    .from('h1', {
      x: -500,
      opacity: 0,
      ease: Power3.easeInOut
    })
    .from('h3', {
      x: 500,
      opacity: 0,
      ease: Power3.easeInOut
    })

  }, [])

  return (
    <div className="container">
      <div className="container__img">
        <div className="img">
          <img
            className="img0"
            src="/static/images/firewatch/parallax0.png"
            alt="img-0"
          />
          <img
            className="img1"
            src="/static/images/firewatch/parallax1.png"
            alt="img-1"
          />
          <img
            className="img2"
            src="/static/images/firewatch/parallax2.png"
            alt="img-2"
          />
          <img
            className="img3"
            src="/static/images/firewatch/parallax3.png"
            alt="img-3"
          />
          <img
            className="img4"
            src="/static/images/firewatch/parallax4.png"
            alt="img-4"
          />
          <img
            className="img5"
            src="/static/images/firewatch/parallax5.png"
            alt="img-5"
          />
          <img
            className="img6"
            src="/static/images/firewatch/parallax6.png"
            alt="img-6"
          />
          <img
            className="img7"
            src="/static/images/firewatch/parallax7.png"
            alt="img-7"
          />
          <img
            className="img8"
            src="/static/images/firewatch/parallax8.png"
            alt="img-8"
          />
          <div className="box" />
        </div>
      </div>
      <div className="boxs">
        <div className="boxs__box">
        <h2>Tests Parallax scroll with gsap and locomotive scroll</h2>
        <h1>This project belongs to the youtube channel NAYMUR WEB, a totally institutional project</h1>
        <h3>Technologies used - Gsap and Locomotive scroll</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
