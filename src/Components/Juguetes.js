import { Col, Container, Row } from "react-bootstrap";
import j1Img from '../assets/img/J1.jpg';
import j2Img from '../assets/img/j2.jpg';
import j3Img from '../assets/img/j3.jpg';
import j4Img from '../assets/img/j4.jpg';
import j5Img from '../assets/img/j5.jpg';
import j6Img from '../assets/img/j6.jpg';
import j7Img from '../assets/img/j7.jpg';
import j8Img from '../assets/img/j8.jpg';
import j9Img from '../assets/img/j9.jpg';
import j10Img from '../assets/img/j10.jpg';
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export const Juguetes = () =>{
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["JUGUETES DE NIÑAS/NIÑOS"];
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
        <section className="juguetes" id="juguetes">
            <Container>
                <h1><span className="wrap">{text}</span></h1>
                
                <Row >
                    <Col xs={12} md={6} xl={6}>
                    <img src={j1Img} alt="header" style={{ width: '530px', height: '500px' }}/> 
                    <p>Juego de maquillaje </p>
                    <p>90BS</p>
                    <img src={j7Img} alt="header"style={{ width: '530px', height: '500px' }}/> 
                    <p>TOP BRIGHT Circuito de carreras con coches</p>
                    <p>100BS</p>
                    <img src={j3Img} alt="header" style={{ width: '530px', height: '500px' }}/> 
                    <p>Muñeca tuti fruti lloron </p>
                    <p>100BS</p>
                    <img src={j9Img} alt="header" style={{ width: '530px', height: '500px' }}/> 
                    <p>Hot Wheels Mario Kart de Hot Wheels </p>
                    <p>70BS</p>
                    <img src={j5Img} alt="header" style={{ width: '530px', height: '500px' }}/> 
                    <p>Rapuncel </p>
                    <p>45BS</p>
                    </Col>  
                    <Col xs={12} md={6} xl={6}>
                    <img src={j6Img} alt="header" style={{ width: '530px', height: '500px' }}/> 
                    <p>Majorette Rueda con 10 coches de metal </p>
                    <p>400BS</p>
                    <img src={j2Img} alt="header" style={{ width: '530px', height: '500px' }}/> 
                    <p>Casa de muñeca </p>
                    <p>190BS</p>
                    <img src={j8Img} alt="header"style={{ width: '530px', height: '500px' }}/> 
                    <p>Fisher-Price Batmóvil Radiocontrol con figura de Batman </p>
                    <p>50BS</p>
                    <img src={j4Img} alt="header" style={{ width: '530px', height: '500px' }}/> 
                    <p>Coche barbi </p>
                    <p>50BS</p>
                    <img src={j10Img} alt="header" style={{ width: '530px', height: '500px' }}/> 
                    <p>LEGO McLaren Senna GTR de Lego Technic </p>
                    <p>45BS</p>
                    </Col>                  
                </Row>
            </Container>
        </section>
    )
}