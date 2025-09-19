'use client';
import styles from './BarraPesquisa.module.css';
import ContainerFlex from "../ContainerFlex/ContainerFlex";
import { useState } from 'react';


export default function BarraPesquisa() {
    const [termoPesquisado, setTermoPesquisado] = useState('');
    console.log(termoPesquisado);
    return (
        <input
            className={styles['barra-pesquisa']}
            type="search"
            placeholder="Digita o que você procura"
            name='barraDePesquisa'
            value={termoPesquisado}
            onChange={(evnt) => setTermoPesquisado(evnt.target.value)}
        />
    );
};
