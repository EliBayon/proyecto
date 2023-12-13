import { Col, Container, Row } from "react-bootstrap";
import headerImg from '../assets/img/b4.jpg';
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
export const Contactos = () =>{
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        // Otros campos del formulario
      });
    
      // Función para manejar cambios en los campos del formulario
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      // Función para manejar el envío del formulario
      const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para manejar el envío de datos (puedes enviarlos a un servidor, almacenar en el estado global, etc.)
        console.log('Datos del formulario:', formData);
      };
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
        <section className="contactos" id="contactos">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={6}>
                    <h1><span className="wrap">{text}</span></h1>
                     <h1>{'REDICOL'}</h1>
                     <p>Contactanos medienta nuestras redes sociales como facebook y whatsapp</p>  
                     <h1>Haz clic en los botones sigueintes:</h1>
                     <a href="https://m.facebook.com/profile.php?id=100051094503707" class=" btn btn-secondary">facebook</a>
                     
                     <a href="https://api.whatsapp.com/send?phone=59169846061&text=hola%20soy%20gina" class=" btn btn-success">whatsapp</a>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <p>Si Te registras en el formulario tendras el 50% de descuentos en tus compras</p>
                        <form className="formulario" onSubmit={handleSubmit}>
                        
                        <label>
                            Nombre y Apellido:
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            Correo Electronico:
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </label>
                        <br />
                        <button type="submit">Enviar</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}