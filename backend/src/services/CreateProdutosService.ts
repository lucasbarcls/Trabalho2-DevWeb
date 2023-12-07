import { getRepository } from "typeorm";
import { Produtos } from "../entities/Produtos";

// definicao das informacoes esperadas ao criar um produto um tipo para as informações esperadas ao criar um novo produto
type ProdutosRequest = {
    name: string;
    price: number;
    description: string;
    imagepath: string;
}


export class CreateProdutosService {
    async execute({ //metodo assincrono para criacao de um novo produto
        name,
        price,
        description,
        imagepath
    }:ProdutosRequest ): Promise<Produtos | Error> {
        const repo = getRepository(Produtos);//obtem o repositorio associado a entidade Produtos

        if(await repo.findOne({ name })) {//verifica se ja existe algum produto com o mesmo nome
            return new Error("Produto ja existe");
        }

        const produtos = repo.create({//cria uma instancia da entidade Produtos com os dados fornecidos
            name,
            price,
            description,
            imagepath
        })

        await repo.save(produtos);//salva a instacia no banco de dados

        return produtos;
    }
}