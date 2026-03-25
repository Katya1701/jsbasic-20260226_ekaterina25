function showSalary(users, age) {
  return users
    .filter(user => user.age <= age)
    .map(user => `${user.name}, ${user.balance}`)
    .join('\n')
}

let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Василий Иванов",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user2 = {
  "balance": "$1,564.65",
  "picture": "https://placehold.it/32x32",
  "age": 33,
  "name": "Марина Сидорова",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user3 = {
  "balance": "$1,836.65",
  "picture": "https://placehold.it/32x32",
  "age": 18,
  "name": "Александр Веселов",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user4 = {
  "balance": "$1,693.65",
  "picture": "https://placehold.it/32x32",
  "age": 45,
  "name": "Ричард Васильченко",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};


let users = [user1, user2, user3, user4];
let result = showSalary(users, 35);

console.log(result)
