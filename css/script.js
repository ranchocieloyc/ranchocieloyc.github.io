$(document).ready(function(){
		
			//Blur Links (Prevents Outline)
			$('a').click(function() {
        		this.blur();
        	});
		
			//Hide all item descriptions in the info box
			$("#infobox > div").css("display", "none");
		
			//Call in the info box
			$(".more a").click(function(){
				$("#infobox").animate({bottom: '233px' }, 300);
				$("#fade_bg").fadeIn();
				return false;
			});
			
			//Expand more info button on hover
			$(".more").hover(function(){
				$(this).stop().animate({width: '225px' }, 200).css({'z-index' : '10'}); //Change the width increase caption size
			}, function () {
				$(this).stop().animate({width: '50px' }, 200).css({'z-index' : '1'});
      		});
      		
      		//Show description for selected item
      		$("#pond a").click(function(){
				$("#pond_info").show();
			});
			
			$("#amphitheatre a").click(function(){
				$("#amphitheatre_info").show();
			});

      		$("#garden a").click(function(){
				$("#garden_info").show();
			});
			
      		$("#dining a").click(function(){
				$("#dining_info").show();
			});
			
			$("#caretakers a").click(function(){
				$("#caretakers_info").show();
			});
			
			$("#studenthousing a").click(function(){
				$("#studenthousing_info").show();
			});
			
			$("#adminbuilding a").click(function(){
				$("#adminbuilding_info").show();
			});
			
			$("#silverstar a").click(function(){
				$("#silverstar_info").show();
			});
			
			$("#gym a").click(function(){
				$("#gym_info").show();
			});
			
			$("#constructionclass a").click(function(){
				$("#constructionclass_info").show();
			});
			
			$("#constructionwork a").click(function(){
				$("#constructionwork_info").show();
			});
			
			$("#rockwall a").click(function(){
				$("#rockwall_info").show();
			});
			
			$("#trails a").click(function(){
				$("#trails_info").show();
			});
			
			$("#entrance a").click(function(){
				$("#entrance_info").show();
			});

						
			//Remove background, info box and hide all descriptions
			$("#fade_bg, .close").click(function(){
				$("#fade_bg").fadeOut();
				$("#infobox").animate({bottom: '-1900px' }, 300, function() {
					$("#infobox > div").css("display", "none");
				});
				return false;
			});
		
		}); 