const Pool = require('pg').Pool
require('dotenv').config()
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});





const getList = () => {
  return new Promise(function(resolve, reject){
    // pool.query('SELECT * FROM csvlist ORDER BY id ASC', (error,results) => {
    
      pool.query('SELECT * FROM csvlist WHERE id = (SELECT MAX(id) FROM csvlist)', (error,results) => {
      if(error){
        reject(error)
      }
      else{
          resolve(results.rows);
          
      }
      
    })
  })
}

const insertIntoList = (body) => {
  return new Promise(function(resolve,reject){
    const {csvname, graph, var1, var2, var3, var4, var5} = body
    pool.query('INSERT INTO csvlist (csvname, graph, var1, var2, var3, var4, var5) values ($1, $2, $3, $4, $5, $6, $7)   RETURNING *', [csvname, graph, var1, var2, var3, var4, var5], (error,results)=> {
      if(error){
        reject(error)
      }
      console.log(results.rows[0].id);
      resolve(results);
    })
  })
}

const deleteFromList = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM csvlist WHERE id = $1', [id], (error,results) => {
      if(error){
        reject(error)
      }
      resolve(result)
    })
  })
}


const getListById = (id) => {
  return new Promise(function(resolve, reject) {
    const idc = parseInt(id);
    pool.query('SELECT * FROM csvlist WHERE id = $1', [idc], (error, results) => {
      if(error){
        reject(error)
      }
      resolve(results)
    })
  })
}



module.exports = {
  getList,
  insertIntoList,
  deleteFromList,
  getListById,
}