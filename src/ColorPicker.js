import React,{ useState, useEffect } from "react";
import './ColorPicker.css';

const ColorPicker = ()=>{
    const [color, setColor] = useState('#a38585');
    
    const handleColorChange = (event)=> {
        setColor(event.target.value);
    };

    const copyColorCode = ()=>{
        navigator.clipboard.writeText(color)
        .then(()=> alert(`copied: ${color}`))
        .catch((err)=> console.error('Failed to copy: ',err));
    };

    useEffect(()=> {
        document.body.style.backgroundColor = color;
    },[color]);

    return(
        <div className="container">
            <h1>COLOR PICKER APP</h1>
            <h2>get your colors!!</h2>
            <input type="color" value={color} onChange={handleColorChange}/>
            <div className="color_box" style={{ backgroundColor: color }}></div>
            <p>{color}</p>
            <button onClick={copyColorCode}>Copy Color</button>
        </div>
    );

};

export default ColorPicker;