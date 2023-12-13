import { Navbar,Container,Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/j10.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const NavBar = ( ) =>{
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink]= useState ('inicio');
  useEffect(()=>{
    const onScroll = () =>{
      if(window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(true);
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll);
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

   return(
    <Navbar expand="xl" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className=" navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className={activeLink === 'inicio' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('inicio')}>Inicio</Nav.Link>
            <Nav.Link href="#quienes" className={activeLink === 'quienes' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('quienes')}>Quines?</Nav.Link> 
            <Nav.Link href="#mision" className={activeLink === 'mision' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('mision')}>Mision</Nav.Link>
            <Nav.Link href="#vision" className={activeLink === 'vision' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('vision')}>Vision</Nav.Link>  
            <Nav.Link href="#valores" className={activeLink === 'valores' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('valores')}>Valores</Nav.Link>
            <Nav.Link href="#juguetes" className={activeLink === 'juguetes' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('juguetes')}>Juguetes</Nav.Link> 
            <Nav.Link href="#ofertas" className={activeLink === 'ofertas' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('ofertas')} >Ofertas</Nav.Link>
            <Nav.Link href="#socios" className={activeLink === 'socios' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('socios')} >Socios</Nav.Link>
            <Nav.Link href="#contactos" className={activeLink === 'contactos' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contactos')}>Contactos</Nav.Link>   
            <Nav.Link href="#credito" className={activeLink === 'credito' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('credito')}>Creditos</Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   )   
}