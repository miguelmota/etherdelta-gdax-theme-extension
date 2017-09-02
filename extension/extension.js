(function() {
  if (!document.querySelector('#EtherDeltaGDAXTheme')) {
    const node = document.createElement('link')
    node.id = 'EtherDeltaGDAXTheme'
    node.rel = 'stylesheet'
    node.href = chrome.runtime.getURL('style.css')
    document.body.appendChild(node)
  }
})();
