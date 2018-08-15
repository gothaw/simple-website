(function () {
    //variables for showImg
    const thumbnails        = document.getElementById("thumbnailsProjectsHome").getElementsByTagName("IMG");
    const projects          = document.getElementsByClassName("projectHome");
    //variables for nextSlide and prevSlide
    const opinions          = document.getElementById("sliderWrap");
    const opinionSlides     = opinions.getElementsByTagName("LI");
    const numberOfSlides    = opinionSlides.length;
    const prev              = document.getElementById("prev");
    const next              = document.getElementById("next");

    //index of a slide that is displayed
    let count               = 2;

    /**
     * @name  showImg
     * @desc  displays project image upon clicking on a thumbnail, changes of opacity of the selected thumbnail to 1.0 and the rest of the thumbnails to 0.5
     * @param imgIndex - image index in thumbnails array-like object
     */
    function showImg(imgIndex) {
        for(let i=0;i<thumbnails.length;i++){
            if(i===imgIndex)
            {
                thumbnails[i].style.opacity="1.0";
                projects[i].style.display="block";
            }
            else
            {
                thumbnails[i].style.opacity="0.5";
                projects[i].style.display="none";
            }
        }
    } //showImg
    /**
     * @name  nextSlide
     * @desc  switches to next slide in clients' opinions section by decreasing position: left. If on last slide, the first slide is displayed upon switching.
     */
    function nextSlide() {
        if(count < numberOfSlides) {
            opinions.style.left = `-${100*count}%`;
            count++;
        }
        else if(count === numberOfSlides) {
            opinions.style.left = "0";
            count = 1;
        }
    } //nextSlide
    /**
     * @name  prevSlide
     * @desc  switches to previous slide in clients opinion section by increasing position: left. If on first slide, the last slide is displayed upon switching.
     */
    function prevSlide() {
        if(count > 1) {
            opinions.style.left = `-${100*(count-2)}%`;
            count--;
        }
        else if(count === 1) {
            opinions.style.left = `-${100*(numberOfSlides-1)}%`;
            count=numberOfSlides;
        }
    } //prevSlide

    function eventHandler() {
        next.addEventListener("click",nextSlide);
        prev.addEventListener("click",prevSlide);
        thumbnails[0].addEventListener("click",function () {
            showImg(0);
        });
        thumbnails[1].addEventListener("click",function () {
            showImg(1);
        });
        thumbnails[2].addEventListener("click",function () {
            showImg(2);
        });
        thumbnails[3].addEventListener("click",function () {
            showImg(3);
        });
    } //eventHandler

    function init() {
        eventHandler();
    } //init

    window.addEventListener("load", init);

})();
