import styles from './PaginacaoMenu.module.css';
import Link from 'next/link';
import Button from '../Button/Button';

interface PropsPaginacao {
    prev: number | null;
    currentPage: number | null;
    next: number | null;
}
export default function PaginacaoMenu({prev, currentPage, next}:PropsPaginacao) {
    return (
        <nav className={styles.pagination}>
            <div className={styles.divSeparaBtns}>
                {/* {prev && (<Link href={`/?page=${prev}`} className={styles.paginationLink}> Anterior </Link>)} */}
                {prev && (<Link href={`/?page=${prev}`}>
                    <Button>Anterior</Button>
                </Link>)}
            </div>
            <div className={styles.divSeparaBtns}>
                <span> {currentPage} </span>
            </div>
            <div className={styles.divSeparaBtns}>
                {next && (<Link href={`/?page=${next}`}>
                    <Button>Próxima</Button>
                </Link>)}
            </div>
        </nav>
    );
};
