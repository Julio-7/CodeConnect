async function verificarUserName(userName) {
  return new Promise((resolve) => {
    setTimeout(()=>{
      const userNameCadastrado = ["Hungry", "jpclone", "prodigy"]
      resolve(!userNameCadastrado.includes(userName))
    },1000)
  })
}

const inputUserName = document.getElementById("username-input")

inputUserName.addEventListener("blur", async (evento) =>{
  const userName = evento.target.value
  if(userName.trim() !== ""){
    try {
      const userNameDisponivel = await verificarUserName(userName)
      exibirFeedback(userNameDisponivel,userName)
    } catch (error) {
      console.log("Erro ao verificar o username no sistema")
      exibirFeedbackErro()
    }
  }
})

function exibirFeedback(disponivel,username){
  const userNameElemento = document.getElementById("username-feedback")

  if(disponivel){
    userNameElemento.textContent = `O username ${username} esta disponivel`
    userNameElemento.style.color = "green"
  } else{
    userNameElemento.textContent = `O username ${username} ja esta cadastrado`
    userNameElemento.style.color = "red"
  }
}

function exibirFeedbackErro() {
  const userNameElemento = document.getElementById("username-feedback")

  userNameElemento.textContent = "Erro ao verificar o username no sistema"
  userNameElemento.style.color = "red"
}