const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const assunto = document.getElementById('assunto');
    const mensagem = document.getElementById('mensagem');
    const termos = document.getElementById('termos');

    
    if (nome.value.length < 3) {
        alert('Nome deve ter pelo menos 3 caracteres');
        return;
    }
    if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        alert('E-mail inválido');
        return;
    }
    
    const telefoneValue = telefone.value.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    telefone.value = telefoneValue;

    // exibe mensagem de sucesso
    alert('Dados enviados com sucesso!');
});