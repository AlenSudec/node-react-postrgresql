import React from 'react';
import {Tab, ListGroup, Col, Row } from 'react-bootstrap';
import './style.css';


const Supported = () => {
    



    return (
        <div className="container-fluid bg-grey" id="supported">
            <h2>Podržani grafikoni:</h2>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={2}>
                    <ListGroup>
                        <ListGroup.Item action variant="danger" href="#link1">
                        Linijski grafikon
                        </ListGroup.Item>
                        <ListGroup.Item action variant="danger" href="#link2">
                        Histogram
                        </ListGroup.Item>
                        <ListGroup.Item action variant="danger" href="#link3">
                        BoxPlot
                        </ListGroup.Item>
                        <ListGroup.Item action variant="danger" href="#link4">
                        ScatterPlot
                        </ListGroup.Item>
                        <ListGroup.Item action variant="danger" href="#link5">
                        BarPlot
                        </ListGroup.Item>
                        <ListGroup.Item action variant="danger" href="#link6">
                        Heatmap
                        </ListGroup.Item>
                        <br/>
                    </ListGroup>
                    </Col>
                  
                    <Col sm={1}></Col>
                    <Col sm={4} className="d-flex align-items-center justify-content-center">
                    <Tab.Content >
                        <Tab.Pane eventKey="#link1">
                        <p>Linijski grafikon je vrsta grafikona korištena za prikazivanje informacija koje se mijenjaju kroz određeno vrijeme. Linijski grafikoni se stvaraju korišteći točke spojene sa linijama.
                            Linijski grafikon se sastoji od dvije osi poznate kao 'x' os i 'y' os. Na 'x' os se najčešće stavlja određeni vremenski interval, dok na 'y' os idu vrijednosti.
                        </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                        <p>Histogram je grafički prikaz podataka korišteći 'barove' različitih visina. U histogramu, svaka 'bar' skupina grupira brojeve u opsege.
                            Viši 'barovi' prikazuju kako više podataka spada u taj opseg. Histogram prikazuje oblik i širenje podataka iz kontinuiranog uzorka.
                        </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                        <p>Boxplot je metoda grafičkog prikaza skupine numeričkih podataka kroz njihove kvartile. 
                            Boxplot grafikon također može imati linije protežući se od kutija što ukazuje na varijabilnost izvan gornjeg i donjeg kvartila.
                       </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4">
                        <p>
                            Scatterplot je vrsta matematičkog dijagrama koji koristi kartezijske koordinate za prikaz vrijednosti za obično dvije varijable iz skupa podataka.
                            Podaci se prikazuju kao skup točaka, od kojih svaka ima vrijednost jedne varijable koja određuje položaj na vodoravnoj osi, i vrijednost druge varijable
                            koja određuje položaj na vertikalnoj osi.
                        </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link5">
                        <p>Barplot je grafikon koji kategoričke podatke prikazuje pravokutnim 'barovima' s visinama ili duljinama proporcionalnim vrijednostima koje oni predstavljaju.
                            'Barovi' se mogu crtati okomito ili vodoravno. Ovaj grafikon prikazuje usporedbe između diskretnih kategorija. 
                            Jedna os grafikona prikazuje određene kategorije koje se uspoređuju, a druga os predstavlja izmjerenu vrijednost.
                       </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link6">
                        <p>Heatmap je tehnika vizualizacije podataka koja pokazuje veličinu pojave kao boju u dvije dimenzije.
                            Varijance u boji mogu biti prema nijansi ili intenzitetu, dajući čitatelju vizualne znakove o tome kako je pojava grupirana ili kako varira u prostoru.
                        </p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={4}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                        <h5><b>CSV example:</b></h5><table className="styled-table"><thead><tr><th>Date</th><th>Profit</th><th>Loss</th></tr></thead><tbody><tr><td>2020-01-10</td><td>15000</td><td>10000</td></tr><tr><td>2020-01-10</td><td>14800</td><td>12000</td></tr><tr><td>2020-01-10</td><td>17000</td><td>10000</td></tr></tbody></table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                        <h5><b>CSV example:</b></h5><table className="styled-table"><thead><tr><th>Type</th><th>Value</th></tr></thead><tbody><tr><td>variable 1</td><td>1.7763</td></tr><tr><td>variable 1</td><td>1.04888</td></tr><tr><td>Variable 2</td><td>1.21</td></tr></tbody></table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                        <h5><b>CSV example:</b></h5><table className="styled-table"><thead><tr><th>Data</th></tr></thead><tbody><tr><td>12</td></tr><tr><td>19</td></tr><tr><td>22</td></tr></tbody></table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4">
                        <h5><b>CSV example:</b></h5><table className="styled-table"><thead><tr><th>GrLivArea</th><th>SalePrice</th></tr></thead><tbody><tr><td>1710</td><td>208500</td></tr><tr><td>1262</td><td>181500</td></tr><tr><td>1786</td><td>223500</td></tr></tbody></table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link5">
                        <h5><b>CSV example:</b></h5><table className="styled-table"><thead><tr><th>Country</th><th>Value</th></tr></thead><tbody><tr><td>United States</td><td>12394</td></tr><tr><td>Russia</td><td>6148</td></tr><tr><td>Germany</td><td>1653</td></tr></tbody></table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link6">
                        <h5><b>CSV example:</b></h5><table className="styled-table"><thead><tr><th>Group</th><th>Variable</th><th>Value</th></tr></thead><tbody><tr><td>A</td><td>v1</td><td>30</td></tr><tr><td>A</td><td>v2</td><td>52</td></tr><tr><td>C</td><td>v4</td><td>97</td></tr></tbody></table>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
        </div>
    )
}



export default Supported;
