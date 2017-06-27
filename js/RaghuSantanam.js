//General Values
var general_info = {
	"customer_info" : {
		"uname":"Raghu Santanam", 
		"logo":"asu.png", 
		"uimg":"RaghuSantanam.png",
		"navimg":"BannerHealthLogo.png",
		"hosp_name":"University Phoenix"
	},
	"vector" : {
		"vector1":"Growth",
		"vector2":"Quality",
		"vector3":"Cost",
		"vector4":"Innovation",
		"vector5":"Partnerships",
		"vector6":"New Entrants",
		"vector7":"Investors"
	},
	"level" : {
		"level1":"National",
		"level2":"Regional",
		"level3":"Regional States",
		"level4":"Divisional",
		"level5":"Divisional States",
		"level6":"State",
		"level7":"Local",
		"level8":"Sub",
		"level9":"Micro"
	}
};



//Main Graph Values for Growth Opportunities

// National Growth

var barChartData_growth_nation = {
 labels : ["West ","Midwest ","South ","Northeast "],
 datasets : [
  {
   label: "Growth Score by Region",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [3.12,6.38,5.23,3.37]
  }
 ]
};

// Regional Growth

var barChartData_growth_region = {
 labels : ["Arizona","Alaska","Califonia","Colorado","Hawali","Idaho","Montana","Nevada","New Mexico","Oregon","Utah","Washington","Wyoming"],
 datasets : [
  {
   label: "Growth Score of States under Region",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [5.09,3.15,5.71,4.89,4.43,5.17,4.47,5.03,4.97,5.21,5.06,4.46,4.14]
  }
 ]
};

// Divisional Growth

var barChartData_growth_division = {
 labels : ["Arizona","Colorado","Idaho","Montana","Nevada","New Mexico","Utah","Wyoming"],
 datasets : [
  {
   label: "Growth Score of States under Division",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [5.17,5.31,4.92,3.57,4.76,4.68,5.09,4.63]
  }
 ]
};

// State Growth

var barChartData_growth_state = {
 labels : ["Phoenix ","Las Vegas ","Mesa ","Sun City ","Tuscon "],
 datasets : [
  {
   label: "Growth Score of HRR under State",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [5.43,5.21,5.09,4.63,4.89]
  }
 ]
};

// Local - HRR Growth

var barChartData_growth_local = {
 labels : ["Phoenix","Blythe","Casa Grande","Chandler","Cottonwood","Flagstaff","Florence","Kingman","Lake Havasu City","Mesa","Page","Payson","Prescott","Safford","Scottsdale","Show Low","Sierra Vista","Sun City","Tuscon","Yuma"],
 datasets : [
  {
   label: "Growth Score of HSA under HRR",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [5.72,3.47,3.61,5.02,4.83,4.97,3.01,4.16,3.38,5.37,4.76,4.81,4.43,3.81,5.32,3.51,3.47,4.18,5.01,3.31]
  }
 ]
};

//Main Graph Values for Quality Opportunities

// National Quality

var barChartData_quality_nation = {
 labels : ["West","Midwest","South","Northeast"],
 datasets : [
  {
   label: "Quality Score by Region",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [5.04,6.17,6.44,4.91]
  } 
 ]
};

// Regional Quality
var barChartData_quality_region = {
 labels : ["Arizona","Alaska","Califonia","Colorado","Hawali","Idaho","Montana","Nevada","New Mexico","Oregon","Utah","Washington","Wyoming"],
 datasets : [
  {
   label: "Quality Score of States under Region",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [6.11,5.18,6.31,6.19,5.57,5.76,5.16,5.32,5.24,5.51,5.69,5.43,5.17]
  }
 ]
};

// Divisional Quality
var barChartData_quality_division = {
 labels : ["Arizona","Colorado","Idaho","Montana","Nevada","New Mexico","Utah","Wyoming"],
 datasets : [
  {
   label: "Quality Score of States under Division",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [6.19,6.37,6.13,5.21,5.91,5.54,6.03,5.35]
  }
 ]
};

// State Quality
var barChartData_quality_state = {
 labels : ["Phoenix ","Las Vegas ","Mesa ","Sun City ","Tuscon "],
 datasets : [
  {
   label: "Quality Score of HRR under State",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [6.32,6.04,6.17,5.34,5.88]
  }
 ]
};

// Local - HRR Quality
var barChartData_quality_local = {
 labels : ["Phoenix","Casa Grande","Chandler","Cottonwood","Flagstaff","Kingman","Lake Havasu City","Mesa","Payson","Prescott","Scottsdale","Show Low","Sierra Vista","Sun City","Tuscon","Yuma"],
 datasets : [
  {
   label: "Quality Score of HSA under HRR",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [6.37,5.19,6.21,5.66,5.79,5.37,5.23,6.02,5.51,5.58,6.26,5.22,5.19,5.38,5.71,5.16]
  }
 ]
};

//Main Graph Values for Cost Opportunities

// National Cost

var barChartData_cost_nation = {
 labels : ["West ","Midwest ","South ","Northeast "],
 datasets : [
  {
   label: "Cost Score by Region",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [4.79,6.11,5.17,3.96]
  }
 ]
};

// Regional Cost
var barChartData_cost_region = {
 labels : ["Arizona","Alaska","Califonia","Colorado","Hawali","Idaho","Montana","Nevada","New Mexico","Oregon","Utah","Washington","Wyoming"],
 datasets : [
  {
   label: "Cost Score of States under Region",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [5.17,4.19,5.83,5.11,4.22,4.60,4.10,4.24,4.34,4.39,4.41,4.36,4.16]
  }
 ]
};

// Divisional Cost
var barChartData_cost_division = {
 labels : ["Arizona","Colorado","Idaho","Montana","Nevada","New Mexico","Utah","Wyoming"],
 datasets : [
  {
   label: "Cost Score of States under Division",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [5.69,5.51,5.26,4.65,5.17,4.72,5.14,4.36]
  }
 ]
};

// State Cost
var barChartData_cost_state = {
 labels : ["Phoenix ","Las Vegas ","Mesa ","Sun City ","Tuscon "],
 datasets : [
  {
   label: "Cost Score of HRR under State",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [5.69,4.37,5.42,4.16,4.28]
  }
 ]
};

// Local - HRR Cost
var barChartData_cost_local = {
 labels : ["Phoenix","Casa Grande","Chandler","Cottonwood","Flagstaff","Kingman","Lake Havasu City","Mesa","Parker","Payson","Prescott","Scottsdale","Show Low","Sierra Vista","Sun City","Tuscon","Yuma"],
 datasets : [
  {
   label: "Cost Score of HSA under HRR",
   fillColor: "rgba(204, 89, 89, 0.9)",
   strokeColor : "rgba(204, 89, 89, 0.4)",
   data : [5.74,4.29,5.12,4.16,4.23,4.09,4.11,5.15,4.16,4.51,4.06,5.67,4.12,4.10,4.18,4.57,4.04]
  }
 ]
};

//Pie Graph Values for Growth Opportunities

// National Growth

var pieChartData_growth_nation_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_growth_nation_data =  [33.51,46.24,20.25];

// Regional Growth

var pieChartData_growth_region_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_growth_region_data =  [37.12,49.37,13.51];

// Divisional Growth

var pieChartData_growth_division_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_growth_division_data =  [35.97,48.12,15.91];

// State Growth

var pieChartData_growth_state_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_growth_state_data =  [41.24,36.72,22.04];

// Local - HRR Growth

var pieChartData_growth_local_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_growth_local_data =  [46.96,39.02,14.02];


//Pie Graph Values for Quality Opportunities

// National Quality

var pieChartData_quality_nation_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_quality_nation_data =  [41.46,34.92,23.62];

// Regional Quality

var pieChartData_quality_region_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_quality_region_data =  [45.02,37.84,17.14];

// Divisional Quality

var pieChartData_quality_division_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_quality_division_data =  [44.88,39.61,15.51];

// State Quality

var pieChartData_quality_state_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_quality_state_data =  [46.11,39.76,14.13];

// Local - HRR Quality

var pieChartData_quality_local_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_quality_local_data =  [48.26,41.03,10.71];


//Pie Graph Values for Cost Opportunities

// National Cost

var pieChartData_cost_nation_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_cost_nation_data =  [39.19,44.76,16.05];

// Regional Cost

var pieChartData_cost_region_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_cost_region_data =  [41.61,43.89,14.50];

// Divisional Cost

var pieChartData_cost_division_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_cost_division_data =  [40.67,48.14,11.19];

// State Cost

var pieChartData_cost_state_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_cost_state_data =  [42.14,45.91,11.95];

// Local - HRR Cost

var pieChartData_cost_local_labels =  ["Leaders ","Challengers ","Aspirants "];

var pieChartData_cost_local_data =  [43.22,45.87,10.91];


//Meter Graph Values(Hospital Score) for Growth Opportunities

// National Growth

var meterChartData_growth_nation_Hosp_Score = [4.58];

var meterChartData_growth_nation_Avg_Asp_Score = [2.33];

var meterChartData_growth_nation_Avg_Chal_Score = [3.32];

var meterChartData_growth_nation_Avg_Lead_Score = [5.67];


// Regional Growth

var meterChartData_growth_region_Hosp_Score = [5.23];

var meterChartData_growth_region_Avg_Asp_Score = [2.27];

var meterChartData_growth_region_Avg_Chal_Score = [4.11];

var meterChartData_growth_region_Avg_Lead_Score = [6.03];


// Divisional Growth

var meterChartData_growth_division_Hosp_Score = [5.47];

var meterChartData_growth_division_Avg_Asp_Score = [2.19];

var meterChartData_growth_division_Avg_Chal_Score = [4.36];

var meterChartData_growth_division_Avg_Lead_Score = [6.33];


// State Growth

var meterChartData_growth_state_Hosp_Score = [5.84];

var meterChartData_growth_state_Avg_Asp_Score = [2.14];

var meterChartData_growth_state_Avg_Chal_Score = [4.42];

var meterChartData_growth_state_Avg_Lead_Score = [6.58];


// Local - HRR Growth	

var meterChartData_growth_local_Hosp_Score = [6.09];

var meterChartData_growth_local_Avg_Asp_Score = [2.08];

var meterChartData_growth_local_Avg_Chal_Score = [4.61];

var meterChartData_growth_local_Avg_Lead_Score = [6.79];




//Meter Graph Values(Hospital Score) for Quality Opportunities

// National Quality

var meterChartData_quality_nation_Hosp_Score = [4.84];

var meterChartData_quality_nation_Avg_Asp_Score = [2.29];

var meterChartData_quality_nation_Avg_Chal_Score = [3.41];

var meterChartData_quality_nation_Avg_Lead_Score = [4.86];

// Regional Quality

var meterChartData_quality_region_Hosp_Score = [5.21];

var meterChartData_quality_region_Avg_Asp_Score = [2.14];

var meterChartData_quality_region_Avg_Chal_Score = [3.72];

var meterChartData_quality_region_Avg_Lead_Score = [5.03];


// Divisional Quality

var meterChartData_quality_division_Hosp_Score = [5.67];

var meterChartData_quality_division_Avg_Asp_Score = [1.98];

var meterChartData_quality_division_Avg_Chal_Score = [4.11];

var meterChartData_quality_division_Avg_Lead_Score = [5.26];

// State Quality

var meterChartData_quality_state_Hosp_Score = [6.18];

var meterChartData_quality_state_Avg_Asp_Score = [1.74];

var meterChartData_quality_state_Avg_Chal_Score = [4.38];

var meterChartData_quality_state_Avg_Lead_Score = [5.86];

// Local - HRR Quality	

var meterChartData_quality_local_Hosp_Score = [6.42];

var meterChartData_quality_local_Avg_Asp_Score = [1.51];

var meterChartData_quality_local_Avg_Chal_Score = [4.52];

var meterChartData_quality_local_Avg_Lead_Score = [6.29];


//Meter Graph Values(Hospital Score) for Cost Opportunities

// National Cost

var meterChartData_cost_nation_Hosp_Score = [4.61];

var meterChartData_cost_nation_Avg_Asp_Score = [2.20];

var meterChartData_cost_nation_Avg_Chal_Score = [3.13];

var meterChartData_cost_nation_Avg_Lead_Score = [4.70];

// Regional Cost

var meterChartData_cost_region_Hosp_Score = [5.07];

var meterChartData_cost_region_Avg_Asp_Score = [2.11];

var meterChartData_cost_region_Avg_Chal_Score = [3.44];

var meterChartData_cost_region_Avg_Lead_Score = [4.92];

// Divisional Cost

var meterChartData_cost_division_Hosp_Score = [5.34];

var meterChartData_cost_division_Avg_Asp_Score = [1.84];

var meterChartData_cost_division_Avg_Chal_Score = [3.76];

var meterChartData_cost_division_Avg_Lead_Score = [5.23];

// State Cost

var meterChartData_cost_state_Hosp_Score = [5.78];

var meterChartData_cost_state_Avg_Asp_Score = [1.67];

var meterChartData_cost_state_Avg_Chal_Score = [4.13];

var meterChartData_cost_state_Avg_Lead_Score = [5.41];

// Local - HRR Cost	

var meterChartData_cost_local_Hosp_Score = [6.13];

var meterChartData_cost_local_Avg_Asp_Score = [1.31];

var meterChartData_cost_local_Avg_Chal_Score = [4.46];

var meterChartData_cost_local_Avg_Lead_Score = [5.72];


