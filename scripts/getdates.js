document.addEventListener("DOMContentLoaded", function () {
  // select the DOM elements for output
  const currentYearElement = document.querySelector("#currentYear");
  const lastModifiedElement = document.querySelector("#lastModifiedDate");

  // get the current year
  const currentYear = new Date().getFullYear();

  // set the copyright year dynamically
  currentYearElement.textContent = currentYear;

  // get the last modified date dynamically
  const lastModifiedDate = new Date(document.lastModified);

  // set the last modified date dynamically
  lastModifiedElement.textContent = `Last modified: ${new Intl.DateTimeFormat(
      "en-US",
      {
          dateStyle: "medium",
          timeStyle: "short",
      }
  ).format(lastModifiedDate)}`;
});
