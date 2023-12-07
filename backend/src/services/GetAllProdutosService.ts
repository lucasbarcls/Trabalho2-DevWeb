import { getRepository } from "typeorm";
import { Produtos } from "../entities/Produtos";

export class GetAllProdutosService {
    async execute() {//metodo assincrono que obtem todos os produtos do banco de dados
        const repo = getRepository(Produtos);//obtem o repositorio associado a entidade Produtos

        const produtos = await repo.find();//utilizacao do metodo find para obtencao de todos os produtos

        return produtos;//retorna a lista de produtos
    }
}