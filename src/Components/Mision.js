import { Col, Container, Row } from "react-bootstrap";
import headerImg from '../assets/img/m1.jpg';
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export const Mision = () =>{
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["NUERSTRA"];
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
        <section className="mision" id="mision">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <h1><span className="wrap">{text}</span></h1>
                     <h1>{'MISION'}</h1>
                     <p>Comercializar en forma honesta y eficiente juguetes, artículos deportivos y artículos para  bebés, siempre respetando nuestros valores y contribuyendo con una función social, que se refleje en la completa satisfacción de clientes, empleados, accionistas y proveedores.</p>
                      
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="header" width='100%'
                            height='100%'/>  
                    </Col>
                </Row>
            </Container>
        </section>
    )
}