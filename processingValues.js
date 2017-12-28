var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
var i = 0;
images.forEach(function(image){
    areas[i] = image.height * image.width;
    i++;
})
