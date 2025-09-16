# Prova - Backend

Backend da prova da **Escola de TI - 2025**, desenvolvido por **Rafael Campigotto - RA: 22014205-2**.


## 📌 Tecnologias

-   [NestJS](https://nestjs.com/) (framework backend em Node.js)
-   [TypeScript](https://www.typescriptlang.org/)
-   [PostgreSQL](https://www.postgresql.org/) (banco de dados
    relacional)
-   [Drizzle ORM](https://orm.drizzle.team/) (mapeamento
    objeto-relacional)
-   [Docker Compose](https://docs.docker.com/compose/) (containerização)


## 🚀 Scripts disponíveis

### Desenvolvimento

``` bash
npm run start:dev
```

Inicia o servidor em modo desenvolvimento com **hot reload**.

### Build

``` bash
npm run build
```

Compila o projeto TypeScript para JavaScript.

### Produção

``` bash
npm start
```

Inicia o servidor já compilado.

### Docker

``` bash
npm run docker
```

## ⚙️ Requisitos

-   **Node.js** \>= 20
-   **NPM** \>= 10
-   **Docker** e **Docker Compose**
-   Banco de dados **PostgreSQL**


## 📂 Estrutura do Projeto (NestJS)

    backend/
     ├── src/
     │   ├── db/
     │   │   ├── drizzle/   # Configuração do ORM Drizzle
     │   │   ├── schemas/   # Schemas do proejto (Tabelas Banco de Dados)
     |   ├── modules/       # Módulos organizados por domínio
     │   ├── app.module.ts  # Módulo raiz    
     │   ├── main.ts        # Ponto de entrada da aplicação
     ├── docker-compose.yml # Arquivo de container do PostgreSQL
     └── drizzle.config.ts  # Configruações do ORM Drizzle


## 🛠️ Banco de Dados (Drizzle ORM)

-   Gerar migrações:

``` bash
npm run drizzle-g
```

-   Rodar migrações:

``` bash
npm run drizzle-m
```

Configurações no `drizzle.config.ts`.

## 📝 Convenções de Commit

Este projeto utiliza como base para commits o padrão [Conventional
Commits](https://www.conventionalcommits.org/).  
Consulte o guia em [`padrao-commits.txt`] no Drive do projeto.

## 📄 Licença

Este projeto é **privado**.