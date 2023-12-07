import { Request, Response } from "express";//Importa as definições de tipos para objetos Request e Response do express
import { DeleteProdutosService } from "../services/DeleteProdutosService";

export class DeleteProdutosController {//definicao da classe para deletar produtos
    async handle(request: Request, response: Response) {//deficao do metodo handle que sera chamado na rota de delete
        const { id } = request.params;//pega o parametro id da url da requisicao

        const service = new DeleteProdutosService();//cria instancia da classe DeleteProdutosService

        const result = await service.execute(id);//chama o metodo execute passando o id do produto a ser excluido

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}