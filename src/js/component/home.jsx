import React, { useState } from "react";
import { TrafficCircle } from './TrafficCircle/TrafficCircle'; 

//create your first component
const Home = () => {
	const [rojo, setRojo] = useState("bg-secondary");
	const [verde, setVerde] = useState("bg-secondary");
	const [amarrillo, setAmarrillo] = useState("bg-secondary");

	function semaforo (color) {
		if (color == "rojo") {
			setRojo("bg-danger");
			setAmarrillo("bg-secondary");
			setVerde("bg-secondary");
		} else if (color == "verde") {
			setRojo("bg-secondary");
			setAmarrillo("bg-secondary");
			setVerde("bg-success");
		} else if (color == "amarrillo") {
			setRojo("bg-secondary");
			setAmarrillo("bg-warning");
			setVerde("bg-secondary");
		}
	}

	return (
		<div className="text-center">
			<TrafficCircle
				color={rojo}
				mainColor={"rojo"}
				semaforo={semaforo}
			/>
			<TrafficCircle
				color={verde}
				mainColor={"verde"}
				semaforo={semaforo}
			/>
			<TrafficCircle
				color={amarrillo}
				mainColor={"amarrillo"}
				semaforo={semaforo}
			/>
		</div>
	);	
};

export default Home;
