export default function H2Subtitulo( {children, className}:React.HTMLAttributes<HTMLTitleElement> ):React.ReactElement {
    return (
        <h2 className={className ?? ''}>{children}</h2>
    );
};
