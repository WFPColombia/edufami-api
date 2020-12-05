# Edufami - Api

### Introduction

'Edufami - Api' is the API restfull app for all the apps of [Edufami](http://edufami.org).
Edufami is created by WFP - Colombia.

### Setup

1. Install [yarn](https://classic.yarnpkg.com/en/docs/install)
2. Follow all the steps in Loopback 3.x [Installation](https://loopback.io/doc/en/lb3/Installation) section.
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Install MySQL and create a new database
5. Open the file named `datasources.local.json` and update it with the information of your database (i.e)
   ```json
   {
     "mysqlDs": {
       "host": "localhost",
       "port": 3306,
       "url": "",
       "database": "edufami_local",
       "password": "myPassword",
       "name": "mysqlDs",
       "user": "myUser",
       "connector": "mysql"
     }
   }
   ```
6. Update database structure in the local environment:
   ```bash
   yarn run update-models
   ```
7. Create sample data
   ```bash
   yarn run create-sample-data
   ```

### Reference

- [Loopback.io](https://loopback.io/)

## License

[MIT](https://github.com/WFPColombia/edufami-api/blob/master/LICENSE)
