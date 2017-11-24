$(document).ready(function () {
    $("#back").hide();
    $("#window").hide();
    $("#loginIn").css("display", "none");
    $("#registerIn").css("display", "none");
    $("#login1").click(function () {
        $("#back").show();
        $("#window").show();
        $("#loginIn").css("display", "block");
    });
    $("#register1").click(function () {
        $("#back").show();
        $("#window").show();
        $("#registerIn").css("display", "block");
    });
    $("#login").click(function () {
        $("#registerIn").css("display", "none");
        $("#loginIn").css("display", "block");
    });
    $("#register").click(function () {
        $("#loginIn").css("display", "none");
        $("#registerIn").css("display", "block");
    });
    var pswdt = /^[a-zA-Z][a-zA-Z0-9_]{6,16}$/;
    var pnt = /0?(13|14|15|18)[0-9]{9}/;
    var et = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    $("#text").blur(function () {
        var str = $("#text").val();
        if (pnt.test(str) || et.test(str)) {
            $("#tip").text("");

        }
        else {
            $("#tip").text("请输入正确的电话号码或邮箱!");
        }
    });
    $("#pswd").blur(function () {
        if (pswdt.test(pswd)) {
            $("#tip2").text("请输入正确格式的密码!");
        }
        var pswd = $("#pswd").val();
    });
    $("input[value=登录]").click(function () {
        if ((str == "13257402330" || str == "1397500197@163.com") && pswd == "1233211234567") {
            alert("登陆成功！");
        }
        else {
            alert("登陆失败，邮箱/手机或密码错误");
        }
    });
});
