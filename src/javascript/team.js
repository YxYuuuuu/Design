(()=>{

	let img =document.getElementById('img');
	img.classList.add("start");
	window.onload = () =>{
		img.classList.remove("start")
		img.classList.add("end");
		
	}
})()