var fileName = location.pathname.split("/").slice(-1);
/* add this once server is life to make all pages spanish if navigated to from espana.html
var previousFileName = document.referrer;
*/

//function to change footer language to german
function footerGerman(){
	$("#dImpressumLink").show();
    $("#dContactLink").show();
    $("#erstInfoLink").show();
    $("#kontaktTextD").show();

    $("#sContactLink").hide();
    $("#sImpressumLink").hide();
    $("#kontaktTextS").hide();
}

//function to change footer language to spanish
function footerSpanish(){
	$("#sContactLink").show();
    $("#sImpressumLink").show();
    $("#kontaktTextS").show();

    $("#dImpressumLink").hide();
    $("#dContactLink").hide();
    $("#erstInfoLink").hide();
    $("#kontaktTextD").hide();
}

//function to change contact language to german
function kontaktGerman() {
	$("#kontaktTextD").show();
	$(".kontaktInfoD").show();
	
	$("#kontaktTextS").hide();
	$(".kontaktInfoS").hide();
	footerGerman();
}

//function to change contact language to spanish
function kontaktSpanish() {
	$("#kontaktTextS").show();
	$(".kontaktInfoS").show();

	$("#kontaktTextD").hide();
	$(".kontaktInfoD").hide();
	footerSpanish();
}

//make footer spanish on appropriate pages
function footerLanguage(){
	if(fileName=="espana.html"){
		footerSpanish();

	} else if(fileName!="espana.html"){
	   	footerGerman();
	}
}

//hide spanish contact info if kontakt page is open
function contactLanguage(){
	if(location.pathname.split("/").slice(-1)=="kontakt.html"){
		$(".kontaktInfoS").hide();
	}
}

$(document).ready(function(){
	footerLanguage();
	contactLanguage();
});
