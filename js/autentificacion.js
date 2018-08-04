jQuery(document).ready(function(){
  $('#boton').click( function( event ){
   event.preventDefault();

   var inicioSesion = {
    email:$("#email").val(),
    password:$("#password").val(),
    name:$("#name").val()
  };

  console.log(inicioSesion);
  firebase.database().ref('productos al instante').push(inicioSesion, function(error) {
   if (error) { throw error; }
   else {
     console.info('guardamos la información');
     location.href="tiendas.html";
   };
 });
})
  
});

$('#boton').click( function( event ){
   event.preventDefault();

   var inicioSesion = {
    email:$("#email").val(),
    password:$("#password").val()
  };

  console.log(inicioSesion);
  firebase.database().ref('productos al instante').push(inicioSesion, function(error) {
   if (error) { throw error; }
   else {
     console.info('guardamos la información');
     location.href="tiendas.html";
   };
 });
});
