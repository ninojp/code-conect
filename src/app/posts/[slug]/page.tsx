import CardPost from "@/components/CardPost/CardPost";
import logger from "@/Logger";
import { Post } from "@/types/types";
import { remark } from 'remark';
import html from 'remark-html';
import styles from './page.module.css';
// import DOMPurify from 'dompurify';
// console.log(DOMPurify);


async function getPostBySlug(slug: string): Promise<Post | null> {
    const url = `http://localhost:3034/posts?slug=${(slug)}`;
    const response = await fetch(url);
    if (!response.ok) {
        logger.error("Erro ao buscar o post, slug!");
        return null;
    };
    logger.info('Post atual via slug, obtido!');
    const data = await response.json() as Post[];
    if (data.length === 0) {
        return null;
    }
    const post = data[0];
    //BIBLIOTECA remark/remakHTML, para converter markdown em HTML string
    const processedContent = await remark().use(html).process(post.markdown);
    const htmlString = processedContent.toString();
    //BIBLIOTECA DOMPurify, para limpar a string antes de injetar no html da pagina ----- NAO FUNCIONOU
    // usa sanitize se disponível; caso contrário usa o HTML "cru" como fallback
    // const sanitizedHtml = (DOMPurify && typeof DOMPurify.sanitize === 'function')
    //     ? DOMPurify.sanitize(htmlString)
    //     : htmlString;
    // const sanitizedHtml = DOMPurify.sanitize(htmlString);
    post.markdown = htmlString;
    return post;
};

//==================================================================
type PageProps = {
    params: { slug: string }
}
export default async function PagePost({ params }: PageProps) {
    // console.log("LOG de PARAMS:", params, typeof params);    
    const post = await getPostBySlug(params.slug);
    if (!post) { return <h1>Este Post não foi encontrado</h1> }
    return (
        <div className={styles.div_container_post}>
            <h1>{post.title}</h1>
            <br/>
            <br/>
            <br/>
            <CardPost post={post} />
            <h3 className={styles.subtitle}>Código:</h3>
            <div className={styles.code}>
                <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
            </div>
        </div>
    );
};
