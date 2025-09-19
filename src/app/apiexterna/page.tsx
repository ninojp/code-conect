// import CardPost from '@/components/CardPost/CardPost';
// import { Post } from '@/types/types';
// import React from 'react';
// //Opção A — Server Component (recomendado: SEO, simples, sem hooks)
// // Mantenha a função async e faça o fetch no servidor; renderize os dados diretamente.
// type Publicacao = { id: number; title?: string; body?: string;[k: string]: any };
// export default async function PageAPIExterna() {
//     const res = await fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes', {
//         // opcional: revalida a cada 60s
//         next: { revalidate: 60 }
//     });
//     if (!res.ok) throw new Error('Erro ao conectar com a API externa');
//     const dados: Publicacao[] = await res.json();
//     console.log("Dados da API externa:", dados);

//     return (
//         <main>
//             <h1>Curso React: configurando e estruturando projetos com Vite</h1>
//             <h2>API externa usada durante as aulas...</h2>
//             <br />
//             <ul>
//                 {dados.map((d) => (
//                     <li key={d.id}>
//                         {d.id ?? `#`}
//                         <br />
//                         <strong>{d.titulo ?? `#`}</strong>
//                         <br />
//                         {<p>{d.resumo ?? `#`}</p>}
//                         <hr />
//                         <br />
//                     </li>
//                 ))}
//             </ul>
//         </main>
//     );
// };
//=========================================================================================

//Opção B — Client Component (se precisa interagir no cliente com estados/hooks)
// Marque como 'use client', remova async da função e faça fetch dentro de useEffect.
'use client';
import React, { useEffect, useState } from 'react';

type Publicacao = { id: number; titulo?: string; resumo?: string; [k: string]: any };
export default function PageAPIExternaClient(): React.ReactElement {
  const [dados, setDados] = useState<Publicacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        const res = await fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes', { signal });
        if (!res.ok) throw new Error('Erro ao conectar com a API externa');
        const data = (await res.json()) as Publicacao[];
        setDados(data);
      } catch (err: any) {
        if (err.name === 'AbortError') return; // fetch cancelado
        setError(String(err));
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => controller.abort();
  }, []);
  if (loading) return <div>Carregando dados da API...</div>;
  if (error) return <div>Erro: {error}</div>;
  return (
    <main>
      <h1>Curso React: configurando e estruturando projetos com Vite</h1>
      <h2>API externa usada durante as aulas...</h2>
      <ul>
        {dados.map((d) => (
          <li key={d.id}>
            {d.id ?? '#'}
            <br />
            <strong>{d.titulo ?? '#'}</strong>
            <br />
            <p>{d.resumo ?? '#'}</p>
            <hr />
          </li>
        ))}
      </ul>
    </main>
  );
}

// 'use client';
// import React, { useEffect, useState } from 'react';
// type Publicacao = { id: number; title?: string; body?: string;[k: string]: any };
// export default function PageAPIExternaClient(): React.ReactElement {
//     const [dados, setDados] = useState<Publicacao[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     useEffect(() => {
//         let mounted = true;
//         const url = 'https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes';
//         fetch(url)
//             .then((res) => {
//                 if (!res.ok) throw new Error('Erro ao conectar com a API externa');
//                 return res.json();
//             })
//             .then((data: Publicacao[]) => {
//                 if (mounted) setDados(data);
//             })
//             .catch((err) => {
//                 if (mounted) setError(String(err));
//             })
//             .finally(() => {
//                 if (mounted) setLoading(false);
//             });

//         return () => {
//             mounted = false;
//         };
//     }, []);

//     if (loading) return <div>Carregando...</div>;
//     if (error) return <div>Erro: {error}</div>;

//     return (
//         <main>
//             <h1>Curso React: configurando e estruturando projetos com Vite</h1>
//             <h2>API externa usada durante as aulas...</h2>
//             <br />
//             <ul>
//                 {dados.map((d) => (
//                     <li key={d.id}>
//                         {d.id ?? `#`}
//                         <br />
//                         <strong>{d.titulo ?? `#`}</strong>
//                         <br />
//                         {<p>{d.resumo ?? `#`}</p>}
//                         <hr />
//                         <br />
//                     </li>
//                 ))}
//             </ul>
//         </main>
//     );
// }
