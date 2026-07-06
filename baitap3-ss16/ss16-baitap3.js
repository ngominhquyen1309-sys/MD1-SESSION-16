let firstNumber = Number(prompt('Hãy nhập vào số a:'));

let secondNumber = Number(prompt('Hãy nhập vào số b:'));

function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

//Nếu chỉ cần dùng kết quả 1 lần
alert(sum(firstNumber, secondNumber));

// //Hoặc nếu cần sử dụng kết quả nhiều lần
// let result = sum(firstNumber, secondNumber);
// alert(`Kết quả ${firstNumber} + ${secondNumber} = ${result}`);