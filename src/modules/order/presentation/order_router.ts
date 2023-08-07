import { User } from 'modules/user/domain/models/user_model';
import { SELECT_ORDER_QUERY,INSERT_ORDER_QUERY } from '../../../core/query_scripts/queries';
import { pool } from '../../../core/services/database_service';
import express, { Application,Request, Response } from 'express';
import { QueryResult } from 'pg';
import { Order } from '../domain/models/order_model';
// ADD MISSING IMPORTS

export default function orderRouter(){

    const router = express.Router();

    router.get('/:userId',async (req: Request, res:Response)=>{
        const userId = req.params.userId
        pool.query(SELECT_ORDER_QUERY,[userId],(err:Error,result:QueryResult<any>)=>{
          try {
            const user = result.rows;
            res.json(user);
          } catch (error) {
            res.send(error);
          }
        });
    });
    
    
    router.post('/',async (req: Request, res:Response)=>{
      const order:Order = req.body
      pool.query(INSERT_ORDER_QUERY,[order.user_id,order.amount,order.profit],(err:Error,result:QueryResult<any>)=>{
        try {
          const order = result.rows;
          res.json(order);
        } catch (error) {
          res.send(err);
        }
      });
    });
    
    return router


}
