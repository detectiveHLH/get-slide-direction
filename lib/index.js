/**
 * @Author detectiveHLH
 * @Date 2018-10-10 18:46
 *
 * global variable
 * startX 触摸开始的x坐标
 * startY 触摸开始的y坐标
 * touchDuring 触摸持续的时间
 * touchStartAt 触摸开始的时间
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
  // 阻止浏览器默认事件
  if (e.cancelable) {
    if (!e.defaultPrevented) {
      e.preventDefault();
    }
  }
  // e.preventDefault();
  touchStartAt = Date.now();
  // 触摸开始时的横、纵坐标
  startX = e.touches[0].pageX;
  startY = e.touches[0].pageY;
}, false);
/**
 * add touch end event listener
 */
window.addEventListener('touchend', (e) => {
  touchDuring = ((Date.now() - touchStartAt) / 1000);
  // console.log(touchDuring);

  // 触摸结束时的横、纵坐标
  let endX = e.changedTouches[0].pageX;
  let endY = e.changedTouches[0].pageY;
  let direction = getDirection(startX, startY, endX, endY);

  switch (direction) {
    case 0:
      console.log("未滑动！");
      break;
    case 1:
      // 向上
      console.log("向上！");
      gsd.onSlideUp();
      break;
    case 2:
      // 向下
      console.log("向下！");
      gsd.onSlideDown();
      break;
    case 3:
      // 向左
      console.log("向左！");
      gsd.onSlideLeft();
      break;
    case 4:
      // 向右
      console.log("向右！");
      gsd.onSlideRight();
      break;
    default:
  }
}, false);

/**
 * 判断滑动的方位
 * @param angX
 * @param angY
 * @returns {number}
 */
function getAngle(angX, angY) {
  return Math.atan2(angY, angX) * 180 / Math.PI;
}

/**
 * 获取触摸的方向
 * @param startX 触摸开始的x坐标
 * @param startY 触摸开始的y坐标
 * @param endX 触摸结束的x坐标
 * @param endY 触摸结束的y坐标
 * @returns {number}
 */
function getDirection(startX, startY, endX, endY) {
  const angX = endX - startX;
  const angY = endY - startY;
  let result = 0;
  //如果滑动距离太短
  if ((Math.abs(angX) < 2 && Math.abs(angY) < 2) || (Math.abs(Math.abs(angX) - Math.abs(angY)) < 100) || touchDuring > 0.6) {
    return result;
  }
  const angle = getAngle(angX, angY);
  if (angle >= -135 && angle <= -45) {
    result = 1;
  } else if (angle > 45 && angle < 135) {
    result = 2;
  } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
    result = 3;
  } else if (angle >= -45 && angle <= 45) {
    result = 4;
  }
  return result;
}
