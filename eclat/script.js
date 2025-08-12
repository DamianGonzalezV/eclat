"use strict";

const heroSection = document.querySelector(".hero");
const shopNowBtn = document.querySelector(".shop-btn");
const shopSection = document.querySelector(".shop-section");
const serumsSection = document.querySelector(".serums-section-grid");
const about = document.querySelector(".about");

shopNowBtn.addEventListener("click", function () {
  shopSection.classList.remove("hiden");
  heroSection.classList.add("hiden");
  serumsSection.classList.add("hiden");
  about.classList.add("hiden");
});
