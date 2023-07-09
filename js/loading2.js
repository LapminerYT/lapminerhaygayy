// =====================

//        LOADING

// =====================



var timeLimit = 10000;

window.addEventListener("load", function() {

	window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScMiDJ-pcODSz2ajiI5bZYysUkpDkYgznWusw99amgTPOj9AA/viewform?usp=pp_url";

});



var errorTimer = setTimeout(function() {

	document.getElementById("loading").style.display = "none";

	document.getElementById("error-message").style.display = "block";

}, timeLimit);
