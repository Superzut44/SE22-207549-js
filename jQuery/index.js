// Code Vanilla JS
// --

// Get element by ID

// const el_vanilla = document.getElementById('vanilla');
const el_vanilla = document.querySelectorAll('#vanilla')[0];
console.log(el_vanilla);


// Create an element

const vanilla_btn = document.createElement('BUTTON');
      vanilla_btn.innerText = "Click Me (vanilla btn)";

el_vanilla.append( vanilla_btn );


// Btn click event

vanilla_btn.addEventListener('click', function(){
    console.log("Vanilla btn clicked !");

    const parent = vanilla_btn.parentNode;
    console.log(parent);

    parent.style.backgroundColor = "red";
});





// Code jQuery
// --


// Get element by ID

const el_jquery = $('#jquery')[0];
console.log(el_jquery);


// Create an element

const jquery_btn = $('<button></button>');
      jquery_btn.text('Click Me (jQuery btn)');

$(el_jquery).append( jquery_btn );


// Btn click event

jquery_btn.on('click', function(){
    console.log("jQuery btn clicked !");

    const parent = jquery_btn.parent();
    console.log( parent );

    // parent.css('background-color', "red");
    parent.css({
        backgroundColor: "red"
    });
})


// -----------------------------------------------------------------------------

console.log( $ );
console.log( jQuery );

// var jquery = function(){
//     function css(){}
// }
// var $ = jquery;


const jquery_html_node = $($('#jquery')[0]);


// Les methodes jquery sont Getter et Setter
// -> node.method() // Getter
// -> node.method(value) // Setter

console.log( jquery_html_node.height() );

jquery_html_node.height(function(){
    return 50 + 50 + 'px';
});

console.log( jquery_html_node.height() );

// jquery_html_node.animate(
//     {height: '400px'},
//     {
//         duration: 5000,
//         complete: function(){
//             alert("C'est tout vert !");
//         }
//     }
// )


// -----------------------------------------------------------------------------
// Selecteur jQuery

// CSS
// Selecteur d'id           #myId {}
// Selecteur de class       .myClass {}
// Selecteur de type        div {}
// Selecteur d'attribut     [type=checkbox] {}

// jQuery
// Selecteur d'id           $('#myId')
// Selecteur de class       $('.myClass')
// Selecteur de type        $('div')
// Selecteur d'attribut     $('[type=checkbox]')

// Vanilla
// Selecteur d'id           document.querySelector('#myId')
// Selecteur de class       document.querySelector('.myClass')
// Selecteur de type        document.querySelector('div')
// Selecteur d'attribut     document.querySelector('[type=checkbox]')
