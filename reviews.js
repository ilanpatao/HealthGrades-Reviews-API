// Add the click function for the go button
$('.go').click(function(){
	// Get the form values
	var name = $('#name').val();
	var location = $('#location').val();
	if (name == '' || location == ''){
		// Alert if field is blank, else continue
		alert('You didn\'t enter the required fields!');
	} else {
		// Call my API
		$.getJSON("https://www.reviewsmaker.com/api/public/healthgrades?name=" + name + "&location=" + location, function (data){
			// Iterate through the results for this demo and display them on the page
			$.each( data.data.results, function( key, value ) {
			  $('.results').append('<pre><div id="'+value.id+'" style="margin-top:25px;margin-bottom:25px;">');
			  $('#'+value.id+'').append('<b>Name: ' + value.doctorName + "</b><br>");
			  $('#'+value.id+'').append('<b>Specialty: </b>' + value.doctorSpecialty + "<br>");
			  $('#'+value.id+'').append('<b>Profile: </b>' + value.doctorProfile + "<br>");
			  $('#'+value.id+'').append('<b>Total Ratings: </b>' + value.totalRatings + "<br>");
			  $('#'+value.id+'').append('<b>Ratings Percentile: </b>' + value.totalRatingsAvg + "<br>");
			  $('#'+value.id+'').append('<b>Total Score: </b>' + value.totalScore + "<br>");
			  $('#'+value.id+'').append('<b>Total Stars: </b>' + value.totalStars + "<br>");
			  $('#'+value.id+'').append('<b>Summary: </b>' + value.doctorDetails + "<br>");
			  $('#'+value.id+'').append('<b>Result ID: </b>' + value.id + "<br>");
			  $('#'+value.id+'').append('<b>Provider ID: </b>' + value.providerId + "<br>");
			  $('#'+value.id+'').append('<b>Practice: </b>' + value.doctorPractice + "<br>");
			  $('#'+value.id+'').append('<b>Age: </b>' + value.doctorAge + "<hr>");
			  $('#'+value.id+'').append('<b>Gender: </b>' + value.doctorGender + "<br>");
			  $('#'+value.id+'').append('<b>Address: </b>' + value.doctorLocation + "<br>");
			  $('#'+value.id+'').append('<b>Phone: </b>' + value.doctorPhone + "<br>");
			  $('#'+value.id+'').append('<b>Image: </b>' + value.doctorImage + "<br>");
			  $('.results').append('</div></pre><hr>');
			});
			// Display JSON feed in our input for the demo
			var json = JSON.stringify(data);
			$("#jsonresults").val(json);
		});
	}
});