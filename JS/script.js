
function showCategory(category) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // مسح الصور السابقة

  const images = {
    dresses: ["dress/dress2.jpeg", "dress/dress_2.jpeg", "dress/dress1.jpeg"],
    // shoes: ["", "shoe2.jpg"],
    bags: ["bags/bag1.jpeg", "bags/bag2.jpeg","bags/bag3.jpeg","bags/bag4.jpeg","bags/bag5.jpeg"],
    tops: ["T_shirt/T1.jpeg", "T_shirt/T2.jpeg"],
    pants: ["bants/bant1.jpeg",],
    skirts: ["skirt/skirt1.jpeg",],
    accessories: ["accsesories/acc1.jpeg", "accsesories/acc2.jpeg","accsesories/acc3.jpeg",
      "accsesories/acc4.jpeg","accsesories/acc5.jpeg","accsesories/acc6.jpeg","accsesories/acc7.jpeg",
      "accsesories/acc8.jpeg","accsesories/acc9.jpeg","accsesories/acc10.jpeg","accsesories/acc11.jpeg",
      "accsesories/acc12.jpeg"],
    jacket: ["jacket/jaket1.jpeg","jacket/jaket2.jpeg","jacket/jaket3.jpeg"],
  };

  if (images[category]) {
    images[category].forEach((src) => {
      const img = document.createElement("img");
      img.src = "images/" + src;
      gallery.appendChild(img);
    });
  }
}
