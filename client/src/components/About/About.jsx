import React from 'react';
import './mystyle.css'
import "react-bootstrap";
import Button from 'react-bootstrap/Button';
import aboutPic from './HISTOPICTURE.png';

const About = () => {
    return (
        <div className="container-fluid bg-grey" id="about">
            <div className="row">
            <div className="col-sm-8">
                <h2>Više o ovoj platformi:</h2>
                <h4>Ova platforma je izrađena pomoću d3.js koji je JavaScript biblioteka za manipulaciju dokumenata na temelju podataka.<br/>D3 Vam pomaže oživjeti podatke pomoću HTML-a, SVG-a i CSS-a. 
                <br/>Naglasak D3-a na web standardima daje Vam sve mogućnosti modernih preglednika bez povezivanja s ostalim frameworkima<br/> kombinirajući moćne komponente vizualizacije i data-driven pristup prema DOM manipulaciji.</h4>
               
                <h5>Autor ove platforme je Alen Sudec, pod mentorstvom doc.dr.sc Slobodan Jelić.</h5>
                
                
                
                <a href="https://hr.linkedin.com/in/alen-sudec-0805641a0">
                    <Button variant="danger">
							Kontaktiraj me
						</Button>
                </a>

                
            </div>
            <div className="col-sm-4">
                <img src={aboutPic } height="200" width="300" alt="histo"/>
            </div>
        </div>
        </div>
       
        
    )
}

export default About;
