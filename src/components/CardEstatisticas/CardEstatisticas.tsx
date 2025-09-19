import styles from './CardEstatisticas.module.css';
import code from './code.svg';
import share from './share.svg';
import chat from './chat.svg';
import Image from 'next/image';

export default function CardEstatisticas() {
  return (
    <div className={styles.divEstatisticas}>
        <ul>
            <li>
                <Image src={code} alt='Icone de código' height={16}/>
                <span>10</span>
            </li>
            <li>
                <Image src={share} alt='Icone de Compartilhamento' />
                <span>12</span>
            </li>
            <li>
                <Image src={chat} alt='Icone de Chat' />
                <span>6</span>
            </li>
        </ul>
    </div>
  )
}
