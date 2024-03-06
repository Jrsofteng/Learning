#  🔗 A Simple E-commerce console app using javascript

# 🔗 overview

in this project, we built a simple e-commerce console app using javascript. This system allows the user or the customer to check for a list of available products , make choices by adding to cart, and viewing the total price of their selected items

# 🔗  feautures
- Display a list of available products with their names, ID's, prices, and their quantities as well.
- Add products to the shopping cart 🛒 with a specified quantity.
- view the contents of the shopping cart 🛒.
- view total price of selected items.

# 🔗 Usage

- Users can add products to the cart by entering the product ID and the quantity they want .
- Users to view the cart and complete a purchase , the user can also enter "checkout" as their preference .
- the system  will display the items in the cart and the otal price.

# 🔗 Functions
1. *displayproduct():*  This  function loops through the product array and displays the name, product ID, and price.
2. *addToCart(itemID, quantity):* 
a. This function adds a specified quantity of a product to the cart. It searches for the product with a given itemID in the product array.
b.If the product is found and the requested quantity is available, it adds the product to the cart array.
c.If the product is not found or the requested quantity is not available, approriate error message will be displayed.
3. *displayCart():* This function displays the items currently in the cart along with their deatails ( name , price and quantity available ).It calculates and displays the total price of all items in the cart.
4. *startShopping():* This function initiates the shopping process by displaying available products and prompting user for input. Users can add products to the cart by entering the product ID and quantity required. Typing "checkout" ends the shopping process and displays the products in the cart  🛒