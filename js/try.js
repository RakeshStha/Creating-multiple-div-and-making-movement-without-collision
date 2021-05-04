
var i = 1;


function createDiv(obj) {
 

for (j=0; j<obj; j++){
    var div = document.createElement("div");
        div.setAttribute('id', 'div_id' + i );
        div.setAttribute('onclick', 'countClick()');

        div.style = "position:absolute;height: 50px;width: 50px; ";
        var top = div.style.top = Math.floor(Math.random()*100) + "px" ;
        var left = div.style.left = Math.floor(Math.random()*100) + "px";
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        div.style.background = "#" + randomColor;

        const content = document.querySelector(".div");
        content.appendChild(div);

        // obj.value = '';

        i = i + 1;
 
        
}

setInterval(move, 100);
function move(){
    const div = document.getElementById('div_id1');
    var x = top;
    var y = left;
    setInterval(first,1000);
    function first(){
        x += 1;
        y += 1;
    console.log(x)
        div.style.top = x + "px";
        div.style.left = y + "px";
    }
}
    




}


