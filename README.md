clone the project on your local
Execute npm install on the same path as of your root directory of teh downloaded project
Create a .env file in the root directory and add the following environment variable
PORT=3000
Inside the src/config folder create a new file config.json and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

Once you've added your db config as listed above, go to the src folder from your terminal and execute npx sequelize db:create and then execute `npx db:migrate`.



## DB Design
   -Airplane
   - Flight
   -Airport
   -City

   -A flight belongs to an airplane but one airport can be used in multiple flight
   -A city has many airport but one airport belongs to city
   -One airport can have many flights, but a flight belongs to one Airport


   ##Tables

   # City -> id,name,created_at,updated_at
   # Airport -> id ,name,aderss, city-Id, created ,updated
    Relationship -> city has many airport and airpportt belong to a city i.e. 
    (one to many)

  # for generating Airport models
  
  ```
  -npx sequelize model:generate --name Airport --attributes 
    name:String,address:String,cityId:integer
  ```  

   

