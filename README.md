# MERN APPLICATION E-COMMERCE SHOP

# Steps

1. Install tools (eslint, prettier, es7 react, redux..)
2. Create React app.
3. Create git repository.

4. List of products

   1. create products array
   2. add products images
   3. render products
   4. style products

5. Add routes

   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen

6. Create Node.js server

   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. install express
   5. create server.js
   6. add start command as node backend/server.js
   7. create route for / return backend is ready
   8. move products.js from frontend to backend
   9. create route for /api products
   10. return products
   11. run npm start

7. Fetch products from backend

   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook

8. Manage state by reducer hook

   1. define reducer
   2. update fetch data
   3. get state from use reducer
   4. setting the "loading..." while loading when network is slow.

9. Add bootstrap UI framework

   1. npm i react-bootstrap bootstrap
   2. update App.js

10. Create product and rating component

    1. create rating and product component
    2. use raring component in product component

11. Create product details screen

    1. fetch product from backend
    2. create 3 columns for image, info and action

12. Create Loading and Message component

    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to delete getError function

13. Implement add to cart

    1. create react conext
    2. define reducer
    3. create store prowider
    4. implement add to cart button click handler

14. create cart screen
    1. create 2 columns
    2. display items list
    3. create action column

<!-- !!cart screen doesnt work properly : -->

<!-- Warning: Each child in a list should have a unique "key" prop. Check the render method of `CartScreen`
 SHOWS ONLY LAST ITEM FROM CART LIST NOT ALL OF THEM WHEN YOU BUY DIFFERENT ITEMS. unique key is defined in line 35 isnt it? So i have no idea how to fix this. i guess code is ok, HELP NEEDED. CANT FIGURE IT OUT ON MY OWN.

What i tried:

      1.  change the version of react-bootstrap, router-dom etc.. didnt help
      2.  rewrite the whole <ListGroup> section. didnt help
      3.  checked the WHOLE code for typos. Probably no typos, but who knows. -->

15. Complete cart screen

    1. click handler for remove item
    2. click handler for remove item
    3. click handler for checkout

16. Create signing in screen

    1. create sign in form
    2. add email and password
    3. add sign in button

17. connect to mongodb database

    1. create atlas mongodb database
    2. create local mongodb database
    3. npm install mongoogse
    4. connect to mongodb databse

18. seed sample data
    1. create product model
    2. create user model
    3. create seed route
    4. use route in server.js
    5. seed sample product

<!-- IMPORTANT to run locally mongodb you have to open cmd , go to mongodb direcory find bin directory and run mongod.
i wrote script in package.json "start-mongo": "cd/ d/ **mongodb path**mongo.exe" then run compass and then it works. -->
