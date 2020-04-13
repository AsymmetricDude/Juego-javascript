$(".jugador img").click(function(){

$(this).animate({"width" : "20%", "height": "200px"}).animate({"width" : "15%", "height": "150px"})
$(".jugador img").not(this).fadeOut(500).fadeIn(500)


var opcUser = $(this).attr("src");
var aleatorio = Math.floor(Math.random()*5);

var misImagenes = new Array(4)
  misImagenes [0]= "img/piedra.jpg";
  misImagenes [1]= "img/papel.jpg";
  misImagenes [2]= "img/tijera.jpg";
  misImagenes [3]= "img/lagarto.jpg";
 misImagenes [4]= "img/spock.jpg";

var randomImg = misImagenes[aleatorio]







if (randomImg == misImagenes [0] ) {$(".maqui").attr("src","img/piedra.jpg")

$(".maqui").fadeIn(500).animate({"width" : "20%", "height": "200px"}).animate({"width" : "15%", "height": "150px"})}



if (randomImg == misImagenes [1]) {$(".maqui").attr("src","img/papel.jpg")
$(".maqui").fadeIn(500).animate({"width" : "20%", "height": "200px"}).animate({"width" : "15%", "height": "150px"})}




if (randomImg == misImagenes [2]) {$(".maqui").attr("src","img/tijera.jpg")
$(".maqui").fadeIn(500).animate({"width" : "20%", "height": "200px"}).animate({"width" : "15%", "height": "150px"})}




if (randomImg == misImagenes [3]) {$(".maqui").attr("src","img/lagarto.jpg")
$(".maqui").fadeIn(500).animate({"width" : "20%", "height": "200px"}).animate({"width" : "15%", "height": "150px"})}



if (randomImg == misImagenes [4]) {$(".maqui").attr("src","img/spock.jpg")
$(".maqui").fadeIn(500).animate({"width" : "20%", "height": "200px"}).animate({"width" : "15%", "height": "150px"})}



if (  opcUser == "img/tijera.jpg"  &&  randomImg ==  "img/papel.jpg" ||
	 opcUser == "img/papel.jpg"  &&  randomImg ==  "img/piedra.jpg" ||
	 opcUser == "img/piedra.jpg"  &&  randomImg ==  "img/lagarto.jpg" ||
	  opcUser == "img/lagarto.jpg" &&  randomImg ==  "img/spock.jpg" ||
	 opcUser == "img/spock.jpg" &&  randomImg ==  "img/tijera.jpg" ||
	 opcUser == "img/tijera.jpg" &&  randomImg ==  "img/lagarto.jpg" ||
	  opcUser ==  "img/lagarto.jpg" &&  randomImg ==  "img/papel.jpg" ||
	  opcUser == "img/papel.jpg" &&  randomImg ==  "img/spock.jpg" ||
	 opcUser ==  "img/spock.jpg"  &&  randomImg==  "img/piedra.jpg" ||
	 opcUser == "img/piedra.jpg" &&  randomImg ==  "img/tijera.jpg"

	

	){$(".texto").html("Ganaste");
}



	 else if ( 
  randomImg == "img/tijera.jpg"  &&  opcUser ==  "img/papel.jpg" ||
	 randomImg == "img/papel.jpg"  &&  opcUser ==  "img/piedra.jpg" ||
	 randomImg == "img/piedra.jpg"  &&  opcUser ==  "img/lagarto.jpg" ||
	  randomImg == "img/lagarto.jpg" &&  opcUser ==  "img/spock.jpg" ||
	 randomImg == "img/spock.jpg" &&  opcUser ==  "img/tijera.jpg" ||
	 randomImg == "img/tijera.jpg" &&  opcUser ==  "img/lagarto.jpg" ||
	  randomImg ==  "img/lagarto.jpg" &&  opcUser ==  "img/papel.jpg" ||
	  randomImg == "img/papel.jpg" &&  opcUser ==  "img/spock.jpg" ||
	 randomImg ==  "img/spock.jpg"  &&  opcUser ==  "img/piedra.jpg" ||
	 randomImg == "img/piedra.jpg" &&  opcUser ==  "img/tijera.jpg"

	
	  
	){$(".texto").html("Perdiste")}




	 	else
	 		{$(".texto").html("Empate")}










 
	

	
});




