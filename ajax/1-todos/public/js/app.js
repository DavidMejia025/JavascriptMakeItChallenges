$(document).ready(function() {
  bindEvents();
});


function bindEvents() {
  // Enlaza los eventos que agregan, remuevan y completan TODOS a los elmentos del DOM indicados
  $('.delete-buton').on('click', delteTot)
  $('form').on('submit', createTodo)
}

function delteTot(){
  event.preventDefault();
  console.log(this)
  console.log(this.method)
}
function createTodo(){
  event.preventDefault();
  $.ajax({
    url: $(this).attr('action'),
    method: "POST",
    data: {todo_content: this.todo_content.value}

  }).done(function(response){
      console.log(response)
      //$(".post-container").append(response)

      $('todo_elements').append('<li> Hola aqui estoy</li>')
    })
  
}
function buildTodo(todoName) {
  // Eso nos ta un pedazo del DOM
  var todoTemplate = $.trim($('#todo_template').html());
  // Creamos un elemento de jquery a partir del template
  var $todo = $(todoTemplate);
  // Modificamos el texto con el que nos pasen como argumento
  $todo.find('h2').text(todoName);
  // Devuelve el elemento de jquery para ser usado en otra parte.
  return $todo;
}

// Crea las funciones que añaden, remueven y completan TODOS.
