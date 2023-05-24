# fullstack-project-backend

## Introdução

Esta API faz parte de um projeto Full Stack, em que o objetivo é construir uma aplicação Full Stack onde seja possível realizar o cadastro de um cliente que poderá ter muitos contatos associados a ele.

## Rodando a API localmente

Faça o clone do repositório.

```bash
git clone git@github.com:ErikNibe/fullstack-project-backend.git
```

Instale as dependências.

```bash
npm i
```

Inicie o servidor.

```bash
npm run dev
```

## Endpoints

| Método | Endpoint      | Responsabilidade                          | Autenticação                  |
| ------ | ------------- | ----------------------------------------- | ----------------------------- |
| POST   | /clients      | Criação de um cliente                     | Não necessita de autenticação |
| GET    | /clients      | Retorna as informações do usuário         | Necessita de autenticação     |
| PATCH  | /clients      | Atualiza um cliente                       | Necessita de autenticação     |
| DELETE | /clients      | Deleta o cliente                          | Necessita de autenticação     |
| POST   | /login        | Gera o token de autenticação              | Não necessita de autenticação |
| POST   | /contacts     | Criação do contato                        | Necessita de autenticação     |
| GET    | /contacts     | Lista todas os contatos do usuário logado | Necessita de autenticação     |
| PATCH  | /contacts/:id | Atualiza informações de um contato        | Necessita de autenticação     |
| DELETE | /contacts/:id | Deleta um contato                         | Necessita de autenticação     |
