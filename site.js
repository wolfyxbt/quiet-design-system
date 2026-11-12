/*
 * 示例网站用的一点脚本：打开 / 关闭全屏导航，手动切换深浅色。
 * 它不属于设计系统，自己的项目里可以换成任何实现。
 * 放在 <head> 里加载，这样深浅色在页面画出来之前就已经定好，不会闪一下。
 */
(function () {
  var root = document.documentElement;
  var KEY = "q-theme";

  try {
    var saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") root.dataset.theme = saved;
  } catch (e) {
    /* 读不到本地存储就跟随系统 */
  }

  document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById("menu");
    var nav = document.getElementById("nav");
    if (menu && nav) {
      menu.addEventListener("click", function () {
        nav.hidden = !nav.hidden;
        menu.setAttribute("aria-expanded", String(!nav.hidden));
      });
    }

    var theme = document.getElementById("theme");
    if (theme) {
      theme.addEventListener("click", function () {
        var dark =
          root.dataset.theme === "dark" ||
          (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
        var next = dark ? "light" : "dark";
        root.dataset.theme = next;
        try {
          localStorage.setItem(KEY, next);
        } catch (e) {
          /* 存不了也没关系，只是下一页不会记住 */
        }
      });
    }
  });
})();
