// This is Services component
import styled from "styled-components";
import SvgBlock from "../../components/SvgBlock";
import TextBlock from "../../components/TextBlock";
import Tube from "../../assets/3dtube.png";
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";



const ServiceSection = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 20rem;
position: relative;
color: var(--white);

`;
const Background = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: absolute;
top: 0;
left: 0;
bottom: 0;
width: 100vw;
height: 85vh;
background-color: var(--black);
background-size: auto 100vh;
z-index: -1;
`;
const Title = styled.h1`
display: inline-block;
font-size: 2rem;
margin-top: 1rem;
position: relative;

&::before {
  content: "";
  height: 1px;
  width: 50%;
  position: absolute;
  left: 50%;
  bottom: 0;
  border-bottom: 2px solid var(--kahve);
  transform: translate(-50%);

}
`;
const Line = styled.span`
border-left: 4px solid var(--background);
height: 15rem;
margin-top: 2rem;
border-radius: 20px 20px 0 0;

`;
const Triangle = styled.span`
width:0;
height:0;
border-left: 1.2rem solid transparent;
border-right: 1.2rem solid transparent;
border-top: 2rem solid var(--background);
`;
const Content = styled.div`
display: flex;
margin: 10rem 10rem;
/* margin: 3rem 10rem; */
align-items: center;
justify-content: space-between;
position: relative;

@media only Screen and (max-width:48em){
 display: block;
 &:last-child{
   margin-bottom: 5rem;
 }
}
@media only Screen and (max-width:40em) {
  margin:10rem calc(2rem + 3vw);
  &:last-child{
    margin-bottom: 1rem;
  }
}
`;
const OBJ = styled.div`
position: absolute;
top: 80%;
right: 35%;
width: 20vw;
display: flex;
justify-content: center;
align-items: center;

@media only Screen and (max-width:48em){
  opacity: 0.5;
}
`;


const Services = () => {
  const ref = useRef(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) =>{
    if(el && !revealRefs.current.includes(el) ){
      revealRefs.current.push(el);
    }
    //console.log("reveal refs", revealRefs.current);
  }

  useEffect(() => {
    const element = ref.current;
    const line = document.getElementById("line");
    const mq = window.matchMedia("(max-width:40em)");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),
        start: "top top+=180",
        end: "bottom bottom",
        pin: element,
        pinReparent: true,
        //markers: true,
      }
    });

    tl.fromTo(
      document.getElementById("line"),
      {
        height: "15rem",
      },
      {
        height: "3rem",
        duration: 2,
        scrollTrigger: {
          trigger: line,
          start: "top top+=200",
          end: "bottom top+=220",
          scrub: true,
        },
      }
    );

    revealRefs.current.forEach((el,index) => {
        
      if(mq.matches){
        tl.from(el.childNodes[0], {
          x: -400,
          opacity: 0,
          duration: 2,
          ease: "power2",

          scrollTrigger:{
            trigger: el,
            id: `section-${index + 1}`,
            start: "top center+=200",
            end: "bottom bottom-=100",
            scrub: true,
            snap: true,
           
          }
        })
        .to(el.childNodes[1], {
          transform: "scale(0)",
          duration: 2,
          ease: "power2.inOut",

          scrollTrigger:{
            trigger: el.childNodes[1],
            id: `section-${index + 1}`,
            start: "top center",
            end: "bottom center",
            scrub: true,
            snap: true,
           
          },
        })
        .from(el.childNodes[2], {
          x: 400,
          duration: 2,
          ease: "power2",

          scrollTrigger:{
            trigger: el,
            id: `section-${index + 1}`,
            start: "top center+=100",
            end: "bottom center-=200",
            scrub: true,
            snap: true,
           
          },
        })
        .to(el , {
          opacity: 0,
          ease: "power2",

          scrollTrigger:{
            trigger: el,
            id: `section-${index + 1}`,
            start: "top top+=300",
            end: "center top+=300",
            scrub: true,
            snap: true,
            
          },
        });
      }else{
        tl.from(el.childNodes[0], {
          x: -400,
          opacity: 0,
          duration: 2,
          ease: "power2",

          scrollTrigger:{
            trigger: el,
            id: `section-${index + 1}`,
            start: "top center+=100",
            end: "bottom bottom-=200",
            scrub: true,
            snap: true,
           
          }
        })
        .to(el.childNodes[1], {
          transform: "scale(0)",
          duration: 2,
          ease: "power2.inOut",

          scrollTrigger:{
            trigger: el.childNodes[1],
            id: `section-${index + 1}`,
            start: "top center",
            end: "bottom center",
            scrub: true,
            snap: true,
           
          },
        })
        .from(el.childNodes[2], {
          x: 400,
          duration: 2,
          ease: "power2",

          scrollTrigger:{
            trigger: el,
            id: `section-${index + 1}`,
            start: "top center+=100",
            end: "bottom center-=200",
            scrub: true,
            snap: true,
           
          },
        })
        .to(el , {
          opacity: 0,
          ease: "power2",

          scrollTrigger:{
            trigger: el,
            id: `section-${index + 1}`,
            start: "top top+=200",
            end: "center top+=300",
            scrub: true,
            snap: true,
           
          },
        });
      }

      });
  }, []);

  return (  
  <ServiceSection id="services">
    <Background ref={ref}>
      <Title>Neler Yapıyoruz</Title>
      <Line id="line"/>
      <Triangle />
    </Background>
    <Content ref={addToRefs}>
      <TextBlock
        topic="2D & 3D Tasarım"
        title="2boyut, 3boyut fark etmez"
        subText="Tasarımlarımızı yaparken sizin müşterilerinize ulaşmanız için ne gerekiyorsa."
      />
      <OBJ>
        <img src={Tube} alt="Tube" width="400" height="400" />
      </OBJ>
      <SvgBlock  svg="Design.svg" />
    </Content>
    <Content ref={addToRefs}>
      <TextBlock
        topic="Geliştirme"
        title="Yüksek kaliteli Web ve Uygulama geliştiriyoruz"
        subText="Web sitenizi ve uygulamanızı mevcut en iyi araçlarla geliştirmek için uygun çözümü geliştiriyoruz."
      />
      <OBJ>
        <img src={Cone} alt="Cone" width="400" height="400" />
      </OBJ>
      <SvgBlock  svg="Develope.svg" />
    </Content>
    <Content>
      <TextBlock
        topic="Destek"
        title="Markanız için destek sağlıyoruz"
        subText="Markanız kurulduğu andan itibaren müşterilerinize ulaşana kadar ki süreçte yanınızda olacağız"
      />
      <OBJ>
        <img src={Capsule} alt="Capsule" width="400" height="400" />
      </OBJ>
      <SvgBlock  svg="Support.svg" />
    </Content>
    
    </ServiceSection>
  );
};

export default Services;
