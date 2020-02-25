export default () => {
  let context, analyser;

  let columns = document.querySelectorAll(".visualisator__column");
  let audio = document.getElementById('audio');

  function preparation() {
    context = new AudioContext();
    analyser = context.createAnalyser();
    let src = context.createMediaElementSource(audio);
    src.connect(analyser);
    analyser.connect(context.destination);
    loop();
  }

  audio.addEventListener('timeupdate', () => {
    console.log(audio.currentTime)
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

  return function () {
    if (!context) {
      preparation();
    }
    if (audio.paused) {
      audio.play();
      loop();
    } else {
      audio.pause();
    }
  }
}

