


window.onload = function(){
    //time



    (function(){
        var date = new Date();
        var li = document.getElementsByTagName('li');
        var secs = date.getSeconds();
        var mins = date.getMinutes();
        var hours = date.getHours();

alert(1);

        console.log();



        if(secs<10){
            secs="0" + secs;
        }
        if(mins<10){
            mins="0" + mins;
        }
        if(hours<10){
            hours="0" + hours;
        }

        /*li[1].innerHTML = "Your local time is: " + hours+':'+ mins+':'+
            "<span style = 'color:kblue'>" + secs +"</span>";
        //div[1].innerHTML = new Date().setTime(new Date(date).getTime());
        li[0].innerHTML = "You are online for:" + '**'  +':'+ '**'+':'+
            "<span style = 'color:kblue'>" + "**" +"</span>";
        window.setTimeout(arguments.callee, 1000);*/
     })

     };




