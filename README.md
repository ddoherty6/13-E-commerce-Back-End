# 13-E-commerce-Back-End

This is the back end of an online store application. It has get, get-by-ID, post, put, and delete endpoints.

### User Story

~~~~
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
~~~~

### Acceptance Criteria

~~~~
GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
~~~~




## Installation

After you clone the repo, create a .env file at the root directory with the following format:
~~~~
DB_NAME='ecommerce_db'
DB_USER='username'
DB_PW='password'
~~~~
Where `username` and `password` are your MySQL username and password respectively. 

Then enter a MySQL shell at the root directory and enter the following command:
~~~~
source db/schema.sql
~~~~

Then in a terminal at the root directory run:
~~~~
npm i
npm run seed
npm start
~~~~

At this point the server will be up and running at localhost:3001

## Endpoints

### Product

GET all Products
~~~~
/api/products
~~~~

GET one Product
~~~~
/api/products/:id
~~~~
POST new Product
~~~~
/api/products

Body:

{
	"product_name": "Basketball",
	"price": 200.00,
	"stock": 3,
	"tagIds": [1, 2, 3, 4]
}
~~~~
PUT update Product
~~~~
/api/products

Body:

{
	"category_name": "Outer Wear"
}
~~~~
DELETE Product
~~~~
/api/products/:id
~~~~

### Category

GET all Categories
~~~~
api/categories
~~~~
GET one Category
~~~~
api/categories/:id
~~~~
POST new Category
~~~~
api/categories

Body:

{
	"category_name": "Parkas"
}
~~~~
PUT update Category
~~~~
api/categories/:id
{
	"category_name": "Outer Wear"
}
~~~~
DELETE Category
~~~~
api/categories/:id
~~~~

### Tag

GET all Tags
~~~~
api/tags
~~~~

GET one Tag
~~~~
api/tags/:id
~~~~

POST new Tag
~~~~
api/tags

Body:

{
	"tag_name": "Winter Clothing"
}
~~~~

PUT update Tag
~~~~
api/tags/:id

Body:

{
	"tag_name": "Winter Clothing"
}
~~~~

DELETE Tag
~~~~
api/tags/:id
~~~~

Please consult the following demo videos (it is one demo split up to get around Screencastify's five minute limit) for overview of installation and backend functionality.

[Demo video 1](https://watch.screencastify.com/v/iQZNqbIVwkbeUvPCM9kH)

[Demo video 2](https://watch.screencastify.com/v/tb1bBzY57aUEVUBRatkl)