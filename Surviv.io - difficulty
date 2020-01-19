(function () {
    'use strict';
    var span = document.createElement("span");
    span.style.marginLeft = "200px";
    span.style.color = "black";
    span.style.fontSize = "30px";
    span.innerHTML = "Normal Mode Play";
    document.getElementById("ui-map-wrapper").append(span);

    function hide(_elm){
        _elm.style.display ='none';
    }

    function show(_elm){
        _elm.style.display ='block';
    }

    var setTimer1;
    function startTimer1(){
        setTimer1=setInterval(function(){
            hide(document.getElementById("ui-map-info"));
            hide(document.getElementById("ui-upper-center"));
            hide(document.getElementById("ui-spec-counter"));
            hide(document.getElementById("ui-bottom-center-1"));
            hide(document.getElementById("ui-bottom-center-2"));
            hide(document.getElementById("ui-lower-center"));
            hide(document.getElementById("ui-team-indicators"));
        }, 500);
    }
    function stopTimer1(){
        clearInterval(setTimer1);
    }

    var setTimer2;
    function startTimer2(){
        setTimer2=setInterval(function(){
            show(document.getElementById("ui-map-info"));
            show(document.getElementById("ui-upper-center"));
            show(document.getElementById("ui-spec-counter"));
            show(document.getElementById("ui-bottom-center-1"));
            show(document.getElementById("ui-bottom-center-2"));
            show(document.getElementById("ui-lower-center"));
            show(document.getElementById("ui-team-indicators"));
        }, 500);
    }
    function stopTimer2(){
        clearInterval(setTimer2);
    }

    function Hard(){
        hide(document.getElementById("ui-health-counter"));//HPバー
        hide(document.getElementById("ui-current-clip"));//残りの装弾数
        hide(document.getElementById("ui-map-info"));//ガスタイマー
        hide(document.getElementById("ui-leaderboard-alive"));//生存数
        hide(document.getElementById("ui-leaderboard").getElementsByClassName('ui-leaderboard-header')[0]);//生存の文字
        hide(document.getElementById("ui-kill-counter"));//kill数
        hide(document.getElementById("ui-kill-counter-wrapper").getElementsByClassName("ui-kill-counter-header")[0]);//kill数文字
        hide(document.getElementById("ui-top-left"));//teamHP
        hide(document.getElementById("ui-boost-counter"));//アドレナリンバー
        hide(document.getElementById("btn-game-quit"));//試合から撤退ボタン
        hide(document.getElementById("ui-killfeed-contents"));//右上のメッセージ
        hide(document.getElementById("ui-team-indicators"));//チームの居場所
    }

    function Normal(){
        show(document.getElementById("ui-health-counter"));//HPバー
        show(document.getElementById("ui-current-clip"));//残りの装弾数
        show(document.getElementById("ui-map-info"));//がす
        show(document.getElementById("ui-leaderboard-alive"));//生存数
        show(document.getElementById("ui-leaderboard").getElementsByClassName('ui-leaderboard-header')[0]);//生存の文字
        show(document.getElementById("ui-kill-counter"));//kill数
        show(document.getElementById("ui-kill-counter-wrapper").getElementsByClassName("ui-kill-counter-header")[0]);//kill数文字
        show(document.getElementById("ui-top-left"));//teamHP
        document.getElementById("ui-boost-counter").style = "opacity: 0;";//アドレナリンバー
        show(document.getElementById("btn-game-quit"));//試合から撤退ボタン
        show(document.getElementById("ui-killfeed-contents"));//右上のメッセージ
        show(document.getElementById("ui-team-indicators"));//チームの居場所
    }

    var Mode_Btn = document.createElement("button");
    Mode_Btn.setAttribute("id", "Normal_Mode");
    Mode_Btn.setAttribute("class", "btn-green btn-darken menu-option");
    Mode_Btn.innerHTML = "Normal Mode";
    Mode_Btn.style.color = "blue";
    Mode_Btn.style.backgroundColor = "white";
    Mode_Btn.style.borderBottom = "2px solid rgb(96, 96, 96)";
    Mode_Btn.style.boxShadow = "rgb(96, 96, 96) 0px -2px inset";
    Mode_Btn.addEventListener("click",function(){
        if(Mode_Btn.innerHTML == "Normal Mode"){
            hide(div2);
            Hard();
            startTimer1();
            stopTimer2();
            span.innerHTML = "Hard Mode Play";
            span.style.color = "#FF0000";
            Mode_Btn.innerHTML = "Hard Mode";
            Mode_Btn.style.color = "yellow";
            Mode_Btn.style.backgroundColor = "red";
            Mode_Btn.style.borderBottom = "2px solid rgb(85, 0, 0)";
            Mode_Btn.style.boxShadow = "rgb(85, 0, 0) 0px -2px inset";
        } else if(Mode_Btn.innerHTML == "Hard Mode"){
            show(div2);
            Normal();
            startTimer2();
            stopTimer1();
            span.innerHTML = "Normal Mode Play";
            span.style.color = "#000000";
            Mode_Btn.innerHTML = "Normal Mode";
            Mode_Btn.style.color = "blue";
            Mode_Btn.style.backgroundColor = "white";
            Mode_Btn.style.borderBottom = "2px solid rgb(96, 96, 96)";
            Mode_Btn.style.boxShadow = "rgb(96, 96, 96) 0px -2px inset";
        }
    });

    var Max_Mode_Btn = document.createElement("button");
    Max_Mode_Btn.setAttribute("id", "Max_Mode_Toggle");
    Max_Mode_Btn.setAttribute("class", "btn-green btn-darken menu-option");
    Max_Mode_Btn.innerHTML = "Normal Mode";
    Max_Mode_Btn.style.color = "blue";
    Max_Mode_Btn.style.backgroundColor = "white";
    Max_Mode_Btn.style.borderBottom = "2px solid rgb(96, 96, 96)";
    Max_Mode_Btn.style.boxShadow = "rgb(96, 96, 96) 0px -2px inset";
    Max_Mode_Btn.addEventListener("click",function(){
        if(Max_Mode_Btn.innerHTML == "Normal Mode"){
            hide(div1);
            span.innerHTML = "Maximum Hard Mode Play";
            span.style.color = "#FF0000";
            hide(document.getElementById("ui-game"));
            Max_Mode_Btn.innerHTML = "Maximum Hard Mode";
            Max_Mode_Btn.style.color = "yellow";
            Max_Mode_Btn.style.backgroundColor = "rgb(150, 0, 0)";
            Max_Mode_Btn.style.borderBottom = "2px solid rgb(50, 0, 0)";
            Max_Mode_Btn.style.boxShadow = "rgb(50, 0, 0) 0px -2px inset";
        } else if(Max_Mode_Btn.innerHTML == "Maximum Hard Mode"){
            show(div1);
            span.innerHTML = "Normal Mode Play";
            span.style.color = "#000000";
            show(document.getElementById("ui-game"));
            Max_Mode_Btn.innerHTML = "Normal Mode";
            Max_Mode_Btn.style.color = "blue";
            Max_Mode_Btn.style.backgroundColor = "white";
            Max_Mode_Btn.style.borderBottom = "2px solid rgb(96, 96, 96)";
            Max_Mode_Btn.style.boxShadow = "rgb(96, 96, 96) 0px -2px inset";
        }
    });

    hide(document.getElementById("start-bottom-left"));
    hide(document.getElementById("start-bottom-middle"));

    if(document.getElementsByClassName("adblock-plea")[1]){
        document.getElementsByClassName("adblock-plea")[1].remove();
    }
    if(document.getElementsByClassName("surviv-shirts")[1]){
        document.getElementsByClassName("surviv-shirts")[1].remove();
    }
    if(document.getElementById("surviv-io_300x250")){
        document.getElementById("surviv-io_300x250").remove();
    }

    var div1 = document.createElement("div");
    div1.setAttribute("id","Hard_Mode");
    div1.append("Hard Mode",Mode_Btn);

    var div2 = document.createElement("div");
    div2.setAttribute("id","Max_Hard_Mode");
    div2.append("Maximum Hard Mode",Max_Mode_Btn);

    document.getElementById("ad-block-left").append(div1,div2);
})();
