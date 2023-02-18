// importing modules
const restify = require('restify');
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
 const db = require('./models')
 const routes = require('./routes/userRoutes');

const server = restify.createServer({
  name: 'myapp'
});

server.use(restify.plugins.bodyParser());

// Set up routes
routes.applyRoutes(server);

server.listen(process.env.PORT || 8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});

//synchronizing the database
db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
})

//routes for the user API
module.exports = function(server) {
  // Set up your API routes here
  server.use('/api/users', userRoutes);
};
