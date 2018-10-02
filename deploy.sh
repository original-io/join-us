#!/bin/bash
set -e # termina o script com um código diferente de 0 se alguma coisa falhar

# roda o script de build da nossa aplicação
npm run build

# pull requests e commits para outras branches diferentes da master
# não devem fazer o deploy, isso é opcional caso queira deletar as próximas 6 linhas
# fique a vontade
SOURCE_BRANCH="master"

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy."
    exit 0
fi

# entre na pasta onde está o build do seu projeto e inicie um novo repositório git
cd dist
git init

# dentro desse repositório nós pretendemos ser um novo usuário
git config user.name "Marco Carvalho"
git config user.email "marcolucio27@gmail.com"

# O primeiro e único commit do seu repositório terá
# todos os arquivos presentes e a mensagem do commit será "Deploy to GitHub Pages"
git add .
git commit -m "deploy to GitHub Pages"

# Forçando o push do master para a branch gh-pages (Toda história anterior da branch
# gh-pages será perdido, pois vamos substituí-lo.)  Redirecionamos qualquer saída para
# /dev/null para ocultar quaisquer dados de credenciais sensíveis que de outra forma possam ser expostos.
# tokens GH_TOKEN e GH_REF serão fornecidos como variáveis de ambiente Travis CI
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1