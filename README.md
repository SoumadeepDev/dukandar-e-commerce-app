## Dukandar-e-commerce-app
Welcome to Dukandar App, an e-commerce application built with React,React-router-dom, react-dom,Context API,axios, and for styling I used some inline css, Tailwind CSS, and Daisy UI for better UI looks.
*Live Link of the App : https://main--dukandar-store.netlify.app/*

# Project Overview
This project aims to create frontend & UI of a fully functional e-commerce platform with features like product browsing, cart management, checkout process, user login, user logout,sripe payment and more.
# Getting Started
To get started with the project, follow these steps:

1. *Clone the repository from GitHub*:

git clone https://github.com/SoumadeepDev/dukandar-e-commerce-app.git

2. *Install dependencies*:

cd dukandar-e-commerce-app
npm install


3.*Start the development server*:

npm start

4. *Open your browser and navigate to http://localhost:3000 to view the application*.

# Project Structure
The project is structured as follows:

_src/_ : Contains the source code of the application.
_components/_: Reusable UI components.
_context/_: Contains users,cart,filter,products context files.
_pages/_: Different pages of the application.
_reducers/_: All the reducer function.
_utils/_: Utility functions and helpers.
_App.js_: Main component rendering the application.
_index.js_: Entry point of the application.
_public/_: Public assets,icons and index.html file.
# Pages and Features
index.js : Managed all pages into one page to make import easier to handle.
HomePage: Layout for the home page.
About: Information about the store.
Cart: Manage items in the cart.
Error: Error handling page.
Checkout: Process the order and payment with stripe.
AuthWrapper : Loading screen while connecting with *auto0* service.
PrivateRoute: track-back page after login connected with *auth0* api service.
ProductsPage: Browse and search products.
SingleProductPage: Details of a single product.

## API Documentation
For API Documentation, refer to this Link [API Link](https://strapi-store-server.onrender.com/api/products)

# Contact
For any inquiries or feedback, feel free to reach out:

_GitHub_: [SoumadeepDev](https://github.com/SoumadeepDev/)
_Email_: soumadeepchatterjee16@gmail.com

Happy coding!

