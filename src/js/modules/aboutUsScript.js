(function () {
    if($('#aboutUsId'))
    {
        const $frontFace        = $('.front');
        const $backFace         = $('.back');
        const $flipper          = $('.flipper');

        /**
         * @name  showTeamMemberDescription
         * @desc  shows a team member description when the image is clicked, it closes all other descriptions
         */
        function showTeamMemberDescription () {
            $frontFace.on("click", function (e) {
                const targetDiv = $(e.target).closest($flipper);
                ($flipper).not(targetDiv).removeClass("flip");
                targetDiv.addClass("flip");
            });
        } //showTeamMemberDescription

        /**
         * @name  closeTeamMemberDescription
         * @desc  closes a team member description when description area is clicked
         */
        function closeTeamMemberDescription () {
            $backFace.on("click", function (e) {
                const targetDiv = $(e.target).closest($flipper);
                targetDiv.removeClass("flip");
            });
        } //closeTeamMemberDescription

        function init() {
            showTeamMemberDescription();
            closeTeamMemberDescription();
        } //init

        $(document).ready(init);
    }


})();
