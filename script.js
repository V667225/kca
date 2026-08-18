const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');
const toast = document.getElementById('toast');

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = '☰';
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 4200);
}

const form = document.getElementById('reportForm');
const submitBtn = document.getElementById('submitBtn');

form?.addEventListener('submit', event => {
  event.preventDefault();
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Preparing secure report…';

  window.setTimeout(() => {
    showToast('Demo only: no report was transmitted. For urgent child protection support, call 116.');
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Prepare secure report <span>→</span>';
    form.reset();
  }, 700);
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(error => console.warn('Service worker registration failed:', error));
  });
}

let deferredInstallPrompt;
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  const installButton = document.createElement('button');
  installButton.type = 'button';
  installButton.textContent = 'Install Sauti Yako';
  Object.assign(installButton.style, {
    position:'fixed', left:'50%', bottom:'18px', transform:'translateX(-50%)', zIndex:'300',
    border:'0', borderRadius:'999px', padding:'12px 18px', background:'#0b5d3b', color:'#fff',
    font:'700 13px DM Sans, sans-serif', boxShadow:'0 12px 30px rgba(11,93,59,.28)', cursor:'pointer'
  });
  installButton.addEventListener('click', async () => {
    installButton.remove();
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
  });
  document.body.appendChild(installButton);
});

window.addEventListener('appinstalled', () => showToast('Sauti Yako is now installed on your device.'));
