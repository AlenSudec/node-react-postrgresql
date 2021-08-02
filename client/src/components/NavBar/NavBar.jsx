import React , {useEffect} from 'react'
import './mystyle.css';
import $ from 'jquery';
import "react-bootstrap";
import axios from 'axios';

const Navbar = () => {

    function animation(){
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
          "top":itemPosNewAnimTop.top + "px", 
          "left":itemPosNewAnimLeft.left + "px",
          "height": activeWidthNewAnimHeight + "px",
          "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click","li",function(e){
          $('#navbarSupportedContent ul li').removeClass("active");
          $(this).addClass('active');
          var activeWidthNewAnimHeight = $(this).innerHeight();
          var activeWidthNewAnimWidth = $(this).innerWidth();
          var itemPosNewAnimTop = $(this).position();
          var itemPosNewAnimLeft = $(this).position();
          $(".hori-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
          });
        });
      }
    
      useEffect(() => {
        
        animation();
        $(window).on('resize', function(){
          setTimeout(function(){ animation(); }, 500);
        });
        
      }, []);



    return (
       
        <nav className="navbar sticky-top navbar-expand-lg navbar-mainbg">
    
          <a className="navbar-brand navbar-logo" href="#home">
              D3.js platform
            </a>
  
  
          <button 
            className="navbar-toggler"
            onClick={ function(){
              setTimeout(function(){ animation(); 
              },500);
            }}
            type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars text-white"></i>
          </button>

          <div 
            className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                
                <div className="hori-selector">
                  <div className="left"></div>
                  <div className="right"></div>
                </div>
          
          <li className="nav-item active">
            <a className="nav-link" href="#home">
            <i 
                className="fas fa-tachometer-alt">
                </i>
              Pocetna
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#about">
            <i 
                className="far fa-address-book">
                </i>
              O platformi
            </a> 
          </li>

          <li className="nav-item">
            <a className="nav-link"  href="#examples" >
            <i 
                className="far fa-clone">
                </i>
              Primjeri
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="#supported">
            <i 
                className="far fa-chart-bar">
                </i>
              Podrzani grafikoni
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="#home" >
            <i 
                className="far fa-copy">
                </i>
              Kreiraj grafikon
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="#home" onClick={()=>  axios({
              url: 'http://localhost:3001/download',
              method: 'GET',
              responseType: 'blob',
            }).then((response)=> {
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href= url;
              link.setAttribute('download','examples.rar');
              document.body.appendChild(link);
              link.click();
            })}>
            <i 
                className="far fa-copy">
                </i>
              Preuzmi primjere CSV-a
            </a>
          </li>
      </ul>
    </div>
</nav>
)
}

export default Navbar;
