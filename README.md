## Se crea database y tablas en Postgres 
DB: alePruebas | Tablas relacionadas por ID de passenger y country en viajes de avión.|
![Captura de Pantalla 2022-11-25 a la(s) 02 23 04](https://user-images.githubusercontent.com/109628928/203906896-11965d21-f847-4731-ab00-b9dbab7d19a6.png)
### Relación:
![Captura de Pantalla 2022-11-25 a la(s) 02 26 04](https://user-images.githubusercontent.com/109628928/203907297-547068cc-468f-474e-b65e-b0dee6b5f04d.png)

### Se inicia proyecto en Express.
1. [npm i express](https://expressjs.com/es/starter/installing.html)
2. [Se establece conexiónn con la base de datos]
3. [Se instalan dependencias. sequelize - cors pg - nodemon - dotenv]
4. [Corre en el puerto 3001 y se trabaja CRUD en Postman]
5. [Se instalan para autentificaciones: jsonwebtoken - bcrypt]
6. [Migraciones sequelize-cli]
7. [Test se instala mocha - chai - supertest y se crea mocha.opts que recibe los payloads de setup.js (before) y teardown.js para limpiar la db]

### Config DB:
![Captura de Pantalla 2022-11-25 a la(s) 02 46 58](https://user-images.githubusercontent.com/109628928/203909620-c08ee14c-5cc7-4ff8-b9d7-ce722bc83a5b.png)

### Tabla passengers get all en localhots:3001, Postman: 
![panta_all_passengers](https://user-images.githubusercontent.com/109628928/203909772-4eba8c7a-8039-4856-a67b-9cab9d9648ff.png)

### passenger by id:
![panta_passenger__id](https://user-images.githubusercontent.com/109628928/203910037-aa1d546d-7ac4-4410-945c-949b91fe5f1d.png)
