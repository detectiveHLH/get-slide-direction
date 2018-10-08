/**
 * global variable
 */
let startX, startY, touchDuring, touchStartAt;
let gsd = {
    onSlideUp: () => {
        console.log('Move up');
    },
    onSlideDown: () => {
        console.log('Move down');
    },
    onSlideLeft: () => {
        console.log('Move left');
    },
    onSlideRight: () => {
        console.log('Move right');
    },
};

/**
 * add touch start event listener
 * Get the touch start time, and get the coordinate of the touch point
 */
window.addEventListener('touchstart', (e) => {
    touchStartAt = Date.now();
    startX = e.touches[0].pageX;
    startY = e.touches[0].pageY;
}, false);
/**
 * add touch end event listener
 */
window.addEventListener('touchend', (e) => {
    touchDuring = ((Date.now() - touchStartAt) / 1000)
}, false);
