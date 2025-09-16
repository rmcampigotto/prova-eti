import { Module } from '@nestjs/common';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '../schemas/index';

export const DRIZZLE = Symbol("drizzle-connection");

@Module({
  providers:[
    {
      provide: DRIZZLE,
      inject: [],
      useFactory: async () => {
        const pool = new Pool({
          connectionString: "postgresql://prova:prova123@localhost:5432/provadb",
          ssl: false
        });
        return drizzle(pool,{schema}) as NodePgDatabase<typeof schema>;
      }
    }
  ],
  exports: [DRIZZLE]
})

export class DrizzleModule {};