import '../Counter/Counter.css'

const Counter = ({contador, setContador, stock}) => {

        

        const onAdd= () => {
            if (stock === contador) {
                alert('no puede agregar mas productos!')
                return;
            }
            setContador (contador + 1);
        }

        const resta= () => {
            if (contador === 0) {
                return;
            }
            setContador (contador - 1);
        }

        return (
            <div>
                <div className="container">
                    <button className='button' onClick={onAdd}>+</button>
                        <div className='numero'>{contador}</div>
                    <button className='button' onClick={resta}>-</button>
                </div>
              
        
            </div>
        )
 
}

export default Counter;