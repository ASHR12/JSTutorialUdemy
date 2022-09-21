function getElement(selectorValue) {
  const element = document.querySelector(selectorValue);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Please check the "${selectorValue}" selector, No such element exist`
    );
  }
}

function Gallery(element) {
  this.container = element;
  // ES6 spread operator.
  this.list = [...element.querySelectorAll(".img")];
  //console.log(this.list);
  this.modal = getElement(".modal-overlay");
  this.modalImg = getElement(".main-img");
  this.imageName = getElement(".image-name");
  this.modalImages = getElement(".modal-images");
  this.prevBtn = getElement(".prev-btn");
  this.nextBtn = getElement(".next-btn");
  this.closeBtn = getElement(".close-btn");

  //let self=this; // self reference.
  // bind
  //   this.showModal = this.openModal.bind(this);
  this.close = this.closeModal.bind(this);
  this.next = this.nextImage.bind(this);
  this.prev = this.prevImage.bind(this);
  this.imgClicked = this.selectGalleryImage.bind(this);
  this.container.addEventListener(
    "click",
    function (e) {
      if (e.target.classList.contains("img")) {
        this.openModal(e.target, this.list);
      }
      // self.openModal and no need to bind this call back.
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (selectedImage, list) {
  //console.log("Open Modal");
  //console.log(this);
  this.closeBtn.addEventListener("click", this.close);
  this.nextBtn.addEventListener("click", this.next);
  this.prevBtn.addEventListener("click", this.prev);
  this.modalImages.addEventListener("click", this.imgClicked);
  this.setMainImage(selectedImage);
  this.modal.classList.add("open-modal");
  let innerContent = list
    .map(function (item) {
      return `<img
            src="${item.src}"
            title="${item.title}"
            class="${
              selectedImage.dataset.id === item.dataset.id
                ? "modal-img selected"
                : "modal-img"
            }"
            data-id="${item.dataset.id}"
            alt="${item.alt}"
          />`;
    })
    .join("");
  this.modalImages.innerHTML = innerContent;
};
Gallery.prototype.closeModal = function () {
  this.closeBtn.removeEventListener("click", this.close);
  this.nextBtn.removeEventListener("click", this.next);
  this.prevBtn.removeEventListener("click", this.prev);
  this.modalImages.removeEventListener("click", this.imgClicked);
  this.modal.classList.remove("open-modal");
};
Gallery.prototype.nextImage = function () {
  const selected = this.modalImages.querySelector(".selected");
  selected.classList.remove("selected");
  const nxtImg = selected.nextElementSibling
    ? selected.nextElementSibling
    : this.modalImages.firstElementChild;
  nxtImg.classList.add("selected");
  this.setMainImage(nxtImg);
};
Gallery.prototype.prevImage = function () {
  const selected = this.modalImages.querySelector(".selected");
  selected.classList.remove("selected");
  const prvImg = selected.previousElementSibling
    ? selected.previousElementSibling
    : this.modalImages.lastElementChild;
  prvImg.classList.add("selected");
  this.setMainImage(prvImg);
};

Gallery.prototype.selectGalleryImage = function (e) {
  if (e.target.src) {
    this.setMainImage(e.target);
    const selected = this.modalImages.querySelector(".selected");
    selected.classList.remove("selected");
    // this.modalImages.querySelectorAll(".modal-img").forEach(function (item) {
    //   item.classList.remove("selected");
    // });
    e.target.classList.add("selected");
  }
};

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

const breakFast = new Gallery(getElement(".breakfast"));
const lunch = new Gallery(getElement(".lunch"));
