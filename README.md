# Desafio_Future_Back-end
Desafio de programação como parte do processo seletivo.

## Pré-requisitos para pleno funcionamento do projeto
     O projeto consiste em uma API de filmes onde pode-se realizar ações como
    criar, listar, alterar e deletar, filmes e categorias. Será necessário ter
    instalado o Node.js, base de dados PostgreSQL e algum gerenciador de repositório (NPM ou YARN).
    Também é necessário criar uma Database no PostgreSQL com nome "desafio_future_backend"
    ou qualquer outro nome e qualquer outra configuração, mas não esqueça de alterar as
    informações no ficheiro ".src/config/database.js".

## Processo de instalação do projeto
     Deverá realizar o 1º passo no arquivo que deseja instalar o projeto, os passos
    seguintes deverão ser realizados no arquivo gerado pelo 1º passo:

 - 1º passo: "git clone https://github.com/Uriel-David/Desafio_Future_Back-end.git"
 - 2º passo: "npm install" ou "yarn install"
 - 3º passo: Criar a Database "desafio_future_backend" ou qualquer outro nome, mas lembrar de atualizar o ficheiro ".src/config/database.js"
    Guia das informações caso necessite modificar no ficheiro citado anteriormente (caso não deseje alterar criar base de dados com as informações do ficheiro):
    - host: 'ip ou nome do host da base de dados',
    - database: 'nome da base de dados',
    - username: 'usuário da base de dados',
    - password: 'senha da base de dados',
    - port: "número da porta do postgresql" por padrão "5432"

 ## Observações quanto a estrutura da API e sua configuração
     A API basicamente está concentrada no ficheiro "src" onde contém os ficheiros
    config, controllers, models, routes e na raíz possui o ficheiro index.js.

 - index.js (ficheiro): basicamente contém as rotas da API, sincronização da base de dados e as informações do servidor
 - config (arquivo): possui o arquivo (database.js) que contém as informações de conexão com a base de dados
 - controllers (arquivo): possui 2 arquivos contendo todas as funcionalidades da API (CRUD)
 - models (arquivo): contém os modelos das tabelas que serão criadas na base de dados e um arquivo exportando as mesmas
 - routes (arquivo): contém as rotas da API dividida em 2 arquivos, 1 para cada rota

     Caso tenha alguma configuração diferente em relação a base de dados será
    apenas necessário modificar o arquivo "./src/config/database.js", alterando
    as informações da classe "Sequelize".

## Informações para teste da API
     A API foi testada com o progama "Insomnia", será necessário usar o comando "npm run start" ou "yarn run start" para compilar
    e torna online o servidor. Os testes podem ser realizados utilizando as rotas da API criada tais como:

 - Rotas GET para filmes: http://localhost:3000/filmes, http://localhost:3000/filmes/categoria/:CategoriaId, http://localhost:3000/filmes/genero/:genero
 - Rotas GET para categoria: http://localhost:3000/categorias

 - Rotas POST para filme: http://localhost:3000/filmes
 - Rotas POST para categoria: http://localhost:3000/categorias

 - Rotas PUT para filme: http://localhost:3000/filmes/:id
 - Rotas PUT para categoria: http://localhost:3000/categorias/:id

 - Rotas DELETE para filme: http://localhost:3000/filmes/:id
 - Rotas DELETE para categoria: http://localhost:3000/categorias/:id

     É necessário passar a informação pelo "body" da requisição em formato "JSON" e
    se necessário também por parâmetros na URL (caso seja um parâmetro na URL será indicado por ":" antes).
