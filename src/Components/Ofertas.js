import { Col, Container, Row } from "react-bootstrap";
import headerImg from '../assets/img/b4.jpg';
import img1 from '../assets/img/o1.jpg';
import img2 from '../assets/img/o2.jpg';
import img3 from '../assets/img/o3.jpg';
import img4 from '../assets/img/o6.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
export const Ofertas = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["OFERTAS"];
    const [text, setTex] = useState("");
    const tiempo = 2000;
    const [delta, setDelta] = useState(300 - Math.random()*100);
    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return()=>{clearInterval(ticker)};
    },[text])
    const tick =()=>{
        let i = loopnum % toRotate.length;
        let fulltext = toRotate[i];
        let updateText = isDeleting ? fulltext.substring(0,text.length-1) : fulltext.substring (0, fulltext.length+1);
        setTex(updateText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        }
        if (!isDeleting && updateText === fulltext) {
            setisDeleting(true);
            setDelta(tiempo);
        }else if (isDeleting && updateText === '') {
                setisDeleting(false);
                setloopnum(loopnum+1);
                setDelta(500);
            }
        }
    return(
        <section className="ofertas" id="ofertas">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <h1><span className="wrap">{text}</span></h1>
                     <h1>{' DE REDICOL'}</h1>
                     <p>Todos los juguetes mostrados aqui estan con 50bs cualquiera que eliga venga y escoja su juguete favorito.</p>
                     
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <h1>Ofertas hasta acabar stock</h1>
                    <Carousel responsive={responsive}>
                        <div>
                            <img src={img1} alt="image" width= '100%' height='100%' />
                        </div>
                        <div>
                            <img src={img2} alt="image"width= '100%' height= '100%' />
                        </div>
                        <div>
                            <img src={img3} alt="image"width= '100%' height='100%'/>
                        </div>
                        <div>
                            <img src={img4} alt="image" width= '100%' height='100%'/>
                        </div>
                      
                    </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}