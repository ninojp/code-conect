export default async function conectaAPILocal(endpoint: string) {
    const url = `http://localhost:3034/${endpoint}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Erro ao conectar com a API local");
    }
    const data = await response.json();
    return data;
};
