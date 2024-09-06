import Boton from "./Boton";

function Saludo(props){
    return(
    <div>
    <h1>{props.saludo}</h1> 
    <img src={props.img}></img>
    <h2>{props.otro}</h2>
    <Boton/> 
    </div>
    )
    }
    
    export default Saludo;