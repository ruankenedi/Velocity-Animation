var isWebkit = /Webkit/i.test(navigator.userAgent),
	isChrome = /Chrome/i.test(navigator.userAgent),
	isMobile = !!("ontouchstart" in window),
	isAndroid = /Android/i.test(navigator.userAgent),
	isIE = document.documentMode;

function r(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

$.Velocity.defaults.easing = "";

var dotsCount,
	dotsHtml = "",
	$count = $("#count"),
	$dots;

if (window.location.hash) {
	dotsCount = window.location.hash.slice(1);
} else {
	dotsCount = isMobile ? (isAndroid ? 40 : 50) : (isChrome ? 170 : 120);
}

for (var i = 0; i < dotsCount; i++) {
	dotsHtml += "<div class='dot'></div>";
}

$dots = $(dotsHtml);

$count.html(dotsCount);

var $dotsContainer = $("#dotsContainer")

var screenWidth = window.screen.availWidth,
	screenHeight = window.screen.availHeight,
	chromeHeight = screenHeight - (document.documentElement.clientHeight || screenHeight);

var translateZMin = 0,
	translateZMax = 0;

$dotsContainer
	.css("perspective-origin", screenWidth / 2 + "px " + ((screenHeight * 0.45) - chromeHeight) + "px")
	
/* Animate the dots. */
$dots
	.velocity({
		translateX: [
			function () {
				return "+=" + r(-screenWidth / 2.75, screenWidth / 2.75)
			},
			function () {
				return r(0, screenWidth)
			}
		],
		translateY: [
			function () {
				return "+=" + r(-screenHeight / 2.75, screenHeight / 2.75)
			},
			function () {
				return r(0, screenHeight)
			}
		],
		translateZ: [
			function () {
				return "+=" + r(translateZMin, translateZMax)
			},
			function () {
				return r(translateZMin, translateZMax)
			}
		]

	}, {
		duration: 6000,
		loop: true
	})
	.velocity("", {
		easing: ""
	})
	.appendTo($dotsContainer);
	console.log($dotsContainer)
	