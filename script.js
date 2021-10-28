let upBtn = document.querySelector(".up-btn");
let dataBlock = document.querySelector(".data-block");


upBtn.addEventListener ("click",  () => {
    let userData = document.createElement("div");
    userData.innerHTML = `<div class = info-block ><ul class="info-list"><li><p>System Name</p><br><h6></h6><input class="first-input first-name-inp" type="text" placeholder="James-Main-Mackbook"></li>
    <li><p>ID</p><br><input class="first-input first-id-inp" type="number" placeholder="91520"></li>
    <li><p>Created date</p><br><input class="first-input first-age-inp" placeholder="data"></li></ul> <div class="btns"><button class="green-btn">Add License</button><button class="red-btn">Remove</button> </div> </div> `
    
    userData.setAttribute("class", "info-block-section")
    dataBlock.appendChild(userData);
    let removeBtn = document.querySelectorAll(".red-btn");
    let infoBlock = document.querySelector(".info-block");
    for(let i = 0; i < removeBtn.length; i++) {
       removeBtn[i].addEventListener("click", () => {
           infoBlock.remove();
       })
    }
    let addBtn = document.querySelectorAll(".green-btn");
    for(let j = 0; j < addBtn.length; j++) {
        addBtn[j].addEventListener("click", () => {
            let savedDat = document.createElement("div");
            savedDat.innerHTML = ` <ul class="info-list"><li class = "name-li"><p style = "padding-bottom:17px">Name</p><strong style = "color:white;font-size: 13px;"></strong></li><li class = "id-li"><p>ID</p><br><strong style = "color:white;font-size: 12px;"></strong></li><li class = "data-li"><p>date</p><br><strong style = "color:white;font-size: 12px;"></strong></li></ul>
            <div class="btns"><button class="del-btn remove">Remove</button></div> `;
            savedDat.setAttribute("class", "saved-block");
            userData.appendChild(savedDat);
            let nameVal1 = document.querySelectorAll(".first-name-inp");
            for(let k = 0; k < nameVal1.length;k++) {
                let nameVal2 = document.querySelectorAll(".name-li>strong"); 
                for(let g = 0; g < nameVal2.length;g++)
                nameVal2[g].innerHTML=nameVal1[k].value ;
            }
            let idVal1 = document.querySelectorAll(".first-id-inp");
            for(let d = 0; d < idVal1.length;d++) {
                let idVal2 = document.querySelectorAll(".id-li>strong");
                for(let v = 0;v < idVal2.length;v++) {
                    idVal2[v].innerHTML = idVal1[d].value;
                }
            }
            let dataVal1 = document.querySelectorAll(".first-age-inp");
            for(let f = 0; f < dataVal1.length;f++) {
                let dataVal2 = document.querySelectorAll(".data-li>strong");
                for(let s = 0;s < dataVal2.length;s++) {
                    dataVal2[s].innerHTML = dataVal1[f].value;
                }
            }
            
            let removeBtn1 = document.querySelectorAll(".remove");
            for(let r = 0; r < removeBtn.length;r++) {
                removeBtn1[r].addEventListener("click", () => {
                    savedDat.remove();
            })
            }
            
            
        })
    }
    
})

