import fastify from "fastify"
const app =fastify()
app.listen({port:2000},(error,address)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(address);
    }
})