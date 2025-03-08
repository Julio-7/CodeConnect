
// Usando JavaScript para Validação Avançada do tipo de arquivo

// Capturando o Arquivo

// document.getElementById('imageUpload').addEventListener('change', function(event) {
//   var file = event.target.files[0];
//   // Agora temos o arquivo e podemos fazer mais validações
// });

//Validando o Tipo de Arquivo

// if (!file.type.match('image/png') && !file.type.match('image/jpeg')) {
//   alert('Por favor, selecione uma imagem PNG ou JPEG.');
//   return;
// }

//////////////////////////////////////////////////////
const uploadBtn = document.getElementById("upload-btn")
const inputUpload = document.getElementById("image-upload")

uploadBtn.addEventListener("click", ()=>{
  inputUpload.click()
})

function lerConteudoArquivo (arquivo){
  return new Promise((resolve, reject) =>{
    const leitor = new FileReader()
    leitor.onload = ()=>{
      resolve({url: leitor.result, nome: arquivo.name})
    }

    leitor.onerror = ()=>{
      reject(`Erro na leitura do arquivo ${arquivo.name}`)
    }

    leitor.readAsDataURL(arquivo)
  })
}

const imagemPrincipal = document.querySelector(".main-imagem")
const nomeDaImagem = document.querySelector(".container-imagem-nome p")

inputUpload.addEventListener("change", async (evento)=>{
  const arquivo = evento.target.files[0]

  if(arquivo){
    try{
      const conteudoDOArquivo = await lerConteudoArquivo(arquivo)
      imagemPrincipal.src = conteudoDOArquivo.url
      nomeDaImagem.textContent = conteudoDOArquivo.nome
    } catch(erro){
      console.error("Erro na leitura do arquivo")
    }
  }
})

const inputTags = document.getElementById("input-tags")
const listaTags = document.getElementById("lista-tags")


listaTags.addEventListener("click", (evento)=>{
  if(evento.target.classList.contains("remove-tags")){
    const tagQueQueremosRemover = evento.target.parentElement
    listaTags.removeChild(tagQueQueremosRemover)
  }
})

const tagsDisponiveis = ["Front-End", "Java", "PHP", "SQL"]

async function verificarTagsDisponiveis(tagTexto){
  return new Promise ((resolve)=>{
    setTimeout(()=>{
      resolve(tagsDisponiveis.includes(tagTexto))
    }, 1000)
  })
}

inputTags.addEventListener("keypress", async (evento)=>{
  if(evento.key === "Enter"){
    evento.preventDefault()
    const tagTexto = inputTags.value.trim()
    if(tagTexto !== ""){
      try{
        const tagExiste = await verificarTagsDisponiveis(tagTexto)
        if(tagExiste){
          const tagNova = document.createElement("li")
          tagNova.innerHTML = `<p> ${tagTexto}</p> <img src = "./img/close-black.svg" class = remove-tags>`
          listaTags.appendChild(tagNova)
          inputTags.value = ""
        } else{
          alert("Tag nao encontrada")
        }
      } catch (erro){
        console.error("Erro ao verificar a existencia da tag")
        alert("Erro ao verificar a existencia da tag")
      }
    }
  }
})

const botaoPublicar = document.querySelector(".botao-publicar")



async function publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const deuCerto = Math.random() > 0.5

      if(deuCerto){
        resolve("Projeto publicado com sucesso.")
      } else{
        reject("Erro ao publicar o projeto.")
      }
    }, 2000)
  })
}

botaoPublicar.addEventListener("click", async (evento) =>{
  evento.preventDefault()

  const nomeDoProjeto = document.getElementById("nome").value
  const descricaoDoProjeto = document.getElementById("descricao").value
  const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent)

  try {
    const mensagem = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto);
    console.log(mensagem);
    alert(mensagem);
} catch (error) {
    console.error("Deu errado",error);
    alert("Deu tudo errado");
}
})

const botaoDescartar = document.querySelector(".botao-descartar")

botaoDescartar.addEventListener("click", (evento) =>{
  evento.preventDefault()

  const formulario = document.querySelector("form")
  formulario.reset()

  imagemPrincipal.src = "./img/imagem1.png"
  nomeDaImagem.textContent = "image_projeto.png"

  listaTags.innerHTML = ""
})