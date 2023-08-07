import express from 'express';
import { configureRouting } from './core/routing';

import { PoolClient } from 'pg';
import { pool } from './core/services/database_service';
const app = express();
app.use(express.json());
// config del router
configureRouting(app);
app.listen(8420, () => {
  console.log('Server running on => 8420');
  pool.connect(
    (err:Error,client:PoolClient,done)=>{
        if(err){
            console.log('error al conectar a la base de datos',err)
        } else{
            console.log('la conexion fue exitosa');
            done();
        }
    }
)
});
