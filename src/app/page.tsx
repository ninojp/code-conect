import CardPost from "@/components/CardPost/CardPost";
import { Post } from "@/types/types";
import styles from './page.module.css';
import logger from "@/Logger";
import Link from "next/link";

const LIMIT = 4;

type PageResult = {
  posts: Post[];
  prev: number | null;
  next: number | null;
};

async function getAllPosts(currentPage: number): Promise<PageResult> {
  try {
    const response = await fetch(
      `http://localhost:3034/posts?_page=${currentPage}&_limit=${LIMIT}`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts = await response.json() as Post[];
    const total = Number(response.headers.get('x-total-count') || '0');
    const totalPages = Math.ceil(total / LIMIT);

    return {
      posts,
      prev: currentPage > 1 ? currentPage - 1 : null,
      next: currentPage < totalPages ? currentPage + 1 : null
    };
  } catch (error) {
    logger.error("Erro ao buscar posts:", error);
    return { posts: [], prev: null, next: null };
  }
}

type PageProps = {
  params: Record<string, string>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home(props: PageProps) {
  // Extrair e validar o número da página
  const pageParam = props.searchParams?.page;
  const currentPage = Math.max(1, Number(pageParam) || 1);

  const { posts, prev, next } = await getAllPosts(currentPage);

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {posts.map(post => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>

      <nav className={styles.pagination}>
        {prev && (
          <Link 
            href={`/?page=${prev}`}
            className={styles.paginationLink}
          >
            Anterior
          </Link>
        )}
        
        <span>Página {currentPage}</span>

        {next && (
          <Link 
            href={`/?page=${next}`}
            className={styles.paginationLink}
          >
            Próxima
          </Link>
        )}
      </nav>
    </main>
  );
};
