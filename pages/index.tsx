import styles from "../styles/Form.module.css";
import Cartao from "../components/Cartao";
import Link from "next/link"
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Form() {

  const [qtdPortas, setQtdPortas] = useState(3);
  const [portaPremiada, setPortaPremiada] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Cartao bgColor={'#c0392c'}>
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text={"Qtd Portas?"} value={qtdPortas} onChange={novaQuantidade => setQtdPortas(novaQuantidade)}></EntradaNumerica>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text={"Porta Premiada?"} value={portaPremiada} onChange={novaPremiada => setPortaPremiada(novaPremiada)}></EntradaNumerica>
        </Cartao>
        <Cartao bgColor={'#28a085'}>
          <Link href={`/jogo/${qtdPortas}/${portaPremiada}`} className={styles.link}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
