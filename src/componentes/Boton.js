import { useState } from "react"

function Boton() {

    const [contador, setContador] = useState(0);

    return (

        <div>
            <button
                onClick={() => setContador(contador + 1)}
            >Click me</button>

            <p>
                <strong>Haz dado {contador} clicks</strong>
            </p>
        </div>
    )
}

export default Boton