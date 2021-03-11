const tabMenu = document.querySelectorAll('.jsTabMenu li');
const tabContent = document.querySelectorAll('.jsTabContent section');

if(tabMenu.len && tabContent.length) {

    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('active');
        })
        tabContent[index].classList.add('active');
    };
    
    
    tabMenu.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeTab(index);
        })
    });
}

