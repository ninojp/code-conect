import CardPost from "@/components/CardPost/CardPost";
import styles from './page.module.css';
import logger from "@/Logger";
import Link from "next/link";
import { ObjPaginacao, Post, TypeSearchParams } from "@/types/types";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";

async function getAllPosts(page: number | string): Promise<ObjPaginacao> {
  const pageNumber = Number(page) || 1;
  const response = await fetch(`http://localhost:3034/posts?_page=${pageNumber}&_per_page=4`);
  if (!response.ok) {
    logger.error("Erro ao buscar posts:");
    return { first: null, prev: null, next: null, last: null, pages: null, items: null, data: [] };
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
      <Container className="flexBox">
        {posts.map((post: Post) => (<CardPost key={post.id} post={post} />))}
      </Container>

      <Container>
        <nav className={styles.pagination}>
          <div className={styles.divSeparaBtns}>
            {/* {prev && (<Link href={`/?page=${prev}`} className={styles.paginationLink}> Anterior </Link>)} */}
            {prev && (<Link href={`/?page=${prev}`}>
              <Button className="botaoPadrao">Anterior</Button>
            </Link>)}
          </div>
          <div className={styles.divSeparaBtns}>
            <span> {currentPage} </span>
          </div>
          <div className={styles.divSeparaBtns}>
            {next && (<Link href={`/?page=${next}`}>
              <Button className="botaoPadrao">Próxima</Button>
            </Link>)}
          </div>
        </nav>
      </Container>
    </main>
  );
};
