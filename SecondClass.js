// arithemetic operater

// let a = 18;
// let  b = 10;

    // console.log("a=", a);
    // console.log("b=", b);
    // console.log("a+b =", a+b);
    // console.log("a-b =", a-b);
    // console.log("a*b =", a*b);
    // console.log("a/b =", a/b);
    // modulus operater = (%) This is modulus operater-
    // console.log("a%b =", a%b)

    //Exponenetiation Operater = ** (MUltitply jitni value saamne se milegi utni first waale ki power hogi)

    // console.log("a**b=", a**b)


    // Unary Operater = Increment And Decrement (Exp Of Increment (++) And Exp Of Decrement (--))

    // let a = 18;
    // let  b = 10;
    //a = a+1
    //a++;
    //a = a-1
    //a--;
    //post operater
    // console.log("a++ =", a++);
    // console.log("a =", a);
    //pre operster
    // console.log("++a =", ++a);
    // console.log("a =", a);
    // console.log("a-- =", a--);
    // console.log("a =", a);
    // console.log("--a =", --a);
    // console.log("a =", a);

    // Assignment Operaters

    // let a = 56;
    // let b = 5;

    // a += 4; //a = a+4;
    // b -= 11; // b = b-11;
    // a *= 4; //a = a*4;
    // b /= 11; // b = b/11;
    // console.log("a= ", a);
    // console.log("b= ", b);

    // a %= 4; //a = a%4;
    // b **= 11; // b = b**11;
    // console.log("a= ", a);
    // console.log("b= ", b);

// Comparision Operaters =   // Equal to (==)
// not (!)
// Not Equal to (!==)


// let a = 56;
// let b = 5;
// console.log("a=", a);
// console.log("b=", b);
// console.log("a==b =",a==b)//Equal to
// console.log("a!=b =",a!=b)// Not Equal to

//Strict Equal to (===)
// Not Strict Equal to (!==)

// let a = 56;
// let b = "56";
// console.log("a==b =",a==b)//Equal to
// console.log("a!=b =",a!=b)// Not Equal to
// console.log("a===b =",a===b)//Strict Equal to
// console.log("a!==b =",a!==b)// Strict Not Equal to

// Greater than and Less than is also Comparision Opraters = (> <)

// let a = 56;
// let b = 58;

// console.log("a>b =", a>b);
// console.log("a<b =", a<b);

// console.log("a>=b =", a>=b);
// console.log("a<=b =", a<=b);


// Logical Operaters Logical and IF Both Conditions are true then true another false (&&)


// let a = 56;
// let b = 58;

// cond1 = a<b; // true
// cond2 = a===56 //true

// console.log("cond1 && cond2 =", cond1 && cond2)


// cond1 = a>b; // false
// cond2 = a===56 //true

// console.log("cond1 && cond2 =", a>b && a===56);

// Logical || = If One Condition is true and One condition is False Then final answer is True(||)

// console.log("cond1 || cond2 =", a>b || a===56);

// Logical Not = This is perform always reverse mode Mean If Condition is true Then Logical not operater change the condition in false and if condition is false then he changed in true (!)

// console.log("!a>b =", !(a>b));//false
// console.log("!a===56 =", !(a===56));//true


// let age = 17;
// let persion;

// if(age<= 18){
//     persion = "Junior";
// }else if(age>= 60){
//     persion = "Senior";
// }
// else{
//     persion = "middle";
    
// }
// console.log(persion);


// let mode  = "dark";
// let color;

// if(mode==="dark"){
//     color = "Black";
// }
// else if(mode=== "pink"){
//     color = "blue";
// }
// else{
//     color = "White";
    
// }
// console.log(color);

//  mode==="dark" ?color ="black" : color = "white";
//  console.log(color)



// const price = "Lenovo";

// switch (price){
//     case "Asus":
//         console.log("Price Of Asus Laptop Is = 60000");
//         break;
//         case "HP":
//             console.log("Price Of HP Laptop Is = 70000");
//             break;
//             case 'Del':
//                 console.log("Price Of Del Laptop Is = 65000");
//                 break;
//                 default:
//                     console.log("Sorry This Laptop Is not Available In My Shop")

// }



let score = prompt(" Enter Your Total Score (0-100)");

if(score>=90 && 90 ){
    console.log(` According to your score ${score} = A+ (Grade)`);
}
else if(score>=80 && 80){
    console.log(` According to your score ${score} = A (Grade)`);
}
else if(score>=75 && 75){
    console.log(` According to your score ${score} = B+ (Grade)`);
}
else if(score>=70 && 70){
    console.log(` According to your score ${score} = B (Grade)`);
}
else if(score>=60 && 60){
    console.log(` According to your score ${score} = C (Grade)`);
}
else if(score>=50 && 50){
    console.log(` According to your score ${score} = D (Grade)`);
}
else if(score>=33 && 33){
    console.log(` According to your score ${score} = E (Grade)`);
}
else{
    console.log(` According to your score ${score} = (Grade F)-(Fail)`);
}



















  








