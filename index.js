import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDataBase from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';
import userRoutes from './routes/userRoutes.js'

const app = express();

app.use(express.json());

dotenv.config();

connectDataBase();

//Configurar CORS
const whitelist = ["http://localhost:5173"];
const corsOptions = {
    origin: function(origin, callback){
        if(!origin){
            return callback(null, true);
        }
        else{
            callback(null, true);
        }
    },
};

app.use(cors(corsOptions));

//Routing
app.use("/api/task", taskRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});