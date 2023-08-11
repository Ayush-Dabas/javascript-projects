const player = {
  a: 0,
  w: 0,
  s: 0,
  d: 0,
  speed: 10,
  posX: 0,
  posY: 0,
  el: document.getElementById("player"),
};

function keyStrokes(e) {
  if (!"awsd".includes(e.key)) {
    return;
  }
  player[e.key] = event.type === "keyup" ? 0 : 1;
  //   console.log(player);
}

function move() {
  const dX = player.a * -player.speed + player.d * player.speed;
  const dY = player.w * -player.speed + player.s * player.speed;
  //   const cS = dX * dY === 0 ? 1 : 0.707;
  //   player.posX += cS * dX;
  //   player.posY += cS * dY;
  if ((dX > 300 || dX < -300) && (dY < -200 || dY > 190)) {
    dX = 0;
    dY = 0;
  }
  player.posX += dX;
  player.posY += dY;
  // checkBoundry();

  player.el.style.transform = `translate(${player.posX}px, ${player.posY}px)`;
  requestAnimationFrame(move);
}

function checkBoundry() {
  setInterval(() => {
    console.log(player.posX);
    console.log(player.posY);
  }, 2000);
}

document.addEventListener("keyup", keyStrokes);
document.addEventListener("keydown", keyStrokes);

requestAnimationFrame(move);
