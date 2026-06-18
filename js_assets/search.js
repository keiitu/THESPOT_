
// Search & Filter - Realms and Gallery Content
document.addEventListener('DOMContentLoaded', function() {

  // ----- Search on Realms Page -----
  const searchContainer = document.querySelector('.realmsgallery');
  if (searchContainer) {
    // Create search input if it doesn't exist
    let searchBox = document.getElementById('realmSearch');
    if (!searchBox) {
      searchBox = document.createElement('input');
      searchBox.id = 'realmSearch';
      searchBox.type = 'text';
      searchBox.placeholder = 'Search realms by name or description...';
      searchBox.style.cssText = `
        width: 80%;
        max-width: 500px;
        padding: 12px 20px;
        border-radius: 40px;
        border: 1px solid var(--threshold);
        background: var(--void);
        color: var(--flicker);
        font-size: 1rem;
        margin: 0 auto 20px;
        display: block;
        transition: box-shadow 0.3s ease, border-color 0.3s ease;
      `;
      searchBox.addEventListener('focus', function() {
        this.style.boxShadow = '0 0 20px rgba(124, 58, 237, 0.2)';
        this.style.borderColor = 'var(--portal)';
      });
      searchBox.addEventListener('blur', function() {
        this.style.boxShadow = 'none';
        this.style.borderColor = 'var(--threshold)';
      });

      const parent = searchContainer.parentNode;
      parent.insertBefore(searchBox, searchContainer);
    }

    const cards = searchContainer.querySelectorAll('.inkcorridorscta, .graphitepathwayscta, .pigmentfieldscta, .watercolorcta, .digitaldreamscapecta, .charcoaldepthscta');

    searchBox.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      let visibleCount = 0;

      cards.forEach(function(card) {
        const text = card.textContent.toLowerCase();
        const shouldShow = query === '' || text.includes(query);
        card.style.display = shouldShow ? 'block' : 'none';
        if (shouldShow) visibleCount++;
      });

      // Show/hide "no results" message
      let noResults = document.getElementById('noResultsMessage');
      if (visibleCount === 0 && query !== '') {
        if (!noResults) {
          noResults = document.createElement('p');
          noResults.id = 'noResultsMessage';
          noResults.textContent = 'No realms found matching your search.';
          noResults.style.cssText = 'text-align: center; opacity: 0.7; margin-top: 20px;';
          searchContainer.parentNode.insertBefore(noResults, searchContainer.nextSibling);
        }
      } else {
        if (noResults) noResults.remove();
      }
    });
  }

  // ----- Search on Gallery / Individual Realm Pages -----
  const galleryImages = document.querySelectorAll('.charcoaldepthsmain section img, .digitaldreamscapesmain section img, .pigmentfieldsmain section img, .inkcorridorsmain section img, .graphitepathwaysmain section img, .watercolormain section img');

  if (galleryImages.length > 0) {
    // Add a subtle filter if needed (e.g., filter by medium or keyword)
    // This is a placeholder for future enhancement
  }
});