
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
};
const Container: React.FC<ContainerProps> = ({ children, className, ...rest }) => {
  return (
    <div className={className ?? ''} {...rest}>
      {children}
    </div>
  );
};
export default Container;

//IA
// Use React.ReactNode para aceitar qualquer elemento/fragmento/texto.
// ContainerProps estende React.HTMLAttributes<HTMLDivElement> para aceitar atributos padrão (id, style, onClick, etc.).
