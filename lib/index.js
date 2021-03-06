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
let startX;
let startY;
let touchDuring;
let touchStartAt;
let gsd = {
  onSlideUp: () => {
  },
  onSlideDown: () => {
  },
  onSlideLeft: () => {
  },
  onSlideRight: () => {
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

  // 触摸结束时的横、纵坐标
  let endX = e.changedTouches[0].pageX;
  let endY = e.changedTouches[0].pageY;
  let direction = getDirection(startX, startY, endX, endY);

  switch (direction) {
    case 0:
      break;
    case 1:
      // 向上
      gsd.onSlideUp();
      break;
    case 2:
      // 向下
      gsd.onSlideDown();
      break;
    case 3:
      // 向左
      gsd.onSlideLeft();
      break;
    case 4:
      // 向右
      gsd.onSlideRight();
      break;
    default:
  }
}, false);

/**
 * 判断滑动的方位
 * @param angleX
 * @param angleY
 * @returns {number}
 */
function getAngle(angleX, angleY) {
  return Math.atan2(angleY, angleX) * 180 / Math.PI;
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
  const angleX = endX - startX;
  const angleY = endY - startY;
  let result = 0;
  //如果滑动距离太短
  if ((Math.abs(angleX) < 2 && Math.abs(angleY) < 2) || (Math.abs(Math.abs(angleX) - Math.abs(angleY)) < 100) || touchDuring > 0.6) {
    return result;
  }
  const angle = getAngle(angleX, angleY);
  if (angle >= -135 && angle <= -45) {
    // 向上
    result = 1;
  } else if (angle > 45 && angle < 135) {
    // 向下
    result = 2;
  } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
    // 向左
    result = 3;
  } else if (angle >= -45 && angle <= 45) {
    // 向右
    result = 4;
  }
  return result;
}
