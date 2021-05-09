var xposition = 1;
var yposition = 1;

var div = new Array();
var Xposition = new Array();
var Yposition = new Array();

window.onload = createDiv();

// var counter = 0;
// paragraph = document.getElementById("counter-display");
// const cnt = document.createElement("p");
// cnt.innerText("ants killed:" + counter);
// paragraph.append(cnt);



function createDiv() {

    
                    for (i=1; i<5; i++){
    
                        var divs = document.createElement("div");
                            divs.setAttribute('id', 'div_id' + i );
                            divs.innerHTML = "Div" + i;
                    
                            divs.style = "position:absolute;text-align:center;padding-top: 15px; height: 50px;width: 50px; top:" + X + "px; left:" + Y + "px;";

                            var X =  Math.floor((Math.random() * 420)+ 1) ;
                            var Y =  Math.floor((Math.random() * 420)+ 1);

                            const randomColor = Math.floor(Math.random()*16777215).toString(16);
                            divs.style.background = "#" + randomColor;
                            
                            const maindiv = document.getElementById("container");
                            maindiv.append(divs);              
                            Movement(0.2, 0.2, X, Y, divs, i)
                            
                        }    
                    }




function Movement(xposition, yposition, X, Y, divs, index){
    let count = 0;
    divs.onclick = function(){  
            count ++;
            divs.innerHTML = "Div" + index + ":" +count;
            document.querySelector(".para").innerHTML = "Selected Div" + index + " = " +count;
            document.querySelector(".para").style = "font-size: 20px; color: green; font-weight: 600;"
            
               
    }
    
    setInterval(() => {
        X += xposition;
        divs.style.left = X + "px";

        Y += yposition;
        divs.style.top = Y + "px";
        

        if(X > 450 || X < 0){
            xposition = xposition * -1;
        }
        if (Y > 450 || Y < 0) {
            yposition = yposition * -1;
        }
        Xposition[index] = X;
        Yposition[index] = Y;

        for (var i = 0; i < 5; i++) {

            if (!(i === index)) {
                if ((Xposition[i] < X + 50) && (Xposition[i] + 50 > X) && (Yposition[i] < Y + 50) && (Yposition[i] + 50 > Y)) {
                    xposition = xposition * -1;
                    yposition = yposition * -1;
                }
            }
        }
    }, 1);


}






