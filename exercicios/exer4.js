const botaoPublicar = document.getElementById("publicar-btn")
const listaTags = document.getElementById("lista-tags")
const inputTags = document.getElementById("tag-input")

async function verificarTagsDisponiveis(tag) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      const tagsDisponiveis = ["HTML", "PHP"]
      resolve(tagsDisponiveis.includes(tag))
    },1000)
  })
}

inputTags.addEventListener("keypress", async function(evento){
  if(evento.key === "Enter"){
    evento.preventDefault()
    const tagTexto = inputTags.value.trim()
    if(tagTexto !== ""){
      try {
        const tagExiste = await verificarTagsDisponiveis(tagTexto)
        if(tagExiste){
          const listaNova = document.createElement("li")
          listaNova.innerHTML = `<p> ${tagTexto}</p>`
          listaTags.appendChild(listaNova)
          inputTags.value=""
        }else{
          alert("Tag nao encontrada")
        }
        
      } catch (error) {
        console.error("Erro ao verificar a existencia da tag")
        alert("Erro ao verificar a existencia da tag")
      }
    }
  }
})

botaoPublicar.addEventListener("click", async function (evento){
  evento.preventDefault()

  const nome = document.getElementById("nome-projeto").value
  const descricao = document.getElementById("descricao-projeto").value
  const tag = Array.from(listaTags.querySelectorAll("p")).map((tag)=>tag.textContent)

  try {
    const mensagem = await publicarFormulario(nome, descricao, tag)
    console.log(mensagem)
    exibirFeedback()
  } catch (error) {
    console.error(error)
  }
})

async function publicarFormulario(nome,descricao,tag) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const deuCerto = Math.random() > 0.5

      if(deuCerto){
        resolve("Publicado com sucesso")
      }else{
        reject("Erro ao Publicar")
      }
    }, 2000)
  })
}

function exibirFeedback(){
  const feedbackElemento = document.getElementById("feedback")
  feedbackElemento.textContent = "Publicado Com sucesso"
  feedbackElemento.style.color = "green"
}