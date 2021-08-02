import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './mystyle.css'; 





function MyBody(props) {
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const [isFileSubmitted, setIsFileSubmitted] = useState(false);
	const [selectedHeaders, setSelectedHeaders] = useState();
	const [isHeaderPicked, setIsHeaderPicked] = useState(false);
	const [isGraphDone, setIsGraphDone] = useState(false);
	const [isInput, setIsInput] = useState(true);
	const [LinkOfGraph, setLinkOfGraph] = useState(process.env.REACT_APP_SRVR_URL+ ":" + process.env.REACT_APP_SRVR_PORT + "/graph");
	const [iFrameLink, setIframeLink] = useState(false);
	




	const d = new Date();
	let chosenVariables = [];
	let typesGraphicons = ['Linijski grafikon', 'Histogram', 'Box plot', 'Scatter plot', 'Bar plot', 'Heat map'];
	let chosenGraph = -1;
	let lastId = "";





	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};
	//uploading csv to server
	const handleSubmission = () => {
		const data = new FormData()
		data.append('file', selectedFile)
		axios.post(process.env.REACT_APP_SRVR_URL+ ":" + process.env.REACT_APP_SRVR_PORT + "/upload", data, {

		})
			.then(res => {
				console.log(res.statusText);
			})

		submit();
		setIsFileSubmitted(true);
	};




	//getHeaders from selectedfile csv
	const submit = () => {
		const file = selectedFile;
		const reader = new FileReader();

		reader.onload = function (e) {
			const text = e.target.result;
			processCsv(text);
		}

		reader.readAsText(file);
	}

	const processCsv = (str, delim = ",") => {
		setSelectedHeaders(str.slice(0, str.indexOf('\r\n')).split(delim));
		setIsHeaderPicked(true);

	}





	const saveChosenVariables = (e,ew) => {
		if (chosenVariables.indexOf(e) === -1) {
			chosenVariables.push(e);
			ew.target.classList.remove("button-nonselectedvar");
			ew.target.classList.add("button-selectedvar");
		}
		else if (chosenVariables.indexOf(e) !== -1) {
			chosenVariables.splice(chosenVariables.indexOf(e), 1);
			ew.target.classList.remove("button-selectedvar");
			ew.target.classList.add("button-nonselectedvar");
		}


	}

	//Date.now() + '-' + file.originalname
	//putting csvfile name in database
	const handleDatabase = () => {
		let csvName = d.getDate() + '-' + (d.getMonth() + 1) + '-' + selectedFile.name;

		axios.post(process.env.REACT_APP_SRVR_URL+ ":" + process.env.REACT_APP_SRVR_PORT + "/list", {

			csvname: csvName,
			graph: chosenGraph,
			var1: chosenVariables[0],
			var2: chosenVariables[1],
			var3: chosenVariables[2],
			var4: chosenVariables[3],
			var5: chosenVariables[4],
		})
			.then(res => {
				console.log(res.statusText);
				console.log(res);
				console.log("1");
				function sendId() {
					return new Promise(resolve => {
						lastId = res.data.rows[0].id;
						setLinkOfGraph(LinkOfGraph + lastId);
						resolve(LinkOfGraph);

					})
				}
				async function sent() {
					await sendId();
					setIsFileSubmitted(false);
					setIsFilePicked(false);
					setIsInput(false);
					setIsGraphDone(true);
				}
				sent();
			})
	}

	return (<div>
		{isInput ? (<input type="file" name="file" className="btn btn-danger" accept=".csv" onChange={changeHandler} />) : (<></>)}
		{(isFilePicked && isInput) ? (
			<>
			
			<div>
				<p>Filename: {selectedFile.name}</p>
				<p>Filetype: {selectedFile.type}</p>
				<p>Size in bytes: {selectedFile.size}</p>
				<p>
					lastModifiedDate:{' '}
					{selectedFile.lastModifiedDate.toLocaleDateString()}
				</p>
				<div>
					<Button variant="danger" onClick={handleSubmission} >Submit</Button>
				</div>
				
			</div>
			
			<hr/>
			</>

		) : (
			<></>)
		}

		{isFileSubmitted ? (
			<>
				{/* 6 korak */}
				<div>
					<label>Variables:  </label>
					{
						isHeaderPicked ? (
							selectedHeaders.map((e, i) => (
								<Button variant="danger" className="button-nonselectedvar button-spacing"  key={i} onClick={(ew) => { console.log("a"); saveChosenVariables(e,ew) }}>{e}</Button>
								
								))
						) : (<></>)

					}
				</div>
				<hr/>
				
				<div>
					<label>Graphicons: </label> 
					{typesGraphicons.map((e, i) => (
						 <Button key={i} variant="danger"  className="button-spacing button-nonselected" onClick={(ew) => { 
							 	var button = document.getElementsByClassName("button-selected");
								for(var xx = 0; xx<button.length; xx++){
									button[xx].className="button-nonselected button-spacing btn btn-danger";
								}
								if(ew.target.classList.contains("button-nonselected")){
									ew.target.classList.remove("button-nonselected"); 
									ew.target.classList.add("button-selected"); 
								}
							 	chosenGraph=e;  }}>{e}</Button>
					))}

				</div>
				<hr/>
				<div>
					<Button variant="danger" type="submit" onClick={() => { handleDatabase() }}>Napravi grafikon</Button>
				</div>
			</>

		) : (<></>)}

		{isGraphDone ? (
			<>
				<div className="container">
					<iframe className="responsive-iframe" src={LinkOfGraph} title="graph" allowFullScreen={true} ></iframe>  
				</div>
				<div className="text-center">
				<Button variant="danger" onClick={()=>{setIframeLink(true)}}>Create iframe adress</Button></div>
				{iFrameLink ? (
					 <>	
						<div className="text-center">
							<br/>
						<div className="div-link">{LinkOfGraph}</div></div>
					</>
				) : (<> </>)}
			</>
		) : (<></>)}

	</div>


	);
}



const Upload = () => {

	function MyVerticallyCenteredModal(props) {

		return (
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						D3.js grafikon
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>

					<MyBody />

				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>

		);
	}

	const [modalShow, setModalShow] = useState(false);

	return (

		<>	
	<div id="home" className="jumbotron" >
        <h1>Platforma za izradu grafikona</h1>
        <hr/>
        <p>Kreirajte neograničeni broj grafikona iz .csv datoteka i ubacite ih u svoju web stranicu kroz iframe</p>
        <br/>
        <br/>
       
        <form>
            <div className="input-group" id="stvoriGraf">
                
                  
                   
				<Button variant="danger" onClick={() => setModalShow(true)}>
								Kreiraj svoj grafikon
							</Button>
				<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
                
            </div>
        </form>
    </div>

		
		</>
	)
};

export default Upload;
