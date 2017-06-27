// Script for getting the number of canvases in the page

var canvasid = [];
var canvases = document.getElementsByTagName("canvas");
for(var i = 0;i<canvases.length;i++){
	//console.log(canvases[i].id);
	canvasid[i] = "\'"+ canvases[i].id + "\'";
	//console.log(canvasid[i]);
}

// Script for getting the number of meter gauges in the page

var meterid = [];
//var meters = document.getElementsById($("canvas[id^='meter']"));
var metergauge =  $("canvas[id^='meter']");
var metergaugevaluequality = [meterChartData_quality_nation_Hosp_Score,meterChartData_quality_nation_Avg_Asp_Score,meterChartData_quality_nation_Avg_Chal_Score,
meterChartData_quality_nation_Avg_Lead_Score];

//Reading the JSON file to display graph values using getJSON method but ajax call is better
/*
$.getJSON('../js/RaghuSantanam_old.json',function(data){
	console.log(data)
});
*/

/*$.ajax({
	url: '../js/RaghuSantanam_old.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: function(data){
		$(data.vectors).each(function(index, value){
			console.log(value.national[index].bar[2].mybar);
		});
	}
});
*/

$.ajax({
	url: '../js/RaghuSantanam_old.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: function(data){
		// Reading customer info
		
					console.log(data.customer_info.firstname);
					console.log(data.customer_info.lastname);
					console.log(data.customer_info.logo);
					console.log(data.customer_info.uimg);
					console.log(data.customer_info.navimg);
					console.log(data.customer_info.hosp_id);
					console.log(data.customer_info.hosp_name);
					
		// Reading Vectors and Populating graphs			
			
			$.each(data.vectors , function(index , value){ // 
					//console.log(value);
					//console.log(value.Growth);
				    $.each(value , function(k , v ){  // The contents inside Growth
                     //console.log(v)
					 $.each(v , function(key , val ){  // The contents inside Growth
                     //console.log(val)
					 $.each(val , function(key , output ){  // The contents inside Growth
                     console.log(output)
                 });
                 });
                 });       
				
			});
	}
});
/*
$.each(obj.data , function(key , value){ // 
    $.each(value.stars , function(k , v ){
        alert(v)
    });        
    
});
*/

$("canvas[id^='meter']").each(function(index) {
   //var id = this.id,
   //console.log(this.id);
   //console.log(index);
   //var metergaugevalue = meterChartData_cost_nation_Hosp_Score;
   function myCallback (obj)
	{
		// ...
		//alert("metergaugevalue = "+metergaugevaluequality[index]);
		//alert("Meter gauge complete");
	}
	
	var meter = new RGraph.Meter({
	id: this.id,
	min: 0,
	max: 7,
	value: metergaugevaluequality[index],
	options: {										
		colorsRanges: [
			[0,2.356, '#CC5959'],
			[2.357,4.643, '#FAFF77'],
			[4.644,7, '#A7F1A7']
		],										
		textColor: '#606060',
		valueText : true,
		valueTextDecimals: 2,
		borderColor : '#CCCCCC',										
		needleColor: '#81778E',
		centerpinStroke: '#81778E',
		needleLinewidth: 2,
		centerpinFill: 'white',
		tickmarksSmallNum: 0,
		tickmarksBigNum: 0,
		textSize: 10,
		anglesStart: RGraph.PI + 0.5,
		anglesEnd: RGraph.TWOPI - 0.5,
		linewidthSegments: 10,
		strokestyle: 'white',
		segmentRadiusStart: 65,
		border: 0,
		textValign: 'center',
		needleRadius: 50,
		//gutterTop: 50
		//gutterBottom: 50
		
	}
}).grow({frames: 60}, myCallback);
   //
});
