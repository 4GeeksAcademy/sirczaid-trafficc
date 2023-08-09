import React, { useState } from "react";
import { TrafficCircle } from './TrafficCircle/TrafficCircle'; 

//create your first component
const Home = () => {
	/*const [rojo, setRojo] = useState("");
	const [verde, setVerde] = useState("");*/
	const TrafficColors = ["bg-success", "bg-warning", "bg-danger"];

	const handleLightOn = (e, shadowColor) => {
		let label = e.target;
		const labelStyle = label.getAttribute("style"); 

		// CHECK IF LIGHT IS OFF
		const isLightOff = labelStyle === "box-shadow: none;" || labelStyle === null ;
		
		if (isLightOff) {
			label.setAttribute("style", `box-shadow: 0px 0 20px 4px ${shadowColor};`);
		} else {
			label.setAttribute("style", "box-shadow: none;");
		}
	}
	return (
		<div className="text-center TrafficContainer">
			{ TrafficColors.map((color, index) => 
				<TrafficCircle
					key={index}
					color={color}
					handleLightOn={handleLightOn}
				/>
			)}
		</div>
	);	
};

export default Home;
