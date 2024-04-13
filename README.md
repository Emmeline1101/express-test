# express-test
This repository is for practicing Express.js
## Setup STEPS
1. STEP1 
```shell
#1. create package.json
npm init -y

#2. install express library
npm i express

# 3. make pogramming easier by using dec nodemon dependency for restarting the server everytime when we make changes
npm i --save-dev nodemon
```
2. STEP2 modify package.json file by adding nodemon
```json
  "scripts": {
    "devStart": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

3. run 
```shell
npm run devStart
```