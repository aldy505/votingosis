$(document).ready(function() {
	// hide/show
    $(".counter").hide();
    $(".home").show();
	$(".summary").hide();
	
	for (c = 1; c < 5; c++) {
		check = localStorage.getItem("calon" + c);
		cgolp = localStorage.getItem("golput");
		if (typeof check !== "undefined" || "0") {
			//fine
		} else {
			localStorage.setItem("calon" + c, "0");
		}
		if (typeof cgolp !== "undefined" || "0") {
			//fine
		} else {
			localStorage.setItem("golput", "0");
		}
	}
	
	function hancur() {
		for (c = 1; c < 5; c++) {
			check = localStorage.getItem("calon" + c);
			cgolp = localStorage.getItem("golput");
			localStorage.setItem("calon" + c, "0");
			localStorage.setItem("golput", "0");
			$("quick" + c).text(localStorage.getItem("calon" + c));
			$("golpat").text(localStorage.getItem("golput"));
		}
	}
	function keCounter() {
		$(".counter").show();
        $(".home").hide();
        $(".summary").hide();
	}
	function keHome() {
		$(".counter").hide();
        $(".summary").hide();
        $(".home").show();
	}
	function keSummary() {
		$(".counter").hide();
        $(".summary").show();
        $(".home").hide();
	}
	
    $("#counter").click(function() {	keCounter();	});
    $("#home").click(function() {		keHome();		});
    $("#timer").click(function() {		window.location.replace("timer.html");	});
    $("#guru").click(function() {		window.location.replace("guru.html");	});
	$("#reset").click(function(){ 		hancur();		});
	$("#summary").click(function(){ 	keSummary();	});
	$("#pencetModal").click(function(){	menang(); });
	
	function menang() {
		var jumlah = [parseInt(localStorage.getItem("calon1")), parseInt(localStorage.getItem("calon2")), parseInt(localStorage.getItem("calon3")), parseInt(localStorage.getItem("calon4"))];
		var besar = Math.max.apply(null, jumlah);
		var nama = ["A", "B", "C", "D"];
		for (i = 0; i < 4; i++) {
			if (besar === jumlah[i]) {
				var b = i + 1;
				$("#winImg").attr("src", "calon" + b + ".jpg");
				$("#winName").text(nama[i]);
				$("#winVote").text(jumlah[i] + " total vote!");
			} 
		}
	}
	
	// counter
	$("#calon1").click(function() { pilih(1);	});
	$("#calon2").click(function() { pilih(2);	});
	$("#calon3").click(function() { pilih(3);	});
	$("#calon4").click(function() { pilih(4);	});
	$("#calon1k").click(function(){ kurang(1);	});
	$("#calon2k").click(function(){ kurang(2);	});
	$("#calon3k").click(function(){ kurang(3);	});
	$("#calon4k").click(function(){ kurang(4);	});
	$("#golput").click(function(){ 	golput(); 	});
	$("#golpit").click(function(){ 	tuplog(); 	});
	$("#revbut").click(function(){	reveal(); 	});
	
	function tuplog() {
		var c = parseInt(localStorage.getItem("golput")) - 1;
		c.toString();
		localStorage.setItem("golput", c);
		$("#golpat").text(localStorage.getItem("golput"));
		console.log(c);
	}
	
	function kurang(a) {
		a.toString();
		var skrg = parseInt(localStorage.getItem("calon" + a)) - 1;
		skrg.toString();
		localStorage.setItem("calon" + a, skrg);
		$("#quick" + a).text(localStorage.getItem("calon" + a));
		console.log(skrg);
		console.log(localStorage.getItem("calon" + a));
	}
	
	function golput() {
		var skrang = parseInt(localStorage.getItem("golput")) + 1;
		skrang.toString();
		localStorage.setItem("golput", skrang);
		$("#golpat").text(localStorage.getItem("golput"));
	}
	
	function pilih(z) {
		z.toString();
		var skrg = parseInt(localStorage.getItem("calon" + z)) + 1;
		skrg.toString();
		localStorage.setItem("calon" + z, skrg);
		$("#quick" + z).text(localStorage.getItem("calon" + z));
		console.log(skrg);
		console.log(localStorage.getItem("calon" + z));
	}
	function reveal() {
		for (d = 1; d < 5; d++) {
			num = localStorage.getItem("calon" + d);
			$("#buat" + d).text(num);
		}
		$("#bgol").text(localStorage.getItem("golput"));
		totalv = parseInt(localStorage.getItem("calon1")) + parseInt(localStorage.getItem("calon2")) + parseInt(localStorage.getItem("calon3")) + parseInt(localStorage.getItem("calon4")) + parseInt(localStorage.getItem("golput"));
		$("#totalv").text(totalv);
	}
});