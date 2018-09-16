$(function () {
    // 购物车
    $(".title-shop").mouseenter(function () {
        $(".title-shop .master").clearQueue().slideDown("slow");
    })
    $(".title-shop").mouseleave(function () {
        $(".title-shop .master").clearQueue().slideUp("slow");
    })


    //选项卡
    let menu = $(".slip .menu .box");
    let menuson = $(".slip .menu .box .children");
    menu.mouseenter(function () {
        let i = $(this).index();
        menuson.css("display", "none").eq(i).css("display", "block");
        console.log(i);
    }).mouseleave(function () {
        menuson.css("display", "none");
    })




            // 闪购
            let sgal = $(".flashover .arrow-l");
            let sgar = $(".flashover .arrow-r");
            let sgw = $(".flashover .lasttime .warp ul");
            let sgwh = sgw.outerWidth();
            console.log(sgwh);
            let time = 0;
            sgar.first().click(function () {
                time++;
                if (time == 2) {
                    time = 1;
                }
                sgw.css("transform", `translate(-${sgwh / 2 * time}px)`);
            })
            sgal.first().click(function () {
                time--;
                if (time < 0) {
                    time = 0;
                }
                sgw.css("transform", `translate(${-time * sgwh / 2}px)`);
            })


            // 家电
            let jddj = $(".household .top ul li");
            let jdjm = $(".household .bdd");
            console.log(jddj, jdjm);
            jddj.mouseenter(function () {
                let i = $(this).index();
                jdjm.css("display", "none").eq(i).css("display", "block");
            })
            jddj.triggerHandler("mouseenter");


            // 为你推荐
            let tjal = $(".recommend .arrow .arrow-l");
            let tjar = $(".recommend .arrow .arrow-r");
            let tjw = $(".recommend .container .every");
            let tjwh = tjw.outerWidth();
            console.log(tjwh);
            let tjtime = 0;
            tjar.first().click(function () {
                tjtime++;
                if (tjtime == 4) {
                    tjtime = 3;
                }
                tjw.css("transform", `translate(-${tjwh / 5 * tjtime}px)`);
            })
            tjal.first().click(function () {
                tjtime--;
                if (tjtime < 0) {
                    tjtime = 0;
                }
                tjw.css("transform", `translate(${-tjtime * tjwh / 5}px)`);
            })

            // 内容1
            let nroal = $(".content .one .leftArrow");
            let nroar = $(".content .one .rightArrow");
            let nroba = $(".content .one .master");
            let nrow = $(".content .one .clear").outerWidth();
            console.log(nrow);
            let nrnext = 0;
            let nrnow = 0
            nroar.click(function () {
                nrnext++;
                if (nrnext == 4) {
                    nrnext = 3;
                }
                nroba.css("left", "296px").eq(nrnext).css("left", "${nrow}px");
                nroba.css("left", "296px").eq(nrnow).css("left", "${-nrow}px");
            })


            // 返回顶部
            let back = document.querySelector(".bar .ddv");
            back.onclick = function () {
                animate(document.body, {scrollTop: 0}, 500);
                animate(document.documentElement, {scrollTop: 0}, 500)
            }


            // 内容轮播1
            let oneimgs = document.querySelectorAll(".content .content-list .one .banner .master");
            let onedots = document.querySelectorAll(".content .content-list .one .dot li");
            let oneleftbtn = document.querySelectorAll(".content .content-list .one .leftbtn")[0];
            let onerightbtn = document.querySelectorAll(".content .content-list .one .rightbtn")[0];
            let onewidths = parseInt(getComputedStyle(oneimgs[0], null).width);
            let onenow = 0;
            let onenext = 0;
            let oneflag = true;
            for (let i = 0; i < onedots.length; i++) {
                onedots[i].onclick = function () {
                    for (let j = 0; j < onedots.length; j++) {
                        onedots[j].classList.remove("active");
                        oneimgs[j].style.left = onewidths + "px";
                    }
                    onedots[i].classList.add("active");
                    oneimgs[i].style.left = "0";
                    onenow = onenext;
                }
            }
            oneimgs[0].style.left = "0";
            onedots[0].classList.add("active");

            function onemove() {
                onenext++;
                if (onenext == 4) {
                    onenext = 3;
                }
                oneimgs[onenext].style.left = onewidths + "px";
                oneimgs[onenow].style.left = -onewidths + "px";
                oneimgs[onenext].style.left = "0";
                onedots[onenow].classList.remove("active");
                onedots[onenext].classList.add(("active"));
                onenow = onenext;
            }

            onerightbtn.onclick = function () {
                onemove();
            }

            function onemoveL() {
                onenext--;
                if (onenext < 0) {
                    onenext = 0;
                }
                oneimgs[onenext].style.left = -onewidths + "px";
                oneimgs[onenow].style.left = onewidths + "px";
                oneimgs[onenext].style.left = "0";
                onedots[onenow].classList.remove("active");
                onedots[onenext].classList.add(("active"));
                onenow = onenext;
            }

            oneleftbtn.onclick = function () {
                onemoveL();
            }


            // 内容轮播2
            let senimgs = document.querySelectorAll(".content .content-list .sen .banner .master");
            let sendots = document.querySelectorAll(".content .content-list .sen .dot li");
            let senleftbtn = document.querySelectorAll(".content .content-list .sen .leftbtn")[0];
            let senrightbtn = document.querySelectorAll(".content .content-list .sen .rightbtn")[0];
            let senwidths = parseInt(getComputedStyle(senimgs[0], null).width);
            let sennow = 0;
            let sennext = 0;
            let senflag = true;
            for (let i = 0; i < sendots.length; i++) {
                sendots[i].onclick = function () {
                    for (let j = 0; j < sendots.length; j++) {
                        sendots[j].classList.remove("active");
                        senimgs[j].style.left = senwidths + "px";
                    }
                    sendots[i].classList.add("active");
                    senimgs[i].style.left = "0";
                    sennow = sennext;
                }
            }
            senimgs[0].style.left = "0";
            sendots[0].classList.add("active");

            function senmove() {
                sennext++;
                if (sennext == 4) {
                    sennext = 3;
                }
                senimgs[sennext].style.left = senwidths + "px";
                senimgs[sennow].style.left = -senwidths + "px";
                senimgs[sennext].style.left = "0";
                sendots[sennow].classList.remove("active");
                sendots[sennext].classList.add(("active"));
                sennow = sennext;
            }

            senrightbtn.onclick = function () {
                senmove();
            }

            function senmoveL() {
                sennext--;
                if (sennext < 0) {
                    sennext = 0;
                }
                senimgs[sennext].style.left = -senwidths + "px";
                senimgs[sennow].style.left = senwidths + "px";
                senimgs[sennext].style.left = "0";
                sendots[sennow].classList.remove("active");
                sendots[sennext].classList.add(("active"));
                sennow = sennext;
            }

            senleftbtn.onclick = function () {
                senmoveL();
            }


            // 内容轮播3
            let sanimgs = document.querySelectorAll(".content .content-list .san .banner .master");
            let sandots = document.querySelectorAll(".content .content-list .san .dot li");
            let sanleftbtn = document.querySelectorAll(".content .content-list .san .leftbtn")[0];
            let sanrightbtn = document.querySelectorAll(".content .content-list .san .rightbtn")[0];
            let sanwidths = parseInt(getComputedStyle(sanimgs[0], null).width);
            let sannow = 0;
            let sannext = 0;
            let sanflag = true;
            for (let i = 0; i < sandots.length; i++) {
                sandots[i].onclick = function () {
                    for (let j = 0; j < sandots.length; j++) {
                        sandots[j].classList.remove("active");
                        sanimgs[j].style.left = sanwidths + "px";
                    }
                    sandots[i].classList.add("active");
                    sanimgs[i].style.left = "0";
                    sannow = sannext;
                }
            }
            sanimgs[0].style.left = "0";
            sandots[0].classList.add("active");

            function sanmove() {
                sannext++;
                if (sannext == 4) {
                    sannext = 3;
                }
                sanimgs[sannext].style.left = sanwidths + "px";
                sanimgs[sannow].style.left = -senwidths + "px";
                sanimgs[sannext].style.left = "0";
                sandots[sannow].classList.remove("active");
                sandots[sannext].classList.add(("active"));
                sannow = sannext;
            }

            sanrightbtn.onclick = function () {
                sanmove();
            }

            function sanmoveL() {
                sannext--;
                if (sannext < 0) {
                    sannext = 0;
                }
                sanimgs[sannext].style.left = -sanwidths + "px";
                sanimgs[sannow].style.left = sanwidths + "px";
                sanimgs[sannext].style.left = "0";
                sandots[sannow].classList.remove("active");
                sandots[sannext].classList.add(("active"));
                sannow = sannext;
            }

            sanleftbtn.onclick = function () {
                sanmoveL();
            }


            // 内容轮播4
            let forimgs = document.querySelectorAll(".content .content-list .for .banner .master");
            let fordots = document.querySelectorAll(".content .content-list .for .dot li");
            let forleftbtn = document.querySelectorAll(".content .content-list .for .leftbtn")[0];
            let forrightbtn = document.querySelectorAll(".content .content-list .for .rightbtn")[0];
            let forwidths = parseInt(getComputedStyle(forimgs[0], null).width);
            let fornow = 0;
            let fornext = 0;
            let forflag = true;
            for (let i = 0; i < fordots.length; i++) {
                fordots[i].onclick = function () {
                    for (let j = 0; j < fordots.length; j++) {
                        fordots[j].classList.remove("active");
                        forimgs[j].style.left = forwidths + "px";
                    }
                    fordots[i].classList.add("active");
                    forimgs[i].style.left = "0";
                    fornow = fornext;
                }
            }
            forimgs[0].style.left = "0";
            fordots[0].classList.add("active");

            function formove() {
                fornext++;
                if (fornext == 4) {
                    fornext = 3;
                }
                forimgs[fornext].style.left = forwidths + "px";
                forimgs[fornow].style.left = -forwidths + "px";
                forimgs[fornext].style.left = "0";
                fordots[fornow].classList.remove("active");
                fordots[fornext].classList.add(("active"));
                fornow = fornext;
            }

            forrightbtn.onclick = function () {
                formove();
            }

            function formoveL() {
                fornext--;
                if (fornext < 0) {
                    fornext = 0;
                }
                forimgs[fornext].style.left = -forwidths + "px";
                forimgs[fornow].style.left = forwidths + "px";
                forimgs[fornext].style.left = "0";
                fordots[fornow].classList.remove("active");
                fordots[fornext].classList.add(("active"));
                fornow = fornext;
            }

            forleftbtn.onclick = function () {
                formoveL();
            }


            // 轮播图
            let banner = $(".slip .banner img");
            let dots = $(".slip .dot li");
            let barrr = $(".slip .rightArrow");
            let barrl = $(".slip .leftArrow");
            let now = 0;
            banner.first().css("z-index", "10");
            dots.first().addClass("active");
            setInterval(move, 2000);

            function move() {
                now++;
                if (now == banner.length) {
                    now = 0;
                }
                banner.css("z-index", "5").eq(now).css("z-index", "10");
                dots.removeClass("active").eq(now).addClass("active");
            }
        }
)
