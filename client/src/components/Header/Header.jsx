import React from 'react';
import './mystyle.css'; 

const Header = () => {
    return(
       
        <div id="home" className="jumbotron" >
        <h1>Platforma za izradu grafikona</h1>
        <hr/>
        <p>Kreirajte neograničeni broj grafikona iz .csv datoteka i ubacite ih u svoju web stranicu kroz iframe</p>
        <br/>
        <br/>
       
        <form>
            <div className="input-group">
                
                  
                   
                    <button type="button" id="createGraph" className="btn btn-danger">Kreiraj svoj grafikon</button>
                
            </div>
        </form>
    </div>
    )
}

export default Header;
