const form = document.querySelector("form");

class Cat {
    petName;
    yourName;
    address;
    phoneNumber;
    email;
    breed;
    sex;
    food;
    comment;

    constructor({
                    petName,
                    yourName,
                    address,
                    phoneNumber,
                    email,
                    breed,
                    sex,
                    food,
                    comment,
                }) {
        this.petName = petName;
        this.yourName = yourName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.breed = breed;
        this.sex = sex;
        this.food = food;
        this.comment = comment;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(form);
    let petName = get.data("catName");
    let yourName = get.data("name");
    let address = get.data("address");
    let phoneNumber = get.data("phone");
    let email = get.data("mail");
    let breed = get.data("breed");
    let sex = get.data("sex");
    let food = get.data("food");
    let comment = get.data("commentary");

    let cat = new Cat({
        petName,
        yourName,
        address,
        phoneNumber,
        email,
        breed,
        sex,
        food,
        comment,
    });
});

console.log(new Cat());

fetch("https://httpbin.org/post",
    {
      method: 'POST',
      body: new FormData(form),
    })
    .then(response => response.json())
    .catch(error => console.log(error));
