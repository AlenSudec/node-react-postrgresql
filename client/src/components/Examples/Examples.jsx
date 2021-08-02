import React from 'react';
import { Carousel } from '3d-react-carousal';
import LinePic from './examplespicture/linijski.png';
import HistoPic from './examplespicture/histo.png';
import BarPlot from './examplespicture/barplot.png';
import BoxPlot from './examplespicture/boxplot.png';
import Scatter from './examplespicture/scatterplot.png';
import Heatmap from './examplespicture/heatmap.png';
import './style.css';

const Examples = () => {
    //skontaj kak slike dobro prikazat
    let slides = [
        <img  src={LinePic} alt="1" height="300" width="900" className="picture-fit"/>,
        <img  src={HistoPic}  alt="2" height="300" width="900" className="picture-fit"/>  ,
        <img  src={BarPlot} height="300" width="900" className="picture-fit" alt="3" />  ,
        <img  src={BoxPlot} height="300" width="900" className="picture-fit" alt="4" />  ,
        <img src={Scatter} height="300" width="900" className="picture-fit" alt="5" /> ,
        <img src={Heatmap} height="300" width="900" className="picture-fit" alt="6" /> 
    ];

    return (
       <div className="container-fluid bg-grey" id="examples">
           <h2>Primjeri grafikona:</h2>
           <Carousel slides={slides} />
          
       </div>
    );
}
export default Examples;
