function hola(){
    $.ajax({
        url: "http://localhost:8000/user",
        type: "GET",
        success: function(datos){
            console.log(datos);
        }
    
    });
}

hola();