
const Config = {
    client: 'sqlite3',
    connection: {
        filename: './database.sqlite'
    },
    migration:{
        directory: './migrations'
    },
    migrations: {
        tableName: 'migrations'
    },
    useNullAsDefault: true
};

module.exports = Config;