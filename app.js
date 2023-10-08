const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "FITBIT",
    price: 159,
    colors: [
      {
        code: "orange",
        img: "./img/exclusive.png",
      },
      {
        code: "pink",
        img: "./img/fitBIt-alta.png",
      },
    ],
  },
  {
    id: 2,
    title: "HEARTRATE",
    price: 182,
    colors: [
      {
        code: "black",
        img: "./img/apple-watch3.png",
      },
      {
        code: "white",
        img: "./img/white.png",
      },
    ],
  },
  {
    id: 3,
    title: "SMART",
    price: 219,
    colors: [
      {
        code: "white",
        img: "/img/58860-apple-leather-series-watch-strap-iwatch.png",
      },
      {
        code: "black",
        img: "./img/black.png",
      },
    ],
  },
  {
    id: 4,
    title: "KEEPSMILE",
    price: 199,
    colors: [
      {
        code: "salmon",
        img: "./img/Apple-Watch-PNG-Pic.png",
      },
      {
        code: "darkgreen",
        img: "./img/green.png",
      },
    ],
  },
  {
    id: 5,
    title: "GLAMOUR",
    price: 250,
    colors: [
      {
        code: "brown",
        img: "./img/R.png",
      },
      {
        code: "darkblue",
        img: "./img/blue.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "£" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
