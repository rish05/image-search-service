let env = 'LOCAL';

const props = {
    LOCAL:{
        app:{
            PORT: 8082
        },
        postDb:{
            USER:'postgres',
            PASSWORD:'accenture@123',
            DB:'sci_expriment',
            HOST:'34.132.137.169',
            PORT: 5432,
            DIALECT: "postgres",
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
              }
        }
    },
    PROD:{
        app:{
            PORT: 8082
        },
        postDb:{
            USER:process.env.POSTGRES_USER,
            PASSWORD:process.env.POSTGRES_PASS,
            DB:process.env.POSTGRES_DB,
            HOST:process.env.POSTGRES_HOST,
            PORT: process.env.POSTGRES_PORT,
            DIALECT: "postgres",
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
              }
        }
    }
}
const getProps = () => props[env];

const setEnv = (newEnv) => {
    if(props[newEnv]){
        env = newEnv;
    }
}

module.exports ={
    props: getProps,
    setEnv
}