// document.querySelector("h1").innerHTML = "hello world";
// document.querySelector("h1").style.color= "red";

let slide= document.querySelectorAll(".slidecard");
let card= document.querySelectorAll(".card");



let count = 0;

slide.forEach(function(slides, index){
    slides.style.left =`${index * 100}%`
});

function mySlide(){
    slide.forEach(function(curVal){
     curVal.style.transform = `translateX(-${count *100}%)`
    });
};

setInterval(function(){
    count++;
    if(count === slide.length){
        count = 0;
    };
    mySlide();
}, 2000);

//card for details


card.forEach(function(cards){
    cards.addEventListener("click", function(){
    //  console.log(cards.firstElementChild.src);
     document.querySelector(".men").style.display = "none";
    document.querySelector(".women").style.display = "none";
    document.querySelector(".kids").style.display = "none";
    document.querySelector(".home-living").style.display = "none";
    document.querySelector(".beautys").style.display = "none";
    document.querySelector(".slide").style.display = "none";

        let div = document.createElement("div");
        div.classList.add("cardDetails");
        div.innerHTML = `
        <img src= ${cards.firstElementChild.src} alt="">
        <div class="cardText">
            <h2>Trending Deals</h2>
            <h2>Get upto 40% discount</h2>
            <p>Explore Now</p>
            <p>Perfect for every Ocassion</p>
            <p>Other Discounts on prefered Cards</p>
            <p>Shop and enjoy</p>
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="e-com.html">Back</a>
        </div>`

        document.querySelector("body").appendChild(div);
    });
});



//main section hide while we click any products

document.addEventListener('DOMContentLoaded', function() {
    var mainSection = document.getElementById('main');
    var slidesContainer = document.querySelector('.slides');
    var slideImages = document.querySelectorAll('.slidecard img');
  
    document.addEventListener('click', function(event) {
      // Check if the clicked element is not a part of the main section or any slide image
      if (!mainSection.contains(event.target) && !isSlideImageClicked(event.target)) {
        // Hide the main section by adding the 'hidden' class
        mainSection.classList.add('hidden');
      }
    });
  
    // Optionally, if you want to show the main section when clicking the 'Explore Now!' button
    var exploreButton = document.getElementById('exploreButton');
    exploreButton.addEventListener('click', function(event) {
      // Prevent the click event from propagating to the document
      event.stopPropagation();
      // Show the main section by removing the 'hidden' class
      mainSection.classList.remove('hidden');
    });
  
    // Add click event listeners to each slide image
    slideImages.forEach(function(image) {
      image.addEventListener('click', function() {
        // Handle the click on a slide image (replace with your own logic)
        alert('Slide image clicked!');
      });
    });
  
    function isSlideImageClicked(target) {
      // Check if the clicked element or any of its ancestors is a slide image
      return Array.from(slideImages).some(image => image.contains(target));
    }
  });

  //navlist active
  document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.getElementById("bar");
    var navList = document.querySelector(".navlist ul");
  
    menuIcon.addEventListener("click", function () {
      navList.classList.toggle("show");
    });
  });
  

  let menuIcon = document.querySelector("#bar");
  let navList = document.querySelector(".navlist");

  menuIcon.onclick =()=>{
   menuIcon.classList.toggle("bx-x");
   navList.classList.toggle("open");
  };
  
// for user id

function openCart() {
  document.getElementById("cartPopup").style.display = "block";
}

function closeCart() {
  document.getElementById("cartPopup").style.display = "none";
}

function addToCart() {
  // This is a simplified example; in a real application, you'd manage the cart on the server.
  const productName = "Product Name";
  const productPrice = "$20.00";
  
  const cartList = document.getElementById("cartList");
  const listItem = document.createElement("li");
  listItem.textContent = `${productName} - ${productPrice}`;
  cartList.appendChild(listItem);
}

function openUserPopup() {
  document.getElementById("userPopup").style.display = "block";
}

function closeUserPopup() {
  document.getElementById("userPopup").style.display = "none";
}

function signup() {
  // Handle user signup logic (e.g., send data to the server)
  alert("User signed up!");
}

function login() {
  // Handle user login logic (e.g., send data to the server)
  alert("User logged in!");
}
