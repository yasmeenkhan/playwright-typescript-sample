// document.getElementById('owl').onclick = function(){
//     alert("Owl Clicked")
// }

// document.getElementById('owl').addEventListener('click', function(e){
    
// }, false) third arguement is by default false

// document.getElementById('owl').addEventListener('click', function(e){
//     alert("owl clicked")
// })

// EVENTS to be read
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientx, clienty
// altkey, ctrlkey, shiftkey, keycode

// event propogation - bubbling, capturing

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked on images url")
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("clicked on owl url")
//     e.stopPropagation()
// }, false)

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("clicked on google")
// }, false)

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName)
    if(e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode
        removeIt.remove()
    // removeIt.parentNode.removeChild(removeIt)
    }
    
}, false)
