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
    function load() {
        for (var i = 0,len = $(`.showBox`).length;i<len;i++){
            $(`.showBox`).eq(i).addClass("active").removeClass("done")
        }
    }
    $(`li`).click(function () {
        $(this).addClass("click").siblings().removeClass("click")
    });
    $(`li`).eq(1).click(function () {
        $(`.two`).css({display:"block"}).siblings("div").css({display:"none"});
        load()
    });
    $(`li`).eq(2).click(function () {

        $(`.three`).css({display:"block"}).siblings("div").css({display:"none"})
        load()
    })
    $(`li`).eq(3).click(function () {
        load()
        $(`.four`).css({display:"block"}).siblings("div").css({display:"none"})
    })
    $(`li`).eq(0).click(function () {
        load()
        $(`.one`).css({display:"block"}).siblings("div").css({display:"none"})


    })

    window.onload = function () {
        load()
    };
})()