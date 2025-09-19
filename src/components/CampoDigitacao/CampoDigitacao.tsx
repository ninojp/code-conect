import React from 'react';
import styles from './CampoDigitacao.module.css';

interface CampoDigitacaoProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  tipo?: string;
  id?: string;
  htmlFor?: string;
  valor: string;
  setvalor: (valor: string) => void;
}

export default function CampoDigitacao({ label, id, htmlFor, tipo='text', placeholder, valor, setvalor, ...restProps }:CampoDigitacaoProps): React.ReactElement {
    //Neste componente eu apenas estou recebendo o valor do estado e a função que altera o estado
    //do componente pai (PageLogin) via props. Assim eu consigo fazer a comunicação entre componentes.
    //A cada digitação no input, o onChange chama a função setvalor (que é o setEstado do useState do componente pai)
    console.log('CampoDigitação: \n', 'Valor: ', valor);
        // usa htmlFor se fornecido, caso contrário usa id
    const labelFor = htmlFor ?? id;
    return (
        <div className={styles['form__campo-digitacao']}>
            <label htmlFor={labelFor}>
                {label}
            </label>
            <input
                id={id}
                type={tipo}
                placeholder={placeholder}
                value={valor}
                onChange={(evnt)=>setvalor(evnt.target.value)}
                {...restProps}
            />
        </div>
    );
};
