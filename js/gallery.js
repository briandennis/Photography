import Bricks from 'bricks.js';

const sizes = [
  { columns: 2, gutter: 10 },
  { mq: '768px', columns: 3, gutter: 25 },
  { mq: '1024px', columns: 4, gutter: 50 }
]

const instance = Bricks({
  container: '#gallery',
  packed: 'data-packed',

});
