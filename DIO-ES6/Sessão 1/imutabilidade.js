const user = {
    name: "Caio",
    lastName: "Sales"
};

function getUserFullName(user){
    return {
        // Spread operator (...) , cada propriedade q receber, vai colocar no novo objeto.
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userFullName = getUserFullName(user);

console.log(userFullName, user);