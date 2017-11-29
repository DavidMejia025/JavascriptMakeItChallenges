
$(document).ready(function() {

  bindEvents();
  
});


function bindEvents() {
  // Enlaza los eventos que agregan, remuevan y completan TODOS a los elmentos del DOM indicados
 
  $("form").on("submit",crateTodo)


  //$('.delete-buton').on('click', delteTot)
  
  //$("form").on('submit', crateTodo)
  console.log("binding .... aplication.js")
}




/*function buildTodo(todoName) {
  // Eso nos ta un pedazo del DOM
  var todoTemplate = $.trim($('#todo_template').html());
  // Creamos un elemento de jquery a partir del template
  var $todo = $(todoTemplate);
  // Modificamos el texto con el que nos pasen como argumento
  $todo.find('h2').text(todoName);
  // Devuelve el elemento de jquery para ser usado en otra parte.
  return $todo;
}*/

// Crea las funciones que añaden, remueven y completan TODOS.

 crateTodo = function(event){
  
   // tener el control
    event.preventDefault()
    //Tomar la informacion 
    url= this.action
    data= {
      todo_content: $("form .todo").val()} 

    //crar request

    $.ajax({
      url: url,
      method: "POST",
      data: data
    }).done(function(response){
        //console.log(response)
        
        $(".todoContainer ul").append(response)      
    })
  } 
 
