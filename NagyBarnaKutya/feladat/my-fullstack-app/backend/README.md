# Backend Documentation

## Overview
This backend application is built using Node.js, Express, and Sequelize to manage a simple data storage system. It allows for the storage and retrieval of data consisting of an ID, a number, and a string.

## Technologies Used
- Node.js
- Express
- Sequelize
- MySQL/MariaDB
- CORS

## Project Structure
```
backend
├── src
│   ├── controllers
│   │   └── dataController.js
│   ├── models
│   │   └── dataModel.js
│   ├── routes
│   │   └── dataRoutes.js
│   ├── app.js
│   └── config
│       └── database.js
├── package.json
├── .sequelizerc
└── README.md
```

## Setup Instructions

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd my-fullstack-app/backend
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure the database**
   Update the `backend/src/config/database.js` file with your MySQL/MariaDB credentials.

4. **Run the application**
   ```
   npm start
   ```

## API Endpoints

### POST /data
- **Description**: Saves data to the database.
- **Request Body**:
  ```json
  {
    "number": <integer>,
    "text": "<string>"
  }
  ```

### GET /data
- **Description**: Retrieves all data from the database.
- **Response**:
  ```json
  [
    {
      "id": <integer>,
      "number": <integer>,
      "text": "<string>"
    }
  ]
  ```

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.