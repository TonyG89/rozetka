import section from '../helper/querySelector.js';

export default function top() {
    section(".top").innerHTML=`
    <div class="container">
        <img src="./img/logo.png" alt="watch-logo">
        <h2>Можна закохатися.
            <br>З багатьох причин.
        </h2>
        <div class="clock"></div>
        <p>Основні функції для
            <br> підтримання здоров’я, безпеки 
            <br> й активного способу життя.
        </p>
        <div>
            <img class="clocks" src="./img/clocks.png" alt="clocks">
        </div>
    </div>`
};
