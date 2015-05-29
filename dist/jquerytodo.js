 $(document).on('ready', start);

function start(e) {

    var $inputBox = $('#todo-input');
   
    var $todoButton = $('#add-todo-button');
   
    var $todoForm = $('#todo-form');

    var $myList = $('#list');

    $todoForm.on('submit', addTodo);
    
    
    function addTodo(e) {
        e.preventDefault();

        $myList.html($inputBox.val())
        $inputBox.val('');
        
}

}
        

    