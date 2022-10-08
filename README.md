# MERN APPLICATION E-COMMERCE SHOP

# Steps

a. Install tools (eslint, prettier, es7 react, redux..)
b. Create React app.
c. Create git repository.

4. List of products

   a. create products array
   b. add products images
   c. render products
   d. style products

5. Add routes
   a. npm i react-router-dom
   b. create route for home screen
   c. create router for product screen

6. Create Node.js server
   a. run npm init in root folder
   b. Update package.json set type: module
   c. Add .js to imports
   d. install express
   e. create server.js
   f. add start command as node backend/server.js
   g. create route for / return backend is ready
   h. move products.js from frontend to backend
   i. create route for /api products
   j. return products
   k. run npm start

7. Fetch products from backend
   a. set proxy in package.json
   b. npm install axios
   c. use state hook
   d. use effect hook
   e. use reducer hook

8. Manage state by reducer hook
   a. define reducer
   b. update fetch data
   c. get state from use reducer
   d. setting the "loading..." while loading when network is slow.

9. Add bootstrap UI framework
   a. npm i react-bootstrap bootstrap
   b. update App.js

10. Create product and rating component
    a. create rating and product component
    b. use raring component in product component

11. Create product details screen
    a. fetch product from backend
    b. create 3 columns for image, info and action

12. Create Loading and Message component
    a. create loading component
    b. use spinner component
    c. create message component
    d. create utils.js to delete getError function

13. Implement add to cart
    a. create react conext
    b. define reducer
    c. create store prowider
    d. implement add to cart button click handler

14. create cart screen
    a. create 2 columns
    b. display items list
    c. create action column

<!-- !!cart screen doesnt work properly : -->

<!-- Warning: Each child in a list should have a unique "key" prop. Check the render method of `CartScreen`
 SHOWS ONLY LAST ITEM FROM CART LIST NOT ALL OF THEM WHEN YOU BUY DIFFERENT ITEMS. unique key is defined in line 35 isnt it? So i have no idea how to fix this. i guess code is ok, HELP NEEDED. CANT FIGURE IT OUT ON MY OWN.

What i tried:

      1.  change the version of react-bootstrap, router-dom etc.. didnt help
      2.  rewrite the whole <ListGroup> section. didnt help
      3.  checked the WHOLE code for typos. Probably no typos, but who knows. -->

15. Complete cart screen
    a. click handler for remove item
    b. click handler for remove item
    c. click handler for checkout

16. Create signing in screen
    a. create sign in form
    b. add email and password
    c. add sign in button

17. connect to mongodb database
    a. create atlas mongodb database
    b. create local mongodb database
    c. npm install mongoogse
    d. connect to mongodb databse

18. seed sample data
    a. create product model
    b. create user model
    c. create seed route
    d. use route in server.js
    e. seed sample product

<!-- IMPORTANT to run locally mongodb you have to open cmd , go to mongodb direcory find bin directory and run mongod.
i wrote script in package.json "start-mongo": "cd/ d/ **mongodb path**mongo.exe" then run compass and then it works. -->
