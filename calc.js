import { useState } from "react";

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const calcularSubtracao = () => {
    let operando1 = 0;
    let operando2 = 0;
    operando1 = parseFloat(numero1);
    operando2 = parseFloat(numero2);
    setResultado(operando1 - operando2);
  };
  const aleatoriador = () => {
    let operando1 = parseInt(Math.random() * 10, 10);
    let operando2 = parseInt(Math.random() * 10, 10);
    setNumero1(operando1);
    setNumero2(operando2);
    setResultado(0);
  };
  const calcularSoma = () => {
    let operando1 = 0;
    let operando2 = 0;
    operando1 = parseFloat(numero1);
    operando2 = parseFloat(numero2);
    setResultado(operando1 + operando2);
  };
  const calcularDivisao = () => {
    let operando1 = 0;
    let operando2 = 0;
    operando1 = parseFloat(numero1);
    operando2 = parseFloat(numero2);
    setResultado(operando1 / operando2);
  };
  const calcularMultiplicacao = () => {
    let operando1 = 0;
    let operando2 = 0;
    operando1 = parseFloat(numero1);
    operando2 = parseFloat(numero2);
    setResultado(operando1 * operando2);
  };
  return (
    <div>
      <input
        type="number"
        placeholder="numero 1"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="numero 2"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />
      <br />
      <button onClick={aleatoriador}>aleatoriador</button>
      <br />
      <button onClick={calcularSubtracao}>Subtrair</button>
      <br />
      <button onClick={calcularSoma}>Somar</button>
      <br />
      <button onClick={calcularDivisao}>Dividir</button>
      <br />
      <button onClick={calcularMultiplicacao}>Multiplicar</button>
      <div>o resultado é: {resultado}</div>
    </div>
  );
}
