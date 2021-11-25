function change(element){
  var a = element.innerHTML;
  switch(a){

    case " ᠌ ᠌ ᠌":
      document.getElementById("img").src="203-removebg-preview.png";
      document.getElementById("text1").innerHTML = "Ваш студент идёт:";
      document.getElementById("text2").innerHTML = "!Сдавать лабку чтобы получить 90-95 баллов!";
      $("img").animat()
      break;

    case "Energy":
      document.getElementById("img").src="logo.png";
      document.getElementById("text1").innerHTML = "Gorilla";
      document.getElementById("text2").innerHTML = "Самый популярный Энергетик во всей красе! <i>энергетик вредит здоровью!</i>";
      break;

    case "Composition":
      document.getElementById("img").src = "logo2.png";
      document.getElementById("text1").innerHTML = "Состав энергетика это:";
      document.getElementById("text2").innerHTML = "Состав: вода питьевая подготовленная, сахар, вкусоароматическая основа «горилла энерджи» (вода, ароматизаторы, экстракт гуараны, экстракт женьшеня, краситель сахарный колер e150d), регулятор кислотности лимонная кислота, витамины: C, B7, B3, B5, B6, B12, регулятор кислотности лимонная кислота, мальтодекстрин, регулятор кислотности тринатрия цитрат, таурин, кофеин натуральный, l-карнитин. ........                                    <i>энергетик вредит здоровью!</i>";
      break;

    case "Person №1":
      document.getElementById("img").src = "habib.png";
      document.getElementById("text1").innerHTML = " ХАААБИИИИБ НУРМАГОМЕДОВ";
      document.getElementById("text2").innerHTML = "Всегда был нашим ярым поклонником и мы рады что дружим с ним :) <i>энергетик вредит здоровью!</i>";
      break;

    case "California":
       document.getElementById("img").src = "California.png";
       document.getElementById("text1").innerHTML = "Мой любимый вид Gorilla";
       document.getElementById("text2").innerHTML = "!#!*!%$$*%!&@%#$*!&  <i>Дагистанcкое поздравление!</i>" ;  /**/
       break; 
      }   

      $("#img").animate({bottom: '+=100px', opacity: '0'}, "slow,slow,slow");
      $("#img").animate({bottom: '-=100px', opacity: '1'}, "slow,slow,slow,slow");

      $(".text").animate({top: '+=150px', opacity: '0'}, "fast");
      $(".text").animate({top: '-=150px', opacity: '1'}, "slow,slow,slow");
} 

function big(element){
  element.style.fontSize = "30px";
}

function small(element){
  element.style.fontSize = "25px";
}

function load(){
  $(".img").animate({opacity: '0.4'}, "slow");
  $(".text").animate({opacity: '1'}, "slow");
}





