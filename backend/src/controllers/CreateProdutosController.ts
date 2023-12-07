import { Request, Response } from "express";//Importa as definições de tipos para objetos Request e Response do express
import {CreateProdutosService} from "../services/CreateProdutosService";


export class CreateProdutosController {//definicao da classe create
    async handle(request: Request, response: Response) {//definicao do metodo handle que sera chamado na rota de create
        const {name, price, description, imagepath} = request.body//extrai as informacoes do corpo da requisicao
        
        const service = new CreateProdutosService();//cria uma instancia da classe CreateProdutosService

        const result = await service.execute({name, price, description, imagepath});//chama o metodo execute de CreateProdutosService passando um objeto contendo os dados do produto

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }
        
        return response.json(result);
    }
}