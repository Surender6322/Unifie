Run command npm i
﻿To test the API, you can use tools like Postman to make requests to your endpoints:

Create a main category:


url -X POST http://localhost:3000/categories -H "Content-Type: application/json" -d '{"name": "Electronics"}'
Create a sub-category:


url -X POST http://localhost:3000/categories -H "Content-Type: application/json" -d '{"name": "Mobiles", "parentId": 1}'
Get all categories:


url http://localhost:3000/categories
Get a single category by ID:


url http://localhost:3000/categories/"id_of_any"
