import { DatasourceConfig } from '../config/datasource.config'
import { category } from '../models/category'
import queries from '../../files/categories-queries.json'

export class CategoryRepository {

    constructor(private datasourceConfig: DatasourceConfig) {}

    async getAll(): Promise<category[]> {
        const conn = await this.datasourceConfig.connection.getConnection()
        const data = await conn.query(queries.getAll)
        const resultSet = data[0]
        return resultSet as category[]
    }

}