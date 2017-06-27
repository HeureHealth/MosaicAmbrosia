/*---LEFT BAR ACCORDION----*/
$(function() {
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
//        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    });
});

var Script = function () {

//    sidebar dropdown menu auto scrolling

    jQuery('#sidebar .sub-menu > a').click(function () {
        var o = ($(this).offset());
        diff = 250 - o.top;
        if(diff>0)
            $("#sidebar").scrollTo("-="+Math.abs(diff),500);
        else
            $("#sidebar").scrollTo("+="+Math.abs(diff),500);
    });



//    sidebar toggle

    var sidebartoggleswitch = false;
	var rightsidebartoggleswitch = false;
	
	$(function() {
        function responsiveView() {
            var wSize = $(window).width();
			
			//alert(wSize);
			
			
            if (wSize < 768) {
                //$('#container').addClass('sidebar-closed');
                $('#sidebar > ul').hide();
				$('#sidebar').hide();
            }

            if (wSize >= 768) {	

				$('#sidebar > ul').show();				
				$('#sidebar').show();
				
						
            }
			
			// For pie chart
			
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });
	
	
	
	
//$(function(){
    $('.sidebar-toggle-box').on('click', function(){
	

	if ( $(window).width() >= 768) {
	//alert("Greater than 768");
		// If the sidebar is visible already
        if( $('#sidebar').is(':visible') ) {
			
			sidebartoggleswitch = true;
			// If both the toogle navigation and toggle notification buttons are clicked
			if (sidebartoggleswitch && rightsidebartoggleswitch){
				$('#main-content').animate({ 'margin-right': '1%','margin-left': '1%', 'width': '98%' }, 'slow');
			}else{
			// If just the toggle navigation button is clicked
			$('#main-content').animate({ 'margin-left': '1%', 'width': '84%'} ,'slow');
			}
			$('#sidebar').animate({ 'width': '0px' }, 'slow', function(){
                $('#sidebar').hide();
            });
        }else {
			sidebartoggleswitch = false;
		// If the sidebar is not visible
			$('#sidebar').show();
			$('#sidebar').animate({ 'width': '15%' }, 'slow');
			// If the side bar is made visible but the right side bar is not visible
			if ((sidebartoggleswitch == false) && (rightsidebartoggleswitch == true)){
			$('#main-content').animate({ 'margin-left': '0', 'width': '84%'} ,'slow');
			} else if ((sidebartoggleswitch == false) && (rightsidebartoggleswitch == false)){
				// If both toggles are false
				$('#main-content').animate({ 'margin-left': '0', 'width': '70%'} ,'slow');
			}
        }
		}else{
		//alert("Less than 768");
		if ($('#sidebar > ul').is(":visible") === true) {
			$('#main-content').css({
                'margin-left': '1%'
            });
			$('#sidebar > ul').hide();
        } else {
			$('#main-content').css({
                'margin-left': '1%'
            });
		    $('#sidebar').show();
            $('#sidebar > ul').show();
            $('#sidebar').css({
                'margin-left': '0'
            });
        }
		}
	});


// Notifications Toggle
	$(function() {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
              //  $('#container').addClass('sidebar-close');
                //$('#sidebar1').hide();
            }

            if (wSize > 768) {
			
                $('#container').removeClass('sidebar-close');
                $('#sidebar1 > ul').show();
            }
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });

	$(function(){
    $('#rightsidebar').on('click', function(){
	
	if ( $(window).width() >= 768) {
	// If the right sidebar is visible already
        if( $('#sidebar1').is(':visible') ) {
			rightsidebartoggleswitch = true;
			// If both the toogle navigation and toggle notification buttons are clicked
			
			if (sidebartoggleswitch && rightsidebartoggleswitch){
				$('#main-content').animate({ 'margin-right': '1%','margin-left': '1%', 'width': '98%' }, 'slow');
			}else{
			// If just the toggle notification button is clicked
			$('#main-content').animate({ 'margin-right': '1%', 'width': '84%' }, 'slow');
			}
			$('#sidebar1').animate({ 'width': '0px' }, 'slow', function(){
                $('#sidebar1').hide();
            });
		
        }
        else {
			// If the right sidebar is not visible
			rightsidebartoggleswitch = false;
			$('#sidebar1').show();
			$('#sidebar1').animate({ 'width': '13%' }, 'slow');
			// If the right side bar is made visible but the left side bar is not visible
			if ((sidebartoggleswitch == true) && (rightsidebartoggleswitch == false)){
				$('#main-content').animate({ 'margin-right': '0', 'width': '84%' }, 'slow');
			} else if ((sidebartoggleswitch == false) && (rightsidebartoggleswitch == false)){
				// If both toggles are false
				$('#main-content').animate({ 'margin-right': '0','width': '70%' }, 'slow');
			}
        }
		}else{
		//alert("Less than 768");
		if ($('#sidebar1').is(":visible") === true) {
			//alert("sidebartoggleswitch =" +sidebartoggleswitch);
			//alert("rightsidebartoggleswitch =" +rightsidebartoggleswitch);
			//rightsidebartoggleswitch = true;
			$('#main-content').animate({ 'margin-right': '1%','margin-left': '1%', 'width': '98%' }, 'slow');

            $('#sidebar1').animate({ 'width': '0' }, 'slow', function(){
                $('#sidebar1').hide();
            });
			
        } else {
			//rightsidebartoggleswitch = false;
            $('#main-content').animate({ 'margin-right': '13%', 'width': '70%' }, 'slow');
            $('#sidebar1').animate({ 'width': '13%'}, 'slow', function(){
            $('#sidebar1').show();
            });
			$('#sidebar1').css({
                'margin-left': '0%'
            });
			
        }
		}
    });
});

//Navigation Bar class becoming active on select
/*$('ul.nav-tabs li a').on('click', function(){
//$('nav nav-tabs li a').click(function () {
  $('ul.nav-tabs li.active').removeClass('active');
  $(this).parent('li ul').addClass('active');

});*/


// custom scrollbar
    $("#sidebar").niceScroll({styler:"fb",cursorcolor:"#4ECDC4", cursorwidth: '3', cursorborderradius: '10px', background: '#404040', spacebarenabled:false, cursorborder: ''});
	
	$(document).ready(function() {  
    $("html").niceScroll();
	});
	
    $("html").niceScroll({styler:"fb",cursorcolor:"#4ECDC4", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000'});
	
	
// widget tools
/*
    jQuery('.panel .tools .fa-chevron-down').click(function () {
        var el = jQuery(this).parents(".panel").children(".panel-body");
        if (jQuery(this).hasClass("fa-chevron-down")) {
            jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(200);
        } else {
            jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(200);
        }
    });
*/
    jQuery('.panel .tools .fa-times').click(function () {
        jQuery(this).parents(".panel").parent().remove();
    });


//    tool tips

    $('.tooltips').tooltip();

//    popovers

    $('.popovers').popover();


// custom bar chart

    if ($(".custom-bar-chart")) {
        $(".bar").each(function () {
            var i = $(this).find(".value").html();
            $(this).find(".value").html("");
            $(this).find(".value").animate({
                height: i
            }, 2000)
        })
    }
	


}();




