const numbers = [1, 2, 3];

//Easier way: function double(arg) {return arg.map((a) => {return a*2});}

//Challenging way:
const double = ([num, ...foo]) => {
  return num ? [num * 2, ...double(foo)] : [];
};

var a = double(numbers);
a; //[2,4,6]
