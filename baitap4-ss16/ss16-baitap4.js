let number = Number(prompt('Hãy nhập vào số bất kỳ:'));

function isEven(number) {
    return number % 2 === 0;
}

//Nếu chỉ cần dùng kết quả 1 lần
alert(isEven(number)); 

//Hoặc nếu cần sử dụng kết quả nhiều lần
// let result = isEven(number);
// alert(`Kết quả là: ${result}`);
// // console.log(result);
// // if (result) {}
// //...