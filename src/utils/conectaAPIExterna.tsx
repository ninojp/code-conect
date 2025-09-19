

export default async function conectaAPIExterna() {
    const response = await fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes');
    if (!response.ok) {
        throw new Error("Erro ao conectar com a API local");
    }
    const data = await response.json();
    // console.log("Dados da API externa:", data);    
    return data;
};
//API Externa, do curso React: configurando e estruturando projetos com Vite:
// https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes
