import '../Counter/Counter.css'
import { useState } from 'react';

const Counter = () => {

        const [contador,setContador] = useState(1);

        const suma= () => {
            setContador (contador + 1);
        }

        const resta= () => {
            setContador (contador - 1);
        }

        return (
            <div>
                <div className="container">
                    <button className='button' onClick={suma}>+</button>
                        <div>{contador}</div>
                    <button className='button' onClick={resta}>-</button>
                </div>
        
            </div>
        )
 
}

export default Counter;