import './Colorpicker.css'
import React,{useState} from 'react';

const Colorpicker = () => {
    const [color, setColor] = useState('')

    return ( 
        <div className='fondo d-flex align-items-center' style={{backgroundColor : color}}>
            <div className="card carta">
                <div className="card-body ">
                    <h5 className="card-title">Color Picker</h5>
                    <input type="color" onChange={(e) => setColor(e.target.value)}/>
                </div>
            </div>
        </div>
     );
}
 
export default Colorpicker;