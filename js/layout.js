$(function(){
    // let count =0;
    setInterval(function(){
        $(".ani").animate({"marginLeft" : -800}, 400,function(){
            $(this).find("div").eq(0).appendTo($(this))
            //첫번째 div를 맨끝으로 옮겨라
            $(this).css("margin-left",0)
            //원래자리로
        })
        // count++;
        // count %=3;
        // $(".ani>div").eq(count).addClass("on").siblings().removeClass("on")
    },3000)
   
})