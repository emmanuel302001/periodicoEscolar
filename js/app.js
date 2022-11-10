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

function getFormData(){
    var config = {};
     $('input').each(function () {
      config[this.name] = this.value;
     });

     $('textarea').each(function () {
        config[this.name] = this.value;
     });


     for (const [key, value] of Object.entries(config)) {
        if(`${value}` === ""){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: '¡Debes completar todos los campos!',
                showConfirmButton: false,
                timer: 1500
            });
        }else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Comentario enviado con exito!',
                showConfirmButton: false,
                timer: 1500
            });
            $("form select").each(function() { this.selectedIndex = 0 });
            $("form input[type=text] , form textarea , form input[type=email]").each(function() { 
                console.log(key.length);
                if(`${value}` !== ""){

                }else{
                    this.value = '' 
                    console.log(key.length);
                }
                
            });
        }
      }
 }

$( document ).ready(function() {



    var numOne = document.getElementById("num-one");
    var addSum = document.getElementById("add-sum");

    numOne.addEventListener("input", add);

    function add(){
    var one = Number(numOne.value) || 0;
    var sum = Number(30000/one);
    addSum.innerHTML = "El número de cuotas mensuales a pagar es: $" + sum;
    }



    $( ".btn-planpro" ).click(function() {
        $(".payment").css("display", "unset");
        $(".btn-planpro").css("display", "none");
        $( "#rdo1" ).click();
    });


    $( "#rdo1" ).click(function() {
            $(".cuotas_uno").css("display", "unset");
    });

    $( "#rdo2" ).click(function() {
        $(".cuotas_uno").css("display", "none");
    });
    




    var numOne_superpro = document.getElementById("num-one-super-pro");
    var addSum_superpro = document.getElementById("add-sum-super-pro");

    numOne_superpro.addEventListener("input", addDos);

    function addDos(){
    var one_superpro = Number(numOne_superpro.value) || 0;
    var sum_superpro = Number(60000/one_superpro);
    addSum_superpro.innerHTML = "El número de cuotas mensuales a pagar es: $" + sum_superpro;
    }


    $( ".btn-plan-superpro" ).click(function() {
        $(".payment_superpro").css("display", "unset");
        $(".btn-plan-superpro").css("display", "none");
        $( "#rdo1_superpro" ).click();
    });


    $( "#rdo1_superpro" ).click(function() {
            $(".cuotas_dos").css("display", "unset");
    });

    $( "#rdo2_superpro" ).click(function() {
        $(".cuotas_dos").css("display", "none");
    });
});

 
