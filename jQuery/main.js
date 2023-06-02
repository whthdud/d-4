$(function(){

    //메인메뉴


    $(".main > li").hover(function(){
        $(".sub").stop().slideDown()
    },function(){
        $(".sub").stop().slideUp()
    })


    //이미지슬라이드


    var n = 0
    setInterval(function(){



        $(".move li").eq(n).fadeOut();

        if(n == 2){
            n=0;
        }else{
            n++;
        }


        $(".move li").eq(n).fadeIn();
    },3000)




    //팝업


    
    $(".close").click(function(){
        $(".popup").hide()
    })

    $(".on").click(function(){
        $(".popup").show()
    })


})//close