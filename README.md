# Site de Vendas de Imóveis

Um site de vendas de imóveis desenvolvido com React para teste de habilidades, featuring navegação moderna e componentes reutilizáveis.

## Tecnologias Utilizadas

- **React 19.1.0** - Biblioteca principal para construção da interface
- **React Router DOM 7.7.0** - Gerenciamento de rotas e navegação
- **Styled Components 6.1.19** - Estilização CSS-in-JS
- **React Icons 5.5.0** - Biblioteca de ícones
- **React Scripts 5.0.1** - Configuração de build e desenvolvimento

## Estrutura do Projeto

```
src/
├── Components/          # Componentes reutilizáveis
│   ├── Banner/         # Banner principal
│   ├── Button/         # Botões customizados
│   ├── Card/           # Cards de produtos/imóveis
│   ├── Footer/         # Rodapé do site
│   ├── Header/         # Cabeçalho com navegação
│   ├── Input/          # Campos de input
│   ├── TextArea/       # Áreas de texto
│   └── TopBanner/      # Banner superior
├── Pages/              # Páginas da aplicação
│   ├── Cadastro/       # Página de cadastro
│   ├── Error/          # Página de erro 404
│   ├── Home/           # Página inicial
│   ├── Imobi/          # Página de imóveis
│   └── Login/          # Página de login
├── routes/             # Configuração de rotas
└── styles/             # Estilos globais
```

## Rotas da Aplicação

- `/` - Página inicial (Home)
- `/imovel` - Página de imóveis
- `/login` - Página de login
- `/cadastro` - Página de cadastro
- `/*` - Página de erro 404

## Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <URL-do-repositório>

# Entre no diretório do projeto
cd "site de vendas"

# Instale as dependências
npm install
# ou
yarn install
```

### Executando o Projeto
```bash
# Inicie o servidor de desenvolvimento
npm start
# ou
yarn start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

### Build para Produção
```bash
# Crie a versão otimizada para produção
npm run build
# ou
yarn build
```

## Testes

```bash
# Execute os testes
npm test
# ou
yarn test
```

## Funcionalidades

- **Navegação SPA**: Single Page Application com rotas dinâmicas
- **Layout Responsivo**: Interface adaptável para diferentes dispositivos
- **Componentes Modularizados**: Arquitetura de componentes reutilizáveis
- **Sistema de Autenticação**: Páginas de login e cadastro
- **Catálogo de Imóveis**: Exibição de propriedades disponíveis
- **Tratamento de Erros**: Página 404 personalizada

## Configuração

O projeto utiliza a configuração padrão do Create React App com as seguintes personalizações:
- Styled Components para estilização
- React Router para navegação
- Estrutura de pastas organizada por funcionalidade

## Licença

Este projeto é privado e desenvolvido para fins específicos.

## Contribuição

Para contribuir com este projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Contato

Para dúvidas ou suporte, entre em contato com a equipe de desenvolvimento.
