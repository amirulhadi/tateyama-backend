require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const multer = require('multer');

const upload = multer();
// const custommiddleware = require('./middleware');
// const schema = require('./gql/schema'); // comment this if dont need graphql
// routes
const router = require('./router');
// const secureRoute_list = require('./routes/secure');
// middlewares
// app.use(cors());

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));


// if (process.env.APPLICATION_DEBUG === 'true') app.use(custommiddleware.ReqLogger);
// end of middleware

// Registering API
// app.use('/graphql-api', graphqlHTTP({ schema, graphiql: true })); // comment this if dont need graphql
// app.use('/api', passport.authenticate('jwt'), secureRoute_list);
// app.use('/', router);

const server = app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
router(app)

module.exports = server;