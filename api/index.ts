// Require dependencies
import Express from 'express'; // Http server
import Morgan from 'morgan'; // Terminal logging
import { status500 } from '../api/middlewares/handle'; // Error Models
import Session from 'express-session'; //Express session manager
import MongoStore from 'connect-mongo'; //Session manager for MongoDB, Express
import config from '../config';
// Initilaziation
const app = Express();

// Session Start
app.use(
  Session({
    name: 'PROJECT_PHPSESSID',
    store: MongoStore.create({ mongoUrl : config.MONGO_CONNECTION }),
    secret: config.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
  })
);

// Middlewares
app.use(Morgan('dev'));
app.use(Express.json({ limit: '10mb' }));

let ALLOWED_ORIGINS = [
  'https://kale.kapsulteknoloji.org',
  'https://kapsulteknoloji.org',
  'http://localhost:8000',
  'http://localhost:3000',
  'http://localhost:4000',
];

app.use((req, res, next) => {
  let origin = req.headers.origin;
  
  if (origin){
    let theOrigin = ALLOWED_ORIGINS.indexOf(origin) >= 0 ? origin : ALLOWED_ORIGINS[0];
    res.header('Access-Control-Allow-Origin', theOrigin);
  }

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Error Handling
app.use(status500);

// Listen for requests
app.listen(config.PORT, ()=>console.log(`API => Listening on port ${config.PORT}`));

export {app}