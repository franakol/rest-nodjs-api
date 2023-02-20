# rest-nodjs-api
## How to run the api

Clone the project Repository
```
git clone https://github.com/franakol/rest-nodjs-api.git
```

Enter the project folder
``` 
$ cd https://github.com/franakol/rest-nodjs-api.git
```
Database setup install postgres driver and sequelize by runing the code blow
``` 
$ npm install sequelize pg
```
Run Migration
``` 
$ npx sequelize-cli db:migrate
```

Run the api
```
$ npm start
```
