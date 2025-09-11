import styles from './ContainerFlex.module.css';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
};
const ContainerFlex: React.FC<ContainerProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`${styles.containerFlex} ${className ?? ''}`} {...rest}>
      {children}
    </div>
  );
};
export default ContainerFlex;

//IA
// Use React.ReactNode para aceitar qualquer elemento/fragmento/texto.
// ContainerProps estende React.HTMLAttributes<HTMLDivElement> para aceitar atributos padrão (id, style, onClick, etc.).
