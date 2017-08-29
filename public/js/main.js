$(document).ready(function(){
	localStorage.clear();
	if(!localStorage.getItem("crimes")){
		$.ajax({
			type: "GET",
			url: "http://nflarrest.com/api/v1/crime/?start_pos=63&limit=5",
		}).done(function(crimes){
			let crimeObj = {
				crimes: []
			}
			console.log(crimes);
			crimes.forEach(function(i){
				$("#crimes").append("<tr><td>" + i.Category + "</td></tr>")
				crimeObj.crimes.push(i.Category)
			})
			localStorage.setItem("crimes", JSON.stringify(crimeObj))
		})
	}
	

	if(!localStorage.getItem("crimes2")){
		$.ajax({
			type: "GET",
			url: "http://nflarrest.com/api/v1/crime/?start_pos=97&limit=5",
		}).done(function(crimes){
			let crimeObj = {
				crimes: []
			}
		
			crimes.forEach(function(k){
				crimeObj.crimes.push(k.Category)
			})
		})
	}
	if(!localStorage.getItem("crimes21")){
		let crimeObj2 = {
			crimes2: []
		}
		
			$.ajax({
				type: "GET",
				url: "http://nflarrest.com/api/v1/crime/?start_pos=97&limit=5",
			}).done(function(data){
				console.log(data);
				data.forEach(function(n){
					$("#crimes2").append("<tr><td>" + n + "</td></tr>")
				crimeObj2.crimes2.push(n.Category)
				})	
				localStorage.setItem("crimes2", JSON.stringify(crimeObj2))
			})
		
	}

	let click = false;
	$(crimes2).on("click", function(){
		click = !click
		$(crimes2).val("Next")
		$("#crimes").html("")
		if(click){
			$(change).html("Top Crimes");
			let crimeObj2 = JSON.parse(localStorage.getItem("crimes2"));
			crimeObj2.crimes2.forEach(function(e){
				console.log(e)
				$(crimes).append("<tr><td>" + e + "</td></tr>");
			})
		} else {
			$(crimes2).val("Next")
			$(change).html("Top Crimes")
			let crimeObj = JSON.parse(localStorage.getItem("crimes"));
			crimeObj.crimes.forEach(function(h){
				$("#crimes").append("<tr><td>" + h + "</td></tr>");
			})
		}
	})
	
})
