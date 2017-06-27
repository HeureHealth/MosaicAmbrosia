// to generalize code for changing client logo images and navigation menu item icons

alert(general_info[0]);

//window.onload = function(){
//document.getElementById("logo").src = "https://www.hallaminternet.com/img/social_rss.png";
//document.getElementById("pic").src = "https://www.hallaminternet.com/img/social_rss.png";

// To read customer values from JSON file
/*for (var i=0; i<users.length; i++){
	console.log("User name: "+users[i].uname);
    console.log("User logo: "+users[i].logo);   
	console.log("User photo: "+users[i].uimg);
	console.log("Nav Logo: "+users[i].navimg);
    }
*/

//window.onload = function(){
/*var vector = general_info.vector, customer_info = general_info.customer_info, level = general_info.level;

var path_img = "..\/images\/";
var cust_logo = customer_info.logo;
var cust_img = customer_info.uimg;
var cust_name = customer_info.uname;
var hosp_logo = customer_info.navimg;
*/
//alert(path_img+hosp_logo);
//alert(document.getElementById("logo").src);
/*document.getElementById("logo").src = path_img+cust_logo;
document.getElementById("pic").src = path_img+cust_img;
document.getElementById("uname").innerHTML = cust_name;
document.getElementById("navlogoitem1").src = path_img+hosp_logo;*/
/*
document.getElementById("navlogoitem2").src = path_img+hosp_logo;
document.getElementById("navlogoitem3").src = path_img+hosp_logo;
document.getElementById("navlogoitem4").src = path_img+hosp_logo;
document.getElementById("navlogoitem5").src = path_img+hosp_logo;
document.getElementById("navlogoitem6").src = path_img+hosp_logo;
document.getElementById("navlogoitem7").src = path_img+hosp_logo;
*/
/*

// To span the hospital name, vectors from the customer_name.js file
	
	
	//hospital_logo.innerHTML = customer_info.navimg;
	customer_info.innerHTML = customer_info.hosp_name;
			
	var vector1_expansion = document.getElementById("vector1");
	vector1_expansion.innerHTML =  customer_info.innerHTML + " " + vector.vector1;
	
	var vector2_expansion = document.getElementById("vector2");
	vector2_expansion.innerHTML =  customer_info.innerHTML + " " + vector.vector2;
	
	
	var vector3_expansion = document.getElementById("vector3");
	vector3_expansion.innerHTML =  customer_info.innerHTML + " " + vector.vector3;
	
	
	var vector4_expansion = document.getElementById("vector4");
	vector4_expansion.innerHTML =  customer_info.innerHTML + " " + vector.vector4;
	
	
	var vector5_expansion = document.getElementById("vector5");
	vector5_expansion.innerHTML =  customer_info.innerHTML + " " + vector.vector5;
	
	
	var vector6_expansion = document.getElementById("vector6");
	vector6_expansion.innerHTML =  customer_info.innerHTML + " " + vector.vector6;
	
	
	var vector7_expansion = document.getElementById("vector7");
	vector7_expansion.innerHTML =  customer_info.innerHTML + " " + vector.vector7;
	
	// To span levels in each vector
	//Vector - Level1
	var level1_expansion = document.getElementById("level1");
	var level10_expansion = document.getElementById("level10");
	var level11_expansion = document.getElementById("level11");
	var level12_expansion = document.getElementById("level12");
	var level13_expansion = document.getElementById("level13");
	var level14_expansion = document.getElementById("level14");
	var level15_expansion = document.getElementById("level15");
	
	
	level1_expansion.innerHTML = level.level1;
	level10_expansion.innerHTML = level.level1;
	level11_expansion.innerHTML = level.level1;
	level12_expansion.innerHTML = level.level1;
	level13_expansion.innerHTML = level.level1;
	level14_expansion.innerHTML = level.level1;
	level15_expansion.innerHTML = level.level1;
	
	//Vector - Level2
	var level2_expansion = document.getElementById("level2");
	var level20_expansion = document.getElementById("level20");
	var level21_expansion = document.getElementById("level21");
	var level22_expansion = document.getElementById("level22");
	var level23_expansion = document.getElementById("level23");
	var level24_expansion = document.getElementById("level24");
	var level25_expansion = document.getElementById("level25");
	
	level2_expansion.innerHTML = level.level2;
	level20_expansion.innerHTML = level.level2;
	level21_expansion.innerHTML = level.level2;
	level22_expansion.innerHTML = level.level2;
	level23_expansion.innerHTML = level.level2;
	level24_expansion.innerHTML = level.level2;
	level25_expansion.innerHTML = level.level2;
	
	//Vector - Level3
	var level3_expansion = document.getElementById("level3");
	var level30_expansion = document.getElementById("level30");
	var level31_expansion = document.getElementById("level31");
	var level32_expansion = document.getElementById("level32");
	var level33_expansion = document.getElementById("level33");
	var level34_expansion = document.getElementById("level34");
	var level35_expansion = document.getElementById("level35");
	
	level3_expansion.innerHTML = level.level3;
	level30_expansion.innerHTML = level.level3;
	level31_expansion.innerHTML = level.level3;
	level32_expansion.innerHTML = level.level3;
	level33_expansion.innerHTML = level.level3;
	level34_expansion.innerHTML = level.level3;
	level35_expansion.innerHTML = level.level3;
	
	//Vector - Level4
	var level4_expansion = document.getElementById("level4");
	var level40_expansion = document.getElementById("level40");
	var level41_expansion = document.getElementById("level41");
	var level42_expansion = document.getElementById("level42");
	var level43_expansion = document.getElementById("level43");
	var level44_expansion = document.getElementById("level44");
	var level45_expansion = document.getElementById("level45");
	
	level4_expansion.innerHTML = level.level4;
	level40_expansion.innerHTML = level.level4;
	level41_expansion.innerHTML = level.level4;
	level42_expansion.innerHTML = level.level4;
	level43_expansion.innerHTML = level.level4;
	level44_expansion.innerHTML = level.level4;
	level45_expansion.innerHTML = level.level4;
	
	//Vector - Level5
	var level5_expansion = document.getElementById("level5");
	var level50_expansion = document.getElementById("level50");
	var level51_expansion = document.getElementById("level51");
	var level52_expansion = document.getElementById("level52");
	var level53_expansion = document.getElementById("level53");
	var level54_expansion = document.getElementById("level54");
	var level55_expansion = document.getElementById("level55");
	
	level5_expansion.innerHTML = level.level5;
	level50_expansion.innerHTML = level.level5;
	level51_expansion.innerHTML = level.level5;
	level52_expansion.innerHTML = level.level5;
	level53_expansion.innerHTML = level.level5;
	level54_expansion.innerHTML = level.level5;
	level55_expansion.innerHTML = level.level5;
	
	//Vector - Level6
	var level6_expansion = document.getElementById("level6");
	var level60_expansion = document.getElementById("level60");
	var level61_expansion = document.getElementById("level61");
	var level62_expansion = document.getElementById("level62");
	var level63_expansion = document.getElementById("level63");
	var level64_expansion = document.getElementById("level64");
	var level65_expansion = document.getElementById("level65");
	
	level6_expansion.innerHTML = level.level6;
	level60_expansion.innerHTML = level.level6;
	level61_expansion.innerHTML = level.level6;
	level62_expansion.innerHTML = level.level6;
	level63_expansion.innerHTML = level.level6;
	level64_expansion.innerHTML = level.level6;
	level65_expansion.innerHTML = level.level6;
	
	//Vector - Level7
	var level7_expansion = document.getElementById("level7");
	var level70_expansion = document.getElementById("level70");
	var level71_expansion = document.getElementById("level71");
	var level72_expansion = document.getElementById("level72");
	var level73_expansion = document.getElementById("level73");
	var level74_expansion = document.getElementById("level74");
	var level75_expansion = document.getElementById("level75");
	
	level7_expansion.innerHTML = level.level7;
	level70_expansion.innerHTML = level.level7;
	level71_expansion.innerHTML = level.level7;
	level72_expansion.innerHTML = level.level7;
	level73_expansion.innerHTML = level.level7;
	level74_expansion.innerHTML = level.level7;
	level75_expansion.innerHTML = level.level7;
	
	//Vector - Level8	
	var level8_expansion = document.getElementById("level8");
	var level80_expansion = document.getElementById("level80");
	var level81_expansion = document.getElementById("level81");
	var level82_expansion = document.getElementById("level82");
	var level83_expansion = document.getElementById("level83");
	var level84_expansion = document.getElementById("level84");
	var level85_expansion = document.getElementById("level85");
	
	level8_expansion.innerHTML = level.level8;
	level80_expansion.innerHTML = level.level8;
	level81_expansion.innerHTML = level.level8;
	level82_expansion.innerHTML = level.level8;
	level83_expansion.innerHTML = level.level8;
	level84_expansion.innerHTML = level.level8;
	level85_expansion.innerHTML = level.level8;
	
	//Vector - Level9	
	var level9_expansion = document.getElementById("level9");
	var level90_expansion = document.getElementById("level90");
	var level91_expansion = document.getElementById("level91");
	var level92_expansion = document.getElementById("level92");
	var level93_expansion = document.getElementById("level93");
	var level94_expansion = document.getElementById("level94");
	var level95_expansion = document.getElementById("level95");
	
	level9_expansion.innerHTML = level.level9;
	level90_expansion.innerHTML = level.level9;
	level91_expansion.innerHTML = level.level9;
	level92_expansion.innerHTML = level.level9;
	level93_expansion.innerHTML = level.level9;
	level94_expansion.innerHTML = level.level9;
	level95_expansion.innerHTML = level.level9;
	
	//To span the chart headers
	//Main chart
	document.getElementById("mainchartheaderlogo").src = path_img+hosp_logo;
	var mainchart_header = document.getElementById("mainchart_header");
	//mainchart_header.innerHTML = vector1_expansion.innerHTML + " Opportunities" + " - " + level1_expansion.innerHTML + " Market";
	mainchart_header.innerHTML = level1_expansion.innerHTML + " Market";
	
	//Second Main chart(pie)
	document.getElementById("pnmainchartheaderlogo").src = path_img+hosp_logo;
	var pnmainchart_header = document.getElementById("pnmainchart_header");
	//pnmainchart_header.innerHTML = vector1_expansion.innerHTML + " Opportunities" + " - " + level1_expansion.innerHTML + " Market Position";
	pnmainchart_header.innerHTML = level1_expansion.innerHTML + " Market Position";
	
	//Meter gauges
	document.getElementById("hospscoreheaderlogo").src = path_img+hosp_logo;
	var hospscore_header = document.getElementById("hospscore_header");
	//hospscore_header.innerHTML = vector1_expansion.innerHTML + " Opportunities" + " - " + level1_expansion.innerHTML + " Score";
	hospscore_header.innerHTML = level1_expansion.innerHTML + " Score";
	
	document.getElementById("avgaspscoreheaderlogo").src = path_img+hosp_logo;
	var avgaspscore_header = document.getElementById("avgaspscore_header");
	//avgaspscore_header.innerHTML = "Aspirant Hospitals " + vector.vector1 + " Opportunities" + " - " + level1_expansion.innerHTML + " Score";
	avgaspscore_header.innerHTML = level1_expansion.innerHTML + " Avg Aspirant Score";
	
	document.getElementById("avgchallscoreheaderlogo").src = path_img+hosp_logo;
	var avgchallscore_header = document.getElementById("avgchallscore_header");
	//avgchallscore_header.innerHTML = "Challenger Hospitals " + vector.vector1 + " Opportunities" + " - " + level1_expansion.innerHTML + " Score";
	avgchallscore_header.innerHTML = level1_expansion.innerHTML + " Avg Challenger Score";
	
	document.getElementById("avgleadscoreheaderlogo").src = path_img+hosp_logo;
	var avgleadscore_header = document.getElementById("avgleadscore_header");
	//avgleadscore_header.innerHTML = "Leading Hospitals " + vector.vector1 + " Opportunities" + " - " + level1_expansion.innerHTML + " Score";
	avgleadscore_header.innerHTML = level1_expansion.innerHTML + " Avg Leader Score";
//}	
*/
//function myFunction(arr) {
//Writing generalized code
	// i = number of data points
	// j = number of vectors
	//var out = "";
	//var getid = "";
    var i;
	//var vect = vector;
	//var exp = expansion;
	//var geninfodata = JSON.parse(general_info);
	for(i = 0; i < general_info.length; i++ ){
		//for(j = 1;j< arr.length; j++){
			alert("Hi");
			alert(general_info[i].customer_info[i].uname);
			vector1_expansion.innerHTML = general_info[i].customer_info[i].uname;
			//var vector1_expansion = document.getElementById("vector1");
			//vector1_expansion.innerHTML =  customer_info.innerHTML + " " + vector.vector1;
			
			//out = vect + j + "_" + exp;
			//getid = document.getElementById("vector"+j);
			//out = getid;
			//out.innerHTML = arr[i].innerHTML + " " + arr[i].vector[j];
		//}
	}	
//}