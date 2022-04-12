
<h1 align="center">
   <img alt="sigma" src="github/logo_2.svg" width="220px" />
</h1>

<div align="center">
  <h1>Buenapizza - Order the best pizza on town </h1>
</div>

<p align="center" >
  <a href="#about-the-project"> About </a> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
  <a href="#how-some-feature-works">How some feature works</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#app-features-so-far">Gifs</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies"> Technologies </a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

<p align="center">
  <a href="https://github.com/eulazzo" target="_blank">
    <img src="https://img.shields.io/static/v1?label=author&message=eulazzo&color=222&labelColor=d1411e" alt="Github"> 
  </a>
    <img src="https://img.shields.io/github/stars/eulazzo/buenapizza?color=222&labelColor=d1411e" alt="Stars">
  <img src="https://img.shields.io/github/last-commit/eulazzo/buenapizza?color=222&labelColor=d1411e" alt="Commits">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=222&labelColor=d1411e" alt="License">
</p>

![BUENAPIZZA INTRO GIF](github/introGIF.gif)

### Topics

* [About the project](#about-the-project)
   * [Pizza Ordering Website ](#pizza-ordering-website)
   * [Features](#features)
* [How some feature works](#how-some-feature-works)
   * [About Nextjs, Prop Drilling and Redux Toolkit](#about-nextjs-prop-drilling-and-redux-toolkit)
   * [Why Paypal? And Cash on delivery thing](why-paypal-and-cash-on-delivery-thing) 
   * [PayPal Setup](#paypal-setup) 
* [App features so far (GIFS)](#app-features-so-far) 
   * [Payment with sandbox PayPal account](#payment-with-sandbox-paypal-account)
   * [Cash on delivery (COD) payment method](#cash-on-delivery-cod-payment-method)
   * [Add a new pizza on catalog](#add-a-new-pizza-on-catalog)
   * [ Admin Dashboard](#admin-dashboard)
* [Getting Started](#getting-started)
* [Technologies](#technologies)
* [Licence](#licence)


# About the project

### Pizza Ordering Website 
<p>For truly autentic pizza restaurant, there is no better place to visit than the Buenna Pizza.</br>
Local ingredients are used to craft pizzas that are bursting with flavours you truly won’t find anywhere else.
<p>
<p>Developed with <code>NextJS</code>,<code>Axios</code>, <code>Mongoose</code>, and <code>Redux ToolKit</code></p> 

#### Features:
- [X] Login on the Admin Painel
- [X] Add a new pizza
- [X] Payment using paypal services and <code>Cash On Delivered</code> payment method
- [X] Delete pizza from catalog on the Admin Dashboard
- [X] See and change the status order: <code>preparing</code> to <code>on the way</code> to <code>delivered</code>


# PIZZA ORDERING WEBSITE 🍕 🍕 🍕


## DOCUMENTATION

### First Steps

* Clone this repo into you own folder with `git@github.com:eulazzo/buenapizza.git`
* run `npm install` to install all dependencies;
* Create a `.env` file and fill in the following keys:
   ```
   MONGO_URL = 
   ADMIN_USERNAME = 
   ADMIN_PASSWORD = 
   TOKEN =  
   ```
* run `npm run start` to start up the project.

## Endpoints

* ### CreateProduct
  * Method: POST
  * Path: `/products`
  * Input:  
    ```
    {
      "title":"Calabresa Divina III",
      "img":"/image/Featured1.png",
      "desc":"Lorem ipsulum",
      "prices":[20,10,30],
      "extraOptions":[
         {
            "text":"Garlic Sauce",
           "price":40
         },
         {
            "text":"Divine Sauce",
           "price":40
         }
       ]
     }
    ```
   * Ouput:
     ```
     {
         "title": "Calabresa Divina III",
         "desc": "Lorem ipsulum",
         "img": "/image/Featured1.png",
         "prices": [
            20,
            10,
            30
         ],
         "extraOptions": [
            {
               "text": "Garlic Sauce",
               "price": "40",
               "_id": "61f993b1802367ad2b6fea1d"
            },
            {
               "text": "Divine Sauce",
               "price": "40",
               "_id": "61f993b1802367ad2b6fea1e"
            }
         ],
         "_id": "61f993b1802367ad2b6fea1c",
         "createdAt": "2022-02-01T20:10:25.541Z",
         "updatedAt": "2022-02-01T20:10:25.541Z",
         "__v": 0
      }
     ```

* ### getProduct
  * Method: GET
  * Path: `/products`
  * Ouput: 
    ```
       [
         {
            "_id": "61f87ea142434e0cfa25ff62",
            "title": "Darlicone",
            "desc": "Lorem ipsulum",
            "img": "/img/pizza.png",
            "prices": [
               12,
               13,
               60
            ],
            "extrasOptions": [],
            "createdAt": "2022-02-01T00:28:17.181Z",
            "updatedAt": "2022-02-01T00:28:17.181Z",
            "__v": 0
         },
         {
            "_id": "61f95285bbc7ff6da7369094",
            "title": "Calabresa",
            "desc": "Lorem ipsulum",
            "img": "/img/pizza.png",
            "prices": [
               20,
               10,
               30
            ],
            "extrasOptions": [],
            "createdAt": "2022-02-01T15:32:21.526Z",
            "updatedAt": "2022-02-01T15:32:21.526Z",
            "__v": 0
         }
        ]
    ```



* ### DeleteProduct
  * Method: DELETE
  * Path: `/products/:id`
  * Ouput: (Will return `Not allowed in case you not authorized to make this actin`)
    ```
      "The product has been deleted"
    ```
 

## How some feature works

### About Nextjs, Prop Drilling and Redux Toolkit
<p>
   The cool thing about Nextjs is because it's a  full-stack framework(yes! It handles both the frontend and backend of your application) and there are a variety of rendering methods - even mixing and matching those methods as needed.</br></br>
   About the project, on the pizza details page,a customer can choose the pizza size, add additional ingredients and the pizza quantity.So...when <code>add to cart</code> button is clicked the navbar cart item is updated, to handle that i could choose some ways to do so, like <code>Prop Drilling</code> as we know, not a good idea, second one was <code>ContextAPI</code> and finally <code>State Management Libraries</code> which was used, to be more precise: Redux Toolkit.</br></br>
</p>

### Why Paypal? And Cash on delivery thing
<p>
   Because <code>STRIPE</code> i already have a project with (an ecommerce,that you can check it out on my Github pinned projects) for payments, <code>PAYPAL</code> service was chosen and <code>Cash on delivery</code> option was added as well. Cash on delivery(COD) is a type of transaction where the recipient pays for a good at the time of delivery rather than using credit.
</p>
   
#### PayPal Setup
<p>
  To configure paypal, I installed <code>yarn add @paypal/react-paypal-js</code>, for more info check it out this <a href="https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalbuttons--default">Link</a> .Basically we give our options, like <code>Amount</code>, <code>currency</code> and <code>button style</code>, after that a button wrapper is created, and inside  is used ContextApi that take the options and create a paypal button and this button was used on the  Cart Component.
  </br></br>
  First <code>PayPalScriptProvider</code>,then the <code>ButtonWrapper</code>, and when the button is clicked we give paypal or credit card info and the librarie handle everything, if everything is okay, it's going to return the <code>OnAprove</code> function and inside of if, the nextjs code is is written. 
  The next step was to create a paypal developer account on the following site: <a href="https://developer.paypal.com/home">Paypal developer account</a> , then create a sandbox account. The paypal sandbox account is basically two accounts that we are given credit for making fake payments, one is personal(To buy something) and other business(To receive the "money"). And finally on the <code>My Apps & Credentials</code> was necessary to create a new application and i copied the id provided and in options:client-Id on the  <code>PaypalScriptProvider</code> button the id key was pasted, With all that set up, everything was ready and the payment method was working.
 </p>


##  App features so far:

### Payment with sandbox PayPal account

![buennapizza PAYPAL](github/paypalGIF.gif)

### Cash on delivery (COD) payment method

![buennapizza COD](github/cashOnDeliveredGIF.gif)

### Add a new pizza on catalog

![buennapizza newPizza](github/addProductGIF.gif)

### Admin Dashboard

![buennapizza admin dashboard](github/adminGIF.gif)

 ## Getting started

1. Clone this repo using `git@github.com:eulazzo/buenapizza.git`
2. Move yourself to the appropriate directory: `cd buenapizza`<br />
3. Run `npm install` to install dependencies<br />

### Getting started with the backend server

1. Create a `.env` file and add the MongoDB url connection in MONGO_URL field
3. if you dont have yarn installed, type <code> npm install --global yarn </code> on terminal to install it or just use npm instead <br>
4. Run `yarn run dev` to start the application </br>


## Technologies

<table>
   
  <thead>
    <th>Back-end</th>
    <th>Front-end</th>
  </thead>
   
  <tbody>
    <tr>
      <td>Node.js</td>
      <td>NextJS</td>
    </tr>
    <tr>
      <td></td>
      <td>CSS</td>
    </tr>
    <tr>
      <td>Axios</td>
      <td>Axios</td>
    </tr>
    <tr>
      <td></td>
      <td>React Hooks</td>
    </tr>
  </tbody>
  
</table>

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.


 

 
 
