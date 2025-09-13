export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    categoria: string;
    imageUrl?: string;
    promo?: boolean;
    estado?: 'novo' | 'usado' | 'esgotado';
}
