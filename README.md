# friendlyTasks
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/codermenezes/friendlyTasks/blob/main/LICENSE.md) 

# Sobre o projeto

![QRCode](https://github.com/codermenezes/friendlyTasks/blob/main/assets/friendlyTasksqrcode.png)

friendlyTasks é um app mobile construído com o objetivo principal de praticar e desenvolver as habilidades de auto gerenciamento e melhoria contínua. Utilizando da técnica de (write down) anotar de forma simples e finalizar a tarefa exluindo a mesma da lista de afazeres. 

O app consiste em um to do list inspirado no método Bullet Jornal(https://bulletjournal.com/) e tem como objetivo facilitar o processo de write down. 

## Layout mobile (Android)
![Mobile Register](https://github.com/codermenezes/friendlyTasks/blob/main/assets/telaRegister.jpg) ![Mobile Login](https://github.com/codermenezes/friendlyTasks/blob/main/assets/telaLogin.jpg) ![Mobile Home](https://github.com/codermenezes/friendlyTasks/blob/main/assets/telaHome.jpg)

## Front end
- HTML / CSS / JS
- ReactJS
- React Native
- CLI
# Tecnologias utilizadas
## Back end
- Firebase
- Banco de dados: Realtime Database NoSQL

# Como executar o projeto localmente

### Native

```bash
# clonar repositório
git clone https://github.com/codermenezes/friendlyTasks

# entrar na pasta do projeto
cd friendlyTasks

# instalar as dependencias
npm install
# executar o projeto
npx react-native run-android

# em src/services configurar o arquivo firebaseConnection.js com suas credenciais de firebaseConfig:
let firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: "xxx-xxx",
  storageBucket: "xxx-xxx",
  messagingSenderId: "xxx-xxx",
  appId: "xxx-xxx",
  measurementId: "xxx-xxx"
};
```

## Pré-requisitos:
- npm / yarn
- nodeJS v18.4.0 ou superior
- Python 2.7 ou superior
- openjdk version "11.0.15" ou superior

## Dúvidas e ou feedbacks:

### Sérgio Menezes
#### codermenezes@gmail.com
#### https://www.linkedin.com/in/codermenezes/

