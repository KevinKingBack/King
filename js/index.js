/**
 * Created by xinbob on 3/15/17.
 */

window.onload = function () {
    var btn = document.querySelector("input[type='button']");
    btn.addEventListener("click", function () {
        var boxDOM = document.querySelector(".box");
        boxDOM.style.backgroundColor = "red";
        boxDOM.style.color = "#FFF";
        boxDOM.style.fontSize = "30px";
    });
};
