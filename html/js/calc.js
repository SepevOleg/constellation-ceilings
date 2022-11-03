
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
		const rangeSpan = document.getElementById('rezultatRange')
		const range = document.getElementById('slider-2')
		let square = document.getElementById('number')
		const maxValue = 70
		let count = range.value
		square.textContent = count
		range.addEventListener('input', (element) => {
			const price = 700
			let value = element.target.value
			console.log(value)
			value = price * value
			console.log(value)
			console.log(rangeSpan.textContent)
			rangeSpan.textContent = value
			square.textContent = element.target.value
		})
	
	
  function oninputRange(idRange) {
		if (idRange==50){ document.getElementById('rezultatRange').innerHTML = 31000; document.getElementById('number').innerHTML = 50;}
		else if (idRange==49){ document.getElementById('rezultatRange').innerHTML = 30400; document.getElementById('number').innerHTML = 49;}
		else if (idRange==48){ document.getElementById('rezultatRange').innerHTML = 29800; document.getElementById('number').innerHTML = 48;}
		else if (idRange==47){ document.getElementById('rezultatRange').innerHTML = 29200; document.getElementById('number').innerHTML = 47;}
		else if (idRange==46){ document.getElementById('rezultatRange').innerHTML = 28600; document.getElementById('number').innerHTML = 46;}
		else if (idRange==45){ document.getElementById('rezultatRange').innerHTML = 28000; document.getElementById('number').innerHTML = 45;}
		else if (idRange==44){ document.getElementById('rezultatRange').innerHTML = 27400; document.getElementById('number').innerHTML = 44;}
		else if (idRange==43){ document.getElementById('rezultatRange').innerHTML = 26800; document.getElementById('number').innerHTML = 43;}
		else if (idRange==42){ document.getElementById('rezultatRange').innerHTML = 26200; document.getElementById('number').innerHTML = 43;}
		else if (idRange==41){ document.getElementById('rezultatRange').innerHTML = 25600; document.getElementById('number').innerHTML = 42;}
		else if (idRange==40){ document.getElementById('rezultatRange').innerHTML = 25000; document.getElementById('number').innerHTML = 40;}
		else if (idRange==39){ document.getElementById('rezultatRange').innerHTML = 24400; document.getElementById('number').innerHTML = 39;}
		else if (idRange==38){ document.getElementById('rezultatRange').innerHTML = 23800; document.getElementById('number').innerHTML = 38;}
		else if (idRange==37){ document.getElementById('rezultatRange').innerHTML = 23200; document.getElementById('number').innerHTML = 37;}
		else if (idRange==36){ document.getElementById('rezultatRange').innerHTML = 22600; document.getElementById('number').innerHTML = 36;}
		else if (idRange==35){ document.getElementById('rezultatRange').innerHTML = 22000; document.getElementById('number').innerHTML = 35;}
		else if (idRange==34){ document.getElementById('rezultatRange').innerHTML = 21400; document.getElementById('number').innerHTML = 34;}
		else if (idRange==33){ document.getElementById('rezultatRange').innerHTML = 19800; document.getElementById('number').innerHTML = 33;}
		else if (idRange==32){ document.getElementById('rezultatRange').innerHTML = 19200; document.getElementById('number').innerHTML = 32;}
		else if (idRange==31){ document.getElementById('rezultatRange').innerHTML = 18600; document.getElementById('number').innerHTML = 31;}
		else if (idRange==30){ document.getElementById('rezultatRange').innerHTML = 18000; document.getElementById('number').innerHTML = 30;}
		else if (idRange==29){ document.getElementById('rezultatRange').innerHTML = 17400; document.getElementById('number').innerHTML = 29;}
		else if (idRange==28){ document.getElementById('rezultatRange').innerHTML = 16800; document.getElementById('number').innerHTML = 28;}
		else if (idRange==27){ document.getElementById('rezultatRange').innerHTML = 16200; document.getElementById('number').innerHTML = 27;}
		else if (idRange==26){ document.getElementById('rezultatRange').innerHTML = 15600; document.getElementById('number').innerHTML = 26;}
		else if (idRange==25){ document.getElementById('rezultatRange').innerHTML = 15000; document.getElementById('number').innerHTML = 25;}
		else if (idRange==24){ document.getElementById('rezultatRange').innerHTML = 14400; document.getElementById('number').innerHTML = 24;}
		else if (idRange==23){ document.getElementById('rezultatRange').innerHTML = 13800; document.getElementById('number').innerHTML = 23;}
		else if (idRange==22){ document.getElementById('rezultatRange').innerHTML = 13200; document.getElementById('number').innerHTML = 22;}
		else if (idRange==21){ document.getElementById('rezultatRange').innerHTML = 12600; document.getElementById('number').innerHTML = 21;}
		else if (idRange==20){ document.getElementById('rezultatRange').innerHTML = 12000; document.getElementById('number').innerHTML = 20;}
		else if (idRange==19){ document.getElementById('rezultatRange').innerHTML = 11400; document.getElementById('number').innerHTML = 19;}
		else if (idRange==18){ document.getElementById('rezultatRange').innerHTML = 10800; document.getElementById('number').innerHTML = 18;}
		else if (idRange==17){ document.getElementById('rezultatRange').innerHTML = 10200; document.getElementById('number').innerHTML = 17;}
		else if (idRange==16){ document.getElementById('rezultatRange').innerHTML = 9600; document.getElementById('number').innerHTML = 16;}
		else if (idRange==15){ document.getElementById('rezultatRange').innerHTML = 9000; document.getElementById('number').innerHTML = 15;}
		else if (idRange==14){ document.getElementById('rezultatRange').innerHTML = 8400; document.getElementById('number').innerHTML = 14;}
		else if (idRange==13){ document.getElementById('rezultatRange').innerHTML = 7800; document.getElementById('number').innerHTML = 13;}
		else if (idRange==12){ document.getElementById('rezultatRange').innerHTML = 7200; document.getElementById('number').innerHTML = 12;}
		else if (idRange==11){ document.getElementById('rezultatRange').innerHTML = 6600; document.getElementById('number').innerHTML = 11;}
		else if (idRange==10){ document.getElementById('rezultatRange').innerHTML = 6000; document.getElementById('number').innerHTML = 10;}
		else if (idRange==9){ document.getElementById('rezultatRange').innerHTML = 5500; document.getElementById('number').innerHTML = 9;}
		else if (idRange==8){ document.getElementById('rezultatRange').innerHTML = 5500; document.getElementById('number').innerHTML = 8;}
		else if (idRange==7){ document.getElementById('rezultatRange').innerHTML = 5500; document.getElementById('number').innerHTML = 7;}
		else if (idRange==6){ document.getElementById('rezultatRange').innerHTML = 5500; document.getElementById('number').innerHTML = 6;}
		else if (idRange==5){ document.getElementById('rezultatRange').innerHTML = 5500; document.getElementById('number').innerHTML = 5;}
}