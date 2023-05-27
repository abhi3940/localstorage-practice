$(document).ready(function(){
    $("#butt").click(function(){
        // function getData(){
        //     let info = {
        //         name : $("#name").val(),
        //         age : $("#age").val(),
        //         hobby : $("#hobby").val()
        //     } ;
        //     return info;
        // }
        // function localStore(){
        //     if(!localStorage.getItem("info")){
        //         localStoreage.setItem("info",JSON.stringify(getData()));
        //     }else{
        //         localStoreage.removeItem("info");
        //         localStoreage.setItem("info",JSON.stringify(getData()));
        //     }
        // }
        // localStore();
        //let name = $("#name").val();
        console.log('print tari hotay ka');
        window.location.href="display.html"
    });
});