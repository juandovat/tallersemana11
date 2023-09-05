const boton = document.getElementById("boton");
const texto = document.getElementById("parrafo");
boton.addEventListener("click",getData)

    async function getData() {
        try {
            const data = await fetch('https://api.chucknorris.io/jokes/random');
            const json = await data.json();
            //console.log(json)
            texto.textContent = json.value;
        }

    
    catch(error) {

        console.error(error);
     }
    }
