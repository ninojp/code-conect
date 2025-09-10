import styles from './CampoDigitacao.module.css';

interface propsCampoDigitacao {
    label: string
    tipo: string
    placeholder: string
    id?: string
    valor: string
    setvalor: (valor: string) => void
    [props: string]: any
}
export default function CampoDigitacao({ label, id, tipo, placeholder, valor, setvalor, ...props }:propsCampoDigitacao) {
    // console.log('CampoDigitação: \n', props);
    return (
        <div className={styles['form__campo-digitacao']}>
            <label htmlFor={id} {...props}>
                {label}
            </label>
            <input
                id={id}
                type={tipo}
                placeholder={placeholder}
                value={valor}
                onChange={(evnt)=>setvalor(evnt.target.value)}
                {...props}
            />
        </div>
    );
};
