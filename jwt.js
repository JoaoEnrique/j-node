const crypto = require("crypto");
const fs = require("fs");
const path = require("path");


// Função para gerar o JWT_SECRET
function generateSecret(length = 32) {
    return crypto.randomBytes(length).toString("base64");
}

// Função para atualizar o arquivo .env
function updateEnvFile(secret) {
    const envPath = path.resolve(__dirname, ".env");

    // Lê o conteúdo existente do .env (se existir)
    let envContent = "";
    if (fs.existsSync(envPath)) {
        envContent = fs.readFileSync(envPath, "utf8");
    }

    // Atualiza ou adiciona o JWT_SECRET no conteúdo do .env
    const updatedEnvContent = envContent.includes("JWT_SECRET=")
        ? envContent.replace(/JWT_SECRET=.*/g, `JWT_SECRET=${secret}`)
        : `${envContent}\nJWT_SECRET=${secret}`;

    // Escreve o conteúdo atualizado no .env
    fs.writeFileSync(envPath, updatedEnvContent.trim());
    console.log(".env atualizado com sucesso!");
}

// Exporta as funções
module.exports = { generateSecret, updateEnvFile };
