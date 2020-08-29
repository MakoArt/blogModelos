import React, { Component } from 'react'
import '../Chicas/Chicas.css'

import Olga from './img/woman-3055841_1280.jpg'
import Ana from './img/woman-835219_1280.jpg'
import Natalia from './img/girl-2363819_1280.jpg'
import Mary from './img/studio-portrait-487065_640.jpg'
import Paula from './img/mercedes-693376_1280.jpg'
import Silja from './img/fashion-1623085_640.jpg'
import Bianca from './img/blond-1840386_640.jpg'
import Marta from './img/woman-918458_1280.jpg'
import Rozalen from './img/portrait-3083402_1280.jpg'
import Noelia from './img/model-2301623_1280.jpg'
import Mia from './img/beautiful-women-1806280_1280 (1).jpg'
import Nicol from './img/woman-1284347_1280.jpg'
import Daniela from './img/girl-2647691_1280.jpg'
import Runa from './img/beautiful-1846703_1280.jpg'

const imagenes=[

    {
 id:1,
 nombre:"Olga",
 ojos:"Marrones",
 pelo:"Rubio",
 pais:"Rusia",
 imagen:Olga
 
},

{

 nombre:"Ana",
 ojos:"Negros",
 pelo:"Rubio",
 pais:"Suecia",
 imagen:Ana
},

{

 nombre:"Natalia",
 ojos:"Negros",
 pelo:"Rubio",
 pais:"España",
 imagen:Natalia

},

{

 nombre:"Mary",
 ojos:"Azules",
 pelo:"Rubio",
 pais:"England",
 imagen:Mary
},
{

 nombre:"Paula",
 ojos:"Azules",
 pelo:"Rubio",
 pais:"España",
 imagen:Paula
},
{

 nombre:"Silja",
 ojos:"Azules",
 pelo:"Rubio",
 pais:"Finlandia",
 imagen:Silja
},
{
 
 nombre:"Bianca",
 ojos:"Azules",
 pelo:"Rubio",
 pais:"Italia",
 imagen:Bianca
},
{

 nombre:"Marta",
 ojos:"Negros",
 pelo:"Negro",
 pais:"España",
 imagen:Marta
},
{

 nombre:"Rozalen",
 ojos:"Negros",
 pelo:"Castaño",
 pais:"España",
 imagen:Rozalen
},
{

 nombre:"Noelia",
 ojos:"Marrones",
 pelo:"Rojo",
 pais:"España",
 imagen:Noelia
},
{

 nombre:"Mia",
 ojos:"Negros",
 pelo:"Negro",
 pais:"Francia",
 imagen:Mia
},
{

 nombre:"Nicol",
 ojos:"Azules",
 pelo:"Negro",
 pais:"Italia",
 imagen:Nicol
},
{

 nombre:"Daniela",
 ojos:"Azules",
 pelo:"Negro",
 pais:"Colombia",
 imagen:Daniela
}, 
{

 nombre:"Runa",
 ojos:"Verdes",
 pelo:"Castaño",
 pais:"Noruega",
 imagen:Runa
},



]


class Chicas extends Component {

 
  
   constructor(props) {
    super(props);
    this.state = { 
         
         ojos:'',
         pelo:''
                  };
    }
  
 //LEE LOS CAMBIOS DEL TEXT AREA 
 handleOjos=e=>{
  const areaOjos=document.querySelector('.validoOjos')
  const areaPelo=document.querySelector('.validoPelo')
 
  if(e.target.value==='Verdes' || e.target.value==='Azules' || e.target.value==='Marrones' || e.target.value==='Negros' )
  
  
  areaPelo.disabled=false
   
 console.log(`${e.target.name}:${e.target.value}`)
 this.setState({[e.target.name]:e.target.value})
 


}
handlePelo=e=>{
  
  
  const enviar=document.querySelector('.enviar')

  
  
  if(e.target.value==='Castaño' || e.target.value==='Rubio' || e.target.value==='Negro' || e.target.value==='Rojo')
  speechSynthesis.speak(new SpeechSynthesisUtterance('En la parte inferior , ya puede ver las modelos que coinciden con sus preferencias  ,  después puede enviar el resultado,  para ponednos en contacto con usted .     En el supuesto caso  , de que no aparezca ningun resultado ,  es que no tenemos la chica que busca,  en ese caso vuelva a introducir otros valores . Gracias por confiad en nosotros '));
  
  
  enviar.disabled=false
  
  console.log(`${e.target.name}:${e.target.value}`)
  this.setState({[e.target.name]:e.target.value})
  
 
  
} 


//MANDAR LA INFORMACIÓN 
handleSubmit=e=>{
e.preventDefault()
console.log(this.state)



}
 
 voz=(e)=>{
     
  speechSynthesis.speak(new SpeechSynthesisUtterance('hola, somos la Agencia de Modelos Ágata models . Te vamos a guiar por nuestra página , para que puedas escoger la mejor opción de acuerdo a tus necesidades. Tienes dos campos de texto , Introduce color de ojos , e introduce color de pelo, entre paréntesis  , está escrito tal como debes hacerlo tú . Según tu elección , abajo tendrás las modelos que cumplan tus requisitos  ,  Suerte con la elección'));
  e.preventDefault()

  const boton=document.querySelector('.boton')
  boton.disabled=true

  setInterval(()=>{boton.disabled=false},30000)
  
  }
  
  

render() {
    
  
 
    return (
      <>
 
 <button className="boton" onClick={this.voz} >INFORMACIÓN</button>
 
  
 
 
 
 <form action="" onSubmit={this.handleSubmit}>
       
       <label htmlFor="">INTRODUCE COLOR DE OJOS</label>   
       <label htmlFor="">(Verdes,Azules,Negros,Marrones)</label>   
       <input type="text"  
              name="ojos"
              onChange={this.handleOjos}
              value={this.state.ojos}
              className="validoOjos}"
             />
       
       
       </form>
     
     
      <label htmlFor="">INTRODUCE COLOR DE PELO</label>
      <label htmlFor="">(Castaño,Rubio,Negro,Rojo)</label>   
      <input type="text"
             name="pelo"
             onChange={this.handlePelo} 
             value={this.state.pelo} 
             className="validoPelo"           
             disabled/>

    <button className="enviar" type="submit" onClick={this.enviar} disabled>ENVIA</button>
       
{imagenes.map((imagen)=>{
      
    
if(this.state.ojos==`${imagen.ojos}` && this.state.pelo==`${imagen.pelo}`)
  

  return(
      <> 
    
     <div id="modelos">
     <li><h5>NOMBRE: {imagen.nombre}</h5></li>  
     <li><h5>OJOS: {imagen.ojos}</h5></li>
     <li><h5>PELO: {imagen.pelo}</h5></li>
     <li><h5>PAIS: {imagen.pais}</h5></li>
     <li><h5>IMAGEN: <img src={imagen.imagen}></img></h5></li>
     </div> 
     </>
     
     )
    })}
    
    </>
    );
  }
}

export default Chicas;