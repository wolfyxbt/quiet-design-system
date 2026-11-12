/*
 * 文档页用的一点脚本：显示变量当前的取值，让示例里的标签页和对话框能操作。
 * 它不属于设计系统。
 */
(function () {
  var root = document.documentElement;

  /* ---------- 颜色页：把每个变量当前生效的值写出来 ---------- */
  var cells = Array.prototype.slice.call(document.querySelectorAll("[data-token]"));

  var format = function (value) {
    var v = value.trim();
    var m = v.match(/^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s\/]+([\d.]+))?\s*\)$/);
    if (!m) return v;
    var r = Number(m[1]);
    var g = Number(m[2]);
    var b = Number(m[3]);
    var a = m[4] === undefined ? 1 : Number(m[4]);
    var percent = Math.round(a * 100) + "%";
    if (r === 255 && g === 255 && b === 255) return a === 1 ? "#ffffff" : "白 " + percent;
    if (r === 0 && g === 0 && b === 0) return a === 1 ? "#000000" : "黑 " + percent;
    var hex = "#" + [r, g, b].map(function (n) {
      return (n < 16 ? "0" : "") + n.toString(16);
    }).join("");
    return a === 1 ? hex : hex + " " + percent;
  };

  var update = function () {
    var style = getComputedStyle(root);
    cells.forEach(function (cell) {
      var value = style.getPropertyValue(cell.dataset.token);
      if (value.trim()) cell.textContent = format(value);
    });
  };

  if (cells.length) {
    update();
    var themeButton = document.getElementById("theme");
    if (themeButton) themeButton.addEventListener("click", function () {
      setTimeout(update, 0);
    });
    if (window.matchMedia) {
      var media = matchMedia("(prefers-color-scheme: dark)");
      if (media.addEventListener) media.addEventListener("change", update);
    }
  }

  /* ---------- 示例里的标签页：点一下切换当前项 ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.q-demo [role="tablist"]'), function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          t.setAttribute("aria-selected", String(t === tab));
        });
      });
    });
  });

  /* ---------- 示例里的对话框 ---------- */
  Array.prototype.forEach.call(document.querySelectorAll("[data-open]"), function (button) {
    button.addEventListener("click", function () {
      var dialog = document.getElementById(button.dataset.open);
      if (dialog && dialog.showModal) dialog.showModal();
    });
  });
})();
