const carouselInfoArray = [
  {
    title: "Business Experience",
    description:
      "1.5 years Sales. 1.5 years Operations. 4 years Customer Service",
  },
  {
    title: "Outdoors Enthusiast",
    description: "Running, Soccer, Traveling, and Hiking",
  },
  {
    title: "music",
    description:
      "I am a music lover that enjoys everything from classical to rock to techno. A soundcloud with some of my tunes available upon request!",
  },
];

for (let count = 1; count <= carouselInfoArray.length; count++) {
  let carouselItemTitle = document.getElementById(`carousel${count}Title`);
  let carouselItemDescription = document.getElementById(
    `carousel${count}Description`
  );

  carouselItemTitle.textContent = carouselInfoArray[count - 1].title;
  carouselItemDescription.textContent =
    carouselInfoArray[count - 1].description;
}
