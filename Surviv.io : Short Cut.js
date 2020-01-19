(function () {
    'use strict';
    function DUO(){
        document.getElementById("btn-create-team").click();
        setTimeout(function(){
            document.getElementById("btn-team-queue-mode-1").click();
            document.getElementById("btn-team-fill-none").click();
            document.getElementById("btn-start-team").click();
        },750);
    };

    var DUO_btn = document.createElement("button");
    DUO_btn.setAttribute("id", "solo_duo");
    DUO_btn.setAttribute("class", "btn-green btn-darken menu-option");
    DUO_btn.innerHTML = "solo:duo";
    DUO_btn.style.display = "inline-block";
    DUO_btn.style.width = "50%";
    DUO_btn.style.backgroundColor = "rgb(255, 30, 30)";
    DUO_btn.style.borderBottom = "2px solid rgb(255, 0, 0)";
    DUO_btn.style.boxShadow = "rgb(255, 0, 0) 0px -2px inset";
    DUO_btn.addEventListener("click",function () {
        DUO();
    });

    function SQUAD(){
        document.getElementById("btn-create-team").click();
        setTimeout(function(){
            document.getElementById("btn-team-queue-mode-2").click();
            document.getElementById("btn-team-fill-none").click();
            document.getElementById("btn-start-team").click();
        },750);
    };

    var SQUAD_btn = document.createElement("button");
    SQUAD_btn.setAttribute("id", "solo_squad");
    SQUAD_btn.setAttribute("class", "btn-green btn-darken menu-option");
    SQUAD_btn.innerHTML = "solo:squad";
    SQUAD_btn.style.display = "inline-block";
    SQUAD_btn.style.width = "50%";
    SQUAD_btn.style.backgroundColor = "rgb(150, 0, 0)";
    SQUAD_btn.style.borderBottom = "2px solid rgb(100, 0, 0)";
    SQUAD_btn.style.boxShadow = "rgb(100, 0, 0) 0px -2px inset";
    SQUAD_btn.addEventListener("click",function () {
        SQUAD();
    });

    document.getElementById("start-bottom-left").style.display = "none";
    document.getElementById("start-bottom-middle").style.display = "none";

    var div = document.createElement("div");
    div.setAttribute("id","solo_team");
    div.append(DUO_btn,SQUAD_btn);

    document.getElementById("ad-block-left").append(div);
})();
