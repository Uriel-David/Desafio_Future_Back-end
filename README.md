# Desafio_Future_Back-end
Desafio de programação como parte do processo seletivo.

## Pré-requisitos para pleno funcionamento do projeto
     O projeto consiste em uma API de filmes onde pode-se realizar ações como
    criar, listar, alterar e deletar, filmes e categorias. Será necessário ter
    instalado o Node.js e a base de dados PostgreSQL e assim ser realizada o
    processo de instalação do projeto e todas as suas dependências. Também é
    necessário criar uma Database no PostgreSQL com nome "desafio_future_backend"
    ou qualquer outro nome e qualquer outra configuração, mas não esqueça de
    alterar as informações no arquivo ".src/config/database.js".

## Processo de instalação do projeto
     Deverá realizar o 1º passo no ficheiro que deseja instalar o projeto, os passos
    seguintes deverão ser realizados no ficheiro gerado pelo 1º passo:

 - 1º passo: "git clone https://github.com/Uriel-David/Desafio_Future_Back-end.git"
 - 2º passo: "npm init"
 - 3º passo: "npm install"

 ## Observações quanto a estrutura da API e sua configuração
     A API basicamente está concentrada no ficheiro "src" onde contém os ficheiros
    config, controllers, models, routes e na raíz possui o arquivo index.js.

 - index.js (arquivo): basicamente contém as rotas da API, sincronização da base de dados e as informações do servidor
 - config (ficheiro): possui o arquivo (database.js) que contém as informações de conexão com a base de dados
 - controllers (ficheiro): possui 2 arquivos contendo todas as funcionalidades da API (CRUD)
 - models (ficheiro): contém os modelos das tabelas que serão criadas na base de dados e um arquivo exportando as mesmas
 - routes (ficheiro): contém as rotas da API dividida em 2 arquivos, 1 para cada rota

     Caso tenha alguma configuração diferente em relação a base de dados será
    apenas necessário modificar o arquivo "./src/config/database.js", alterando
    as informações da classe onde apenas é preciso alterar as informações do array.

## Informações para teste da API
     A API foi testada com o progama "Insomnia". os testes podem ser realizados
    utilizando as rotas da API criada tais como:

 - Rotas GET para filmes: http://localhost:3000/filmes, http://localhost:3000/filmes/categoria/:CategoriaId, /filmes/genero/:genero
 - Rotas GET para categoria: http://localhost:3000/categorias

 - Rotas POST para filme: http://localhost:3000/filmes
 - Rotas POST para categoria: http://localhost:3000/categorias

 - Rotas PUT para filme: http://localhost:3000/filmes/:id
 - Rotas PUT para categoria: http://localhost:3000/categorias/:id

 - Rotas DELETE para filme: http://localhost:3000/filmes/:id
 - Rotas DELETE para categoria: http://localhost:3000/categorias/:id

     É necessário passar a informação pelo "body" da requisição em formato "JSON" ou
    passar toda a informação necessaria por parâmetros na URL.
