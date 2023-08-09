import React from 'react';
import "./TrafficCircle.css";

export const TrafficCircle = ({ color, mainColor, semaforo }) => {
	return (
		<div className="TrafficCircle-container">
			<div className={` TrafficCircle rounded" ${color}`} onClick={() => semaforo(mainColor)}></div>
		</div>
	);
}