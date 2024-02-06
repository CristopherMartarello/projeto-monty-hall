import styles from "../../../styles/Jogo.module.css";
import { useEffect, useState } from "react";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Porta from "../../../components/Porta";
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function jogo() {
    const router = useRouter();
    const [portas, setPortas] = useState([])
    const [valido, setValido] = useState(false)

    // router.query.portas
    // router.query.temPresente

    useEffect(() => {
        const portas = +router.query.portas;
        const temPresente = +router.query.temPresente;
        setPortas(criarPortas(portas, temPresente));
    }, [router?.query]) //quando essa expressão modificar, ele chama a função dentro do useEffect

    useEffect(() => {
        const portas = +router.query.portas;
        const temPresente = +router.query.temPresente;

        const qtdPortasValida = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas

        setValido(qtdPortasValida && temPresenteValido)
    }, [portas]) //quando o valor da porta modificar, ele é chamado

    function renderizarPortas() {
      return portas.map(porta => {
        return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
      })
    }
  
    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {valido ? renderizarPortas() : <h1>Valores inválidos!</h1>}
            </div>
            <div className={styles.botoes}>
                <Link href='/'>
                    <button>Reiniciar</button>
                </Link>
            </div>
        </div>
    );
}