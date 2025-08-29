import Image from "next/image";
import React from "react";
import styles from './Avatar.module.css';

interface AvatarInterface {
    name:string;
    imageSrc:string;
};
export default function Avatar({name, imageSrc}:AvatarInterface):React.ReactElement {
    return (
        <ul className={styles.avatar}>
            <li>
                <Image src={imageSrc} width={32} height={32} alt="Imagem do avatar" priority={true}/>
            </li>
            <li>
                @{name}
            </li>
        </ul>
    );
};
