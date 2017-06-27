// to generalize code for changing client logo images and navigation menu item icons

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
var vector = general_info.vector, customer_info = general_info.customer_info, level = general_info.level;

var path_img = "..\/images\/";
var cust_logo = customer_info.logo;
var cust_img = customer_info.uimg;
var cust_name = customer_info.uname;
var hosp_logo = customer_info.navimg;

//alert(path_img+hosp_logo);
//alert(document.getElementById("logo").src);
/*document.getElementById("logo").src = path_img+cust_logo;
document.getElementById("pic").src = path_img+cust_img;
document.getElementById("uname").innerHTML = cust_name;
document.getElementById("navlogoitem1").src = path_img+hosp_logo;*/
document.getElementById("navlogoitem2").src = path_img+hosp_logo;
document.getElementById("navlogoitem3").src = path_img+hosp_logo;
document.getElementById("navlogoitem4").src = path_img+hosp_logo;
document.getElementById("navlogoitem5").src = path_img+hosp_logo;
document.getElementById("navlogoitem6").src = path_img+hosp_logo;
document.getElementById("navlogoitem7").src = path_img+hosp_logo;


// To span the hospital name, vectors from the customer_name.js file
	
	
	//hospital_logo.innerHTML = customer_info.navimg;
	customer_info.innerHTML = customer_info.hosp_name;
		
	var vector1_dd_expansion = document.getElementById("vector1_dd");
	vector1_dd_expansion.innerHTML =  vector.vector1;
	
	var vector2_dd_expansion = document.getElementById("vector2_dd");
	vector2_dd_expansion.innerHTML =  vector.vector2;
	
	
	var vector3_dd_expansion = document.getElementById("vector3_dd");
	vector3_dd_expansion.innerHTML =  vector.vector3;
	
	
	var vector4_dd_expansion = document.getElementById("vector4_dd");
	vector4_dd_expansion.innerHTML =  vector.vector4;
	
	
	var vector5_dd_expansion = document.getElementById("vector5_dd");
	vector5_dd_expansion.innerHTML =  vector.vector5;
	
	
	var vector6_dd_expansion = document.getElementById("vector6_dd");
	vector6_dd_expansion.innerHTML =  vector.vector6;
	
	
	var vector7_dd_expansion = document.getElementById("vector7_dd");
	vector7_dd_expansion.innerHTML =  vector.vector7;
	
	// To span levels in each vector
	//Vector - Level1
	var level1_dd_expansion = document.getElementById("level1_dd");
	var level10_dd_expansion = document.getElementById("level10_dd");
	var level11_dd_expansion = document.getElementById("level11_dd");
	var level12_dd_expansion = document.getElementById("level12_dd");
	var level13_dd_expansion = document.getElementById("level13_dd");
	var level14_dd_expansion = document.getElementById("level14_dd");
	var level15_dd_expansion = document.getElementById("level15_dd");
	
	
	level1_dd_expansion.innerHTML = level.level1;
	level10_dd_expansion.innerHTML = level.level1;
	level11_dd_expansion.innerHTML = level.level1;
	level12_dd_expansion.innerHTML = level.level1;
	level13_dd_expansion.innerHTML = level.level1;
	level14_dd_expansion.innerHTML = level.level1;
	level15_dd_expansion.innerHTML = level.level1;
	
	//Vector - Level2
	var level2_dd_expansion = document.getElementById("level2_dd");
	var level20_dd_expansion = document.getElementById("level20_dd");
	var level21_dd_expansion = document.getElementById("level21_dd");
	var level22_dd_expansion = document.getElementById("level22_dd");
	var level23_dd_expansion = document.getElementById("level23_dd");
	var level24_dd_expansion = document.getElementById("level24_dd");
	var level25_dd_expansion = document.getElementById("level25_dd");
	
	level2_dd_expansion.innerHTML = level.level2;
	level20_dd_expansion.innerHTML = level.level2;
	level21_dd_expansion.innerHTML = level.level2;
	level22_dd_expansion.innerHTML = level.level2;
	level23_dd_expansion.innerHTML = level.level2;
	level24_dd_expansion.innerHTML = level.level2;
	level25_dd_expansion.innerHTML = level.level2;
	
	//Vector - Level3
	var level3_dd_expansion = document.getElementById("level3_dd");
	var level30_dd_expansion = document.getElementById("level30_dd");
	var level31_dd_expansion = document.getElementById("level31_dd");
	var level32_dd_expansion = document.getElementById("level32_dd");
	var level33_dd_expansion = document.getElementById("level33_dd");
	var level34_dd_expansion = document.getElementById("level34_dd");
	var level35_dd_expansion = document.getElementById("level35_dd");
	
	level3_dd_expansion.innerHTML = level.level3;
	level30_dd_expansion.innerHTML = level.level3;
	level31_dd_expansion.innerHTML = level.level3;
	level32_dd_expansion.innerHTML = level.level3;
	level33_dd_expansion.innerHTML = level.level3;
	level34_dd_expansion.innerHTML = level.level3;
	level35_dd_expansion.innerHTML = level.level3;
	
	//Vector - Level4
	var level4_dd_expansion = document.getElementById("level4_dd");
	var level40_dd_expansion = document.getElementById("level40_dd");
	var level41_dd_expansion = document.getElementById("level41_dd");
	var level42_dd_expansion = document.getElementById("level42_dd");
	var level43_dd_expansion = document.getElementById("level43_dd");
	var level44_dd_expansion = document.getElementById("level44_dd");
	var level45_dd_expansion = document.getElementById("level45_dd");
	
	level4_dd_expansion.innerHTML = level.level4;
	level40_dd_expansion.innerHTML = level.level4;
	level41_dd_expansion.innerHTML = level.level4;
	level42_dd_expansion.innerHTML = level.level4;
	level43_dd_expansion.innerHTML = level.level4;
	level44_dd_expansion.innerHTML = level.level4;
	level45_dd_expansion.innerHTML = level.level4;
	
	//Vector - Level5
	var level5_dd_expansion = document.getElementById("level5_dd");
	var level50_dd_expansion = document.getElementById("level50_dd");
	var level51_dd_expansion = document.getElementById("level51_dd");
	var level52_dd_expansion = document.getElementById("level52_dd");
	var level53_dd_expansion = document.getElementById("level53_dd");
	var level54_dd_expansion = document.getElementById("level54_dd");
	var level55_dd_expansion = document.getElementById("level55_dd");
	
	level5_dd_expansion.innerHTML = level.level5;
	level50_dd_expansion.innerHTML = level.level5;
	level51_dd_expansion.innerHTML = level.level5;
	level52_dd_expansion.innerHTML = level.level5;
	level53_dd_expansion.innerHTML = level.level5;
	level54_dd_expansion.innerHTML = level.level5;
	level55_dd_expansion.innerHTML = level.level5;
	
	//Vector - Level6
	var level6_dd_expansion = document.getElementById("level6_dd");
	var level60_dd_expansion = document.getElementById("level60_dd");
	var level61_dd_expansion = document.getElementById("level61_dd");
	var level62_dd_expansion = document.getElementById("level62_dd");
	var level63_dd_expansion = document.getElementById("level63_dd");
	var level64_dd_expansion = document.getElementById("level64_dd");
	var level65_dd_expansion = document.getElementById("level65_dd");
	
	level6_dd_expansion.innerHTML = level.level6;
	level60_dd_expansion.innerHTML = level.level6;
	level61_dd_expansion.innerHTML = level.level6;
	level62_dd_expansion.innerHTML = level.level6;
	level63_dd_expansion.innerHTML = level.level6;
	level64_dd_expansion.innerHTML = level.level6;
	level65_dd_expansion.innerHTML = level.level6;
	
	//Vector - Level7
	var level7_dd_expansion = document.getElementById("level7_dd");
	var level70_dd_expansion = document.getElementById("level70_dd");
	var level71_dd_expansion = document.getElementById("level71_dd");
	var level72_dd_expansion = document.getElementById("level72_dd");
	var level73_dd_expansion = document.getElementById("level73_dd");
	var level74_dd_expansion = document.getElementById("level74_dd");
	var level75_dd_expansion = document.getElementById("level75_dd");
	
	level7_dd_expansion.innerHTML = level.level7;
	level70_dd_expansion.innerHTML = level.level7;
	level71_dd_expansion.innerHTML = level.level7;
	level72_dd_expansion.innerHTML = level.level7;
	level73_dd_expansion.innerHTML = level.level7;
	level74_dd_expansion.innerHTML = level.level7;
	level75_dd_expansion.innerHTML = level.level7;
	
	//Vector - Level8	
	var level8_dd_expansion = document.getElementById("level8_dd");
	var level80_dd_expansion = document.getElementById("level80_dd");
	var level81_dd_expansion = document.getElementById("level81_dd");
	var level82_dd_expansion = document.getElementById("level82_dd");
	var level83_dd_expansion = document.getElementById("level83_dd");
	var level84_dd_expansion = document.getElementById("level84_dd");
	var level85_dd_expansion = document.getElementById("level85_dd");
	
	level8_dd_expansion.innerHTML = level.level8;
	level80_dd_expansion.innerHTML = level.level8;
	level81_dd_expansion.innerHTML = level.level8;
	level82_dd_expansion.innerHTML = level.level8;
	level83_dd_expansion.innerHTML = level.level8;
	level84_dd_expansion.innerHTML = level.level8;
	level85_dd_expansion.innerHTML = level.level8;
	
	//Vector - Level9	
	var level9_dd_expansion = document.getElementById("level9_dd");
	var level90_dd_expansion = document.getElementById("level90_dd");
	var level91_dd_expansion = document.getElementById("level91_dd");
	var level92_dd_expansion = document.getElementById("level92_dd");
	var level93_dd_expansion = document.getElementById("level93_dd");
	var level94_dd_expansion = document.getElementById("level94_dd");
	var level95_dd_expansion = document.getElementById("level95_dd");
	
	level9_dd_expansion.innerHTML = level.level9;
	level90_dd_expansion.innerHTML = level.level9;
	level91_dd_expansion.innerHTML = level.level9;
	level92_dd_expansion.innerHTML = level.level9;
	level93_dd_expansion.innerHTML = level.level9;
	level94_dd_expansion.innerHTML = level.level9;
	level95_dd_expansion.innerHTML = level.level9;
	
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