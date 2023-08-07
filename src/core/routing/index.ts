import { User } from 'modules/user/domain/models/user_model';
import { SELECT_USER_QUERY,INSERT_USER_QUERY } from '../query_scripts/queries';
import { pool } from '../services/database_service';
import express, { Application,Request, Response } from 'express';
import { QueryResult } from 'pg';
import  userRouter  from '../../modules/user/presentation/user_router';

import  orderRouter  from '../../modules/order/presentation/order_router';

// ADD MISSING IMPORTS
export const configureRouting = (app: Application) => {
  const router = express.Router();
  app.use('/api', router);
  router.use('/user',userRouter());
  router.use('/order',orderRouter())
}

