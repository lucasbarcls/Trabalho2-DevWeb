import { getRepository } from "typeorm";
import { Produtos } from "../entities/Produtos";
//definicao do tipo das informacoes esperadas para atualizar um produto
type ProdutosUpdateRequest = {
    id: string;
    name: string;
    price: number,
    description: string;
    imagepath: string
};

export class UpdateProdutosService {
    async execute({id, name, price, description, imagepath }: ProdutosUpdateRequest) {
        const repo = getRepository(Produtos);//obtem o repositorio associado a entidade Produtos

        const produtos = await repo.findOne(id);//busca o produto a ser atualizado baseado no id

        if(!produtos) {//verifica se encontrou o produto
            return new Error("Produto nao existe");
        }

        //Atualiza as propriedades do produto, verificacao por meio de if ternario se houve alteracao da informacao
        produtos.name = name ? name : produtos.name;
        produtos.price = price ? price : produtos.price;
        produtos.description = description ? description : produtos.description;
        produtos.imagepath = imagepath ? imagepath : produtos.imagepath;

        await repo.save(produtos);//salva as atualizacoes no banco de dados

        return produtos;
    }
}
