import './Colorpicker.css'
import React,{useState} from 'react';

const Colorpicker = () => {
    const [color, setColor] = useState('')

    return ( 
        <div className='fondo' style={{backgroundColor : color}}>
            <div class="card carta">
                <div class="card-body ">
                    <h5 class="card-title">Color Picker</h5>
                    <input type="color" onChange={(e) => setColor(e.target.value)}/>
                </div>
            </div>
        </div>
     );
}
 
export default Colorpicker;