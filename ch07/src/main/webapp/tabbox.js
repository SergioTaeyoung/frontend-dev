var tabbox = {

	init : function() {
		$(function() {

			$("ul li").mouseover(function() {
				$(this).addClass("on");
			}).mouseout(function() {
				$(this).removeClass("on");
			}).click(function() {
				$("ul li").removeClass("selected");
				$(this).addClass("selected");

				$(".tab-div").text($(this).text() + "이 선택되었습니다.");
			})
		})
	}
}


/*
//jQuery 버젼
var TabBox = {
	init: function(){
		$(this._init);		
	},	
	_init: function(){
		$('.tab-box li').click(TabBox._changeTab);
		TabBox._changeTab();
	},
	_changeTab: function(){
		$('.tab-box li.selected').removeClass('selected');
		
		var $liTab = (this == TabBox) ?	$('.tab-box li:first-child') : $(this);
		$('.tab-box div').text($liTab.data('no') + "의 탭뷰입니다.");
		$liTab.addClass('selected');
	}	
}
*/