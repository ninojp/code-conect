import { ReactElement } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: ReactElement | string
    tipo?: "button" | "submit" | "reset" | undefined
    classe?: string
    [props: string]: any
}
const Button = ({children, tipo, classe, ...rest}: ButtonProps) => {
    return (
        <button type={tipo} className={`${styles.botaoPadrao} ${classe ?? ''}`} {...rest}>
            {children}
        </button>
    );
};
export default Button;
