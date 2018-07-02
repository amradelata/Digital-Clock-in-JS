



	const myConst = setInterval(myTimer, 1000);

	function myTimer () {
		const x = new Date();
		const y = x.toLocaleTimeString();
		document.getElementById("MyClockDisplay").innerHTML = y; 
	}