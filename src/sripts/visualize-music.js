const visualizeMusic = (audio) => {
  let context, analyser;

  let columns = document.querySelectorAll(".visualisator__column");

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
    makePauseAnimation(audio.paused);
    if (!audio.paused) {
      window.requestAnimationFrame(loop);
    }
    let array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);

    const getHeight = (index) => {
      let height = array[Math.floor(array.length / index ? index : 1)];
      height = height / 256 * 80;
      return height;
    }

    columns.forEach((el, index) => {
      el.style.height = getHeight(index) + "%";
    })
  }

  function makePauseAnimation(paused) {
    paused ? columns.forEach(el => el.classList.add('pause')) : columns.forEach(el => el.classList.remove('pause'))
  }

  audio.addEventListener('play', () => {
    if (!context) {
      preparation();
    }
  })
}

export default visualizeMusic;
