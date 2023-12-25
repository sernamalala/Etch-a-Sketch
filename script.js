

let gridContainer = document.querySelector(".container");

gridNum = 16;
//outer loop is rows
//inner loop is columns

let myButton = document.querySelector("#button");
myButton.addEventListener("click",function(){

    gridNum = prompt("Enter number: ");
})

if(gridNum>0){

for (let i = 0; i< gridNum; i++) {
    for (let j= 0; j< gridNum; j++) {
        let blockDiv = document.createElement("div");
        blockDiv.className = "block";
        gridContainer.appendChild(blockDiv);

        blockDiv.addEventListener("mouseover", function(){

            blockDiv.classList.add("hovering");
        });
    }
    
     
}


document.body.appendChild(gridContainer);

}