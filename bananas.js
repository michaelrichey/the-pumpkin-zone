

function chomp() {
  document.querySelectorAll('.banana')[0].remove();
  alert('yum yum all done');
}

function bananaMasher() {
  var max = maxBananas()
  for (var i = 1; i < max ; i++) {
    const p = document.createElement('p');
    p.className = 'banana';
    p.innerText = 'banana #' + i;  
    document.body.appendChild(p);
  }
  alert('wait for it...');
  if (max > 2) {
    setTimeout(chomp, 1000);
  }
}

function allDone() {
  alert('Done loading!');
  document.getElementById('start').removeAttribute('disabled');
}

function loader1() {
  for (var i = 0; i < 5; i++) {
    const p = document.createElement('p');
    p.innerText = "Loaded " + i + " items...";
    setTimeout(function() { document.body.appendChild(p) }, i * 1000);
    if (i === 4) {
      setTimeout(allDone, 5000);
    }
  }
}

window.addEventListener('load', function(){
  loader1();
  document.getElementById('start').addEventListener('click', function() {
    bananaMasher();
  })
});


function maxBananas() {
  return Math.floor(Math.random() * 8) + 2;
}
