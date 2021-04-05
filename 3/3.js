(function () {
  // Setup MutationObserver
  const targetNode = document.querySelector('.nav');
  const config = { attributes: true, childList: true, subtree: true };

  function dynamicOffsetHeight(element) {
    const stickyElement = document.querySelector('.sticky-element');
    stickyElement.setAttribute('style', `top: ${element.offsetHeight}px;`);
  }

  dynamicOffsetHeight(targetNode);

  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        dynamicOffsetHeight(mutation.target);
      }
    });
  });

  observer.observe(targetNode, config);
})();
