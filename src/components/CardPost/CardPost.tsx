import Image from "next/image";
import Avatar from "../Avatar/Avatar";
import styles from './CardPost.module.css';
import { Post } from "@/types/types";
import Link from "next/link";
import CardEstatisticas from "../CardEstatisticas/CardEstatisticas";

type CardPostProps = { post: Post; };
export default function CardPost({ post }: CardPostProps) {
    return (
        <Link href={`/posts/${post.slug}`} className={styles.link}>
            <article className={styles.card}>
                <header className={styles.header}>
                    <figure>
                        <Image src={post.cover} width={438} height={133} alt="Imagem do Post" priority />
                    </figure>
                </header>
                <section className={styles.body}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </section>
                <footer className={styles.footer}>
                    <CardEstatisticas />
                    <Avatar imageSrc={post.author.avatar} name={post.author.username} />
                </footer>
            </article>
        </Link>
    );
};
