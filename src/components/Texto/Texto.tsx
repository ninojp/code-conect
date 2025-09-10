interface PropsTexto {
    children:React.ReactNode
    classe:string
};
export default function Texto({children, classe}:PropsTexto ):React.ReactElement {
    return (
        <p className={classe}>{children}</p>
    );
};
