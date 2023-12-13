import { Col, Container, Row } from "react-bootstrap";
import misionImg from '../assets/img/cre1.jpg';
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export const Credito = () =>{
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["CREDITOS"];
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
        <section className="credito" id="credito">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <img src={misionImg} alt="header"/> 
                     
                   
                    </Col>  
                    <Col xs={12} md={6} xl={5}>
                    <h1><span className="wrap">{text}</span></h1>
                    <h1>{'DESARROLLADORA WEB'}</h1>
                     <p>Creditos a la desarrolladara web que desarrollo esta pagina Gina Luz Eliana Bayon Medina</p>
                     <p>Para nuestra empresa recodil que nos dedicamos a distribuir juguetes contatala por medio de </p>
                     <h1>Haz clic en los botones sigueintes:</h1>
                     <a href="https://m.facebook.com/profile.php?id=100051094503707" class=" btn btn-secondary">facebook</a>
                     
                     <a href="https://api.whatsapp.com/send?phone=59169846061&text=hola%20soy%20gina" class=" btn btn-success">whatsapp</a>
                    </Col>                  
                </Row>
            </Container>
        </section>
    )
}