# Original.io: Teste do Processo Seletivo
### Por Leonardo Ferraz (@ldlferraz)
###### Características do projeto e comentários:
  - **Framework:** Vue.js;
    - A escolha por Vue foi baseada em três fatores: 
      1. Facilidade em produzir uma SPA (opção justificada mais à frente); 
      2. Auxílio na construção de componentes baseados em dados, reforçando a modularidade do front end;
      3. Facilidade de plugin de ferramentas de auxílio (como o Bootstrap e o Vue Router);
  - **Renderer:** EJS/Vue Template;
    - Únicas ferramentas de templates que uso regularmente.
    - Conheço Pug e Mustache e já pesquisei por alto outras alternativas, mas nenhuma me fez querer sair da zona de conforto do EJS.
  - **Bundler:** Webpack;
    - Assim como EJS, minha opção por usar o Webpack é puramente baseada na inexperiência com as alternativas. Já trabalhei com Browserify - que não seria uma opção adequada para esse projeto - e já estudei Parcel.
    - As principais features que aproveito aqui são: minificação do código, bundling dos scripts e, talvez mais presente no projeto, bundling do CSS.

  - **Transpiler:** Babel;
    - Uso o loader do Babel através do Webpack para transpilar o código. Desconheço alternativas ao Babel.

  - **Linter:** _Nenhum_;
    - Em geral, uso o ESLint. Porém, como freelancer, uso diferentes configurações do linter para clientes diferentes a fim de me aproximar do estilo de código dos times in-house deles. Para esse projeto, preferi deixá-los avaliar meu estilo pessoal de escrita de código.

  - **Módulo de autenticação:** Passport.js;
    - Em meus projetos pessoais, gosto de usar o Passport.js para lidar com meu sistema de autenticação: é rápido de configurar, flexível e fácil de inserir ou retirar do projeto.

  - **Banco de Dados:** Firebase;
    - Optei pelo uso do Firebase para perder o menor tempo possível com setup do mesmo, já que o objetivo do projeto é testar o front-end, não o restante.

  - **Arquitetura do nível de aplicação:** SPA
    - Apesar de e-commerces se preocuparem muito com SEO, optei por fazer uma SPA. 
    - Com mais tempo disponível, seria possível torná-la SEO-friendly com um pre-renderer para páginas menos dinâmicas, como a lista de produtos não-personalizada.

  - **Pré-processador CSS:** SCSS
    - SCSS é minha primeira experiência com pré-processadores CSS e só trabalho com ele há duas semanas.

  - **Demais módulos notáveis:**
    - Bootstrap para auxílio na UI;
    - Vue Router para facilitar a construção da SPA;
    - Axios para chamadas à API;
    
  - **Parametrização do Front-end:**
    - Todos os parâmetros encontram-se em .env ou src>assets>vars.scss
    - Brandlogo (svg) e referências ao nome da loja/cliente (string) em .env;
    - Link de redes sociais e certificados (se não houver nenhum link parametrizado, nada renderiza nessa parte do footer) em .env;
    - Cores da aplicação em vars.scss;
    - Fontes em vars.scss;
    - Root da API;
    - Certificados no footer em .env (uma forma mais inteligente de fazer isso seria apenas laçar um folder 'certs'
    no template do componente, mas preferi manter a parametrização consistente com a dos demais elementos para que TUDO
    que foi parametrizado na aplicação esteja visível no .env e no vars.scss);
    
