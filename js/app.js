function resetform() {
    $("form select").each(function() { this.selectedIndex = 0 });
    $("form input[type=text] , form textarea , form input[type=email]").each(function() { this.value = '' });
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Formulario limpiado con exito!',
        showConfirmButton: false,
        timer: 1500
    });
}

function enviarform(){
    $("#btnEnviar").on("click", function(e) {
        e.preventDefault();
        
    });
}