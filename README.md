# Trabalho2-DevWeb
Integrantes: Lucas Cândido Barcelos e Enzo Pazini Ambrosio

A ideia no projeto foi a criação de um ecommerce de smartphones. Infelizmente não conseguimos subir o projeto em um serviço de hospedagem devido a erros ao tentar fazer o deploy do banco de dados. Utilizamos o docker para rodar um banco de dados PostgreSQL.
# Back-End
Para desenvolver o backend da nossa aplicação utilizamos o node,typeorm, express e um banco de dados PostgreSQL rodando em um container Docker.

Foi feita uma tabela de produtos, utilizando o typeorm, com nome, preço, descrição e um caminho de imagem. O id do produto foi gerado automaticamente utilizando a biblioteca do node package modules 'uuid'.

Comentários no código fonte explicam a lógica de criação da tabela no banco de dados e da API

#Front-End
Aplicação React de um ecommerce de smartphones. A página inicial exibe os produtos obtidos no banco de dados atravéz da API. A página inicial inclui Navbar, página de login e cadastro de usuários.
