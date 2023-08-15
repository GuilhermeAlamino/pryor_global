## Pryor global CRUD Express.js Sequelize ORM
Express.js com Sequelize ORM
Exemplo simples e básico de CRUD (Criar, Ler, Atualizar, Excluir) em Nodejs usando o framework Express JS com Sequelize ORM com banco de dados MySQL.

### 1) Clone o projeto
`git clone https://github.com/GuilhermeAlamino/pryor_global_form.git`

### 2) Navegue até o diretório
`cd pryor_global`

### 3) Instale sequelize Globalmente *sequelize-cli --globall* 
`npm install sequelize-cli -g`

### 4) Instale os pacotes e dependências
`npm install`

### 5) Configure o banco de dados
Altere o nome de usuário e a senha, (se desejar) e o database_name (se desejar). no caminho /config/config.json

### 6) Criando Banco de dados
`sequelize db:create`

### 7) Rode as Migrações do Banco de dados
`sequelize db:migrate`

### 8) Rode o Seed (se você quiser popular com dados pra teste)
`sequelize db:seed:all`

### 9) Rode o projeto (Development)
`npm run dev`

### 10) Estrutura do projeto
1.  config{<br>
        1.1 config.json -> configurações de acesso ao banco de dados. <br>
    }
2.  controllers{<br>
        1.2 appointmentsController.js -> controller que contém os métodos que implementei (create,read,update,delete) e busca. <br>
    }
3.  migrations{<br>
        1.2 create-appointments.js -> criação da migração do banco estrutura da tabela e tipagem. <br>
    }
4.  models{<br>
        1.2 create-appointments.js -> criação do modelo da minha tabela que permite abordar a persistência de dados. (ORM)<br>
    }
5.  public {<br>
        1.1 app -> manipulando meu front-end com vuejs.<br>
        1.2 assets -> libs de front-end externa, e libs js externa<br>
        1.3 index -> implementação das views e controllers<br>
   }
5.  routes {<br>
        1.1 route_view.js -> rotas do meu front-end com vuejs.<br>
        1.2 route.js -> rotas para o consumo dos dados e api.<br>
   }
6.  seeders {<br>
        1.1 appointments.js -> criação de registros para popular o front-end e facilitar teste.<br>
        1.2 route.js -> rotas para o consumo dos dados e api.<br>
   }
7.  views {<br>
        1.1 components -> componentes para evitar duplicidade de código nas view.<br>
        1.2 appointment.ejs -> arquivo principal de front-end.<br>
   }


Está é URL que está rodando a aplicação acesse : http://localhost:3000/


