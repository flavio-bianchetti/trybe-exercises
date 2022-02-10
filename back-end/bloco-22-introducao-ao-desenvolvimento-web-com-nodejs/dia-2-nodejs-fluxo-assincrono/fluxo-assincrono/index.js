function returnPromise(num1, num2, num3) {
    
  const promise = new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      reject(new Error('Informe apenas números.'));
    }

    const result = ((num1 + num2) * num3);

    if (result < 50) {
      reject(new Error('Valor muito baixo.'))
    } 
    resolve(result); 
  });

  return promise;
}

function generateNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function newReturnPromise(num1, num2, num3) {
  try {
    const result = await returnPromise(num1, num2, num3);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

newReturnPromise(generateNumber(), generateNumber(), generateNumber());
