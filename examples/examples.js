/*
 * 应用示例页用的一点脚本，让筛选、搜索、对话框和表单能真的操作。
 * 它不属于设计系统。
 */
(function () {
  /* ---------- 应用列表页：标签页筛选、搜索、新建 ---------- */
  var tbody = document.getElementById("docs");
  if (tbody) {
    var tabs = Array.prototype.slice.call(document.querySelectorAll(".q-tab"));
    var search = document.getElementById("search");
    var empty = document.getElementById("empty");
    var table = tbody.closest(".q-table-wrap");
    var filter = "all";

    var apply = function () {
      var q = search.value.trim().toLowerCase();
      var shown = 0;
      Array.prototype.forEach.call(tbody.rows, function (row) {
        var okStatus = filter === "all" || row.dataset.status === filter;
        var okText = !q || row.cells[0].textContent.toLowerCase().indexOf(q) !== -1;
        row.hidden = !(okStatus && okText);
        if (!row.hidden) shown += 1;
      });
      table.hidden = shown === 0;
      empty.hidden = shown !== 0;
    };

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        filter = tab.dataset.filter;
        tabs.forEach(function (t) {
          t.setAttribute("aria-selected", String(t === tab));
        });
        apply();
      });
    });
    search.addEventListener("input", apply);

    var dialog = document.getElementById("new-doc-dialog");
    var form = document.getElementById("new-doc-form");
    var name = document.getElementById("new-doc-name");
    var error = document.getElementById("new-doc-error");

    var resetDialog = function () {
      name.value = "";
      name.removeAttribute("aria-invalid");
      error.hidden = true;
    };

    document.getElementById("new-doc").addEventListener("click", function () {
      resetDialog();
      dialog.showModal();
    });
    dialog.querySelector("[data-close]").addEventListener("click", function () {
      dialog.close();
    });

    form.addEventListener("submit", function (event) {
      var title = name.value.trim();
      if (!title) {
        event.preventDefault();
        name.setAttribute("aria-invalid", "true");
        error.hidden = false;
        name.focus();
        return;
      }
      var now = new Date();
      var pad = function (n) {
        return (n < 10 ? "0" : "") + n;
      };
      var row = tbody.insertRow(0);
      row.dataset.status = "draft";
      row.insertCell().textContent = title;
      var status = document.createElement("span");
      status.className = "q-status";
      status.textContent = "草稿";
      row.insertCell().appendChild(status);
      var words = row.insertCell();
      words.className = "q-num";
      words.textContent = "0";
      var date = row.insertCell();
      date.className = "q-num q-muted";
      date.textContent = pad(now.getMonth() + 1) + "." + pad(now.getDate());
      document.getElementById("stat-docs").textContent = String(tbody.rows.length);
      apply();
    });
  }

  /* ---------- 设置页：保存、外观、删除确认 ---------- */
  var profile = document.getElementById("profile");
  if (profile) {
    var profileName = document.getElementById("profile-name");
    var profileError = document.getElementById("profile-name-error");
    var saved = document.getElementById("profile-saved");

    profile.addEventListener("submit", function (event) {
      event.preventDefault();
      var ok = profileName.value.trim() !== "";
      profileError.hidden = ok;
      saved.hidden = !ok;
      if (ok) {
        profileName.removeAttribute("aria-invalid");
      } else {
        profileName.setAttribute("aria-invalid", "true");
        profileName.focus();
      }
    });
    profile.addEventListener("input", function () {
      saved.hidden = true;
    });

    var root = document.documentElement;
    var radios = Array.prototype.slice.call(document.querySelectorAll('input[name="theme"]'));
    var sync = function () {
      var current = root.dataset.theme || "system";
      radios.forEach(function (radio) {
        radio.checked = radio.value === current;
      });
    };
    sync();
    radios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        if (radio.value === "system") {
          delete root.dataset.theme;
        } else {
          root.dataset.theme = radio.value;
        }
        try {
          if (radio.value === "system") localStorage.removeItem("q-theme");
          else localStorage.setItem("q-theme", radio.value);
        } catch (e) {
          /* 存不了就只在这一页生效 */
        }
      });
    });
    /* 顶栏的切换按钮也会改主题，改完把单选框对齐 */
    var themeButton = document.getElementById("theme");
    if (themeButton) themeButton.addEventListener("click", function () {
      setTimeout(sync, 0);
    });

    var deleteDialog = document.getElementById("delete-dialog");
    document.getElementById("delete-ws").addEventListener("click", function () {
      deleteDialog.showModal();
    });
  }
})();
