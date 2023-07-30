const audioPlayer = new Audio(); 

const songs = [
    "assets/Músicas/Kayblack - CEST LA VIE.mp3",
    "assets/Músicas/TETO - Mustang Preto.mp3",
    "assets/Músicas/VEIGH - Novo Balanço.mp3",
    "assets/Músicas/Filipe Ret Good Vibe (Ft. Caio Luccas - Prod. Dallass).mp3",
    "assets/Músicas/MC CABELINHO - X1 (prod. DALLASS).mp3",
    "assets/Músicas/Vulgo FK, Kayblack e MC Cebezinho - Meca Cereja (Prod. Pedro Lotto) (Videoclipe Oficial).mp3"

];

const images= [
    "assets/Kayblack - CEST LA VIE.jpg",
    "assets/TETO - Mustang Preto.png",
    "assets/VEIGH - Novo Balanço.jpg",
    "assets/Filipe Ret Good Vibe (Ft. Caio Luccas - Prod. Dallass).jpeg",
    "assets/MC CABELINHO - X1 (prod. DALLASS).jpg",
    "assets/Vulgo FK, Kayblack e MC Cebezinho - Meca Cereja (Prod. Pedro Lotto) (Videoclipe Oficial).jpg"
]

let play = false;
let nomeMusica = document.querySelector(".navbar__nome");
let imgMusica = document.querySelector(".imgmusic");
let contaMusica = 0; 
let buttonPlay = document.querySelector("#navbar__botao-play_button");

audioPlayer.src = songs[contaMusica];

function playSong() {
 
  if (play) {
    audioPlayer.pause();
    play = false;
    buttonPlay.setAttribute('src', '../assets/play_1.svg');
  } else {
    audioPlayer.play();
    play = true;
    buttonPlay.setAttribute('src', '../assets/pausar.svg');
  }
  nomeMusica.textContent = songs[contaMusica].replace("assets/Músicas/", "");
  nomeMusica.textContent = nomeMusica.textContent.replace(".mp3", "");
  imgMusica.src = images[contaMusica];
}

function passaMusica() {
  contaMusica++;
  if (contaMusica >= songs.length) {
    contaMusica = 0;
    play = false;
  }
  audioPlayer.src = songs[contaMusica];
  play = false;
  playSong();

}

function voltaMusica() {
  contaMusica--;
  if (contaMusica < 0) {
    contaMusica = songs.length - 1;
  }
  audioPlayer.src = songs[contaMusica];
  playSong();
}

const volumeRange = document.querySelector("#volume");
volumeRange.addEventListener("input", () => {
  const volume = volumeRange.value / 100; 
  audioPlayer.volume = volume; 
});


document.querySelector("#navbar__botao-play").addEventListener("click", playSong);
document.querySelector("#navbar__botao-next").addEventListener("click", passaMusica);
document.querySelector("#navbar__botao-previous").addEventListener("click", voltaMusica);
