import { ReactElement } from 'react';

interface ButtonProps {
    children: ReactElement | string
    tipo?: "button" | "submit" | "reset" | undefined
    classe?: string
    [props: string]: any
}
const Button = ({children, tipo, classe, ...props}: ButtonProps) => {
    return (
        <button type={tipo} className={classe ?? ''} {...props}>
            {children}
        </button>
    );
};
export default Button;
