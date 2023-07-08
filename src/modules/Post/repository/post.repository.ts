import { Injectable } from "@nestjs/common";
import { DB } from "../../../lib/persistent/connection-name";
import { ConnectionPool } from "../../../lib/persistent/postgres/connection-pool";
import { Connection } from "../../../lib/persistent/postgres/connection.decorator";


    @Injectable()
    export class PostRepository {
    constructor(
        @Connection(DB) private readonly pg: ConnectionPool,
    ) { }

    async getList(): Promise<any[]> {
        let queryText = `
        SELECT
            id,
            title,
            body
        FROM post_table
        `
        let params = [];
        return this.pg.excute(queryText, params).then((result) => {
        return result.rows
        });
    }

    async create(option): Promise<any> {

        let queryText = `
        INSERT INTO post_table (
            
            title,
            body
        ) VALUES (
            
            $1,
            $2
        
        ) RETURNING *;
        `
        let params = [
        
        option.title,
        option.body
        ];
        

        return this.pg.excute(queryText, params).then((result) => {
        return result.rows[0]
        });
    }

    async update(option): Promise<any> {
        let queryText = `
        UPDATE post_table 
        SET 
        title = $2,
        body = $3

        WHERE id = $1
        `
        let params = [
        option.id,
        option.title,
        option.body,
        ];
        return this.pg.excute(queryText, params)
    }

    async delete(option): Promise<any> {
        let queryText = `
        DELETE FROM post_table 
        WHERE id = $1
        `
        let params = [option.id];
        return this.pg.excute(queryText, params)
    }
    }
