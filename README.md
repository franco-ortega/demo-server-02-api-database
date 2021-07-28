# demo-server-02-api-database

API dependency setup:
1. npm i express
2. npm i dotenv
3. npm install supertest --save-dev
4. npm install eslint --save-dev
5. ./node_modules/.bin/eslint --init

Files:
1. server.js
2. ./lib/app.js

Database and Testing dependency setup:
1. npm init -y
2. npm install --save-dev jest
3. npm install pg

4. heroku login
5. heroku create [appname]
6. git push heroku main
7. heroku addons:create heroku-postgresql:hobby-dev
