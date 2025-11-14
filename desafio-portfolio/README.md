# Desafio Portfolio - Projeto Pessoal

## Descrição
Portfólio pessoal que carrega dados dinâmicos de perfil e exibe seções interativas (skills, idiomas, portfólio e experiência) com layout responsivo.

## Funcionalidades implementadas
- Carregamento dinâmico dos dados de perfil a partir do arquivo de dados: [desafio-portfolio/data/profile.json](desafio-portfolio/data/profile.json) (função [`fetchProfileData`](desafio-portfolio/assets/js/api.js)).
- Atualização dinâmica dos elementos da página:
  - Perfil (foto, nome, cargo, localização, telefone, e-mail) via [`updateProfileInfo`](desafio-portfolio/assets/js/main.js).
  - Soft skills via [`updateSoftSkills`](desafio-portfolio/assets/js/main.js).
  - Hard skills (com ícones) via [`updateHardSkills`](desafio-portfolio/assets/js/main.js).
  - Idiomas via [`updateLanguages`](desafio-portfolio/assets/js/main.js).
  - Portfólio via [`updatePortfolio`](desafio-portfolio/assets/js/main.js).
  - Experiência profissional via [`updateProfessionalExperience`](desafio-portfolio/assets/js/main.js).
- Comportamento de acordeon (expandir/contrair seções) implementado em [desafio-portfolio/assets/js/acordeon.js](desafio-portfolio/assets/js/acordeon.js).
- Design responsivo e estilização organizada em CSS:
  - [desafio-portfolio/assets/css/global.css](desafio-portfolio/assets/css/global.css)
  - [desafio-portfolio/assets/css/header.css](desafio-portfolio/assets/css/header.css)
  - [desafio-portfolio/assets/css/acordeon.css](desafio-portfolio/assets/css/acordeon.css)
  - [desafio-portfolio/assets/css/languages.css](desafio-portfolio/assets/css/languages.css)
  - [desafio-portfolio/assets/css/portfolio.css](desafio-portfolio/assets/css/portfolio.css)
  - [desafio-portfolio/assets/css/skills.css](desafio-portfolio/assets/css/skills.css)
  - [desafio-portfolio/assets/css/experience.css](desafio-portfolio/assets/css/experience.css)
  - [desafio-portfolio/assets/css/footer.css](desafio-portfolio/assets/css/footer.css)

## Arquivos principais
- Página principal: [desafio-portfolio/index.html](desafio-portfolio/index.html)
- Script de carregamento e renderização: [desafio-portfolio/assets/js/main.js](desafio-portfolio/assets/js/main.js)
- API local (fetch): [desafio-portfolio/assets/js/api.js](desafio-portfolio/assets/js/api.js)
- Comportamento do acordeon: [desafio-portfolio/assets/js/acordeon.js](desafio-portfolio/assets/js/acordeon.js)
- Dados de exemplo: [desafio-portfolio/data/profile.json](desafio-portfolio/data/profile.json)

## Como executar
1. Abra a pasta do projeto: `desafio-portfolio/`
2. Sirva os arquivos (recomendado) ou abra `index.html` diretamente.
   - Exemplo com Python:
     ```sh
     python -m http.server 8000
     ```
3. Acesse: `http://localhost:8000/desafio-portfolio/` (ou abra [desafio-portfolio/index.html](desafio-portfolio/index.html) no navegador).

## Observações
- Os ícones e imagens referenciados no JSON são carregados diretamente das URLs definidas em [desafio-portfolio/data/profile.json](desafio-portfolio/data/profile.json).
- Para ajustar textos ou dados, edite [desafio-portfolio/data/profile.json](desafio-portfolio/data/profile.json).
- Para mudar o comportamento de carregamento, veja a sequência de chamadas em [`fetchProfileData`](desafio-portfolio/assets/js/api.js) -> funções de atualização em [`main.js`](desafio-portfolio/assets/js/main.js).

---
Desenvolvido para o desafio: [desafio-portfolio](desafio-portfolio) da Formação JavaScript Developer - Projetos DIO