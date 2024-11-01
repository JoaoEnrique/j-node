Biblioteca para configurar projeto node e iniciar a aplicação de forma simples, criando .env, token do JWT entre outras coisas
Visualizar no npm: https://www.npmjs.com/package/j-node


```
npm install -g j-node
```

Uso:
```
j-node jwt:generate
```

saida
```
JWT_SECRET GERADO:
uoVUxOCvzRx+KvNCagQcpUvf/w1T+5FqiEdzRmQxOoA=
```

```
Options:
  -v, --version              Exibe a versão atual da CLI
  -h, --help                 display help for command

Commands:
  jwt:generate|jg [options]  Gera um novo JWT_SECRET
  jwt:env|je                 Gera novo token JWT e atualiza o arquivo .env com JWT_SECRET
  help [command]             display help for command
```

![image](https://github.com/user-attachments/assets/dd13bb37-f4c0-4519-8089-15425d29642f)
