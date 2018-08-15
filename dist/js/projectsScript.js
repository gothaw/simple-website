(function () {

    const $appDescription        = $('.appDescription');
    const $appThumb              = $('.appThumbnail');
    const $appCloseDescription   = $('.closeAppDescription');


    /**
     * @name  showAppDescription
     * @desc  shows an app description when the image is clicked, it closes all other app descriptions
     */
    function showAppDescription () {
        $appThumb.on("click", function (e) {
            const targetDiv = $(e.target).siblings();
            ($appDescription).not(targetDiv).removeClass("bottomZero");
            targetDiv.addClass("bottomZero");
        });
    } //showAppDescription

    /**
     * @name  closeAppDescription
     * @desc  closes an app description when close button is clicked
     */
    function closeAppDescription() {
        $appCloseDescription.on("click", function (e) {
            const targetDiv = $(e.target).closest(".appDescription");
            targetDiv.removeClass("bottomZero");
        });
    } //closeAppDescription

    /**
     * @name  checkSizeLayoutC
     * @desc  if window size is less than 1350px i.e. if the .appLayoutC is displayed as a grid using media query in CSS, .appC is moved to a separate row #layoutC1
     *        if window size is greater than 1350px .appC are displayed in first and second row of the app gallery (#layoutA1 and #layoutA2)
     */
    function checkSizeLayoutC () {
        if ($('.appLayoutC').css("display")==="grid") {
            if($('#layoutC1').is(':empty')){
                $('.appC').appendTo('#layoutC1');
            }
        }
        else {
            if($('#layoutC1').not(':empty')){
                $('#layoutC1App1').appendTo('#layoutA1');
                $('#layoutC1App2').appendTo('#layoutA2');
            }
        }
    } //checkSizeLayoutC

    function init() {
        showAppDescription();
        closeAppDescription();
        $(window).resize(checkSizeLayoutC).trigger('resize');
    } //init

    $(document).ready(init);

})();
