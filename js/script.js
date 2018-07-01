	function showTime () {
		const date = new Date();
		const h = date.getHours();
		const m = date.getMinutes();
		const s = date.getSeconds();
		const session = "AM"

		// if (h == 0){
		// 	h = 12;
		// }
		// if (h > 12){
		// 	h = h - 12; 
		// 	session = "PM";
		// }

		// if(h < 10){
		// 	h = `0 ${h}`;
		// }
		// if (m < 10){
		// 	m = `0 ${m}`;
		// }
		// if(s < 10){
		// 	s = `0 ${s}`;
		// }

		// h = (h < 10) ? "0" + h : h;
		// m = (m < 10) ? "0" + m : m;
		// s = (s < 10) ? "0" + s : s;

		const time = `${h} : ${m} : ${s}   ${session}`   ;

		document.getElementById('MyClockDisplay').innerHTML = time;

		// setInterval(showTime, 1000)

		console.log("fgdjhk")
	}

	showTime();

	// setInterval(showTime, 1000)


	// .innerText

	//setInterval