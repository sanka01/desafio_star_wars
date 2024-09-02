```markdown
# StarWars Project

Projeto desenvolvido como desafio para vaga de desenvolvedor fullStack na superADM BB,
o projeto faz uso da API https://swapi.dev/ para gerar uma listagem dos personagens de star wars e permite a criação de uma lista de favoritos.

```
# Instalação Local

### 1. Clone o repositório
```bash
git clone https://github.com/sanka01/desafio_star_wars.git
```

### 2. Acesse o diretório do projeto

```bash
cd desafio_star_wars
```

### 3. Instale as dependências

Execute o comando abaixo para instalar todas as dependências necessárias:

```bash
npm install
```

### 4. Configuração do Banco de Dados

Este projeto utiliza o MySQL como banco de dados. Certifique-se de ter o MySQL instalado e configurado em sua máquina. Em seguida, crie um banco de dados para o projeto:

```sql
CREATE DATABASE star_wars;
```

Edite o arquivo `.env` na raiz do projeto para configurar as credenciais do banco de dados. Substitua as variáveis abaixo com as suas configurações locais:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=star_wars
```


nesse projeto foi utilizado o XAMPP para a conexão com o banco de dados local


### 5. Executar as Migrações

Após configurar o banco de dados, execute as migrações para criar as tabelas necessárias:

```bash
node ace migrations:run
```
Execute também a migração para criar o usuário 1, o projeto no momento não possui a autenticação e gerência de usuários propriamente, mas foi deixada a base para que seja feito

``` bash
node ace db:seed
```

### 6. Executar o Servidor de Desenvolvimento

Por fim, inicie o servidor de desenvolvimento com o comando:

```bash
npm run dev
```

O servidor estará em execução na URL `http://localhost:3333/`.


## Utilização

o projeto se concentra em duas telas: a tela Home no link `http://localhost:3333` possui a listagem de todos os personagens e um botão para favorita-los, enquanto a tela Favorites no link `http://localhost:3333/favorites` possui a listagem dos favoritos do usuario e a opção de exclui-los

em ambas as telas existe uma função de busca por nome
