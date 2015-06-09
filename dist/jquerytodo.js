 $(document).on('ready', start);

function start(e) {

    var $inputBox = $('#todo-input');
   
    var $todoButton = $('#add-todo-button');
   
    var $todoForm = $('#todo-form');

    var $myList = $('#list');

    $todoForm.on('submit', addTodo);

    $.get("http://tiny-pizza-server.herokuapp.com/collections/zamariac", gotServer

    )

    function gotServer(data){
        console.log(data)
    }
    
    
    function addTodo(e) {
        e.preventDefault();

        var todoList = '<div>' +($inputBox.val())+ '</div>'

        $myList.append(todoList)
        

        $.ajax({
            method: "POST",
            url: "http://tiny-pizza-server.herokuapp.com/collections/zamariac",
            data: { Todo: $inputBox.val()}
        })

        $inputBox.val('');

	}

    $myList.on('click', onclick);

    function onclick(e){ 


        $(e.target).css('text-decoration', 'line-through');

    }


	
};




// $.get
// $.post
// $.ajax

    

        

    