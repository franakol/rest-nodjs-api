const restify = require('restify')
const userController = require('../controllers/userController')
const { signup, login } = userController
const userAuth = require('../middleware/userAuth')

const server = restify.createServer()


//signup endpoint
//passing the middleware function to the signup
function applyRoutes(server) {
  server.post('/signup', (req, res, next) => {
    userAuth.saveUser(req, res, () => {
      signup(req, res, next);
    });
  });
}
  
//login endpoint
server.post('/login', (req, res, next) => {
    login(req, res, next);
  });

  module.exports = { applyRoutes };