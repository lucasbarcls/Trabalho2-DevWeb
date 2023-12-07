import {Request, Response} from "express"; //Importa as definições de tipos para objetos Request e Response do express
import { UpdateProdutosService } from "../services/UpdateProdutosService";

export class UpdateProdutosController { //classe para lidar com as requisições relacionadas a atualização de produtos
    async handle(request: Request, response: Response) { //definicao do metodo handle que sera chamado quando a rota associada ao controller update for acessada nas rotas 
        const { id } = request.params; //extrai o parametro id da URL da requisicao
        const { name, price, description, imagepath } = request.body; //extrai informacoes do corpo da requisicao

        const services = new UpdateProdutosService(); 

        const result = await services.execute({id, name, price, description, imagepath}); //chama o metodo execute da instancia de UpdateProdutosService, passando um objeto contendo os parametros extraidos da requisicao

        if(result instanceof Error) { //verifica se o resultado da funcao execute e um erro
            return response.status(400).json(result.message) 
        }

        return response.json(result); 
    }
}