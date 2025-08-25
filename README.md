
# Job-Finder
## Descrição
Job-Finder é uma aplicação web que permite aos usuários cadastrar novas vagas de emprego e buscar vagas disponíveis. A aplicação foi construída com uma interface amigável e responsiva.
## Funcionalidades
Cadastrar novas vagas de emprego

- Visualizar todas as vagas disponíveis
- Buscar vagas por critérios específicos
- Visualizar detalhes completos de cada vaga
- Interface responsiva para desktop e mobile

## Tecnologias Utilizadas
- JavaScript
- Node.js
- Express
- Handlebars
- HTML
- CSS
## Pré-requisitos
Antes de executar a aplicação, certifique-se de ter instalado:
- Node.js (versão 14 ou superior) - [Instalar Node](https://nodejs.org/pt/download)
- Git - [Instalar o Git](https://git-scm.com/downloads)
## Como Executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/victorbarros01/Job-Finder.git
   cd Job-Finder
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute a aplicação em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```
## Estrutura do Projeto
```
Job-Finder/
├── db/
│   ├── connection.js
│   └── index.db
├── models/
│   └── Job.js
├── node_modules/
├── public/
│   ├── css/
│   └── img/
├── routes/
│   └── jobs.js
├── views/
│   ├── layouts/
│   │   └── main.hbs
│   ├── add.hbs
│   ├── index.hbs
│   └── view.hbs
├── index.js
├── package-lock.json
└── package.json

```
## Scripts Disponíveis
- `npm run dev`: Inicia o servidor em modo de desenvolvimento com nodemon
- `npm start`: Inicia o servidor
## Contribuição
Contribuições são sempre bem-vindas! Para contribuir:
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
## Contato
Seu nome - [victorbarros01](https://github.com/victorbarros01) - email@exemplo.com
Link do projeto: [https://github.com/victorbarros01/Job-Finder](https://github.com/victorbarros01/Job-Finder)

