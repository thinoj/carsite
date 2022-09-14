// let search=document.getElementById("search");
// let searchbutton=document.getElementById("sbutton");
let maincontent=document.getElementById("maincontent");
let carslist=["audi","toyota","bmw","ferrari","lamborghini","porsche"]
let content;
function comingsoon(){
    content=`<button class="back" onclick="goback()">Back</button>
    <div class="center"><div>
    <h1>Coming soon....</h1></div></div>`
    maincontent.innerHTML=content
    
}
// searchbutton.addEventListener("click",()=>{
    
//     dosearch(search.value);
// })

var model = 'camry' 
goback();
function goback(){
    content=`<div class="center"><div>`
    for (const car of carslist) {
    
        content+=`<div onclick="dosearch('${car}')">${car}</div>`
    }
    content+=`</div></div>`
    maincontent.innerHTML=content
    
}                                         
function dosearch(model){
    content=`<div class="center"><div>
    <h1>loading....</h1></div></div>`
    maincontent.innerHTML=content
    
console.log(model);
    fetch('https://api.api-ninjas.com/v1/cars?make=' + model,{
        method: 'GET',
        headers: { 'X-Api-Key': 'zsKoar+IChJDyqbSffKSTA==jFQoiszsfoaFtdhv'},
        contentType: 'application/json'})
        .then(result=> {
            return result.json();
})
.then(result=> {

    content=`
    <button class="back" onclick="goback()">Back</button>
    <div class="maincontainer">`
    // content+=JSON.stringify(result);
    console.log(result)
    for (const cars of result) {
        content+=`
        <div class="carcontainer">`
        for(const key in cars){
            content+=`
            <div>
                <div class="ldiv">${key}</div>
                <div class="rdiv">${
                    !isNaN(cars[key]) && parseInt(cars[key])<200?
                    `<span style="
                    background-color:#1a1a2e;
                    height:15px;
                    width:${cars[key]*2}px;
                    border-radius:5px;
                    "> </span>`+cars[key]
                    :cars[key]
                     
                }</div>
            </div>
            `
        }
        content+=`</div>`
    }
    content+=`</div>`
    maincontent.innerHTML=content


})
        }
