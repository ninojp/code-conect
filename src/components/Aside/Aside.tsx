import styles from './Aside.module.css';
import Image from 'next/image';
import imgLogo from '../../assets/logo.png';
import Link from 'next/link';
import Button from '../Button/Button';
import MenuLateral from '../MenuLateral/MenuLateral';

export default function Aside(): React.ReactElement {
    return (
        <aside className={styles.aside}>
            <div>
                {/* <img src='./logo.png' alt="Logo Code-Conect" /> */}
                <Link href='/'>
                    <Image src={imgLogo} alt="Logo Code-Conect" width={128} height={40} priority={true} />
                </Link>
            </div>
            <div>
                <Button className="botaoPadrao">Publicar</Button>
            </div>
            <MenuLateral />
        </aside>
    );
};
