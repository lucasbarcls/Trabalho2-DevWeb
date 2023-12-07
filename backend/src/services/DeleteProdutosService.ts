import { getRepository } from "typeorm";
import { Produtos } from "../entities/Produtos";

export class DeleteProdutosService {
    async execute(id: string) {//metodo assincrono que exclui um produto com base no id fornecido
        const repo = getRepository(Produtos);//obtem o repositorio associado a entidade Produtos

        if(!(await repo.findOne(id))) {//verifica se existe o produto com o id fornecido no banco de dados
            return new Error("Produto nao existe");
        }

        await repo.delete(id);//exclui o produto com base no id
    }
}