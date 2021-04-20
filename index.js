
let voting = document.getElementById("voting");

function appear(){
    if(document.getElementById("voting").style.opacity = "0%"){
        document.getElementById("voting").style.opacity = "100%"
    }
   
};
//Voting bar
let voteCount = {
    nixon: 60,
    mcgovern: 40,
    nixonVote(){
        if(this.nixon >= 100){
            this.nixon = 100;
        }else{
            this.nixon++;
            this.mcgovern--;
        }
        
    },
    mcgovernVote(){
        this.nixon = 100;
        this.mcgovern = 0;
    },
    updateVote(){
        document.getElementById("nixonBar").style.width = this.nixon + "%";
        document.getElementById("nixonBar").innerHTML = + this.nixon + "% Nixon";
        document.getElementById("mcgovernBar").style.width = this.mcgovern + "%";
        document.getElementById("mcgovernBar").innerHTML = + this.mcgovern + "% Mcgovern";
    }
}

function correctVote(){
    voteCount.nixonVote();
    voteCount.updateVote();
}



//Animates Nixon
function animateNixon(){
    document.getElementById("nixonPic").src='NixonVid.mp4';
}









//The button runs away when trying to click on mcgovern
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



// function addButton(){
//     var parent = document.getElementById("runaway");
//     var child = document.getElementById("mcgovern1button");
//     var btn = document.createElement("button");
//     btn.innerHTML = "Vote";
//     document.appendChild(btn);
//     parent.replaceChild(btn,child);
// }






            // Function to set image dimensions
            function enlargeImg() {
                stupidButton.init();
                document.getElementById("mcgovern").style.width = "10%";
                document.getElementById("mcgovern").style.height = "10%";
                document.getElementById("mcgovernInfo").style.fontSize = "5px";
                document.getElementById("mcgovern").style.transition = "width 0.5s ease";
                document.getElementById("mcgovernInfo").style.display = "none";
                document.getElementById("mcgovernPic").src='no.png';
                //mcgovern1button.remove();




                var parent = document.getElementById("runaway");
                var child = document.getElementById("mcgovern1button");
                var btn = document.createElement("BUTTON");
                btn.innerHTML = "Vote";
                parent.appendChild(btn);
                


                // var btn = document.createElement("BUTTON");
                // btn.innerHTML = "CLICK ME";
                // document.body.appendChild(btn);
                
                // mcgovernInfo.remove();
            }


            // Function to reset image dimensions
            // function resetImg() {
            //     document.getElementById("mcgovern").style.width = "100%";
            //     document.getElementById("mcgovern").style.height = "100%";
            //     document.getElementById("mcgovernInfo").style.fontSize = "12px";
            //     document.getElementById("mcgovern").style.transition = "width 0.5s ease";
            //     document.getElementById("mcgovernInfo").style.display = "block";
            //     document.getElementById("mcgovernPic").src='mcgovern.jpeg';
            // }


// function deleteit(){
//     if(enlargeImg()){
//         mcgovernInfo.remove();
//     }
// }
// return deleteit;




