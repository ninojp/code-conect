import CardPost from "@/components/CardPost/CardPost";
import { Post } from "@/types/types";
import styles from './page.module.css';
import logger from "@/Logger";


// const post: Post = {
//   id: 1,
//   cover: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//   title: "Introdução ao React",
//   slug: "introducao-ao-react",
//   body: "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//   markdown: "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//   author: {
//     id: 101,
//     name: "Ana Beatriz",
//     username: "anabeatriz_dev",
//     avatar: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
//   }
// };
async function getAllPosts() {
  const response = await fetch('http://localhost:3034/posts');
  if(!response.ok) {
    logger.error("Erro ao conectar na API!");
    return [];
  };
  logger.info('Posts obtidos com sucesso');
  return response.json();
};

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className={styles.main}>
      {posts.map((post:Post) => <CardPost post={post} key={post.id}/>)}      
    </main>
  );
};
