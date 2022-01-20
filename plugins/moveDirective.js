import Vue from 'vue'

// Element must be position:absolute
Vue.directive('move', (el, { arg, value }) => {
  let delay = 1000;
  if (value?.delay) delay = value.delay

  setTimeout(() => {
    el.style.transition = '3s ease';

    if (arg === 'all') {
      if (value.top !== 0) el.style.top = `${value.top}%`;
      if (value.right !== 0) el.style.right = `${value.right}%`;
      if (value.bottom !== 0) el.style.bottom = `${value.bottom}%`;
      if (value.left !== 0) el.style.left = `${value.left}%`;
    }
    else
      el.style[arg] = value;
  }, delay);
})
