# Bookstore API

## API Endpoints

- **Add a New Book**:
  - `POST /api/books/addbook`
  - Request Body: { "title": "Book Title", "author": "Book Author", "summary": "Book Summary" }

- **View All Books**:
  - `GET /api/books`

- **View a Specific Book**:
  - `GET /api/books/:id`

- **Update a Book**:
  - `PUT /api/books/:id`
  - Request Body: { "title": "Updated Title", "author": "Updated Author", "summary": "Updated Summary" }

- **Delete a Book**:
  - `DELETE /api/books/:id`

## Local Setup

1. Clone the repo and navigate to the project folder.
2. Install dependencies with `npm install`.
3. Configure your MongoDB connection in `app.js`.
4. Start the server with `node app.js` or with npm start.

The API will be available at http://localhost:5000.

## Dependencies

- Express.js
- Mongoose
- Body-parser


## Deployment process

 # Bookstore API Deployment on Render

This README provides instructions for deploying the Bookstore API on Render. Render is a platform for deploying and managing web applications and services.

## Prerequisites

Before you start, make sure you have the following:

- A Render account (Sign up at https://render.com/)
- A working Node.js application for the Bookstore API
- A MongoDB database accessible from your Render service

## Deployment Steps

Follow these steps to deploy the Bookstore API on Render:

1. **Create a New Service on Render:**
   - Log in to your Render account.
   - Click "New" and select "Web Service."

2. **Configure the Service:**
   - Choose your deployment source (e.g., GitHub, GitLab, or Bitbucket).
   - Select the repository where your Node.js application is hosted.
   - Render will automatically detect your application settings.

3. **Environment Variables:**
   - Set up environment variables in the Render dashboard for sensitive information such as your MongoDB connection string. For example, you might set a variable called `MONGODB_URI` with the connection string.

4. **Build Command:**
   - In the "Build Command" field, enter: `npm install && npm start`

5. **Port Configuration:**
   - In the "Port" field, enter the port that your Node.js application is listening on (e.g., 5000).

6. **Database Configuration:**
   - Ensure that your MongoDB database is accessible to your Render service. Whitelist the IP address of your Render service in your MongoDB Atlas or server's firewall settings.

7. **Deploy the Service:**
   - Click "Create Service."

8. **Access Your API:**
   - Once your service is deployed, you can access your API using the provided URL (e.g., `https://your-service-name.onrender.com/api/books`).

## Additional Notes

- If you encounter any issues during deployment, check the deployment logs in the Render dashboard for error messages and troubleshoot accordingly.

- Ensure that you have proper error handling and security measures in place for your production deployment.