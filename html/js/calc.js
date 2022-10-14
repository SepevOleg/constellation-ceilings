
	$( function() {
		var handle = $( "#custom" );
		$( "#slider" ).slider({
			min: 5,
			max: 50,
			value: 25,
          create: function() {
            handle.text( $( this ).slider( "" ) );
          },
          slide: function( event, ui ) {
            $(".main-calc_left__number").text( ui.value );
            oninputRange(ui.value);
          }
        }
      );
	} );

  function oninputRange(idRange) {
		if (idRange==50){ document.getElementById('rezultatRange').innerHTML = 23100; document.getElementById('number').innerHTML = 50;}
		else if (idRange==49){ document.getElementById('rezultatRange').innerHTML = 22740; document.getElementById('number').innerHTML = 49;}
		else if (idRange==48){ document.getElementById('rezultatRange').innerHTML = 22295; document.getElementById('number').innerHTML = 48;}
		else if (idRange==47){ document.getElementById('rezultatRange').innerHTML = 21935; document.getElementById('number').innerHTML = 47;}
		else if (idRange==46){ document.getElementById('rezultatRange').innerHTML = 21490; document.getElementById('number').innerHTML = 46;}
		else if (idRange==45){ document.getElementById('rezultatRange').innerHTML = 20875; document.getElementById('number').innerHTML = 45;}
		else if (idRange==44){ document.getElementById('rezultatRange').innerHTML = 20515; document.getElementById('number').innerHTML = 44;}
		else if (idRange==43){ document.getElementById('rezultatRange').innerHTML = 20070; document.getElementById('number').innerHTML = 43;}
		else if (idRange==42){ document.getElementById('rezultatRange').innerHTML = 19625; document.getElementById('number').innerHTML = 43;}
		else if (idRange==41){ document.getElementById('rezultatRange').innerHTML = 19180; document.getElementById('number').innerHTML = 42;}
		else if (idRange==40){ document.getElementById('rezultatRange').innerHTML = 18735; document.getElementById('number').innerHTML = 40;}
		else if (idRange==39){ document.getElementById('rezultatRange').innerHTML = 18290; document.getElementById('number').innerHTML = 39;}
		else if (idRange==38){ document.getElementById('rezultatRange').innerHTML = 17845; document.getElementById('number').innerHTML = 38;}
		else if (idRange==37){ document.getElementById('rezultatRange').innerHTML = 17400; document.getElementById('number').innerHTML = 37;}
		else if (idRange==36){ document.getElementById('rezultatRange').innerHTML = 16955; document.getElementById('number').innerHTML = 36;}
		else if (idRange==35){ document.getElementById('rezultatRange').innerHTML = 16425; document.getElementById('number').innerHTML = 35;}
		else if (idRange==34){ document.getElementById('rezultatRange').innerHTML = 15980; document.getElementById('number').innerHTML = 34;}
		else if (idRange==33){ document.getElementById('rezultatRange').innerHTML = 15450; document.getElementById('number').innerHTML = 33;}
		else if (idRange==32){ document.getElementById('rezultatRange').innerHTML = 14920; document.getElementById('number').innerHTML = 32;}
		else if (idRange==31){ document.getElementById('rezultatRange').innerHTML = 14475; document.getElementById('number').innerHTML = 31;}
		else if (idRange==30){ document.getElementById('rezultatRange').innerHTML = 14030; document.getElementById('number').innerHTML = 30;}
		else if (idRange==29){ document.getElementById('rezultatRange').innerHTML = 13415; document.getElementById('number').innerHTML = 29;}
		else if (idRange==28){ document.getElementById('rezultatRange').innerHTML = 12885; document.getElementById('number').innerHTML = 28;}
		else if (idRange==27){ document.getElementById('rezultatRange').innerHTML = 12355; document.getElementById('number').innerHTML = 27;}
		else if (idRange==26){ document.getElementById('rezultatRange').innerHTML = 11910; document.getElementById('number').innerHTML = 26;}
		else if (idRange==25){ document.getElementById('rezultatRange').innerHTML = 11380; document.getElementById('number').innerHTML = 25;}
		else if (idRange==24){ document.getElementById('rezultatRange').innerHTML = 10935; document.getElementById('number').innerHTML = 24;}
		else if (idRange==23){ document.getElementById('rezultatRange').innerHTML = 10405; document.getElementById('number').innerHTML = 23;}
		else if (idRange==22){ document.getElementById('rezultatRange').innerHTML = 9875; document.getElementById('number').innerHTML = 22;}
		else if (idRange==21){ document.getElementById('rezultatRange').innerHTML = 9430; document.getElementById('number').innerHTML = 21;}
		else if (idRange==20){ document.getElementById('rezultatRange').innerHTML = 8900; document.getElementById('number').innerHTML = 20;}
		else if (idRange==19){ document.getElementById('rezultatRange').innerHTML = 8450; document.getElementById('number').innerHTML = 19;}
		else if (idRange==18){ document.getElementById('rezultatRange').innerHTML = 8010; document.getElementById('number').innerHTML = 18;}
		else if (idRange==17){ document.getElementById('rezultatRange').innerHTML = 7560; document.getElementById('number').innerHTML = 17;}
		else if (idRange==16){ document.getElementById('rezultatRange').innerHTML = 7120; document.getElementById('number').innerHTML = 16;}
		else if (idRange==15){ document.getElementById('rezultatRange').innerHTML = 6800; document.getElementById('number').innerHTML = 15;}
		else if (idRange==14){ document.getElementById('rezultatRange').innerHTML = 6400; document.getElementById('number').innerHTML = 14;}
		else if (idRange==13){ document.getElementById('rezultatRange').innerHTML = 5950; document.getElementById('number').innerHTML = 13;}
		else if (idRange==12){ document.getElementById('rezultatRange').innerHTML = 5550; document.getElementById('number').innerHTML = 12;}
		else if (idRange==11){ document.getElementById('rezultatRange').innerHTML = 5500; document.getElementById('number').innerHTML = 11;}
		else if (idRange==10){ document.getElementById('rezultatRange').innerHTML = 5500; document.getElementById('number').innerHTML = 10;}
		else if (idRange==9){ document.getElementById('rezultatRange').innerHTML = 5500; document.getElementById('number').innerHTML = 9;}
		else if (idRange==8){ document.getElementById('rezultatRange').innerHTML = 5500; document.getElementById('number').innerHTML = 8;}
		else if (idRange==7){ document.getElementById('rezultatRange').innerHTML = 5500; document.getElementById('number').innerHTML = 7;}
		else if (idRange==6){ document.getElementById('rezultatRange').innerHTML = 5500; document.getElementById('number').innerHTML = 6;}
		else if (idRange==5){ document.getElementById('rezultatRange').innerHTML = 5500; document.getElementById('number').innerHTML = 5;}
	}
