export default function getRange(start, finish) {
  /* eslint no-param-reassign:0 */
  const range = [];

  if (finish === undefined && start) {
    finish = start;
    start = 0;
  }

  let reverse = false;
  if (start > finish) {
    const temp = start;

    start = finish;
    finish = temp;
    reverse = true;
  }

  if (reverse) {
    for (let i = finish; i >= start; i--) {
      range.push(i);
    }
  } else {
    for (let i = start; i <= finish; i++) {
      range.push(i);
    }
  }

  return range;
}
