var arr = ['C','<','%','/',7,8,9,'*',4,5,6,'-',1,2,3,'+',0,'.','='];
var headTag = document.createElement("h1");
headTag.innerText = "Simple Calculator";
headTag.style.textAlign = "center";
document.body.appendChild(headTag);

    var myDiv = document.createElement("div");
    myDiv.style.width = "410px";
    myDiv.style.borderRadius = "5px";
    myDiv.style.border = "10px solid #8f7b7b";
    myDiv.style.marginLeft = "450px"
    document.body.appendChild(myDiv);

    var screen = document.createElement("div");
    screen.style.width = "400px";
    screen.style.height = "70px";
    screen.style.textAlign = "end";
    screen.style.fontSize = "50px";
    screen.style.alignContent = "flexStart";
    screen.style.border = "5px solid yellow";
    myDiv.appendChild(screen);

    var inputDiv = document.createElement("div");
    inputDiv.style.display = "flex";
    inputDiv.style.flexWrap = "wrap";
    inputDiv.style.alignContent = "flexEnd";
    inputDiv.style.width = "409px";
    inputDiv.style.height = "310px";
    inputDiv.style.backgroundColor = "#8f7b7b"
    inputDiv.style.border = "1px solid #8f7b7b";
    myDiv.appendChild(inputDiv);

    for(let i=0;i<arr.length;i++){
        var box = document.createElement("button");
        box.innerText = arr[i];
        box.setAttribute("id",i);
        box.style.width = "90px";
        box.style.flexGrow = "1";
        box.style.borderRadius = "30px"
        box.style.textAlign = "center";
        box.style.fontSize = "50px";
        box.style.border = "1px solid black";
        box.addEventListener('click',(event)=>{
            screen.innerText += arr[i];
            if(screen.innerText.includes('C')){
                screen.innerText = "";
            }
            else if(screen.innerText.includes('=')){
                screen.innerText = eval(screen.innerText.substring(0,screen.innerText.length-1));
            }
            else if(screen.innerText.includes('<')){
                screen.innerText = screen.innerText.substring(0,screen.innerText.length-2);
            }
        })
        inputDiv.appendChild(box);
    }