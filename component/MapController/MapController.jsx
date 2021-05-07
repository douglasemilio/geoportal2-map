import React, { useEffect, useContext } from 'react'
import Maps from '../Maps/Maps';
import { Context } from "../../context/context";

const MapController = () => {
	const { theloc, comercios } = useContext(Context);
	const { zoom, setZoom, coord, setCoord, radio, setRadio, readymap } =  useContext(Context);
	const start = () => {
		//Posicion inicial por localidad
			if (theloc === 1){
		        //Darwin
		        setCoord({lat:-39.203102,lng:-65.739835})
		        setZoom(15)
		        setRadio(800)
		         }
		    if (theloc === 2){
		        //Pomona:
		        setCoord({lat:-39.484981,lng:-65.610716})
		        setZoom(16)
		        setRadio(800)
		         }
		      if (theloc === 3){
		      //Belisle
		      	setCoord({lat:-39.186733,lng:-65.954821})
		      	setZoom(15)
		      	setRadio(800)
		      }
		      if (theloc === 4){
		        //Chimapy:
		        setCoord({lat:-39.165362,lng:-66.146275})
		        setZoom(14)
		        setRadio(800)
		         }
		    if (theloc === 5){
		        //Beltran:
		        setCoord({lat:-39.310645,lng:-65.763584})
		        setZoom(14)
		        setRadio(1000)
		         }
		    if (theloc === 6){
		        //Lamarque:
		        setCoord({lat:-39.424674,lng:-65.702471})
		        setZoom(14)
		        setRadio(1000)
		         }
		    if (theloc === 7){
		        //Choele:
		        setCoord({lat:-39.289340,lng:-65.662333})
		        setZoom(14)
		        setRadio(1700)
		         }
		    if (theloc === 8){
		        //Rio Colorado:
		        setCoord({lat:-38.992762,lng:-64.091669})
		        setZoom(13)
		        setRadio(1700)
		         }   	
		    if (theloc === 'x'){
		        //Darwin
		        setCoord({lat:-39.203102,lng:-65.1})
		        setZoom(9)
		        setRadio(800)
		         }
		    return coord
	}

	useEffect(() => {
		start();}, [theloc]);
    return (
		<>
		{theloc===undefined ?
		     	(
		    <h1 />
		      	) : (
		    <div>
	            <Maps
	            cord = {coord}
	            points = {comercios}
	            readymap = {readymap}
	            zoom={zoom}
	            radio = {radio}
	            />
            </div>
            )}
        </>
       
    )
}
export default MapController;