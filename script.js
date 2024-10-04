// Selecionando o botão de alternância de tema e o corpo do documento
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Função para aplicar o tema salvo no localStorage
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        body.classList.remove('light');
        themeToggle.textContent = 'Tema Claro';  // Altera o texto do botão para o modo claro
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
        themeToggle.textContent = 'Tema Escuro';  // Altera o texto do botão para o modo escuro
    }
}

// Função para alternar entre os temas
function toggleTheme() {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'Tema Claro';  // Atualiza o texto do botão
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'Tema Escuro';  // Atualiza o texto do botão
    }
}
