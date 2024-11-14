# **Book Review App - Backend: High-Level Documentation**

This document provides a **high-level overview** of the backend system for the **Book Review App**. The backend is built using **Node.js**, **Express**, and **MongoDB**, providing a RESTful API for user authentication, book management, and review submission. Below, we cover the **architecture**, **core features**, **database design**, and **API structure**.

---

## **Architecture Overview**

- **Backend Framework**: Node.js with Express.js for building RESTful APIs
- **Database**: MongoDB for storing user, book, and review data
- **Authentication**: JWT (JSON Web Tokens) for secure user sessions
- **Authorization**: Role-based (admin users manage books, regular users can submit reviews)
- **Security**: Passwords hashed with bcrypt, JWTs for stateless authentication
- **Error Handling**: Centralized error handling middleware
- **Validation**: Zod for validating user input

---

## **Core Features**

### **User Authentication & Authorization**

- **Registration**: Users can create accounts with a username, email, and password.
- **Login & JWT Tokens**: Users receive a **JWT** on login, which allows access to protected routes.
- **User Roles**:
  - **Admin**: Can add, update, and delete books.
  - **User**: Can submit and update reviews.
- **Session Management**: Logout by invalidating JWTs on the client-side.

### **Book Management**

- **Book Listing**: Retrieve all available books.
- **Book Details**: Access detailed information about individual books, including user reviews.
- **Book Creation**: Admins can add new books to the collection.
- **Book Update**: Admins can modify book details.
- **Book Deletion**: Admins can remove books from the system.

### **Review Management**

- **Review Submission**: Users can post reviews with ratings and text.
- **Review Update**: Authors of reviews can edit their own submissions.
- **Review Deletion**: Reviews can be deleted by their authors or by admins.

---

## **High-Level API Design**

| **Feature**          | **Method** | **Endpoint**         | **Description**                                    |
| -------------------- | ---------- | -------------------- | -------------------------------------------------- |
| **Register User**    | POST       | `/api/auth/register` | Register a new user account.                       |
| **Login**            | POST       | `/api/auth/login`    | User login and receive JWT token.                  |
| **Logout**           | POST       | `/api/auth/logout`   | Invalidate the user session.                       |
| **Get User Info**    | GET        | `/api/auth/me`       | Retrieve information about the logged-in user.     |
| **List Books**       | GET        | `/api/books`         | Retrieve a list of all books.                      |
| **Get Book Details** | GET        | `/api/books/:id`     | Get details of a specific book, including reviews. |
| **Add New Book**     | POST       | `/api/books`         | Add a new book (admin-only).                       |
| **Update Book**      | PUT        | `/api/books/:id`     | Update book details (admin-only).                  |
| **Delete Book**      | DELETE     | `/api/books/:id`     | Delete a book (admin-only).                        |
| **Submit Review**    | POST       | `/api/reviews`       | Add a review for a book.                           |
| **Update Review**    | PUT        | `/api/reviews/:id`   | Update a review (author-only).                     |
| **Delete Review**    | DELETE     | `/api/reviews/:id`   | Delete a review (author or admin-only).            |

---

## **Database Design**

### **User Model**

| **Field**  | **Type** | **Description**            |
| ---------- | -------- | -------------------------- |
| `id`       | String   | Unique identifier (UUID).  |
| `username` | String   | Unique username.           |
| `email`    | String   | User email (unique).       |
| `password` | String   | Hashed password.           |
| `role`     | String   | User role (e.g., 'admin'). |

### **Book Model**

| **Field**     | **Type** | **Description**         |
| ------------- | -------- | ----------------------- |
| `id`          | String   | Unique book identifier. |
| `title`       | String   | Book title.             |
| `author`      | String   | Book author.            |
| `genre`       | String   | Book genre/category.    |
| `description` | String   | Book description.       |

### **Review Model**

| **Field**    | **Type** | **Description**           |
| ------------ | -------- | ------------------------- |
| `id`         | String   | Unique review identifier. |
| `bookId`     | String   | Associated book ID.       |
| `userId`     | String   | ID of the review author.  |
| `rating`     | Number   | Rating (1-5).             |
| `reviewText` | String   | Text of the review.       |

---

## **Security Considerations**

1. **Password Hashing**: All passwords are hashed using **bcrypt** before being stored in the database.
2. **JWT Authentication**: Tokens are generated on login and verified for access to protected routes.
3. **Role-Based Authorization**: Admin-only routes for managing books, while users can manage their reviews.
4. **Input Validation**: Prevents malicious input by validating request bodies using **Zod**.
5. **Error Handling**: Centralized error middleware to catch and respond with appropriate HTTP status codes.

---

## **Error Codes & Responses**

| **HTTP Status**  | **Description**                               |
| ---------------- | --------------------------------------------- |
| 200 OK           | Request was successful.                       |
| 201 Created      | Resource was successfully created.            |
| 400 Bad Request  | Invalid data was provided in the request.     |
| 401 Unauthorized | User is not authenticated.                    |
| 403 Forbidden    | User does not have the necessary permissions. |
| 404 Not Found    | Resource was not found.                       |
| 500 Server Error | An unexpected error occurred.                 |

---

## **Future Enhancements**

- **Password Reset Feature**: Allow users to reset their password via email.
- **Search & Filter**: Add search functionality to find books by title or author.
- **Pagination**: Implement pagination for book listings.
- **User Profiles**: Expand user profiles with bio and reading history.
- **Rating Aggregation**: Display average ratings for books.

---

## **Conclusion**

This backend provides a solid foundation for the Book Review App with a well-structured API for **authentication**, **book management**, and **review submissions**. With security best practices and modular design, it ensures smooth operation and scalability. Further enhancements like search and pagination can improve usability.
