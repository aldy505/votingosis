$(document).ready(function() {
	
	$("#s30").click(function() { setTime("30"); });
	$("#s60").click(function() { setTime("60"); });
	$("#s90").click(function() { setTime("90"); });
	$("#s120").click(function(){ setTime("120"); });
	$("#s180").click(function(){ setTime("180"); });
	
	function setTime(a) {
		a.toString();
		console.log("timer" + a);
		$("input#detik").attr("value",a);
	};
});