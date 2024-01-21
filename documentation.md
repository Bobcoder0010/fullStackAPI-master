1. Configuration
   1.1 Database Configuration (./config/dbConfig.js)
   This file contains configuration parameters for the MySQL database. It specifies the host, user, password, database name, and additional settings such as the dialect and connection pool parameters.

1.2 Sequelize Instance Setup (./models/index.js)
The index.js file in the models directory initializes a Sequelize instance and establishes a connection to the MySQL database using the configuration from dbConfig.js. It also checks the database connection status through the testDbConnection function and exports the Sequelize instance along with the Product model.

2. Models
   2.1 Product Model (./models/productModel.js)
   This module defines the Sequelize model for the "product" entity in the database. The model includes attributes such as title (string), price (integer), and description (text). It is then exported for use in other parts of the application.

3. Controllers
   3.1 Product Controller (./controllers/productController.js)
   The product controller handles various CRUD operations for products. Each function corresponds to a specific operation:

createProduct: Creates a new product based on the request payload.
getAllProducts: Retrieves all products, returning only specified attributes like title and price.
getProductById: Retrieves a single product by its ID.
updateProductById: Updates an existing product using its ID.
deleteProductById: Deletes an existing product by ID. 4. Routes
4.1 Product Routes (./routes/productRoutes.js)
This file defines Express routes for handling HTTP requests related to products. Each route is mapped to a specific controller function:

POST /create: Creates a new product.
GET /getAll: Retrieves all products.
GET /get/:id: Retrieves a single product by ID.
PATCH /updateProduct/:id: Updates an existing product by ID.
DELETE /delete/:id: Deletes an existing product by ID. 5. Server
5.1 Server Configuration (./server.js)
The server configuration file sets up the Express server, initializes middleware, and defines routes. Key components include:

Middleware setup for CORS, JSON parsing, and URL-encoded data.
Test API endpoint (GET /) for checking server status.
Importing the product routes from productRoutes.js.
Starting the server on a specified port (from environment variable PORT or default 8081).
