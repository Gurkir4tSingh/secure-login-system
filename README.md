Secure Login System (Full Stack)
A complete secure login system built using:

Spring Boot + MySQL for the backend

React for the frontend

Password hashing using BCrypt

Login via email or username

REST APIs with CORS support

secure-login-system/
├── backend/               # Spring Boot backend
│   ├── src/main/java/
│   └── src/main/resources/
├── frontend/              # React frontend
│   ├── public/
│   └── src/
└── README.md

Features
Passwords are hashed using BCrypt before storing
Login using either email or username
Validates input and checks for duplicate emails
RESTful APIs with CORS configuration

Setup Instructions
Prerequisites
Java JDK 17 or higher installed
Maven installed
MySQL server installed and running
Node.js and npm installed (for React frontend)

Backend Setup (Spring Boot)
Clone the repository

bash
git clone https://github.com/Gurkir4tSingh/secure-login-system.git
cd secure-login-system/backend
Create MySQL database
Login to MySQL and create the database:

sql
CREATE DATABASE secure_login_db;
Configure database connection
Update src/main/resources/application.properties with your MySQL username and password:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/secure_login_db
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD
spring.jpa.hibernate.ddl-auto=update
Build and run the backend

Frontend Setup (React)
Navigate to frontend directory

Usage
Visit http://localhost:3000/register to create a new account
Visit http://localhost:3000/login to log in with your credentials
Upon successful login or registration, you will be redirected to the home page

Notes
Make sure the backend is running before starting the frontend, as the React app calls backend APIs
You can test the APIs directly with Postman or similar tools at http://localhost:8080/api/auth
Passwords are securely hashed using BCrypt before storage
CORS is configured to allow requests from http://localhost:3000
