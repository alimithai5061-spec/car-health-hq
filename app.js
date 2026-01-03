const svg  = document.getElementById('carSvg');
const panel= document.getElementById('panel');
const title= document.getElementById('sysTitle');
const health= document.getElementById('sysHealth');
const tasks= document.getElementById('sysTasks');

function healthClass(val){
  if(val<50) return 'critical';
  if(val<75) return 'warn';
  return 'ok';
}

function showSystem(sys){
  const data = carHealthData[sys];
  title.textContent = sys.charAt(0).toUpperCase() + sys.slice(1) + ' System';
  health.textContent = `Health: ${data.health}%`;
  health.style.color = data.health<50?'#e74c3c':data.health<75?'#f39c12':'#27ae60';
  tasks.innerHTML = data.tasks.length
    ? data.tasks.map(t=>`<li>${t}</li>`).join('')
    : '<li>No immediate maintenance</li>';
}

/* colour the car */
Object.entries(carHealthData).forEach(([sys,data])=>{
  const el = svg.querySelector(`[data-sys="${sys}"]`);
  if(el) el.classList.add(healthClass(data.health));
});

/* click handler */
svg.addEventListener('click', e=>{
  const sys = e.target.closest('.system')?.dataset.sys;
  if(sys) showSystem(sys);
});

/* show first system by default */
showSystem('engine');