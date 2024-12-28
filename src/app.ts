import cors from 'cors';
import passport from 'passport';
import initRoutes from './routes';
import bodyParser from 'body-parser';
import express, { Application } from 'express';
import passportConfig from './config/passport';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/swagger.json';

console.log('Loaded JWT_SECRET:', process.env.JWT_SECRET);

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true, parameterLimit: 50000 }));
app.use(passport.initialize());
passportConfig(passport);

// CORS configuration to allow any site
app.use(
  cors({
    origin: '*', // Allow requests from any origin
  }),
);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes initialization
initRoutes(app);

export default app;
