import React, { useState } from "react";


const Semaforo = () => {
    const [activeLight, setActiveLight] = useState('red')

    
    const handleLightClick = (light)=>{ 
        setActiveLight(light)

    }    
    

    return (
       
        <div className="traffic-light flex-column">
            <div 
            className= {`light red ${activeLight === 'red' ? 'active' : ''}`}
            onClick={() => handleLightClick('red')}

            >

            </div>
            
            <div 
            className= {`light green ${activeLight === 'green' ? 'active' : ''}`}
            onClick={() => handleLightClick('green')}

            >

            </div>
            <div 
            className= {`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
            onClick={() => handleLightClick('yellow')}

            >

            </div>





        </div>
        

    );



};

export default Semaforo;