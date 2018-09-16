$(function () {
    $(".work .top li").click(function () {
        let index=$(this).index();
        $(".bot").css("z-index","5").eq(index).css("z-index","10");
    })
});