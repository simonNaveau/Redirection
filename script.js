$(document).ready(function(){
	console.log("prout")
    $('.slider').slider({interval: 6000});
    $('.tap-target').tapTarget({onOpen: function(){console.log("test")}});
    
});

function openHelper(){
	$('.tap-target').tapTarget('open') 
}
