
<h1 align="center">
   <img alt="sigma" src="github/logo_2.svg" width="220px" />
</h1>

<div align="center">
  <h1>Buennapizza - Order the best pizza on town </h1>
</div>

<p align="center" >
  <a href="#-sobre-a-aplica%C3%A7%C3%A3o"> About </a> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Techs</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-conteúdos-aplicados"> Content</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-suporte"> Suport </a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licen%C3%A7a">License</a>
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

# Buenapizza

<p>Pizza Ordering Website<br>
<p>Developed with <code>NextJS</code>,<code>Axios</code>,<code>Mongoose</code>, and <code>Redux ToolKit</code></p> 

# About the project

Functionalities:
- Login on the Admin Painel
- Add a new pizza
- Payment using paypal services or `Cash On Delivered` payment method
- Delete pizza from catalog on the Admin Dashboard
- See and change the status order: `preparing` to `on the way` to `delivered`

</br>

## About the project

<p>
   The cool thing about Nextjs is because it's a  full-stack framework(yes! It handles both the frontend and backend of your application) and there are a variety of rendering methods - even mixing and matching those methods as needed.</br></br>
   About the project, on the pizza details page,a customer can choose the pizza size, add additional ingredients and the pizza quantity.So...when <code>add to cart</code> button is clicked the navbar cart item is updated, to handle that i could choose some ways to do so, like <code>Prop Drilling</code> as we know, not a good idea, second one was <code>ContextAPI</code> and finally <code>State Management Libraries</code> which was used, to be more precise: Redux Toolkit.</br></br>
   Because <code>STRIPE</code> i already have a project with( Ecommerce,that u can check out on my Github pinned projects), for payments <code>PAYPAL</code> service was chosen and  the <code>Cash on delivery</code> option was added as well. Cash on delivery(COD) is a type of transaction where the recipient pays for a good at the time of delivery rather than using credit.</br></br>
  To configure paypal, I installed <code>yarn add @paypal/react-paypal-js</code>, for more info check out this link https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalbuttons--default, basically we are gonna giver our options, like <code>Amount</code>, <code>currency</code> and <code>button style</code>, after that a button wrapper is created, and inside use ContextApi taking the options and create a paypal button and this button was used on the  Cart Component.
  </br></br>
  First `PayPalScriptProvider`, the `ButtonWrapper` and when the button is clicked we give paypal or credit card info and the librarie handle everything, if everything is okay, it's going to return the <code>OnAprove</code> function and inside of if, the nextjs code is is written. 
  The next step was create a paypal developer account on the following site: https://developer.paypal.com/home, then create a sandbox account. The paypal sandbox account is basically two accounts that we are given credit for making fake payments, one is personal(To buy something) and other business(To receive the "money"). And finally on the `My Apps & Credentials` was necessary to create a new application and with the id provided in options:client-Id on the  <code>PaypalScriptProvider</code> button was pasted, With all that set up, everything was ready and the payment method was working.
   
   
</p>

## :camera: See the app's features:

<h2>Payment with sandbox PayPal account</h2>

![buennapizza PAYPAL](github/paypalGIF.gif)

<h2>Cash on delivery (COD) payment method</h2>

![buennapizza COD](github/cashOnDeliveredGIF.gif)

<h2>Add a new pizza on catalog</h2>

![buennapizza newPizza](github/addProductGIF.gif)

<h2>Admin Dashboard</h2>

![buennapizza admin dashboard](github/adminGIF.gif)

 ## Getting started

1. Clone this repo using `git@github.com:eulazzo/buenapizza.git`
2. Move yourself to the appropriate directory: `cd buenapizza`<br />
3. Run `npm install` to install dependencies<br />

### Getting started with the backend server

1. Create a `.env` file and add the MongoDB url connection in MONGO_URL field
3. if you dont have yarn installed, type <code> npm install --global yarn </code> on terminal to install it or just use npm instead <br>
4. Run `yarn run dev` to start the application </br>

## :rocket: Technologies

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


 

 
 
