import Image from "next/image";
import Link from "next/link";


interface PropsItemRedesSociais{
    link: string;
    nome: string;
    imgSrc:string;
};
export default function ItemRedesSociais({link, imgSrc, nome}:PropsItemRedesSociais):React.ReactElement {
    return (
        <li>
            <Link href={link} target='_blank'>
                <Image src={imgSrc} alt={`icone do ${nome}`} width={32} height={32} />
                {nome}
            </Link>
        </li>
    );
};
