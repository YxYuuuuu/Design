
(function () {
    $(`footer button`).click(function () {
        if(!$(`footer input`).val() || !$(`footer textarea`).val()){
            let html = ``;
            html +=`<p class="warning">↑这些是必填项<p> `
            $(`footer input:odd`).addClass("live").after(html)
            $(`footer textarea`).addClass("live").after(html)

        }
    })
})()