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

// Research tag filter.
// Chips are generated from the .tag spans inside each project article,
// so adding/removing a tag in the HTML automatically updates the filter bar.
(function () {
  var bar = document.getElementById('filter-bar');
  var projects = Array.prototype.slice.call(document.querySelectorAll('#projects .project'));
  var emptyMsg = document.getElementById('filter-empty');
  if (!bar || projects.length === 0) return;

  function tagsOf(article) {
    return Array.prototype.map.call(article.querySelectorAll('.tag'), function (t) {
      return t.textContent.trim();
    });
  }

  // Collect unique tags in order of first appearance.
  var allTags = [];
  projects.forEach(function (p) {
    tagsOf(p).forEach(function (t) {
      if (allTags.indexOf(t) === -1) allTags.push(t);
    });
  });

  var current = 'All';

  function apply() {
    var visible = 0;
    projects.forEach(function (p) {
      var show = current === 'All' || tagsOf(p).indexOf(current) !== -1;
      p.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (emptyMsg) emptyMsg.style.display = visible === 0 ? 'block' : 'none';
    Array.prototype.forEach.call(bar.querySelectorAll('.filter-chip'), function (c) {
      c.classList.toggle('active', c.textContent === current);
    });
  }

  function makeChip(name) {
    var chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'filter-chip';
    chip.textContent = name;
    chip.addEventListener('click', function () {
      current = name;
      apply();
    });
    bar.appendChild(chip);
  }

  makeChip('All');
  allTags.forEach(makeChip);

  // Clicking a tag on a project card also activates that filter.
  projects.forEach(function (p) {
    Array.prototype.forEach.call(p.querySelectorAll('.tag'), function (t) {
      t.addEventListener('click', function () {
        current = t.textContent.trim();
        apply();
        document.getElementById('filter-bar').scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  });

  apply();
})();
