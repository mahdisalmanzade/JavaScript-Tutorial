// Global Events - DOMContentLoaded
/**
## The DOMContentLoaded event fires when the HTML Document has been
completely lodaded and parsed, without waiting for stylesheets, images,
and subframes to finish loading.
*/
// More Information here: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener('DOMContentLoaded', function () {
  this.setTimeout(function () {
    const heading = document.querySelector('.heading');
    heading.style.color = 'red';
    console.log('DOMContentLodaded event just fired!');
  }, 2000);
});
