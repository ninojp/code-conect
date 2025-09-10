import styles from './MenuLateral.module.css';
import Image from "next/image";
import imgFeed from './feed.svg';
import imgAccount from './account.svg';
import imgInfo from './info.svg';
import imgLogout from './logout.svg';
import Link from "next/link";

export default function MenuLateral() {
    return (
        <nav>
            <ul className={styles.ulContainerMenu}>
                <li>
                    <Link href='#' className={styles.liMenuLink}>
                        <Image src={imgFeed} alt='icone Feed' width={32} height={32} />
                        <span>Feed</span>
                    </Link>
                </li>
                <li>
                    <Link href='/login/' className={styles.liMenuLink}>
                        <Image src={imgAccount} alt='icone Perfil' width={32} height={32} />
                        <span>Login/Perfil</span>
                    </Link>
                </li>
                <li>
                    <Link href='#' className={styles.liMenuLink}>
                        <Image src={imgInfo} alt='icone Informações' width={32} height={32} />
                        <span>Sobre nós</span>
                    </Link>
                </li>
                <li>
                    <Link href='#' className={styles.liMenuLink}>
                        <Image src={imgLogout} alt='icone Logout' width={32} height={32} />
                        <span>Sair</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
