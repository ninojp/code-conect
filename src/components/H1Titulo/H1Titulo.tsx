export default function H1Titulo( {children, className}:React.HTMLAttributes<HTMLTitleElement> ):React.ReactElement {
    return (
        <h1 className={className ?? ''}>{children}</h1>
    );
};
