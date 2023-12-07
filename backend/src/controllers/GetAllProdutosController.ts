import { Request, Response } from "express"; //Importa as definições de tipos para objetos Request e Response do express
import { GetAllProdutosService } from "../services/GetAllProdutosService";

export class GetAllProdutosController { //definicao da classe para obtencao da lista de produtos
    async handle(request: Request, response: Response) { //definicao do metodo handle, que sera chamado quando a rota de get for acessada
        const service = new GetAllProdutosService(); //cria uma instancia da classe GetAllProdutosService

        const produtos = await service.execute();//chama o metodo execute de GetAllProdutosService

        return response.json(produtos);
    }
}