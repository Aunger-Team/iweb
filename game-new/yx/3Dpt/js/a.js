function a_init() {
	updateShare(0);
}

function goHome() {
	window.location.href ='http://aunger.ga';
}

function a_submitScore(score) {
	updateShareScore(score);
	setTimeout( function() { show_share(); }, 1500 )
}


function updateShareScore(bestScore) {
	if(bestScore > 0) {
		shareTitle = "我在《3D拼图》过了第" + bestScore + "关，这样子拼图好难啊！";
	}
	else{
		shareTitle = "另类拼图游戏《3D拼图》好难啊！";
	}
}