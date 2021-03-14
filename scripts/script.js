(function initTabNav() {
  const tabMenu = document.querySelectorAll(".jsTabMenu li");
  const tabContent = document.querySelectorAll(".jsTabContent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("active");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("active");
      });
      tabContent[index].classList.add("active");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
})();


(function initAccordion () {
  const accordionList = document.querySelectorAll('.jsAccordion dt');

  if (accordionList.length > 0) {
    function activeAccordion(index) {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active'); 
    }
  
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
  
})();


(function smoothScroll () {
    const internalLinks = document.querySelectorAll('.jsMenu a[href^="#"]');
  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const higherPortion = section.offsetTop;
    window.scrollTo({
      top: higherPortion,
      behavior: 'smooth'
    })
  }
  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })

})();

