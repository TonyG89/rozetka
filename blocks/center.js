import section from '../helper/querySelector.js';

export default function center() {
    section(".center").innerHTML = `
    <div class="content">
        <h2>Захист від води</h2>
        <img src="./img/center-clock.png" alt="watch-center">
    </div>
    <div class="img-block">
        <img src="./img/center-block.png" alt="center-block">
    </div>
`
};