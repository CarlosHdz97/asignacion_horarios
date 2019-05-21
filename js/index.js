function init(){
  $("#frm_login").hide();
  $("#frm_registro").on("submit",function(e){
		guardaryeditar(e);
	});
}

function limpiar(){
  console.log("limpiando");
}


function guardaryeditar(e){
	e.preventDefault(); //No se activará la acción predeterminada del evento
	$("#btnGuardar_registro").prop("disabled",true);
  var formData = new FormData($("#frm_registro")[0]);
  console.log(formData);
	$.ajax({
		url: "http://localhost:8000/user",
	    type: "POST",
	    data: formData,
	    contentType: false,
	    processData: false,
	    success: function(datos){
        console.log(datos);
	    }

	});
  limpiar();
  registro();
  $("#btnGuardar_registro").prop("disabled",false);
}

function mostrarForm(flag){
  if(flag){
    $("#container_img").hide();
    $("#frm_login").show();
    $("#iniciar_sesion").hide();
  }else{
    $("#container_img").show();
    $("#frm_login").hide();
    $("#iniciar_sesion").show();
  }
}

function iniciar_sesion(){
  Swal.fire({
  position: 'center',
  type: 'success',
  title: 'Bienvenido!',
  showConfirmButton: false,
  timer: 3000
}).then((result)=>{
  window.location.href = "./profesores.html";  // sadly this reload
});
}
function registro(){
  Swal.fire({
  position: 'center',
  type: 'success',
  title: 'Se ha registrado exitosamente!',
  text:'Se le notificara al jefe de academia que ha actualizado sus datos. Se le ha enviado un correo para verificar su correo',
  showConfirmButton: false,
  timer: 3000
}).then((result)=>{
  //location.reload();
});
}
init();
