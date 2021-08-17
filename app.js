const resultado         = document.querySelector('#resultado');
const btn               = document.querySelector('#btn');
const selectCategories  = document.querySelector('#categoria');
const form              = document.querySelector('#form');

document.addEventListener('DOMContentLoaded',()=>{
    consultarAPI();
    apiSelect();;
    selectCategories.addEventListener('change',leerValor);
    form.addEventListener("submit", submitFormulario);
})


const consultarAPI =async ()=>{
    const url = 'https://api.chucknorris.io/jokes/random'

    try {
        limpiarHtml();
        const respuesta = await fetch(url);
        const joke = await respuesta.json();
     
        cargarHTML(joke.value);
    } catch (error) {
        
    }

}

const cargarHTML = (joke) => {
    
    limpiarHtml();
    const p_value = document.createElement('p');
    p_value.innerHTML = `${joke}`;
    resultado.append(p_value);


}

function limpiarHtml(){
    while(resultado.firstChild){
      resultado.removeChild(resultado.firstChild);
    }
  }

const  apiSelect = async()=> {
      url = "https://api.chucknorris.io/jokes/categories";
     

     try {
         const resultado = await fetch(url);
         const categorias = await resultado.json();
        
     cargarSelect(categorias) ;
     } catch (error) {
         console.log(error);
     }


  }

const cargarSelect = (categorias) =>{
    categorias.forEach(element => {
        
       
        const option = document.createElement('option');
        option.value = element;
        option.innerHTML = element;
        
        selectCategories.appendChild(option);
     
    });
}
const objBusqueda = {
    categoria : ''
}


const leerValor =(e)=>{
 
    e.preventDefault();
     objBusqueda.categoria = e.target.value;
    
}


const submitFormulario = (e) =>{
   e.preventDefault();
   const {categoria} = objBusqueda;
   getCategoryAPI(categoria);
} 


 const getCategoryAPI =async (category)=>{

   
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    try {
        limpiarHtml();
        const respuesta = await fetch(url);
        const joke = await respuesta.json();
       
       cargarHTML(joke.value);
    } catch (error) {
        console.log(error);
    } 
 }  


