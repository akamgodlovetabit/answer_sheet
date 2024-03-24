/** @format */

//Mark Absent
document.querySelector(".box-abs").addEventListener("click", function (e) {
	console.log(e.target.getAttribute(".box-abs") + "is clicked");

	const target = e.target;
	if (target.matches(".box-abs")) {
		target.style.backgroundColor = "Red";
	}
});
// let absent = document.querySelector(".box-abs");
// absent.addEventListener("click", function (e) {
// 	if (click == true) {
// 		absent.computedStyleMap.backgroundColor = "green";
// 	}
// });
