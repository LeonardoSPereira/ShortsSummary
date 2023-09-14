# Shorts Summary

#### [Português](#pt)
#### [English](#en)

## Tabela de conteúdos <a name = "pt"></a>

- [Sobre](#about)
- [Tecnologias](#built_using)
- [Iniciando o projeto](#getting_started)
- [Usabilidade](#usage)


## Sobre <a name = "about"></a>

Projeto construido com o objetivo de realizar resumos de vídeos shorts do YouTube utilizando IA.

## Tecnologias usadas <a name = "built_using"></a>

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJs](https://nodejs.org/en/)


## Iniciando o projeto <a name = "getting_started"></a>

Essas instruções vão te guiar para ter uma cópia do projeto rodando em sua máquina local


### Prerequisitos

Inicialmente você vai precisar de alguns programas instalados para que consiga fazer uso:

- [Visual Studio Code](https://code.visualstudio.com) - Editor de código
- [Node.js + npm](https://nodejs.org/en) - Versão LTS recomendada

### Instalando

Após ter baixado e instalado os programas, baixe o código fonte disponível ou realize uma cópia dos arquivos pra a sua máquina.

Tendo uma cópia dos arquivos, abra os arquivos no VSCODE, abra o seu terminal integrado e execute o seguinte código: 
```
npm install
```
Com esse comando será criado a pasta node_modules junto aos seus arquivos, sendo ela necessária para a execução do app.

Após isso, abra mais uma aba do terminal, sendo 2 necessárias, e execute o seguinte código na primeira página:
```
npm run web
``` 
Esse comando irá iniciar o servidor local do front-end da aplicação. Em seguida, em seu navegador, digite a seguinte URL:
```
http://localhost:5173
```
Com isso, você já será apto a ver a aplicação.

Em seguida, na segunda aba do terminal, execute o seguinte código:
```
npm run server
```
Esse comando irá executar o servidor responsável por realizar o download do vídeo, convertê-lo para áudio, realizar a transcrição para texto e fazer o resumo.

## Usando <a name = "usage"></a>

Com os dois servidores ativos, basta adicionar o link do short que deseja resumir no campo adequado e aguardar a aplicação realizar o resumo.

*Importante destacar que o vídeo tem que ser um SHORT e de no máximo 60 segundos de duração.*



## ENGLISH <a name="en"></a>


## Table of Contents

- [About](#abouten)
- [Technologies Used](#built_usingen)
- [Getting Started](#getting_starteden)
- [Usage](#usageen)

## About <a name="abouten"></a>

This project is built with the aim of creating summaries of YouTube shorts videos using AI.

## Technologies Used <a name="built_usingen"></a>

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)

## Getting Started <a name="getting_starteden"></a>

These instructions will guide you to have a copy of the project running on your local machine.

### Prerequisites

Initially, you will need some installed programs to be able to use it:

- [Visual Studio Code](https://code.visualstudio.com) - Code editor
- [Node.js + npm](https://nodejs.org/en) - Recommended LTS version

### Installing

After downloading and installing the required programs, download the available source code or make a copy of the files to your machine.

With a copy of the files, open the integrated terminal of VSCODE and execute the following code:
```
npm intall
```
This command will create the 'node_modules' folder along with the necessary files, which is required for the application to run.

Afterward, open another terminal tab (you will need two tabs) and execute the following code in the first tab:
```
npm run web
```
This command will start the local front-end server of the application. Then, in your web browser, enter the following URL:
```
http://localhost:5173
```
With this, you will be able to view the application.

Next, in the second terminal tab, execute the following code:
```
npm run server
```
This command will run the server responsible for downloading the video, converting it to audio, transcribing it to text, and creating the summary.

## Usage <a name="usageen"></a>

With both servers active, simply add the link of the short video you want to summarize in the appropriate field and wait for the application to generate the summary.

*It's important to note that the video must be a SHORT and have a maximum duration of 60 seconds.*

