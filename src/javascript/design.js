(function () {
    function background(num) {
        let name = ".box" + num;
        let url = './images/design/'+ num + '.jpg';
        $(`${name}`).css({
            background:`url(${url}) no-repeat 0 center `
        })
    }
    for(var i =1,len = $(`.showBox`).length; i<len+1;i++){
        background(i)
    };

    $(`.showBox`).addClass("done");
    $(`li`).eq(0).addClass("click");
    function load(obj) {
        for (var i = 0,len = $(`.showBox`).length;i<len;i++){
           $(`.wrap`).eq(obj).children(".showBox").eq(i).addClass("active").removeClass("done")
            $(`.wrap`).eq(obj).css({display:"block"}).siblings("div").css({display:"none"}).children(".showBox").eq(i).addClass("done").removeClass("active")
        }
    }
    $(`li`).click(function () {
        $(this).addClass("click").siblings().removeClass("click")
    });
    $();
    $(`li`).click(function () {
        let idx = $(this).index();

         load(idx)
        })

    window.onload = function () {

       load(0)
    };
})()