import styles from './Aside.module.css';
import Image from 'next/image';
import imgLogo from '../../assets/logo.png';
import Link from 'next/link';
import Button from '../Button/Button';
import MenuLateral from '../MenuLateral/MenuLateral';

export default function Aside(): React.ReactElement {
    return (
        <aside className={styles.aside}>
            <Link href='/'>
                <Image src={imgLogo} alt="Logo Code-Conect" width={128} height={40} priority={true} />
            </Link>
            <MenuLateral />
        </aside>
    );
};
