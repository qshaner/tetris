//Audiofile stuff

var myPlaylist = ["02 Failien Funk.mp3", "04 Shell Shock Shake.mp3", "06 Going Down Tune.mp3", "08 Filaments and Voids.mp3", "09 Bonus Rage.mp3"];

var count = 0;
var myMusic;

//hide pause initially
$('#pause').hide();

function sound(src) {

    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("Preload", "auto");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();

    };
    this.stop = function () {
        this.sound.pause();

    };
    this.sound.addEventListener("ended", function () {
        if (count === myPlaylist.length - 1) {
            count = 0;
        } else {
            count = count + 1;
        }

        myMusic = new sound(myPlaylist[count]);
        myMusic.play();
    });

}
myMusic = new sound("02 Failien Funk.mp3");


//Play Button

document.getElementById("play").addEventListener('click', function () {
    myMusic.play();
    $('#play').hide();
    $('#pause').show();
    $('#pause').fadeIn();

});

//pause button
document.getElementById("pause").addEventListener('click', function () {
    myMusic.stop();
    $('#pause').hide();
    $('#play').show();
    $('#play').fadeIn(400)
});

//skip button
document.getElementById("skip").addEventListener('click', function () {
    myMusic.stop();
    if (count === myPlaylist.length - 1) {
        count = 0;
    } else {
        count = count + 1;
    }

    myMusic = new sound(myPlaylist[count]);
    myMusic.play();
});

//volume adjuster
