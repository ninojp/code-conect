import styles from './Aside.module.css';
import Image from 'next/image';
import imgLogo from '../../assets/imgs/logo.png';

export default function Aside(): React.ReactElement {
    return (
        <aside className={styles.aside}>
            {/* <img src='./logo.png' alt="Logo Code-Conect" /> */}
            <Image src={imgLogo} alt="Logo Code-Conect" width={128} height={40} priority={true} />
        </aside>
    );
};
