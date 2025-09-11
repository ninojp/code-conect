import { ReactElement } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: ReactElement | string
    tipo?: "button" | "submit" | "reset" | undefined
    classe?: string
    [props: string]: any
}
const Button = ({children, tipo, classe, ...props}: ButtonProps) => {
    return (
        <button type={tipo} className={`${styles.botaoPadrao} ${classe ?? ''}`} {...props}>
            {children}
        </button>
    );
};
export default Button;
