import { useState } from 'react';

function Input() {
  const [mensaje, setMensaje] = useState("");
  const [resultado, setResultado] = useState("");

  const onEvaluarPalabra = (mensaje) => {
    const palabraLimpia = mensaje.replace(/\s+/g, '').toLowerCase();
    const palabraReves = palabraLimpia === palabraLimpia.split('').reverse().join('');

    let resultado = '';
    if (palabraReves) {
      resultado = "es igual";
    } else {
      resultado = "no es igual al revés";
    }

    setResultado(resultado);
  };

  return (
    <div>
      <input
        type="text"
        value={mensaje}
        placeholder='ingrese un mensaje'
        onChange={e => setMensaje(e.target.value)}
      />
      <p>
        <strong>{mensaje}</strong>
      </p>

      <button onClick={() => onEvaluarPalabra(mensaje)}>analizar</button>

      <p>{resultado}</p>
    </div>
  );
}

export default Input;
