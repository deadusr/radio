const visualizeMusic = () => {
  let context, analyser;

  let columns = document.querySelectorAll(".visualisator__column");
  const audio = document.getElementById('audio');

  function preparation() {
    context = new AudioContext();
    analyser = context.createAnalyser();
    let src = context.createMediaElementSource(audio);
    src.connect(analyser);
    analyser.connect(context.destination);
    loop();
  }

  audio.addEventListener('play', () => {
    if (!context) {
      preparation();
    }
    loop();
  })

  function loop() {
    if (!audio.paused) {
      window.requestAnimationFrame(loop);
    }
    let array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);

    columns.forEach((el, index) => {
      el.style.height = (array[Math.floor(array.length / index ? index : 1)]) + "px";
    })
  }

  audio.addEventListener('play', () => {
    if (!context) {
      preparation();
    }
  })
}

export default visualizeMusic;
