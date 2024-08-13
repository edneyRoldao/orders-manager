const obj1:any = {
    mysql: 'mysql instance',
    mongo: 'mongo instance'
}

for (const key in obj1) {
    console.log(key, obj1[key]);    
}