async function verificaEmailDisponivel(email) {
  return new Promise((resolve) => {
    setTimeout(()=>{
      const emailsCadastrados = ['user1@example.com', 'user2@example.com', 'user3@example.com'];
      resolve(!emailsCadastrados.includes(email))
    }, 1000)
  })
}

document.getElementById("email-input").addEventListener("blur", async function (evento) {
 
  const email = evento.target.value

  if(email.trim() !==""){
    try{
      const emailDisponivel = await verificaEmailDisponivel(email)
      console.log("Email disponivel")
      exibirFeedback(emailDisponivel,email)
    }catch(error){
      console.log("Erro ao verificar a disponibilidade do email")
      exibirFeedbackErro()
    }
  }
})

function exibirFeedback(disponivel,email) {
  const feedbackElemento = document.getElementById("email-feedback")
  if(disponivel){
    feedbackElemento.textContent = `O email ${email} está disponivel`
    feedbackElemento.style.color = "green"
  } else{
    feedbackElemento.textContent = `Esse email ${email} ja esta cadastrado`
    feedbackElemento.style.color = "red"
  }
}

function exibirFeedbackErro(){
  const feedbackElemento = document.getElementById("email-feedback")
  feedbackElemento.textContent = "Erro ao verificar a disponibilidade do email"
  feedbackElemento.style.color = "red"
}