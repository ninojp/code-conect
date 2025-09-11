import styles from './BarraPesquisa.module.css';
import ContainerFlex from "../ContainerFlex/ContainerFlex";

export default function BarraPesquisa() {
    return (
        <ContainerFlex>
            <input type="search" placeholder="Digita o que você procura" />
        </ContainerFlex>
    );
};
