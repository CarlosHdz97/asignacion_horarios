function init(){
  mostrarForm(false);
}
function mostrarForm(flag){
  if(flag){
    $("#frm_agregar").show();
    $("#detalles").hide();
  }else{
    $("#frm_agregar").hide();
    $("#detalles").show();
  }
}

function delete_item(){
  Swal.fire({
  title: '¿Está seguro que desea eliminar el registro?',
  text: "No sera posible revertir los cambios una vez se hayan eliminado los datos!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, estoy seguro!'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Item eliminado!',
      'Los datos han sido eliminado',
      'success'
    )
  }
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
function guardar_datos(){
  Swal.fire({
  position: 'center',
  type: 'success',
  title: 'Datos registrados exitosamente!',
  showConfirmButton: false,
  timer: 2000
}).then((result)=>{
  location.reload();
  //window.location.href = "./profesores.html";  // sadly this reload
});
}

function subir_archivo(){
  Swal.fire({
  position: 'center',
  type: 'success',
  title: 'Se ha subido el archivo exitosamente!',
  text: "Por favor verifique que los datos sean los correctos antes de guardarlos en el sistema",
  showConfirmButton: false,
  timer: 4000
}).then((result)=>{
  $('#subir_archivo').modal('hide');
  mostrarForm(true);
});
}
init();
