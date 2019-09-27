import axios from "axios";

export default {
  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  // signs up user, then logs them in
  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  // checks to see if user is logged in, then returns the user
  isLoggedIn: function() {
    return axios.get("/api/users/admin/dashboard");
  },

  isStudentLoggedIn: function() {
    return axios.get("/api/users/student/dashboard");
  },

  // checks to see if the user is logged in and and admin, then returns the user
  isAdmin: function() {
    return axios.get("/api/users/logout")
  },

  // logs out the user
  logout: function() {
    return axios.get("/api/users/logout")
  },

  getResources: function() {
    return axios.get("/api/resources");
  },

  getTodos: function() {
    return axios.get("/api/todos/all")
  },

  createTodo: function() {
    return axios.post("/api/todos/new")
  },

  removeTodo: function() {
    return axios.delete("/api/todos/remove")
  },

  updateTodo: function() {
    return axios.put("/api/todos/update")
  },

  addFavorite: function(favoriteData) {
    return axios.post("/api/favorites", favoriteData)
  },

  showFavorites: function(userId) {
    return axios.get("/api/favorites/" + userId)
  },

  addComment: function(commentData) {
    console.log("commentData", commentData)
    return axios.post("/api/comments", commentData)
  },

  showComments: function(resourceId) {
    return axios.get("/api/comments/" + resourceId)
  }
};

// copied from react 20.10 utils folder

// import axios from "axios";

// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };