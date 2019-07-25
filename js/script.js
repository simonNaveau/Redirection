$(document).ready(function(){
    $('.slider').slider({interval: 6000});
    $('.tap-target').tapTarget();
    
});

function openHelper(){
	$('.tap-target').tapTarget('open') 
}
