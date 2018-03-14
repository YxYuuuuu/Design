(()=>{

    let xhr = new XMLHttpRequest();
    xhr.open(`GET`,`json/team.json`,true)
    xhr.onload = function () {
        let obj = JSON.parse(xhr.response),
            html = ``;
        for(var i = 0,len = obj[`member`].length;i<len;i++){
            html +=`
            <div class="wrap">
             <div class="msg">
                <img src="${obj[`member`][i][`img`]}" alt="">
                <p>${obj[`member`][i][`status`]}</p>
                <p>${obj[`member`][i][`position`]}${obj[`member`][i][`name`]}</p>
               
                        </div>
            <div class="status">
                <div class="hr"></div>
                <span class="text">${obj[`member`][i][`resume`]}</span>
            </div>
                        
                </div>
                               
`
        }
       $(`#team`).html(html);
        $(`.wrap`).click(function () {
            window.location.href = `http://5a1d369c61574.t73.qifeiye.com/?post_type=products&page_id=12870`
        })
    }
    xhr.send(null)


})()