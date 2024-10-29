import pg from 'pg';
const { Client }= pg;

const config={
    user: 'portafolio_0zze_user',
    host: 'dpg-csg3i8rqf0us73e6vc1g-a.oregon-postgres.render.com',
    database: 'portafolio_0zze',
    password: 'kNVTublnSMqrTxrT53QfhZ8D8x3jyMlW',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

export async function Conectar(params) {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de Datos")
    }catch(error){
        console.log(error)
    }
}