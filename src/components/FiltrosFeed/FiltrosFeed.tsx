import styles from './FiltrosFeed.module.css';

export default function FiltrosFeed() {
  return (
    <section className={styles["container-filtro"]}>
        <ul>
            <li>Programação  X</li>
            <li>Front-End</li>
            <li>Acessibilidade</li>
        </ul>
        <button>Limpar Tudo</button>
    </section>
  );
};
