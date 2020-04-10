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