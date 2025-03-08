const inputTags = document.getElementById("input-tag")
const tagLista = document.getElementById("lista-tag")

inputTags.addEventListener("keypress", (evento)=>{
  if(evento.key === "Enter"){
    evento.preventDefault()
    const tagTexto = inputTags.value.trim()
    if(tagTexto !== "" && tagsDisponiveis.includes(tagTexto)){// ao colocar && tagsDisponiveis.includes(tagTexto) fez a verificao do qual tag e permitida
      const listaNova = document.createElement("li")
      listaNova.innerHTML = `<p> ${tagTexto}</p> <img src="https://cdn-icons-png.flaticon.com/512/6372/6372150.png" alt="" style="height: 10px; width: 10px; display: flex; " class="remove-tag">` 
      tagLista.appendChild(listaNova)
      inputTags.value = ""
    }
  }
})

tagLista.addEventListener("click", (evento)=>{
  if(evento.target.classList.contains("remove-tag")){
    const tagQueQueremosRemover = evento.target.parentElement
    tagLista.removeChild(tagQueQueremosRemover)
  }
})

const tagsDisponiveis = ['front-end', 'programação', 'data science', 'full stack', 'HTML', 'CSS', 'JavaScript'];

async function verificarTagsDisponiveis(tag){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(tagsDisponiveis.includes(tag))
    },1000)
  })
}