import $ from "jquery";
import "jquery.maskedinput/src/jquery.maskedinput";
import './src/js/components/ymaps'



$(document).ready(function () {
    $(".tab__elem").click(function () {
        let indexTab = $(this).attr("data-tab");
        $(".dws-form").find(".tab__elem-active").removeClass("tab__elem-active");
        $(this).addClass("tab__elem-active");
        $("#tab__container").find(".active").removeClass("active");
        $("#tab-" + indexTab).addClass("active");
    });


    $("#phone").mask("+7 (999) 999-99-99");



});

$(function() {
    $(function($) {
        $('#name').on('keypress', function() {
            let that = this;
            setTimeout(function() {
                let res = /[^а-яА-ЯёЁ ]/g.exec(that.value);
                that.value = that.value.replace(res, '');
            }, 0);
        });
    });
});


