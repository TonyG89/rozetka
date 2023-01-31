import section from '../helper/querySelector.js';
import { mainChar } from '../helper/const.js'

let list = ''

mainChar.forEach((item,index) => {
const hr = index < mainChar.length-2 && window.innerWidth>780 ? "<hr>" : "" 
list += `<li>${item}${hr}</li> 
`})


export default function bottom() {
    section(".bottom").innerHTML = `
        <div class="container">
            <div>
                <h2>Основні характеристики</h2>
                <ul>
                    ${list}
                </ul>
            </div>
                <img class="img-block" src="./img/bottom-block.png" alt="bottom-block" />
        </div>
    `
    if (window.innerWidth>780) {
    const liArray = section("ul").children
    const hrArray = document.querySelectorAll("hr")
    
    hrArray[2].style.marginTop="46"
    hrArray[3].style.marginTop="32"
    hrArray[4].style.marginTop="43"
    hrArray[7].style.marginTop="43"

    liArray[4].style.marginTop="-16"
    liArray[7].style.marginTop="-46"
    liArray[9].style.marginTop="-43"
}
};
