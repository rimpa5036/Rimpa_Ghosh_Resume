import React, { useRef } from "react";
import "../App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import ImgProfile from "../images/profile.svg";
import Html from "../images/html.svg";
import ReactIcon from "../images/react.svg";
import LinkedinIcon from "../images/linkedin.svg";
import styled from 'styled-components';
import AboutImg from "../images/profile.png"
import Image1 from "../images/htmlimg.svg"
import Image2 from "../images/cssimg.svg"
import Image3 from "../images/jsimg.svg"
import Image4 from "../images/reactimg.svg"
import Image5 from "../images/git.svg"
import Image6 from "../images/githubimg.svg"
import Project1 from "../images/project1.jpg"
import Project2 from "../images/project2.jpg"
import Project3 from "../images/project3.jpg"

const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 55px;
  margin-top: 50px;

  @media only screen and (max-width: 600px){
    flex-direction: column;
    padding: 0 20px;
  }
`
const DetailsWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;

  @media only screen and (max-width: 600px){
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
const CardWrap = styled.div`
    border: 1px solid #949494;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    padding: 30px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 148px;
    transition: transform 0.5s;

    &:hover{
      transform: scale(1.1);
    }

    @media only screen and (max-width: 600px){
      width: 100%;
    }
`
const Text = styled.div`
  font-size: 18px;
  color: #000;
  font-weight: 600;
  margin-top: 20px;
`
const Info = styled.div`
  font-size: 12px;
  color: #4b5563;
  font-weight: 600;
  margin-top: 10px;
`
const Image = styled.img``

const DetailInfo = styled.div`
    border: 1px solid #949494;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    padding: 30px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 40px;
    gap: 20px;
    transition: transform 0.5s;

    &:hover{
      transform: scale(1.1);
    }
    @media only screen and (max-width: 600px){
      margin-top: 30px;
      flex-direction: column;
      align-items: flex-start;
      width: 95%;
      position: relative;
      right: 33px;
    }
`
const Text1 = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`

const Text2 = styled.div`
  color: #4b5563;
  font-size: 16px;
  line-height: 2;
`
const Div = styled.div`
  flex: 1 0 40%;
`

export default function ReactPortfolio() {

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    pauseOnHover: false,
    infinite: true,
    arrows: false,
  };

  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/resumeRimpa.pdf"; // Make sure the PDF is in the public folder
    link.download = "Rimpa_CV.pdf"; // You can rename the downloaded file here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
        <div className="container">

          {/* NavMenu */}
          <header className="header" id='slideTop'>
            <nav className="nav">
              <div to="/" className='lineHeight-xs' onClick={() => handleScroll('home')}>
                <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Home</title><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>
              </div>
              <div to="/about" className='lineHeight-xs' onClick={() => handleScroll('about')}>
                <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title>About</title><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
              </div>
              <div to="/skills" className='lineHeight-xs' onClick={() => handleScroll('skills')}> 
                <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Skills</title><path d="M3.16113 4.46875C5.58508 2.0448 9.44716 1.9355 12.0008 4.14085C14.5528 1.9355 18.4149 2.0448 20.8388 4.46875C23.2584 6.88836 23.3716 10.741 21.1785 13.2947L13.4142 21.0858C12.6686 21.8313 11.4809 21.8652 10.6952 21.1874L10.5858 21.0858L2.82141 13.2947C0.628282 10.741 0.741522 6.88836 3.16113 4.46875ZM4.57534 5.88296C2.86819 7.59011 2.81942 10.3276 4.42902 12.0937L4.57534 12.2469L12 19.6715L17.3026 14.3675L13.7677 10.8327L12.7071 11.8934C11.5355 13.0649 9.636 13.0649 8.46443 11.8934C7.29286 10.7218 7.29286 8.8223 8.46443 7.65073L10.5656 5.54823C8.85292 4.17713 6.37076 4.23993 4.7286 5.73663L4.57534 5.88296ZM13.0606 8.71139C13.4511 8.32086 14.0843 8.32086 14.4748 8.71139L18.7168 12.9533L19.4246 12.2469C21.1819 10.4896 21.1819 7.64032 19.4246 5.88296C17.7174 4.17581 14.9799 4.12704 13.2139 5.73663L13.0606 5.88296L9.87864 9.06494C9.51601 9.42757 9.49011 9.99942 9.80094 10.3919L9.87864 10.4792C10.2413 10.8418 10.8131 10.8677 11.2056 10.5569L11.2929 10.4792L13.0606 8.71139Z"></path></svg>
              </div>
              <div to="/projects" className='lineHeight-xs' onClick={() => handleScroll('projects')}>
                  <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Portoflio</title><path d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>
              </div>
              <div to="/contact" className='lineHeight-xs' onClick={() => handleScroll('contact')}>
                <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Contact</title><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path><path d="M7 9h10v2H7zm0 4h7v2H7z"></path></svg>
              </div>
            </nav>
          </header>

          {/* Home */}
          <div className='home-container' id="home">
              <div style={{width: "43%"}} id='slideLeft'>
                <div className='text1'>Hello, I'm</div>
                <div className='text2'>Rimpa Ghosh</div>
                <div className='text3'>Web Designer</div>
                <div className='text4'>I analyze user requirements and translate them into functional, visually appealing web applications. I create and implement responsive UI templates that enhance the overall user experience. Using HTML, CSS, and React Bootstrap, I build and style user interfaces effectively.</div>
                <FlexWrap className="btn-mb">
                  <div className='download-btn' onClick={handleDownload}>Download CV</div>
                  <div className='contact-btn' onClick={scrollToContact}>Contact Me</div>
                </FlexWrap>
                <FlexWrap className="media-mb">
                    <div className='social-media social-media1'>
                      <a href='https://github.com/rimpa5036?tab=repositories' target='_blank'>
                        <svg width="20px" height="20px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"/></svg>
                      </a>
                    </div>
                    <div className='social-media social-media2'>
                      <a href='https://www.linkedin.com/in/rimpa-ghosh-485620174/' target='_blank'>
                        <svg fill="#3b72ec" width="25px" height="25px" viewBox="-7.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#3b72ec" stroke-width="0.48">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title>linkedin</title> <path d="M0.92 11.32c-0.48 0-0.84 0.36-0.84 0.84v11.76c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-11.76c0-0.48-0.36-0.84-0.84-0.84zM1.84 8.16c0 0.508-0.412 0.92-0.92 0.92s-0.92-0.412-0.92-0.92c0-0.508 0.412-0.92 0.92-0.92s0.92 0.412 0.92 0.92zM15.28 11.68c-1.8-0.96-4.44-0.28-8.040 2v-1.52c0-0.48-0.36-0.84-0.84-0.84s-0.84 0.36-0.84 0.84v11.76c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-8.24c4.52-3.12 6.48-2.92 7.24-2.52 1.040 0.56 1.040 2.080 1.040 2.080v8.68c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-8.64c0-0.12 0-2.56-1.92-3.6z"/> </g>
                        </svg>
                      </a>
                    </div>
                    <div className='social-media social-media1'>
                      <a href='https://medium.com/@rimpa5036' target='_blank'>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="1.252">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M13.4093 12.2471C13.4093 15.6973 10.6313 18.4944 7.20451 18.4944C3.77768 18.4944 0.999969 15.6982 0.999969 12.2471C0.999969 8.79604 3.77789 6 7.20451 6C10.6311 6 13.4093 8.79688 13.4093 12.2471ZM20.2159 12.2471C20.2159 15.4951 18.8269 18.1278 17.1136 18.1278C15.4003 18.1278 14.0112 15.4942 14.0112 12.2471C14.0112 8.99998 15.4003 6.36639 17.1136 6.36639C18.8269 6.36639 20.2159 8.99998 20.2159 12.2471ZM23 12.2471C23 15.1571 22.5114 17.516 21.9088 17.516C21.3063 17.516 20.8177 15.1563 20.8177 12.2471C20.8177 9.33792 21.3063 6.97822 21.909 6.97822C22.5118 6.97822 23 9.33729 23 12.2471Z" stroke="#000000" stroke-linejoin="round"/> </g>
                        </svg>
                      </a>
                    </div>
                </FlexWrap>
              </div>
              <div>
                <div id='zoomImg'>
                  <img src={ImgProfile} className='imgBorder' alt='profile'></img>
                  <div className='imgBack' id='float1'>
                    <img src={Html} alt='html'></img>
                  </div>
                  <div className='imgBack' id='float2'>
                    <img src={ReactIcon} alt='react'></img>
                  </div>
                  <div className='imgBack' id='float3'>
                    <img src={LinkedinIcon} alt='linkedin'></img>
                  </div>
                </div>
              </div>
          </div>

          {/* About Me */} 
          <div className='p-container' id="about">
            <div className='d-flex'>
              <div className='about-title'>Get To Know</div>
              <div className='about-heading'>About Me</div>
            </div>
            <Container>

            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <Image src={AboutImg}></Image>
            </motion.div>
              

            <motion.div
              variants={fadeInTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              >
              <div>
              <DetailsWrap>

                  <CardWrap>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-yellow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"></path></svg>
                      <Text>Experience</Text>
                      <Info>3 Working Year</Info>
                  </CardWrap>

                  <CardWrap>
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-yellow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>                      
                      <Text>Certification</Text>
                      <Info>React Js</Info>
                  </CardWrap>

                  <CardWrap>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-yellow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.70996 3H14.5L15.01 3.5V7H14V5.98999H7.68994L6.82996 6.84998L6.47998 7H1.98999V7.48999V11.49V13H7V14H1.51001L1.01001 13.5V6.5V2.5L1.51001 2H6.51001L6.85999 2.15002L7.70996 3ZM7.48999 5H13.99L14 4.01001H7.5L7.14001 3.85999L6.29004 3.01001H2V6.01001H6.28003L7.14001 5.15002L7.48999 5Z"></path><rect x="8" y="8" width="1" height="6"></rect><rect x="10" y="8" width="1" height="6"></rect><rect x="12.0041" y="8.35193" width="1" height="6" transform="rotate(-20 12.0041 8.35193)"></rect></svg>
                      <Text>Qualification</Text>
                      <Info>Bachelor of Engineering</Info>
                  </CardWrap>

              </DetailsWrap>

              <DetailInfo>
                <Div>
                  <Text1>Name:</Text1>
                  <Text2>Rimpa Ghosh</Text2>
                </Div>
                <Div>
                  <Text1>Email:</Text1>
                  <Text2>rimpa5036@gmail.com</Text2>
                </Div>
                <Div>
                  <Text1>Location:</Text1>
                  <Text2>Pune</Text2>
                </Div>
                <Div>
                  <Text1>Availability:</Text1>
                  <Text2>Open to opportunities</Text2>
                </Div>
              </DetailInfo>
              </div>
              </motion.div>

            </Container>
          </div>

          {/* Skills */}
          <div className='p-container' id="skills">
            <div className='d-flex'>
                <div className='about-title'>What Skills I Have</div>
                <div className='about-heading'>My Experience</div>
            </div>
            <div className='slider-container'>
              <Slider {...settings}>
                  <div className='slide'><img src={Image1} alt='image1'></img></div>
                  <div className='slide'><img src={Image2} alt='image2'></img></div>
                  <div className='slide'><img src={Image3} alt='image3'></img></div>
                  <div className='slide'><img src={Image4} alt='image4'></img></div>
                  <div className='slide'><img src={Image5} alt='image5'></img></div>
                  <div className='slide'><img src={Image6} alt='image6'></img></div>

                  <div className='slide'><img src={Image1} alt='image1'></img></div>
                  <div className='slide'><img src={Image2} alt='image2'></img></div>
                  <div className='slide'><img src={Image3} alt='image3'></img></div>
                  <div className='slide'><img src={Image4} alt='image4'></img></div>
                  <div className='slide'><img src={Image5} alt='image5'></img></div>
                  <div className='slide'><img src={Image6} alt='image6'></img></div>
                </Slider>
            </div>
          </div>

          {/* Project */}

          <div className='p-container' id="projects">
            <div className='d-flex'>
                <div className='about-title'>My Recent Work</div>
                <div className='about-heading'>My Projects</div>
            </div>
            <div className='project-card-wrapper'>

              <motion.div
                variants={fadeInTop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className='project-box'>
                    <img src={Project1}></img>
                    <div className='project-box-flex'>
                      <div>
                        <div className='project-name'>Job Portal</div>
                        <div className='project-desc'>Developed a dynamic job portal using React JS, enabling users to search, filter, and apply for jobs seamlessly</div>
                      </div>
                      <div>
                          <div className='project-skill-f'>
                            <div className='project-skill-n'>html</div>
                            <div className='project-skill-n'>css</div>
                            <div className='project-skill-n'>react js</div>
                          </div>
                          <a href='https://rimpa5036.github.io/Job-Portal/' target='_blank' className='live-project'>Live Demo</a>
                      </div>
                    </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInTop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
              >
                <div className='project-box'>
                    <img src={Project2}></img>
                    <div className='project-box-flex'>
                      <div>
                        <div className='project-name'>LogIn Form</div>
                        <div className='project-desc'>Tailwind CSS forms offer easy, enabling easy customization, utility-based styling for form elements</div>
                      </div>
                      <div>
                          <div className='project-skill-f'>
                            <div className='project-skill-n'>html</div>
                            <div className='project-skill-n'>tailwind css</div>
                          </div>
                          <a href='https://rimpa5036.github.io/Tailwind-CSS/' target='_blank' className='live-project'>Live Demo</a>
                      </div>
                    </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInTop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5 }}
              >
                <div className='project-box'>
                    <img src={Project3}></img>
                    <div className='project-box-flex'>
                      <div>
                        <div className='project-name'>Home Page of Ideapoke Platform</div>
                        <div className='project-desc'>Team’s design platform to search, analyze and co-create strategies</div>
                      </div>
                      <div>
                          <div className='project-skill-f'>
                            <div className='project-skill-n'>html</div>
                            <div className='project-skill-n'>css</div>
                            <div className='project-skill-n'>react</div>
                          </div>
                          <a href='https://www.ideapoke.com/' target='_blank' className='live-project'>Live Demo</a>
                      </div>
                    </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Contact Us */}
          <div className='p-container' ref={contactRef} id="contact">
            <div className='d-flex'>
                <div className='about-title'>Get In Touch</div>
                <div className='about-heading'> Contact Me</div>
            </div>
            <div className='contact-form'>

              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
              >
              <div>
                <div className='contact-header'>Contact Info</div>
                <div className="contactinfo-flex">

                
                  <div className="contactinfo-infoflex">
                      <div className="contactinfo-circle">
                        <svg stroke="#1e40af" fill="#1e40af" stroke-width="0" viewBox="0 0 512 512" class="text-3xl text-blue-800" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"></path><circle cx="256" cy="192" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle></svg>
                      </div>
                      <div>
                        <Text1>Location</Text1>
                        <Text2>Pune</Text2>
                      </div>
                  </div>
                  <div className="contactinfo-infoflex">
                      <div className="contactinfo-circle">
                        <svg stroke="#1e40af" fill="#1e40af" stroke-width="0" viewBox="0 0 24 24" class="text-3xl text-blue-800" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg>                      </div>
                      <div>
                        <Text1>Email</Text1>
                        <Text2>rimpa5036@gmail.com</Text2>
                      </div>
                  </div>
                  <div className="contactinfo-infoflex">
                      <div className="contactinfo-circle">
                        <svg stroke="#1e40af" fill="#1e40af" stroke-width="0" viewBox="0 0 24 24" class="text-3xl text-blue-800" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1z"></path></svg> </div>
                      <div>
                        <Text1>Phone</Text1>
                        <Text2>+91 876-802-3227</Text2>
                      </div>
                  </div>
             

                </div>
              </div>
              </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              >
              <div>
                <div className='contact-header'>Follow Me</div>
                <FlexWrap style={{justifyContent: "center", paddingLeft: "70px"}} className="mb-media">
                    <div className='social-media social-media1'>
                      <a href='https://github.com/rimpa5036?tab=repositories' target='_blank'>
                        <svg width="20px" height="20px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"/></svg>
                      </a>
                    </div>
                    <div className='social-media social-media2'>
                      <a href='https://www.linkedin.com/in/rimpa-ghosh-485620174/' target='_blank'>
                        <svg fill="#3b72ec" width="25px" height="25px" viewBox="-7.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#3b72ec" stroke-width="0.48">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title>linkedin</title> <path d="M0.92 11.32c-0.48 0-0.84 0.36-0.84 0.84v11.76c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-11.76c0-0.48-0.36-0.84-0.84-0.84zM1.84 8.16c0 0.508-0.412 0.92-0.92 0.92s-0.92-0.412-0.92-0.92c0-0.508 0.412-0.92 0.92-0.92s0.92 0.412 0.92 0.92zM15.28 11.68c-1.8-0.96-4.44-0.28-8.040 2v-1.52c0-0.48-0.36-0.84-0.84-0.84s-0.84 0.36-0.84 0.84v11.76c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-8.24c4.52-3.12 6.48-2.92 7.24-2.52 1.040 0.56 1.040 2.080 1.040 2.080v8.68c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-8.64c0-0.12 0-2.56-1.92-3.6z"/> </g>
                        </svg>
                      </a>
                    </div>
                    <div className='social-media social-media1'>
                      <a href='https://medium.com/@rimpa5036' target='_blank'>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="1.252">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M13.4093 12.2471C13.4093 15.6973 10.6313 18.4944 7.20451 18.4944C3.77768 18.4944 0.999969 15.6982 0.999969 12.2471C0.999969 8.79604 3.77789 6 7.20451 6C10.6311 6 13.4093 8.79688 13.4093 12.2471ZM20.2159 12.2471C20.2159 15.4951 18.8269 18.1278 17.1136 18.1278C15.4003 18.1278 14.0112 15.4942 14.0112 12.2471C14.0112 8.99998 15.4003 6.36639 17.1136 6.36639C18.8269 6.36639 20.2159 8.99998 20.2159 12.2471ZM23 12.2471C23 15.1571 22.5114 17.516 21.9088 17.516C21.3063 17.516 20.8177 15.1563 20.8177 12.2471C20.8177 9.33792 21.3063 6.97822 21.909 6.97822C22.5118 6.97822 23 9.33729 23 12.2471Z" stroke="#000000" stroke-linejoin="round"/> </g>
                        </svg>
                      </a>
                    </div>
                </FlexWrap>
              </div>
            </motion.div>  
                
            </div>
          </div>

          {/* Footer */}
          <div className='porfolio-footer'> 
            <span>© 2025</span>
            <span style={{color: "#1d4ed8"}}>Rimpa Ghosh</span>  
            <span>. All rights reserved</span>
          </div>

        </div>
    </div>
  )
}
