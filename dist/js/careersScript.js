(function () {

    const $jobTitle            = $('.jobTitle, .toggleSymbolJobDescription');
    const $jobDescription      = $('.jobDescription');
    const $toggleSymbol        = $('.toggleSymbolJobDescription');

    /**
     * @name  hideJobDescription
     * @desc  hides job descriptions for open positions
     */
    function hideJobDescription() {
        $jobDescription.hide();
    } //hideJobDescription

    /**
     * @name  toggleJobDescription
     * @desc  toggles job descriptions when user clicks on the title, rotates plus symbol by 45 degrees and also hides other job descriptions if they were previously opened
     */
    function toggleJobDescription () {
        $jobTitle.on("click", function (e) {
            const targetDiv = $(e.target).parent().find($jobDescription);
            const targetSymbol = $(e.target).parent().find($toggleSymbol);
            $jobDescription.not(targetDiv).slideUp();
            $toggleSymbol.not(targetSymbol).removeClass("rotateToggleSymbol");
            targetDiv.slideToggle();
            targetSymbol.toggleClass("rotateToggleSymbol");
        });
    } //toggleJobDescription

    function init() {
        toggleJobDescription();
        hideJobDescription();
    } //init

    $(document).ready(init);

})();
