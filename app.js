var count = 75;
var count2 = 10;

window.onkeydown = function () {
    console.log(event.keyCode);
    var character1 = document.getElementById("character1");
    if (event.keyCode === 37 && count > 10) {
        character1.src = "imgs/adon-walk.gif";
        console.log(character1.src );
        count = count - 3;
        character1.style.transform = " scaleX(-1)";
        character1.style.left = count + "%";
        setTimeout(function () {
            character1.src = "./imgs/sf-adon.gif";
        }, 200);
    }

    if (event.keyCode === 39 && count < 75) {
        character1.src = "imgs/adon-walk2.gif";
        count = count + 3;
        console.log(count);
        character1.style.transform = "scaleX(-1)";
        character1.style.height = "50%;"
        character1.style.left = count + "%";
        setTimeout(function () {
          character1.src = "./imgs/sf-adon.gif";
        }, 200);
      }
      if (event.keyCode === 40) {
        character1.src = "./imgs/adon-hk.gif";
        setTimeout(function () {
          character1.src = "./imgs/sf-adon.gif";
        }, 500);
      }if (event.keyCode === 38) {
        character1.src = "./imgs/adon-animation.gif";
        setTimeout(function () {
          character1.src = "./imgs/sf-adon.gif";
        }, 500);
      }


    var character2 = document.getElementById("character2");
    if (event.keyCode === 68 && count2 < 75) {
        character2.src = "./imgs/marco-walk.gif";
        console.log(character2.src );
        count2 = count2 + 3;
        character2.style.left = count2 + "%";
        setTimeout(function () {
            character2.src = "./imgs/snk-marco.gif";
        }, 200);
    }
        if (event.keyCode === 65 && count2 > 10) {
        character2.src = "./imgs/marco-walk.gif";
        count2 = count2 - 3;
        console.log(count2);
        character2.style.height = "50%;"
        character2.style.left = count2 + "%";
        setTimeout(function () {
          character2.src = "./imgs/snk-marco.gif";
        }, 200);
      }
      if (event.keyCode === 83) {
        character2.src = "./imgs/marco-k.gif";
        setTimeout(function () {
          character2.src = "./imgs/snk-marco.gif";
        }, 500);
      }
      if (event.keyCode === 87) {
        character2.src = "./imgs/marco-aircombo2.gif";
        setTimeout(function () {
          character2.src = "./imgs/snk-marco.gif";
        }, 500);
      }
    
}




// window.onkeydown = function () {
    // console.log(event.keyCode);
    // var character2 = document.getElementById("character2");
    // if (event.keyCode === 37 && count2 > 68) {
    //     character2.src = "imgs/macro-walk.gif";
    //     console.log(character2.src );
    //     count2 = count2 + 3;
    //     character2.style.left = count2 + "%";
    //     setTimeout(function () {
    //         character2.src = ".imgs/snk-marco.gif";
    //     }, 200);
    // }

    // if (event.keyCode === 39 && count2 < 65) {
    //     character2.src = "imgs/macro-walk.gif";
    //     count2 = count2 - 3;
    //     console.log(count2);
    //     character2.style.height = "50%;"
    //     character2.style.left = count2 + "%";
    //     setTimeout(function () {
    //       character2.src = ".imgs/snk-marco.gif";
    //     }, 200);
    //   }
    // //   if (event.keyCode === 40) {
    // //     character2.src = "./imgs/adon-hk.gif";
    // //     setTimeout(function () {
    // //       character2.src = ".imgs/snk-marco.gif";
    // //     }, 500);
    // //   }
    //   if (event.keyCode === 87) {
    //     character2.src = "./imgs/marco-aircombo2.gif";
    //     setTimeout(function () {
    //       character2.src = ".imgs/snk-marco.gif";
    //     }, 500);
    //   }

    
// }