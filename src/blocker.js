function blockAd(element) {
    // Check if the element is an ad
    if (element.tagName === 'IFRAME' && element.src.startsWith('https://www.google.com/ads/')) {
      // Block the ad by removing it from the page
      element.remove();
    }
  }
  
function blockHotlist(element) {
    // Check if the element with class .hot-news-wrapper
    class_name = ['hot-news-wrapper', 'FYB_RD']
    for (let i = 0; i < class_name.length; i++) {
      if (element.classList.contains(class_name[i])) {
        // Block the hotlist by removing it from the page
        element.remove();
      }
      // console.log(class_name[i])
    }
    // console.log(element)
    console.log("blockHotlist=======================")
  }
  // Listen for new elements being added to the page
document.addEventListener('DOMContentLoaded', function() {
    // Get all iframes on the page
    const iframes = document.querySelectorAll('iframe');
    // Block any ads
    iframes.forEach(blockAd);

    // Get all elements with class .hot-news-wrapper
    const hotlists = document.querySelectorAll('div');
    console.log("blockHotlist=======================")
    console.log(hotlists)
    // Block any hotlists
    hotlists.forEach(blockHotlist);
});

document.addEventListener('click', function(event) {
  console.log('用户点击了一个元素！');
});

document.addEventListener('readystatechange', function() {
  console.log('页面加载完成！');
  const hotlists = document.querySelectorAll('div');
  console.log("blockHotlist=======================")
  console.log(hotlists)
  // Block any hotlists
  hotlists.forEach(blockHotlist);

});

// window.onload = function() {
//   console.log('页面完成加载！');
// };

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      const addedNodes = mutation.addedNodes;
      addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // blockHotlist(node);
          1+1;
        }
      });
    }
  });
});

observer.observe(document, {
  childList: true,
  subtree: true,
});