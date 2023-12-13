import { Col, Container, Row } from "react-bootstrap";
import headerImg from '../assets/img/b4.jpg';
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
export const Banner = () =>{
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["BIENVENIDOS","A LA", "JUGUETERIA" ,"DE TUS SUEÑOS"];
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
        <section className="banner" id="inicio">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={6}>
                    <h1><span className="wrap">{text}</span></h1>
                     <h1>{'REDICOL'}</h1>
                     <p>Donde tus juguetes favorios estan ven y vuelve a ser niño, con las mejores ofertas para al alcance del bolcillo</p>
                      <p>Baby Alliance es un reconocido grupo de empresas de América Latina y Europa, que participan del diseño, fabricación y comercialización de una amplia variedad de productos destinados al mercado de puericultura y juguete respectivamente.</p>  
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <ReactPlayer
                            url={require('../assets/img/vid1.mp4')}
                            className='react-player'
                            controls
                            loop
                            width='100%'
                            height='100%'
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}