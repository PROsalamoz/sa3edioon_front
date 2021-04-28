function setActive(element) {

    document.querySelector(".testimonial-avatars .active").classList.remove("active");
    element.classList.add("active");

    document.querySelector(".testimonial-quotes .active").classList.remove("active");
    document.querySelector(".testimonial-quotes [author='"+ element.id +"']").classList.add("active");

}