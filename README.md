<p  align="center">
<a  href="http://nestjs.com/"  target="blank"><img  src="https://nestjs.com/img/logo_text.svg"  width="320"  alt="Nest Logo"  /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p  align="center">A progressive <a  href="http://nodejs.org"  target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p  align="center">
<a  href="https://www.npmjs.com/~nestjscore"  target="_blank"><img  src="https://img.shields.io/npm/v/@nestjs/core.svg"  alt="NPM Version"  /></a>
<a  href="https://www.npmjs.com/~nestjscore"  target="_blank"><img  src="https://img.shields.io/npm/l/@nestjs/core.svg"  alt="Package License"  /></a>
<a  href="https://www.npmjs.com/~nestjscore"  target="_blank"><img  src="https://img.shields.io/npm/dm/@nestjs/common.svg"  alt="NPM Downloads"  /></a>
<a  href="https://circleci.com/gh/nestjs/nest"  target="_blank"><img  src="https://img.shields.io/circleci/build/github/nestjs/nest/master"  alt="CircleCI"  /></a>
<a  href="https://coveralls.io/github/nestjs/nest?branch=master"  target="_blank"><img  src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9"  alt="Coverage"  /></a>
<a  href="https://discord.gg/G7Qnnhy"  target="_blank"><img  src="https://img.shields.io/badge/discord-online-brightgreen.svg"  alt="Discord"/></a>
<a  href="https://opencollective.com/nest#backer"  target="_blank"><img  src="https://opencollective.com/nest/backers/badge.svg"  alt="Backers on Open Collective"  /></a>
<a  href="https://opencollective.com/nest#sponsor"  target="_blank"><img  src="https://opencollective.com/nest/sponsors/badge.svg"  alt="Sponsors on Open Collective"  /></a>
<a  href="https://paypal.me/kamilmysliwiec"  target="_blank"><img  src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
<a  href="https://opencollective.com/nest#sponsor"  target="_blank"><img  src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg"  alt="Support us"></a>
<a  href="https://twitter.com/nestframework"  target="_blank"><img  src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
<!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
[![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Sumário

1. [Descrição](#description)
2. [Instalação](#install)
3. [Executando a API](#running)
4. [Banco de dados](#database)
5. [Endpoints](#endpoints)
   1. [Opportunities](#opportunities)
6. [License](#license)

## Descrição <a name="description"></a>

API desenvolvido em [Nest](https://nestjs.com) para realizar a integração entre as plataformas [Pipedrive](https://www.pipedrive.com/pt) e [Bling](https://www.bling.com.br).

## Instalação <a name="install"></a>

```bash

$ npm install

```

## Executando a API <a name="running"></a>

```bash

# development
$ npm run start


# watch mode
$ npm run start:dev


# production mode
$ npm run start:prod

```

## Banco de dados <a name="database"></a>

- Banco de dados: MongoDB
- Local: MongoDB Atlas
- ODM: Mongoose

## Endpoints <a name="endpoints"></a>

### Opportunities <a name="opportunities"></a>

<p>GET</p> /api/v1/opportunities

**Descrição:** Retorna todos as oportunidades cadastradas no banco.

**Response**:
200 _Lista de oportunidades_

```JSON
[
  {
    "_id": "611d80df970e76874c4ac298",
    "date": "0000-00-00 00:00:00.000",
    "totalValue": 10.4,
    "items": [
      {
        "_id": "611d80df970e76874c4ac299",
        "pipedriveId": 1,
        "customerName": "Customer Name",
        "description": "Product Description",
        "qtde": 1,
        "unitValue": 6.4
      },
      {
        "_id": "611d88c60a091b31240edc6a",
        "pipedriveId": 2,
        "customerName": "Customer Name #02",
        "description": "Product Description",
        "qtde": 1,
        "unitValue": 4
      }
    ],
    "createdAt": "2021-08-18 18:51:27.575",
    "updatedAt": "2021-08-18 19:25:10.089",
    "__v": 1
  }
]
```

<p>PUT</p> /api/v1/opportunities

**Descrição:** Realiza a busca de negócios ganhos na plataforma Pipedrive, persiste no banco e criar um novo pedido na plataforma Bling.

**Response**:
200 _No body_

## License <a name="license"></a>

Nest is [MIT licensed](LICENSE).
