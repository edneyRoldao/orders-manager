function query (stmt: string, ...params: any[]) {
    console.log(stmt);
    console.log(params);    
}

query('select * from products p where code = ? and id = ?', '123456', 'abcdef', 13454, true)
