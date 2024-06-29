# Project Overview

> This is a React-based project that displays a list of products in a table format. The project includes a search bar that allows users to filter products by name, and a checkbox to show only products that are in stock.

## Components

**The project consists of the following components:**

``` App.js ``` : The main application component that renders the search bar and product table.
``` SearchBar.js ``` : A component that renders a search input field and a checkbox to show only stocked products.
``` ProductTable.js ``` : A component that renders a table displaying the list of products.
``` Element.js ``` : A component that represents a single product element (not used in the current implementation).
Functionality

**The application uses the useState hook to manage two state variables:**

``` showStockedOnly ``` : A boolean that determines whether to show only products that are in stock.
``` search ``` : A string that filters products by name.
The visibleProducts variable is calculated based on the showStockedOnly and search state variables. It filters the PRODUCT array to include only products that match the search criteria and are in stock if showStockedOnly is true.

_Getting Started_

> To run the project, navigate to the project directory and run npm start or yarn start. This will start the development server and open the application in your default web browser.

## Future Development

_This project provides a basic implementation of a product table with search and filtering functionality. Future development could include:_

Adding more features to the search bar, such as filtering by category or price.
Implementing pagination for large datasets.
Enhancing the product table to display more information about each product.
Adding user authentication and authorization to restrict access to certain products or features.
