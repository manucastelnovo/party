import { User } from 'modules/user/domain/models/user_model';
import { SELECT_USER_QUERY,INSERT_USER_QUERY } from '../../../core/query_scripts/queries';
import { pool } from '../../../core/services/database_service';
import express, { Application,Request, Response } from 'express';
import { QueryResult } from 'pg';
// ADD MISSING IMPORTS

export default function userRouter(){

    const router = express.Router();

    router.get('/:id',async (req: Request, res:Response)=>{
        const id = req.params.id
        pool.query(SELECT_USER_QUERY,[id],(err:Error,result:QueryResult<any>)=>{
          try {
            const user = result.rows;
            res.json(user);
          } catch (error) {
            res.send(error);
          }
        });
    });
    
    
    router.post('/user',async (req: Request, res:Response)=>{
      const user:User = req.body
      pool.query(INSERT_USER_QUERY,[user.userName,user.password],(err:Error,result:QueryResult<any>)=>{
        try {
          const user = result.rows;
          res.json(user);
        } catch (error) {
          res.send(err);
        }
      });
    });
    
    return router


}
