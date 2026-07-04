// Hash-based page switching for the five sections.
(function () {
  var pages = ['home', 'about', 'research', 'publications', 'community'];

  function currentPage() {
    var hash = location.hash.replace('#', '');
    return pages.indexOf(hash) !== -1 ? hash : 'home';
  }

  function render() {
    var page = currentPage();
    document.querySelectorAll('section[data-page]').forEach(function (sec) {
      sec.classList.toggle('visible', sec.dataset.page === page);
    });
    document.querySelectorAll('.nav-item').forEach(function (item) {
      var active = item.dataset.nav === page;
      item.classList.toggle('active', active);
      item.querySelector('.tick').textContent = active ? '—' : '';
    });
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', render);
  render();
})();
