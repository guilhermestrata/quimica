const mongoose = require('mongoose')

const conexao = async()=>{
    var atlas = await mongoose.connect('[seu script de conexao atlas]')
}
module.exports = conexao