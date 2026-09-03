(() => {
  'use strict';
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reveals = [...document.querySelectorAll('.reveal')];
  let observer;
  if ('IntersectionObserver' in window && !reduced.matches) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    reveals.forEach(el => observer.observe(el));
    root.classList.add('motion-ready');
  }
  const motionButton = document.querySelector('.motion-toggle');
  let manualPause = false;
  function applyMotion() {
    const stopped = manualPause || reduced.matches;
    root.classList.toggle('motion-paused', stopped);
    motionButton.setAttribute('aria-pressed', String(stopped));
    motionButton.textContent = reduced.matches ? '動きは端末設定で停止中' : stopped ? '動きを再開する' : '動きを停止する';
    motionButton.disabled = reduced.matches;
  }
  motionButton.addEventListener('click', () => { manualPause = !manualPause; applyMotion(); });
  reduced.addEventListener('change', applyMotion);
  applyMotion();

  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  function setMenu(open, returnFocus = false) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    mobileNav.hidden = !open;
    if (returnFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => setMenu(mobileNav.hidden));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (mobileNav.hidden) return;
    if (event.key === 'Escape') setMenu(false, true);
    if (event.key === 'Tab') {
      const targets = [menuButton, ...mobileNav.querySelectorAll('a')];
      const first = targets[0], last = targets[targets.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

  function openLinkedJob(hash) {
    if (!hash.startsWith('#job-')) return;
    const job = document.getElementById(hash.slice(1));
    if (job instanceof HTMLDetailsElement) job.open = true;
  }
  document.querySelectorAll('a[href^="#job-"]').forEach(link => link.addEventListener('click', () => openLinkedJob(link.hash)));
  window.addEventListener('hashchange', () => openLinkedJob(location.hash));
  openLinkedJob(location.hash);

  const dialog = document.getElementById('entry-dialog');
  let entryTrigger;
  document.querySelectorAll('[data-entry]').forEach(button => button.addEventListener('click', () => {
    entryTrigger = button;
    dialog.querySelector('.selected-job').textContent = button.dataset.entry;
    dialog.showModal();
  }));
  dialog.querySelectorAll('.dialog-close, .dialog-back').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => entryTrigger?.focus());
})();
