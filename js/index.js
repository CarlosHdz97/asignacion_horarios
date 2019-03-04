function init(){
  $("#frm_login").hide();
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
function cerrar_sesion(){
  Swal.fire({
  position: 'center',
  type: 'success',
  title: 'Adios!',
  showConfirmButton: false,
  timer: 3000
}).then((result)=>{
  window.location.href = "./index.html";  // sadly this reload
});
}
init();
