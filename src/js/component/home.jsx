import React, { useState } from "react";

import Navbar from "./Navbar";

import Semaforo from "./Semafaro";


//create your first component
const Home = () => {


	// const [color, setcolor] = useState('bg-primary')
	return (
		<div className="d-flex justify-content-center">

			{/* <div className="text-center p-5">
				<div>Color rojo</div>
				<div>color <Amarrillo></Amarrillo></div>
				<div>Color verde</div>
			// </div> */}
			{/* // <button className="btn btn-warning p-1">Click</button> */}

			<Navbar />
			<Semaforo />
			<body />


















		</div>
	);
};

export default Home;
