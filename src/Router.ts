import express,{ Application,Request,Response } from "express";


class App{
    //*Atributos 
    //* representa un api express
    public app:any;
    //* representa al servidor cuando llamamos a la funcion listes 
    private server:any;
     
    constructor(){
        this.app=express()
        this.app.use(express.json())
        this.routes()
    }
    //* se crea una ruta y por get llamamos una ruta
    private routes():void {
        this.app.get(
            "/",
            //*funcion colback recibe dos parametrso de respuesta y respuesta
            (req:Request, res:Response) => {
                //^^.sent envia una respuesta que  esta dentro de una clase por medio de un metodo
                res.send("Bienvenidos a typescript")
                
            }
            )

    }
    //* arranca el servidor 
    public start():void{
        this.server=this.app.listen(
            3000,
            ()=>(console.log("el servidor se esta escuchado en el puerto 3000"))
        )
    }
    
    public close():void{
        this.server.close()
    } 

}
//* crea aun modulo apartir de esta clase 
export default App
