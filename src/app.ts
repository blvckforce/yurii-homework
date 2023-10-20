import express from 'express';
import morgan from "morgan";

import activityRoutes from './routes/activityRoutes';
import userRoutes from './routes/userRoutes';


const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(express.json());

app.use('/activity', activityRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
