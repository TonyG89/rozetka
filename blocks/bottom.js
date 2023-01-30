import section from '../helper/querySelector.js';
import { mainChar } from '../helper/const.js'

let list = ''

    mainChar.forEach(item => list += `<li>${item}</li><br>`)


export default function bottom() {
    section(".bottom").innerHTML = `
        <div class="container">
            <div>
                <h2>Основні характеристики</h2>
                <ul>
                    ${list}
                </ul>
            </div>
            <div>
                <img src="../img/bottom-block.png" alt="bottom-block" />
            </div>
        </div>
    `
};
