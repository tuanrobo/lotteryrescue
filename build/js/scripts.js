$(function () {
	$('[data-toggle="tooltip"]').tooltip();	
});


const spacingTop = () => {
	var headerHeight = document.getElementById('header').offsetHeight / 16;
	console.log('header height:', headerHeight)
	return document.getElementById('main').style.marginTop= headerHeight + 'rem';	
}
console.log('margin top:', spacingTop())


window.onload = spacingTop()
window.onresize = spacingTop()