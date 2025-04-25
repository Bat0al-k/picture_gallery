var nextBtn = document.getElementById('next');
var sliderBtn = document.getElementById('slideShow');
var preBtn = document.getElementById('previous');
var stopBtn = document.getElementById('stop');
var pics = document.getElementsByClassName('img')[0];
var gallery = ['images/images (1).jpg', 'images/images (2).jpg', 
                'images/sea.jpg', 'images/images.jpg', 
                'images/image.jpeg', 'images/img.jpeg' ];

function next() {
    currentImage = 'images/' + pics.src.split('/').pop().split('%20').join(' ');
    for (var i = 0; i < gallery.length; i++) {
        console.log('picsSrc', currentImage);
        console.log(gallery[i]);
        if (currentImage.includes(gallery[i])) {
            if (i + 1 < gallery.length) {
                pics.src = gallery[i + 1];
            } else {
                pics.src = gallery[0];
            }
            return;
        }
    }
    pics.src = gallery[0];
}

function slideShow(){
        setInterval(next, 800);
}

function stop(){
    for (var i = 1; i <= gallery.length; i++) {
        clearInterval(i);
    }
}

function previous(){
    currentImage = 'images/' + pics.src.split('/').pop().split('%20').join(' ');
    for (var i = 0; i < gallery.length; i++) {
        if (currentImage.includes(gallery[i])) {
            if (i - 1 >= 0) {
                pics.src = gallery[i - 1];
            } else {
                pics.src = gallery[gallery.length - 1];
            }
            return;
        }
    }
    pics.src = gallery[gallery.length - 1];
    // next(gallery.length-1);
}


// ////////////////////////////////////////////////////////////
// function next() {
//     for (var i = 0; i < gallery.length; i++) {
//         if (pics.src.includes(gallery[i])) {
//             if (i + 1 < gallery.length) {
//                 pics.src = gallery[i + 1];
//             } else {
//                 pics.src = gallery[0];
//             }
//             return;
//         }
//     }
//     pics.src = gallery[0];
// }

// function slideShoe(){
//     setInterval(next, 2000);
// }

// function stop(){
//     window.clearInterval(pics);
// }

// ////////////////////////////////////////////////////////
// function next(){
//     // gallery.forEach((img, index)=>{
//     //     if(pics.src.includes(img)){
//     //         pics.src=gallery[index-1];
//     //     return;
//     //     }
//     // });
//     // alert('bla');
//     for (var i = 0; i < gallery.length; i++) {
//         if (pics.src.includes(gallery[i])) {
//             pics.src = gallery[i+1];
//             return;
//         }
//     //     if(gallery[i] > gallery.length){
//     //         pics.src=gallery[0];
//     //     }
//     }
//     pics.src = gallery[0];
// }
// function slideShoe(){
        // setInterval(nextImage, 2000);
// }
