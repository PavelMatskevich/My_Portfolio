window.onload = function() {
	var inp_name =  document.querySelector("input[name='field1']");
	var inp_email =  document.querySelector("input[name='field2']");
	var inp_youInterested =  document.querySelector("input[name='field3']");
	
	var send = document.querySelector("#send");
	send.addEventListener("submit", function() {
		
		validate(inp_name, inp_youInterested);
		
		var params = 'name=' + inp_name.value + '&' + 'email=' + inp_email.
		value + '&' + 'youInterested' + inp_youInterested.value;
		ajaxPost(params);
	});
}

function validate(name, interested) {
	var patternForName = /^[_a-zA-Z0-9à-ÿÀ-ß¸¨ ]+$/;
	var patternForYouInterested = /^[_a-zA-Z0-9à-ÿÀ-ß¸¨ ]+$/;
	var checkName = name.value.search(patternForName) != -1;
	var checkYouInterested = interested.value.search(patternForYouInterested) != -1;
	return checkName && checkYouInterested;
}

function ajaxPost(params) {
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			if (request.responseText == "1") {
				document.querySelector('form').style.display = "none";
			}
			else {
				alert("Thank you!");
			}
		}
	}
	
	request.open("POST", "mail.php", true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	request.send(params);	
}		