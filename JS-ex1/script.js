// Exercise 1 :
document.write("<h1>Exercise 1</h1>");
let var1 = 10;
let var2 = 20;

if (var1 > var2) {
    document.write("This is the bigger number : " + var1);
} else if (var2 > var1) {
    document.write("This is the bigger number : " + var2);
}

// Exercise 2 :
document.write("<h1>Exercise 2</h1>");
let var3 = -3;
let var4 = -20;
let var5 = 24;
let sumVar = var3 + var4 + var5;

if (sumVar < 0) {
    document.write("This is -");
} else if (sumVar > 0) {
    document.write("This is +");
} else {
    document.write("This is 0");
}

// Exercise 3 :
document.write("<h1>Exercise 3</h1>");
let arr = [1,9,3];  

if (arr[0]>arr[1]&&arr[0]<arr[2]) {
    let new_arr = [arr[1],arr[0],arr[2]];
    document.write(new_arr);
} else if (arr[0]>arr[1]&&arr[0]>arr[2]&&arr[1]<arr[2]) {
    let new_arr = [arr[1],arr[2],arr[0]];
    document.write(new_arr);
} else if (arr[0]>arr[1]&&arr[0]>arr[2]&&arr[1]>arr[2]) {
    let new_arr = [arr[2],arr[1],arr[0]];
    document.write(new_arr);  
} else if (arr[0]<arr[1]&&arr[0]>arr[2]&&arr[1]>arr[2]) {
    let new_arr = [arr[2],arr[0],arr[1]];
    document.write(new_arr);
} else if (arr[0]<arr[1]&&arr[0]<arr[2]&&arr[1]>arr[2]) {
    let new_arr = [arr[0],arr[2],arr[1]];
    document.write(new_arr);   
} else {
    document.write(arr);
}

// Exercise 4 :
document.write("<h1>Exercise 4</h1>");
let arr2 = [1,7,5,8,9];

if (arr2[0]>arr2[1]&&arr2[0]>arr2[2]&&arr2[0]>arr2[3]&&arr2[0]>arr2[4]) {
    document.write("This is the biggest number in this array : " + arr2[0]);
} else if (arr2[1]>arr2[0]&&arr2[1]>arr2[2]&&arr2[1]>arr2[3]&&arr2[1]>arr2[4]) {
    document.write("This is the biggest number in this array : " + arr2[1]);
} else if (arr2[2]>arr2[0]&&arr2[2]>arr2[1]&&arr2[2]>arr2[3]&&arr2[2]>arr2[4]) {
    document.write("This is the biggest number in this array : " + arr2[2]);
} else if (arr2[3]>arr2[0]&&arr2[3]>arr2[1]&&arr2[3]>arr2[2]&&arr2[2]>arr2[4]) {
    document.write("This is the biggest number in this array : " + arr2[3]);
} else if (arr2[4]>arr2[0]&&arr2[4]>arr2[1]&&arr2[4]>arr2[2]&&arr2[4]>arr2[3]) {
    document.write("This is the biggest number in this array : " + arr2[4]);
}

// Exercise 5 :
document.write("<h1>Exercise 5</h1>");
let arr3 = [2,3,3,4,5];
 if (arr3[0]%2==0) {
    document.write("First number is even <br>");
 } else {
    document.write("First number is odd <br>");
 } 
 if (arr3[1]%2==0) {
    document.write("Second number is even <br>");
 } else {
    document.write("Second number is odd <br>");
 }
 if (arr3[2]%2==0) {
    document.write("Third number is even <br>");
 } else {
    document.write("Third number is odd <br>");
 }
 if (arr3[3]%2==0) {
    document.write("Fourth number is even <br>");
 } else {
    document.write("Fourth number is odd <br>");
 }
 if (arr3[4]%2==0) {
    document.write("Fifth number is even <br>");
 } else {
    document.write("Fifth number is odd <br>");
 }