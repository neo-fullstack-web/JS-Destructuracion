// Funciones con parámetros nombrados
function customFont({ color, size, weight, otro }) {

    // código de mi función


    console.log(color, size, weight);

}

customFont({ weight: 800, otro: 'Un Valor'  });

const userObj = {
    name: 'John',
    surname: 'Doe',
    age: 35,
    email: 'john@doe.com',
    active: true,
    phone: '3289323-29300',
}

// const name = userObj.name;
// const surname = userObj.surname;
// const age = userObj.age;
// const email = userObj.email;

const { age, email: correo } = userObj;

console.log(age, correo);