const MAT = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const OP_STACK = [];

const appDiv = document.getElementById('app');

const deColor = () => {
  setInterval(() => {
    OP_STACK.pop();
    render();
  }, 2000);
};

const onBoxClick = (rowIndex, index) => {
  OP_STACK.push({ rowIndex, index });
  render();

  if (OP_STACK.length === 8) {
    deColor();
  }
};

const generateBox = (rowIdx, idx) => {
  const clickedBox = OP_STACK.find(
    (el) => el.rowIndex === rowIdx && el.index === idx
  );

  const className = clickedBox ? 'greenBox' : 'redBox';

  return `<div class="${className}" onclick="onBoxClick(${rowIdx}, ${idx})">
    </div>`;
};

const render = () => {
  let html = '<div class=outerBox>';

  MAT.forEach((row, rowIndex) => {
    html += '<div class=row>';
    row.forEach((el, index) => {
      if (el === 1) {
        html += generateBox(rowIndex, index);
      }
    });
    html += '</div>';
  });

  html += '</div>';

  if (appDiv) {
    appDiv.innerHTML = html;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  render();
});
