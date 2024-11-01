#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const { generateSecret, updateEnvFile } = require("./jwt");

// Configuração do commander
program
    .version("1.0.0", "-v, --version", "Exibe a versão atual da CLI")
    .description("Biblioteca para configurar projeto node e iniciar a aplicação de forma simples, criando .env, token do JWT entre outras coisas");

// Comando para gerar o secret
program
    .command("jwt:generate")
    .alias("jg") // Alias para o comando
    .description("Gera um novo JWT_SECRET")
    .option("-l, --length <number>", "Comprimento do secret", "32")
    .action((options) => {
        const secret = generateSecret(parseInt(options.length, 10));
        console.log("\x1b[32mJWT_SECRET GERADO:\x1b[0m"); // Mensagem em verde
        console.log(secret);
    });

// Comando para atualizar o .env com o secret
program
    .command("jwt:env")
    .alias("je") // Alias para o comando
    .description("Gera novo token JWT e atualiza o arquivo .env com JWT_SECRET")
    .action(() => {
        const secret = generateSecret();
        updateEnvFile(secret);
        console.log("\x1b[32mJWT_SECRET GERADO E SALVO NO .ENV:\x1b[0m"); // Mensagem em verde
        console.log(secret);
    });

// Processa os argumentos da linha de comando
program.parse(process.argv);
