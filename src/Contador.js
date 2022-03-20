import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  const incrementarContador = () => setContador(contador + 1);
  return (
    <div>
      <h2>Contador</h2>
      <h4>{contador}</h4>
      <button onClick={incrementarContador}>+</button>
    </div>
  );
}

export default Contador;
