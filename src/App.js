import { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);
  const incrementarContador = () => setContador(contador + 1);
  return <h1>React hooks</h1>;
}

export default App;
