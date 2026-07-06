var projectBibtexTrigger = document.getElementById("project-bibtex-trigger");
var projectBibtex = document.getElementById("project-bibtex");
if (projectBibtexTrigger && projectBibtex) {
  projectBibtexTrigger.addEventListener("click", function() {
    bootstrap.Collapse.getOrCreateInstance(projectBibtex).show();
  });
  projectBibtex.addEventListener("shown.bs.collapse", function() {
    var citation = document.getElementById("citation");
    if (citation) {
      citation.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

var d = new Date();
var year = document.getElementById("year");
if (year) {
  year.innerHTML = d.getFullYear();
}

var snippets = document.querySelectorAll(".snippet");

[].forEach.call(snippets, function(snippet) {
  snippet.firstChild.insertAdjacentHTML(
    "beforebegin",
    "<button class=\"btn\" data-bs-toggle=\"tooltip\" data-bs-title=\"Copy to clipboard\" data-clipboard-snippet><i class=\"bi bi-clipboard\"></i></button>");
});

const tooltipTriggerList = document.querySelectorAll("[data-bs-toggle=\"tooltip\"]");
const tooltipList = [...tooltipTriggerList].map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

var clipboardSnippets = new ClipboardJS("[data-clipboard-snippet]", {
  target: function(trigger) {
    return trigger.nextElementSibling;
  }
});

clipboardSnippets.on("success", function(e) {
  e.clearSelection();
  var icon = e.trigger.querySelector("i");
  icon.className = "bi bi-check2";
  var tooltip = bootstrap.Tooltip.getInstance(e.trigger);
  tooltip.setContent({".tooltip-inner": "Copied!"});
  tooltip.show();
  setTimeout(function() {
    icon.className = "bi bi-clipboard";
    tooltip.setContent({".tooltip-inner": "Copy to clipboard"});
    tooltip.hide();
  }, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a[href]");

  links.forEach(function(link) {
    if (!link.getAttribute("href").startsWith("#")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
