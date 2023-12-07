import { Entity, Column, PrimaryGeneratedColumn  } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("produtos")
export class Produtos {
    @PrimaryGeneratedColumn("uuid")//definicao da chave primaria, utilizacao da biblioteca uuid para gerar os ids
    id: string;
    
    @Column()
    name: string;
    
    @Column()
    price: number;
    
    @Column()
    description: string;

    @Column()
    imagepath: string;

    constructor() {//construtor do id para cada novo produto instanciado
        const id = uuid();
        if(!this.id) {
            this.id = id;
        }
        console.log(id);
    }
}