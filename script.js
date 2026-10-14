document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
 menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰';});
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');if(menu){menu.textContent='☰';menu.setAttribute('aria-expanded','false');}}));
 const boxes=[...document.querySelectorAll('.checklist input')],bar=document.getElementById('checkProgress'),label=document.getElementById('progressLabel');
 function update(){const done=boxes.filter(b=>b.checked).length;if(bar)bar.style.width=(boxes.length?done/boxes.length*100:0)+'%';if(label)label.textContent=`${done} de ${boxes.length} tareas completadas`;}
 boxes.forEach(b=>b.addEventListener('change',update));update();
 const button=document.getElementById('dispenseButton'),reset=document.getElementById('resetButton'),status=document.getElementById('status'),machine=document.getElementById('machine');let busy=false,timer;
 button?.addEventListener('click',()=>{if(busy)return;busy=true;machine.classList.add('dispensing');status.textContent='Compuerta abierta: entregando alimento…';button.disabled=true;button.textContent='⏳ Dispensando…';timer=setTimeout(()=>{machine.classList.remove('dispensing');status.textContent='¡Entrega simulada completada! La compuerta se cerró.';button.disabled=false;button.textContent='🍽️ Dispensar otra vez';busy=false;},1800);});
 reset?.addEventListener('click',()=>{clearTimeout(timer);busy=false;machine.classList.remove('dispensing');if(status)status.textContent='El dispensador está en espera.';if(button){button.disabled=false;button.textContent='🍽️ Dispensar alimento';}});
 if('serviceWorker'in navigator&&(location.protocol==='https:'||location.hostname==='localhost'))navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
});
document.addEventListener("DOMContentLoaded", () => {
  // Checklist de la página Tips
  const casillas = document.querySelectorAll(
    '.checklist input[type="checkbox"]'
  );
  const progreso = document.getElementById("checkProgress");
  const etiqueta = document.getElementById("progressLabel");

  function actualizarChecklist() {
    const total = casillas.length;
    const completadas = document.querySelectorAll(
      '.checklist input[type="checkbox"]:checked'
    ).length;

    if (progreso) {
      progreso.style.width =
        (total ? (completadas / total) * 100 : 0) + "%";
    }

    if (etiqueta) {
      etiqueta.textContent =
        `${completadas} de ${total} tareas completadas`;
    }
  }

  casillas.forEach((casilla) => {
    casilla.addEventListener("change", actualizarChecklist);
  });

  actualizarChecklist();

  // Menú adaptable para móviles
  const botonMenu = document.querySelector(".menu-toggle");
  const navegacion = document.querySelector(".nav");

  if (botonMenu && navegacion) {
    botonMenu.addEventListener("click", () => {
      navegacion.classList.toggle("open");
    });
  }
});
