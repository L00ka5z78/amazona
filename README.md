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

<!-- IMPORTANT to run locally mongodb you have to open cmd , go to mongodb direcory find bin directory and run mongod. Then go to backend directory and run script. npm run start-mongo.
i wrote script in package.json "start-mongo": "cd/ d/ **mongodb path**mongo.exe" then run compass and then it works. -->

19. seed smple users

    1. create user model
    2. seed sample users
    3. create user routes

20. create sign in backend api

    1. create sign in api
    2. npm install jsonwebtoken
       3.define generate token

21. complete sign in

    1. handle submit action
    2. save token in store and local storage
    3. show user name in header

22. create shipping screen

    1. create form input
    2. handle save shipping adress
    3. add checkout wizard bar

23. create sign up screen

    1. create input forms
    2. handle submit
    3. create backend api

24. Implement select payment method screen

    1. create inputs forms
    2. handle sumit

25. create place order screen

    1. show cart items payment and adress
    2. show place order action
    3. create order api

26. implement place order action

    1. handle place order action
    2. create palce order api

27. create order screen

    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 columns

28. Pay order by paypal

    1. generate paypal client id
    2. create api to return client id
    3. install react paypal js
    4. use paypalScriptProvider in order screen
    5. use paypalScriptReducer in order screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. imlement onAproove payment function
    9. create pay order api in backend

29. display order history

    1. create order screen
    2. create order history api
    3. use api in the frontend

30. Create profile screen

    1. get user info from content
    2. show user information
    3. create user update ai
    4. update user info

31. PUBLISH TO HEROKU

    1. create and config node project
    2. server build folder in frontend folder
    3. create heroku account
    4. connect it to github
    5. create mongodb atlas database
    6. set database connection in heroku env variables // 5.35 connected to db, but server error
    7. commit and push

    <!-- problem with deploying to heroku. cant figure it out which database i can use to make it works.
    this i use now looks that is somehow ok, but we will see what will be in the future work... -->

32. add sidebar and search box

    1. add sidebar
    2. add search box

<!-- lesson33 stucked. not deployed. cant go from shipping to the next section. it works only when i refresh the page. strange
the script in root package.json would be:

cd backend && npm install && cd .. && cd frontend && npm install &&npm run build thats works for me instead of this cd backend && npm install && cd ../frontend && npm install &&npm run build.  -->
