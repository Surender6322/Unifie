Run command npm i
﻿To test the API, you can use tools like Postman or curl to make requests to your endpoints:

Create a main category:


url -X POST http://localhost:3000/categories -H "Content-Type: application/json" -d '{"name": "Electronics"}'
Create a sub-category:


url -X POST http://localhost:3000/categories -H "Content-Type: application/json" -d '{"name": "Mobiles", "parentId": 1}'
Get all categories:


url http://localhost:3000/categories
Get a single category by ID:


url http://localhost:3000/categories/1⌢唠楮楦≥ഠ�
