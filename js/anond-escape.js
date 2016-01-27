(function() {
  function escape(text) {
    return text
      .replace(/&/g, "&#x26;")
      .replace(/>/g, "&#x3e;")
      .replace(/&#x3e;&#x3e;/g, ">>")
      .replace(/&#x3e;\|/g, ">|")
      .replace(/</g, "&#x3c;")
      .replace(/&#x3c;&#x3c;/g, "<<")
      .replace(/\|&#x3c;/g, "|<")
      ;
  }
  document.getElementById("escape").addEventListener("click", function() {
    var src = document.getElementById("source").value;
    var dst = escape(src);
    document.getElementById("destination").value = dst;
  });
})();
