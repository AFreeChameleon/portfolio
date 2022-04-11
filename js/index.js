const heroText = [
    {
        el: document.getElementById("design"),
        className: 'design'
    },
    {
        el: document.getElementById("develop"),
        className: 'develop'
    },
    {
        el: document.getElementById("devops"),
        className: 'devops'
    },
]

let heroTextIndex = -1;
let prevHeroTextIndex = 2;
setInterval(() => {
    heroTextIndex++;
    prevHeroTextIndex = (heroTextIndex - 1 >= 0) ? 
        heroTextIndex - 1 : heroText.length - 1;
    heroText[prevHeroTextIndex].el.classList.remove(heroText[prevHeroTextIndex].className)
    heroText[heroTextIndex].el.classList.add(heroText[heroTextIndex].className);
    if (heroTextIndex === heroText.length - 1) {
        heroTextIndex = -1;
    }
}, 1000);