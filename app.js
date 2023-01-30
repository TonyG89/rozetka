import top from './blocks/top.js'
import center from './blocks/center.js'
import bottom from './blocks/bottom.js'

function render(){
    top()
    center()
    bottom()
}

(()=>render())()