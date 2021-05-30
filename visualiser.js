const inputs = [
  // Face buttons are bound to 0-3 by default
  document.getElementById('a'),
  document.getElementById('b'),
  document.getElementById('x'),
  document.getElementById('y'),

  // Bumpers are 4-5
  document.getElementById('lb'),
  document.getElementById('rb'),

  // 6-7 are triggers
  document.getElementById('lt'),
  document.getElementById('rt'),

  // 8-9 start/select
  document.getElementById('select'),
  document.getElementById('start'),

  // 10-11 sticks
  document.getElementById('ls'),
  document.getElementById('rs'),

  // 12-15 dpad buttons
  document.getElementById('dup'),
  document.getElementById('ddown'),
  document.getElementById('dleft'),
  document.getElementById('dright'),
];

window.onload = function WindowLoad(event) {
    loop();
}

function loop() {
    const gamepads = navigator.getGamepads()
    if (gamepads[0] != undefined) {
        const gp = gamepads[0];

        for (const [index, input] of inputs.entries()) {
          input.dataset.pressed = gp.buttons[index].pressed;
        }

        // trigger axes
        for (const index of [6, 7]) {
          inputs[index].dataset.value = gp.buttons[index].value;
        }

        // stick axes
        inputs[10].dataset.x = gp.axes[0];
        inputs[10].dataset.y = gp.axes[1];
        inputs[11].dataset.x = gp.axes[2];
        inputs[11].dataset.y = gp.axes[3];
    }

    requestAnimationFrame(loop);
}