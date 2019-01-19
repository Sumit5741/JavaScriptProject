var pageCounter=1;
var animalContainer=document.getElementById('animal_info');
var btn=document.getElementById('btn');

btn.addEventListener("click",function(){
    var ourRequest=new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
    ourRequest.onload=function(){
    // console.log(ourRequest.responseText);
    var ourData=JSON.parse(ourRequest.responseText);
    // alert('Hiiii');
    renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;
    if(pageCounter>3){
        // alert('Hellooo!!');
        // btn.classList.add("hide-me");
        document.getElementById('btn').style.visibility="hidden";
    }
});

function renderHTML(data){
    // alert('Hellooo!!');
    var htmlString="";
    for(var i=0; i<data.length; i++)
    {
        htmlString +="<p>" +data[i].name + "is a" +data[i].species + ".</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend',htmlString);
}


