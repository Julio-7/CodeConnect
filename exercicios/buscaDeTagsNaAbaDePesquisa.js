const busca = event.target.value.trim().toLowerCase();
const projetos = document.querySelectorAll('.projeto');

try {
  projetos.forEach(projeto => {
      // Iteração pelos projetos e suas tags
      const tags = projeto.querySelectorAll('.tag');
      let mostrar = false;

      tags.forEach(tag => {
          if (tag.textContent.trim().toLowerCase().includes(busca)) {
              mostrar = true; // Define mostrar como true se a tag contém a busca
          }
      });

      // Define a exibição do projeto com base na variável mostrar
      if (mostrar) {
          projeto.style.display = 'block'; // Exibe o projeto
      } else {
          projeto.style.display = 'none'; // Oculta o projeto
      }
  });
} catch (error) {
  console.error('Erro ao filtrar projetos:', error); // Registra o erro no console
  alert('Ocorreu um erro ao filtrar os projetos. Verifique o console para mais detalhes.'); // Exibe uma mensagem de erro ao usuário
}