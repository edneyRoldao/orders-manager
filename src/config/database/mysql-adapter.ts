import mysql from 'mysql2'
import { Pool } from 'mysql2/promise'
import { Datasource } from './datasourse'

export class MySqlAdapter implements Datasource {

    readonly connection: Pool

    constructor() {
        const connectionPool = mysql.createPool({
            host: '192.168.176.2',
            port: 3306,
            user: 'root',
            password: 'root',
            database: 'db_ecommerce',
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10, 
            idleTimeout: 60000, 
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0      
        })

        this.connection = connectionPool.promise()
    }

    // encapsulamento, abstracao
    async query (statement: string, ...params: any): Promise<any> {
        const conn = await this.connection.getConnection()
        try {
            return await conn.query(statement, params)

        } catch (error) {
            console.error(error)
        } finally {
            conn.release()
        }
    }

}