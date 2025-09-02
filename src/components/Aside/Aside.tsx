import styles from './Aside.module.css';
import Image from 'next/image';
import imgLogo from '../../assets/imgs/logo.png';
import Link from 'next/link';

export default function Aside(): React.ReactElement {
    return (
        <aside className={styles.aside}>
            {/* <img src='./logo.png' alt="Logo Code-Conect" /> */}
            <Link href='http://localhost:3000/'>
                <Image src={imgLogo} alt="Logo Code-Conect" width={128} height={40} priority={true} />
            </Link>
        </aside>
    );
};
