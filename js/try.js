
var i = 1;


function createDiv(obj) {

                    for (j=0; j<obj; j++){
    
                        var div = document.createElement("div");
                            div.setAttribute('id', 'div_id' + i );
                            div.setAttribute('onclick', 'countClick()');
                    
                            div.style = "position:absolute;height: 50px;width: 50px; ";

                            let randomPosition = ['20', '30','40','50', '60', '70', '80', '90', '100'];

                            var top =  randomPosition[Math.floor(Math.random() * randomPosition.length)] ;
                            var left =  randomPosition[Math.floor(Math.random() * randomPosition.length)];

                            div.style.top = top + "px";
                            div.style.left = left + "px";

                            const randomColor = Math.floor(Math.random()*16777215).toString(16);
                            div.style.background = "#" + randomColor;
                    
                            const content = document.querySelector(".div");
                            content.appendChild(div);
                    
                            // obj.value = '';
                    
                            i = i + 1;

                        }
                        var y = parseInt(top);
                            var x = parseInt(left);
                       
                            

                            setInterval(Move, 100);
                            function Move(){
                                y += 1;
                                x += 1;
                                
                                div.style.top = x + "px";
                                div.style.left = y + "px";
                                
                                console.log(x)
                                console.log(y)

                                   
                                // div.style.top = X + "px";
                                // div.style.left = Y + "px";
                                // X += 1;
                                // Y += 1; 
                                // div.style.top = X + "px";
                                // div.style.left = Y + "px";
                            }
                       
                    }
                        
                        

                    // const divs = document.querySelector('div')
                   
                    
            
           
            
        
        // positionX = top;
        // positionY = left;
        // setInterval(move, 100);
        // function move(){
        //     positionX += 1;
        //     positionY += 1;
        //     div.style.top = positionX + "px";
        //     div.style.left = positionY + "px";

        // }
 
        



// setInterval(move, 100);
// function move(){
//     const div = document.getElementById('div_id1');
//     var x = top;
//     var y = left;
//     setInterval(first,1000);
//     function first(){
//         x += 1;
//         y += 1;
//     console.log(x)
//         div.style.top = x + "px";
//         div.style.left = y + "px";
//     }
// }
    




// }


