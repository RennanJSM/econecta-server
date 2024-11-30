# Econecta Backend ♻️

## Descrição ℹ️

O **Econecta Backend** é a API que alimenta a plataforma Econecta, promovendo sustentabilidade e engajamento comunitário. Ele oferece endpoints para gerenciar usuários, posts, comentários e integrações com serviços de Machine Learning para recomendações personalizadas de projetos DIY (faça você mesmo) com base no perfil de consumo do usuário.

## Funcionalidades

- **Gerenciamento de Usuários**: Registro, autenticação, atualização e exclusão de usuários, incluindo perfis detalhados com preferências e histórico de atividades.
- **Gerenciamento de Posts e Comentários**: Criação, leitura, atualização e exclusão de posts e comentários, permitindo a interação entre os membros da comunidade.
- **Integração com Machine Learning**: Integração com modelos de recomendação para sugerir projetos DIY personalizados aos usuários.
- **Mapa de Alertas**: Endpoints para reportar e visualizar riscos ambientais como poluição, desmatamento ou enchentes, com geolocalização.

## Time 🏆

### 👨‍💻 Desenvolvedores

**Breno do Amaral**

- 📧 E-mail: brenodoamaral1@gmail.com
- 🌐 GitHub: [github.com/brenodoamaral1](https://github.com/brenodoamaral1)

**Rennan Miranda**

- 📧 E-mail: rennan.jsmiranda@gmail.com
- 🌐 GitHub: [github.com/RennanJSM](https://github.com/RennanJSM)

**Luís Vinicius**

- 📧 E-mail: luislauriano@outlook.com.br
- 🌐 GitHub: [github.com/luislauriano](https://github.com/luislauriano)

### 🎨 UX/UI Designers

**Gabriella Graciano**

- 📧 E-mail: gabifc_graciano@hotmail.com
- 🖋️ Behance: [behance.net/gabygraciano](https://www.behance.net/gabygraciano)

**Wictor Melo**

- 📧 E-mail: wictormannuel@gmail.com
- 🌐 GitHub: [github.com/Wictor0](https://github.com/Wictor0)



## Tecnologias ⚙️

- **Node.js**
- **NestJS**
- **TypeScript**
- **Prisma**
- **PostgreSQL**

## Machine Learning 🧠

🔗 **Repositório do Modelo de Recomendação**:  
[github.com/luislauriano/econecta](https://github.com/luislauriano/econecta)

🚀 **Teste o modelo diretamente pelo link**:  
Acesse aqui: [econecta.streamlit.app](https://econecta.streamlit.app/)

## Instalação ⬇️

### Passo 1: Clonar o Repositório

Abra o terminal e execute o seguinte comando para clonar o repositório do backend:

```
git clone https://github.com/seu-usuario/econecta-server.git
```

### Passo 2: Instalar Dependências

Navegue até a pasta do projeto clonado e execute:

```
cd econecta-server
npm install

```

### Passo 3: Configurar o Banco de Dados

- Certifique-se de ter o PostgreSQL instalado e em execução.
- Crie um banco de dados para a aplicação.
- Copie o arquivo ```.env.example``` para ```.env``` e configure as credenciais do banco de dados:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/econecta"

```

### Passo 4: Executar Migrações do Prisma

Execute o comando para aplicar as migrações ao banco de dados:

```
npx prisma migrate dev --name init

```

### Passo 5: Iniciar o Servidor

Inicie o servidor em modo de desenvolvimento:

```
npm run start:dev

```

## Rodando o Projeto 🏃

O servidor estará rodando em ```http://localhost:3000```. Você pode testar os endpoints utilizando ferramentas como Postman ou Insomnia.
