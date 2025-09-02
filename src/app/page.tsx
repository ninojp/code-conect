import CardPost from "@/components/CardPost/CardPost";
import styles from './page.module.css';
import logger from "@/Logger";
import Link from "next/link";
import { ObjPaginacao, Post, TypeSearchParams } from "@/types/types";

async function getAllPosts(page: number | string): Promise<ObjPaginacao> {
  const pageNumber = Number(page) || 1;
  const response = await fetch(`http://localhost:3034/posts?_page=${pageNumber}&_per_page=4`);
  if (!response.ok) {
    logger.error("Erro ao buscar posts:");
    return { first: null, prev: null, next: null, last: null, pages: null, items: null, data: []};
  };
  const payload = await response.json() as ObjPaginacao;
  // garante que data é um array de Post
  const data = Array.isArray(payload?.data) ? payload.data : [];
  return { ...payload, data };
}
//=======================================================================
export default async function Home({ searchParams }: TypeSearchParams) {
  const currentPage: number = Number(searchParams?.page ?? 1);
  const { data: posts, prev, next } = await getAllPosts(currentPage);
  return (
    <main className={styles.main}>
      {posts.map((post: Post) => (<CardPost key={post.id} post={post} />))}

      <nav className={styles.pagination}>
        {prev && (<Link href={`/?page=${prev}`} className={styles.paginationLink}> Anterior </Link>)}
        <span> {currentPage} </span>
        {next && (<Link href={`/?page=${next}`} className={styles.paginationLink}> Próxima </Link>)}
      </nav>
    </main>
  );
};
