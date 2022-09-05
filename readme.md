# Teste Agenda

# Breve descrição
Uma agenda de contatos com a possibilidade de criar contatos com endereços e lista-los.


## Como rodar o projeto
```
git clone https://github.com/wkiane/rails-agenda

cd rails-agenda

cd backend

bundle install

rails db:migrate

rails db:seed

rails s

cd ..

cd frontend

yarn ou npm install

yarn start ou npm run start
```

## Como rodar os testes na API
No diretório /backend
```
RAILS_ENV=test bundle exec rake ci

rails test -v ou rails test
```
O arquivo de coverate será gerado no diretório backend/coverage/index.html

# Dependências:
- [will_paginate](https://github.com/mislav/will_paginate) - Auxilia na lógica de páginação
- [faker](https://github.com/faker-ruby/faker) - Criação de dados falsos aleatórios
- [factory_bot_rails](https://github.com/thoughtbot/factory_bot_rails) - Auxilia na criação de dados falsos nos testes, e também na criação de seeds
- [simplecov](https://github.com/simplecov-ruby/simplecov) - Cobertura de testes
- [bootstrap](https://github.com/twbs/bootstrap) - Biblioteca de estilos
- [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Biblioteca de componentes React com estilos Boostrap
- [react-hook-form](https://github.com/react-hook-form/react-hook-form) - Auxilia o tratamento de formulários
- [react-imask](https://github.com/uNmAnNeR/imaskjs/tree/master/packages/react-imask) - Adiciona mascara aos inputs
- [react-router-dom](https://github.com/remix-run/react-router/tree/main/packages/react-router-dom) - Roteamento no ReactJS
- [axios](https://github.com/axios/axios) - Auxilia nas requisições http no Frontend
- [dayjs](https://github.com/iamkun/dayjs) - Formatação de datas
- [sass](https://github.com/sass/sass) - Pré-processador CSS 

## Melhorias que podem ser feitas
Internacionalização: Traduzir as mensagens de erro da validação do Rails

## Dificuldades
Model Contact: Adcionar "addresses" como um campo has_many do model Contact e retornar-lo no contacts#show
Minitest: Automaticamente rodar as migrações antes dos testes