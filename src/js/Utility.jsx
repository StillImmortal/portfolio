// Header-Scroll
let lastScroll = 0
const defaultOffset = 40
const defalutOffsetDelay = 2

const header = () => document.getElementById("header")
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
const containsHide = () => header().classList.contains("hide")

window.addEventListener("scroll", function() {
    if (scrollPosition() > lastScroll + defalutOffsetDelay && !containsHide() && scrollPosition() > defaultOffset) {
        header().classList.add("hide")
    } else if (scrollPosition() < lastScroll - defalutOffsetDelay && containsHide()) {
        header().classList.remove("hide")
    }

    lastScroll = scrollPosition()
})