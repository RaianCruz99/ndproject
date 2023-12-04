document.addEventListener('DOMContentLoaded', function () {
    // Obtém a referência para o elemento modal
    var modal = document.getElementById("myModal");

    // Obtém o botão que abre o modal
    var btn = document.getElementById("inscricao");

    // Obtém o elemento <span> que fecha o modal
    var span = document.getElementsByClassName("close")[0];

    

    // Quando o usuário clica no botão, abre o modal
    btn.onclick = function() {
        modal.style.display = "block";
        document.body.classList.add('modal-open'); 
    }

    // Quando o usuário clica em <span> (x), fecha o modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Quando o usuário clica em qualquer lugar fora do modal, fecha-o
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function closeModal() {
        modal.style.display = "none";
        // Remove a classe 'modal-open' do corpo para reativar o scroll
        document.body.classList.remove('modal-open');
    }

    span.onclick = closeModal;

    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    // Adicione código aqui para manipular o calendário com os eventos fornecidos
});
