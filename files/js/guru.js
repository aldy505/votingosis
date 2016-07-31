$(function() {
    function o() {
        for (t = 1; 5 > t; t++) {
			check = localStorage.getItem("calon" + t);
			cgolp = localStorage.getItem("golput");
			localStorage.setItem("calon" + t, "0");
			localStorage.setItem("golput", "0");
			$("#gurucl" + t).text(localStorage.getItem("calon" + t));
			$("#golpat").text(localStorage.getItem("golput"));
		}
    }

    function t(o) {
        o.toString();
        var t = localStorage.getItem("calon" + o);
        localStorage.setItem("calon" + o, parseInt(t) + 2);
		$("#gurucl" + o).text(localStorage.getItem("calon" + o));
		console.log(t); console.log(localStorage.getItem("calon" + o));
    }

    function c(o) {
        o.toString();
        var t = parseInt(localStorage.getItem("calon" + o));
        localStorage.setItem("calon" + o, t - 2);
		$("#gurucl" + o).text(localStorage.getItem("calon" + o));
		console.log(t), console.log(localStorage.getItem("calon" + o));
    }
	
	function tuplog() {
		var c = parseInt(localStorage.getItem("golput")) - 1;
		c.toString();
		localStorage.setItem("golput", c);
		$("#golpat").text(localStorage.getItem("golput"));
		console.log(c);
	}
	
	function golput() {
		var skrang = parseInt(localStorage.getItem("golput")) + 1;
		skrang.toString();
		localStorage.setItem("golput", skrang);
		$("#golpat").text(localStorage.getItem("golput"));
	}
    $("#guru1").click(function() {
        t(1)
    }), $("#kguru1").click(function() {
        c(1)
    }), $("#guru2").click(function() {
        t(2)
    }), $("#kguru2").click(function() {
        c(2)
    }), $("#guru3").click(function() {
        t(3)
    }), $("#kguru3").click(function() {
        c(3)
    }), $("#guru4").click(function() {
        t(4)
    }), $("#kguru4").click(function() {
        c(4)
    }), $("#reset").click(function() {
        o()
    }), $("#golput").click(function(){ 	golput(); 	});
	$("#golpit").click(function(){ 	tuplog(); 	});
});