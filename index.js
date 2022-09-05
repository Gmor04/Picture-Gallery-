


let image = ['IMG-1.jpg', 'IMG-2.jpg', 'IMG-3.jpg', 'IMG-4.jpg', 'IMG-5.jpg', 'IMG-6.jpg', 'IMG-7.jpg', 'IMG-8.jpg', 'IMG-9.jpg', 'IMG-11.jpg', 'IMG-12.jpg', 'IMG-13.jpg', 'IMG-14.jpg', 'IMG-15.jpg', 'IMG-16.jpg', ]
let index = 0;

let pic = document.getElementById("myimg")

pic.src = image[index]


function mynextbtn() {

    if (index == (image.length - 1)) {
        index = 0
    } else {
        index++
    }
    pic.src = image[index]
}

function myprevbtn() {

    if (index == 0) {
        index = (image.length - 1)
    } else {
        index--
    }
    pic.src = image[index]
}