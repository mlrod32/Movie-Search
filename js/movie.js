// $(document).ready(function(){
// 	console.log("Ready");
// 	var searchBar = document.getElementById('movieSearcher');

// 	$("#mainForm").submit(function(evt){
// 		evt.preventDefault();
// 	});

// 	$("#moveSearcher").keyup(function(){
// 		console.log("Search");
// 		var valueSearch = $("#movieSearcher").val();
// 		//searches only is length is 3
// 		if(valueSearch.length > 3){
// 			console.log("Searching");
// 			$.ajax({
// 				type: "GET",
// 				url: "http://www.omdbapi.com/?apikey=971f8e95&",
// 				data: {
// 					t: searchBar.value
// 				},
// 				dataType: "json",
// 				success: function(response){
// 					$('#movie-title').html(response.Title);
// 					$('#poster').attr("src",response.Poster);
// 					$('#para').html(response.Plot);
// 				}
// 			});
// 		}

// 	});

// });


$(document).ready(function(){
	$("#movieSearcher").keyup(function(){
		if($("#movieSearcher").val().length >= 3){
		    var input = $("#movieSearcher").val();

		    $.ajax({  url: "http://www.omdbapi.com/?apikey=971f8e95&",  
			data: {    t: input  },  
			dataType: "json",  
			success: function(response) 
			{
				$("#movie-title").html(response.Title);
				$('#poster').attr("src",response.Poster);
				$('#para').html(response.Plot);
			}
			});
		}
	});

	
	
});


function print(){
	var star = "*"
	for (var i = 10; i >=0; i--) {
		console.log(star.repeat(i));
	}
}

function deleteInput(op){
		document.getElementById('movieSearcher').value = "";
	};