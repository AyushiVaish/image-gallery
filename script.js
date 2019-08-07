var imageSearch = "";

function checkImage() {
	let search=document.querySelector("#search").value;
	imageSearch=search;
	if(!search || search==="") {
		alert("Bank Value supplied");
		return;
	}
	
	var queryURL = "http://localhost:5000/" + search;
	
	fetch(queryURL)
	.then(function(response) {
		return response.json();
	})
	.then (function (result) {
		displayLocationResult(result);
	})
	.catch(function(error) {
		console.log(error.message);
	});
}

function displayLocationResult(result) {
	result=result.images;
	console.log(result);
	
	let msgDiv=document.querySelector("#message");
	let div=document.querySelector("#result");
	
	if(result.message) {
		div.innerHTML="";
		msgDiv.innerHTML=`<div class=" alert alert-danger alert-dismissible" role="alert"> \
							<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
							<strong>oops!</strong> ${result.message} \
						  </div>`;
							
	}

	
else {
			msgDiv.innerHTML=`<div class=" alert alert-success alert-dismissible" role="alert"> \
							<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
							<h4>${imageSearch}</h4>\
						  </div>`;
			div.innerHTML="";
	
	for(let i=0;i<result.length;i++) {
		let image = `<div class="jumbotron alert-success" id="id_${i}"> \
								<div class="row">
									<div class=col-sm-4 col-xs-6>
										<h4>Title:</h4><h5 style="color:blue"> ${result[i].title}</h5>
									</div>
									<div>
										<img title="${result[i].caption}" src="${result[i].display_sizes[0].uri}">
									</div>
					</div>`;
$("#result").append(image);
	}
	console.log(result);
}
	
	
}