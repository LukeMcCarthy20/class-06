'use strict';
console.log('Connected');

let petOne = {
  name: 'Fluffy',
  breed: 'tabby',
  imageName: 'diabloBlanco',
  interests: ['Sun Light', 'Mouse Toys', 'Red Dots'],
  isGoodWithKids: true,
  isGoodWithCats: true,
  isGoodWithDogs: true,
  setAge: function () {
    this.age = randomAge(3, 12) + 'Months old.';
  }
};

petOne.setAge();
console.log(petOne);



let parentElement = document.getElementById('kittenProfiles');
console.log(parentElement);





let article = document.createElement('article');
console.log(article);
parentElement.appendChild(article);
let h2 = document.createElement('h2');
h2.textContent = petOne.name;
article.appendChild(h2);

let petPara = document.createElement('p');
petPara.textContent = 'Cats are cool! and pet one is' + petOne.age;
article.appendChild(petPara);

let petUl = document.createElement('ul');
article.appendChild(petUl);

for (let i = 0; i < petOne.interests.length; i++) {
  let petLi = document.createElement('li');
  petLi.textContent = petOne.interests[i];
  petUl.appendChild(petLi);


}



let petOneImage = document.createElement('img');
petOneImage.setAttribute('src', 'images/' + petOne.imageName + '.jpeg' );
petOneImage.setAttribute('alt', 'Please Adopt Our Kittens' );
article.appendChild(petOneImage);



console.log(parentElement);









function randomAge(minMonth, maxMonth) {

  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}


