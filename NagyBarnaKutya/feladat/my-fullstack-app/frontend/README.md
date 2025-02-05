# Frontend Documentation

This is the frontend part of the My Fullstack App project, built using Angular. The frontend interacts with the backend to post and retrieve data from a MySQL/MariaDB database.

## Project Structure

- `src/`
  - `app/`
    - `components/`
      - `post-data/`
        - `post-data.component.ts`: Component for submitting data to the backend.
        - `post-data.component.html`: HTML template for the PostDataComponent.
      - `get-data/`
        - `get-data.component.ts`: Component for retrieving data from the backend.
        - `get-data.component.html`: HTML template for the GetDataComponent.
    - `app.component.ts`: Main component of the application.
    - `app.module.ts`: Main module of the application.
  - `assets/`: Folder for static assets.
  - `environments/`: Folder for environment-specific configurations.
  - `index.html`: Main HTML file for the application.
  - `main.ts`: Entry point for the Angular application.
  - `styles.css`: Global styles for the application.

## Getting Started

1. **Install Dependencies**: Navigate to the `frontend` directory and run:
   ```
   npm install
   ```

2. **Run the Application**: Start the development server with:
   ```
   npm start
   ```

3. **Access the Application**: Open your browser and go to `http://localhost:4200` to view the application.

## Components

### Post Data Component

- **Functionality**: Allows users to submit data (ID, number, and string) to the backend.
- **Usage**: The form in `post-data.component.html` captures user input and sends it to the backend when submitted.

### Get Data Component

- **Functionality**: Retrieves and displays data from the backend.
- **Usage**: The component fetches data when initialized and displays it in `get-data.component.html`.

## API Integration

The frontend communicates with the backend API to perform the following operations:

- **POST**: Submit data to the backend using the PostDataComponent.
- **GET**: Retrieve data from the backend using the GetDataComponent.

Ensure that the backend server is running to successfully interact with the API.