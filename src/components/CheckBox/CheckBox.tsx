import styles from './CheckBox.module.css';

export default function CheckBox() {
    return (
        <>
            <div className={styles['form__campo-checkbox']}>
                <input type="checkbox" id="lembrar" />
                <label htmlFor="lembrar" />
            </div>
            <p className={styles['form__opcoes-texto']}>Lembrar-me</p>
        </>
    );
};
