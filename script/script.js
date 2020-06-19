$(function(){
	/*gnb메뉴창*/
	$(".gnb li").mouseover(function(){
		var index = $(this).index();
		$('.gnbback,#header .gnb>li ul>li').show();
		if(index == 0){
			$(".gnbback .center").css({left:352});
			$(".gnbback .left h2").html("세무서소개");
		} else if(index ==1){
			$(".gnbback .center").css({left:352+240});
			$(".gnbback .left h2").html("세무소식");
		} else if(index ==2){
			$(".gnbback .center").css({left:352+240*2});
			$(".gnbback .left h2").html("국세정보");
		} else if(index ==3){
			$(".gnbback .center").css({left:352+240*3});
			$(".gnbback .left h2").html("국민소통");
		} else{
			$(".gnbback .center").css({left:352+240*4 });
			$(".gnbback .left h2").html("국세청<br>제공 서비스");
		}
	});
	$(".gnb li").mouseout(function(){
		$('.gnbback,#header .gnb>li ul>li').css({display:"none"});
	});
	$(".gnb li ul>li a").mouseover(function(){
		$(this).find("i").stop(false).animate({width:"100%"});
	});
	$(".gnb li ul>li a").mouseout(function(){
		$(this).find("i").stop(false).animate({width:"0"});
	});
		$("#header .gnb>li").each(function(bb){
		$(this).css({left:352+(240*bb)});
	});
	
	//슬라이드 1
	
	$('#section1 .contents .slide img').each(function(cc){
		$(this).css({left:745*cc});
	});
	setInterval(function(){
					$("#section1 .contents .slide img").each(function(){
						var left = parseInt($(this).css("left"));
						var movepos = left - 745;
						$(this).animate({left:movepos},500,function(){
							if(left==-745){
								$(this).css("left",2980);
							}
						});
					});
				},4000);
		//슬라이드2
		$('#section1 .contents .slide2 img').each(function(dd){
			$(this).css({left:235*dd});
		});
		setInterval(function(){
			$("#section1 .contents .slide2 img").each(function(){
				var slide2 = parseInt($(this).css("left"));
				var movepos = slide2 - 235;
				$(this).animate({left:movepos},500,function(){
				if(slide2==-235){
					$(this).css("left",470);
				}
			});
		});
	},4000);

	
	$("#section2 .chart>ul>li>h3").click(function(){
		$(this).parents("li").siblings().removeClass("on");
		$(this).parents("li").addClass("on");
	});


	$("#footer ul li").each(function(aa){
		$(this).css({left:550+(140*aa)});
	});
});
