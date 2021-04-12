const selectElement =  function(element){
    return document.querySelector(element);
}
var  menuToggler = selectElement ('.menu-toggle');
var  body = selectElement ('body');

/* agrega  y remueve la clase open */

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});