import styles from "../styles/Cartao.module.css";

interface CartaoProps {
    bgColor?: string,
    children?: any
}

export default function Cartao(props: CartaoProps) {
    return (
        <div className={`${styles.cartao}`} style={{background: props.bgColor ?? '#fff'}}>
            {props.children}
        </div>
    )
}