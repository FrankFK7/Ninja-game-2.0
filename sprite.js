let img = new Image();
img.src = 'css_spriteright.png';
img.src = 'css_spriteleft.png';
img.onload = function() {
};

function init() {
  ctx.drawImage(img, 0, 0, 16, 18, 0, 0, 16, 18);
  const scale = 2;
function init() {
  ctx.drawImage(img, 0, 0, 16, 18, 0, 0, 16 * scale, 18 * scale);
const scale = 2;
const width = 16;
const height = 18;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function init() {
  ctx.drawImage(img, 0, 0, width, height, 0, 0, scaledWidth, scaledHeight);
  ctx.drawImage(img, width, 0, width, height, scaledWidth, 0, scaledWidth, scaledHeight);
  ctx.drawImage(img, width * 2, 0, width, height, scaledWidth * 2, 0, scaledWidth, scaledHeight);
}
}
}

// var images = [];
// images.length = 10;
// for (var k = 1; k < images.length;  k++){
//   images[k]= new image();
//   images[k].src = 'css_sprites (' + k.tostring() + ').png';
// }
// var k = 1;
// setInterval(function(){
// k ++;
// if (k>=10){
//   k =1;
// }
// c.drawImage(images[k], 100, 100, 100,100 )
// },100)
console.log (drawImage)