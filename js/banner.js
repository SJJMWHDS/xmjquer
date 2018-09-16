window.onload(function () {
    // 倒计时
    let spans=document.querySelectorAll(".countdown .box");
    setInterval(setDate,1000);
    function setDate(){
        let arr=fn();
        spans.forEach((v,index)=>{
            v.innerHTML=arr[index];
    })
        function fn() {
            let arr = [];
            let now = new Date();
            let future = new Date(2018, 9, 1);
            let time = Math.floor((future.getTime() - now.getTime()) / 1000);
            console.log(time);
})