// -----------------TABS----------------------------------
const tabs = document.querySelector(".tabs"),
  tabsItem = document.querySelectorAll(".service_item"),
  contents = document.querySelectorAll(".services_list_text");
const tabsHandler = path => {
  tabsItem.forEach(el => {
    el.classList.remove("service_item--active");
    el.classList.remove("service_item--active");
  });
  document
    .querySelector(`[data-tabs-path="${path}"]`)
    .classList.add("service_item--active");

  contents.forEach(el => {
    el.classList.remove("services_list_text--active");
  });
  document
    .querySelector(`[data-tabs-target="${path}"]`)
    .classList.add("services_list_text--active");
};
const tabFunc = () => {
  if (tabs) {
    tabs.addEventListener("click", e => {
      if (e.target.classList.contains("service_item")) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath);
      }
    });
  }
};

tabFunc();
// -----------------Gallery----------------------------------
const buttons = document.querySelectorAll(".works_tab_item"),
  cards = document.querySelectorAll(".work_gallery_item"),
  showImg = document.querySelectorAll(".show_img"),
  loadMore = document.querySelector(".btn_page_plus");

function filter(category, items) {
  items.forEach(item => {
    const isItemFiltered = !item.classList.contains(category);
    const isShowAll = category.toLowerCase() === "all";
    if (isItemFiltered && !isShowAll) {
      item.classList.add("hide");
    } else {
      item.classList.remove("hide");
    }
  });
}
function app() {
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentCategory = btn.dataset.filter;
      buttons.forEach(child => {
        child.classList.remove("active-color");
      });
      btn.classList.add("active-color");
      filter(currentCategory, cards);
    });
  });

  showImg.forEach(el => {
    loadMore.addEventListener("click", () => {
      el.classList.remove("show_img");
      loadMore.classList.add("hide_btn");
    });
  });
}
app();
// -----------------Slider----------------------------------

const slides = document.querySelectorAll(".feedback_slider_item"),
  slideContent = document.querySelectorAll(".slider_content"),
  prevBtn = document.querySelector(".feedback_prev_btn"),
  nextBtn = document.querySelector(".feedback_next_btn");

let index = 0;

function hidecontent(n) {
  slideContent.forEach(element => {
    element.classList.add("hide_content");
  });
  slideContent[n].classList.remove("hide_content");
}
const showActive = n => {
  for (let slide of slides) {
    slide.classList.remove("feedback_slider_item--active");
  }
  slides[n].classList.add("feedback_slider_item--active");
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    showActive(index);
  } else {
    index++;
    showActive(index);
  }
};
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    showActive(index);
  } else {
    index--;
    showActive(index);
  }
};
const slider = () => {
  slides.forEach((iterator, currentIndex) => {
    iterator.addEventListener("click", () => {
      index = currentIndex;
      showActive(index);
      hidecontent(index);
    });
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    hidecontent(index);
  });
  nextBtn.addEventListener("click", () => {
    nextSlide();
    hidecontent(index);
  });
};
slider();
