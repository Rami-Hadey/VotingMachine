var stupidButton = {
    init: function() {
        this.attachEvents();
    },

    attachEvents: function() {
        $('#runaway-container').on('hover', this.flyAway);
        $('#runaway').on('click', this.showWin);
    },

    flyAway: function(e) {
        mLeft = Math.random() * 300;
        mTop = Math.random() * 300;

        $('#runaway-container').css('margin-left', mLeft);
        $('#runaway-container').css('margin-top', mTop);
    },

    showWin: function(e) {
        alert('Nice! Here, have a cookie!');
    }
};










let mcgovern = document.getElementById("mcgovern");
let mcgoverninfo = document.getElementById("mcgovernInfo");
let mcgovernPic = document.getElementById("mcgovernPic");
            // Function to set image dimensions
            function enlargeImg() {
                stupidButton.init();
                document.getElementById("mcgovern").style.width = "10%";
                document.getElementById("mcgovern").style.height = "10%";
                document.getElementById("mcgovernInfo").style.fontSize = "5px";
                document.getElementById("mcgovern").style.transition = "width 0.5s ease";
                document.getElementById("mcgovernInfo").style.display = "none";
                document.getElementById("mcgovernPic").src.video='rick.mp4' ;
                
                // mcgovernInfo.remove();
            }
            // Function to reset image dimensions
            function resetImg() {
                document.getElementById("mcgovern").style.width = "100%";
                document.getElementById("mcgovern").style.height = "100%";
                document.getElementById("mcgovernInfo").style.fontSize = "12px";
                document.getElementById("mcgovern").style.transition = "width 0.5s ease";
                document.getElementById("mcgovernInfo").style.display = "block";
                // document.getElementById("mcgovernInfo").src='nixon.jpeg';
            }


// function deleteit(){
//     if(enlargeImg()){
//         mcgovernInfo.remove();
//     }
// }
// return deleteit;




