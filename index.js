
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = require('./app');
const port = process.env.PORT || 3001;


//crear el servidor
app.listen(port, ()=>{
    console.log(`Servidor conectado en el puerto ${port}`);
});
