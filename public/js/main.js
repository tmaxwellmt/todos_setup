$(document).ready(function () {
  console.log("Hello from JQuery");

  $('delete-btn').on('click', function () { // click to delete todo
    var id =$(this).attr('id');
    $ajax({
      url: '/api/toDos/'+id,
      method: 'Delete'
    }).done(function (data) {
      console.log(data);
      window.location = '/toDos';
    });
    $(this).closest('tr').remove();
  });

  $('.update').on('click', function (){
    var todoId = $(this).attr('id').slice(7);
    //console.log(todoId);
    $.get('/api/toDos' + todoId).done (function (data) {
      console.log(data);
      $('#name').val(data.name);
      $('#date').val(data.date);
      $('#status').val(data.status);
    });
  });

  $('update_todo').on('click', function (){
    var updateData = {name: $('#name').val(),
                      date: $('#date').val(),
                      status: $('#status').val(),
                     };

  $('#newTodo').submit(function (e) {
    e.preventDefault(),
      var name = $('#name').val(),
      var date = $('#species').val(),
      var status = $('#status').val(),
    });
  });

    $.ajax({
      url: '/api/toDos/',
      method: 'POST',
      data: {
        name: name,
        date: date,
        status: status,
      }
    }).done(function (data) {
  });
