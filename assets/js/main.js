//!     Variables
//  Constant Value Of The Time
const time = 3000;
//  The Holder Of The Slides In Clients Section
let slideHolder = document.querySelector(".clients .content .slider-holder"),
    //  Array That Have The Classes To Effect In The Slides To Scroll
    classArraySlides = ["one", "two", "three", "four"],
    //  Index Of The Current Slide
    index = 0,
    //  Bar Button
    bar = document.getElementById("bar"),
    //  The List
    nav = document.getElementById("nav");
//  Get The Bullets
bullets = document.querySelectorAll("#bullets li");
//!     Main
bullets.forEach((e) => {
    e.onclick = function () {
        bullets.forEach((el) => {
            el.classList.remove("active");
        });
        e.classList.add("active");
        var slides = document.querySelectorAll(
                ".clients .slider-holder .slide"
            ),
            newIndex = +e.getAttribute("index"),
            firstSlide = document.querySelector(
                ".clients .content .first-slide"
            );
        switchClasses(firstSlide, classArraySlides[index], classArraySlides[newIndex])
    };
});
scrollSlide(classArraySlides);
bar.onclick = function () {
    nav.classList.toggle("phone");
};
//!     Function
//  Infinity Scroll Slides
function scrollSlide(classArray) {
    setInterval(() => {
        //  The Slides Of Clients Section
        var slides = document.querySelectorAll(
                ".clients .slider-holder .slide"
            ),
            //  Set The First Slide Of The Slides
            firstSlide = document.querySelector(
                ".clients .content .first-slide"
            );
        switchClasses(firstSlide, classArray[index], classArray[++index]);
        index == classArray.length
            ? rebuildSlides(slides, slideHolder, classArray)
            : null;
    }, time);
}
//  Rebuild The SLides Of The SlideHolder
function rebuildSlides(slides, slideHolder, arrClass) {
    removeLastSlides(slides, arrClass);
    slides = document.querySelectorAll(".clients .slider-holder .slide");
    slides[0].classList.add("first-slide", "one");
    index = 0;
    buildNewSlide(slideHolder, arrClass);
}
//  Remove The Last Slides Exept By Last One
function removeLastSlides(slides, arrClass) {
    for (var i = 0; i < arrClass.length - 1; i++) {
        slides[i].remove();
    }
}
//  Build New SLides To The SlideHolder
function buildNewSlide(slideHolder, arrClass) {
    for (var i = 0; i <= arrClass.length - 2; i++) {
        var slide = bCreateElement("div", "slide p-3", null, null),
            row = bCreateElement(
                "div",
                "row justify-content-center align-items-center",
                null,
                null
            ),
            avatar = bCreateElement(
                "div",
                "avatar mr-3 col-lg-2 col-12 text-center",
                null,
                null
            ),
            img = bCreateElement("img", null, null, null),
            name = bCreateElement(
                "span",
                "name d-block text-center fs-5 mt-2 fw-bold",
                null,
                "Henryy Jo"
            ),
            message = bCreateElement(
                "div",
                "message position-relative col-lg-10 col-12",
                null,
                null
            ),
            meImage = bCreateElement("img", "img-fluid", null, null),
            text =
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look miz";
        p = bCreateElement(
            "p",
            "text text-start text-white position-absolute",
            null,
            text
        );
        img.src = "./assets/images/client-img.png";
        img.alt = "avatar";
        meImage.src = "./assets/images/img-6.png";
        meImage.alt = "message-holder";
        message.appendChild(meImage);
        message.appendChild(p);
        avatar.appendChild(img);
        avatar.appendChild(name);
        row.appendChild(avatar);
        row.appendChild(message);
        slide.appendChild(row);
        slideHolder.appendChild(slide);
    }
}
//!     Template Functions
//  Create Element
const bCreateElement = function (element, className, id, text) {
    var newElement = document.createElement(element);
    className !== null ? (newElement.className = className) : null;
    id !== null ? (newElement.id = id) : null;
    if (text !== null) {
        newElement.appendChild(document.createTextNode(text));
    }

    return newElement;
};
//  Switch The Classes
function switchClasses(element, class1, class2) {
    element.classList.remove(class1);
    element.classList.add(class2);
}
