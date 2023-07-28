$(document).ready(function () {
  let index = 0;
  let flag = 0;
  fetch("./data.json")
    .then((r) => r.json())
    .then((r) => {
      r.forEach((element, id) => {
        // document.getElementById('')

        element.cities.forEach((c, i) => {
          let tr =
            "<tr class='" +
            (flag == id
              ? "top_" + id + " show '"
              : "inner_" + (id + 1) + " hide'") +
            " >" +
            "<td>" +
            (flag == id ? "<i class='expand fa-solid fa-plus'></i>" : "") +
            "</td>" +
            "<td>" +
            (flag == id ? element.country : "") +
            "</td>" +
            "<td>" +
            c +
            "</td>" +
            "</tr>";
          $("#countryTable tbody").append(tr);
          if (flag == id) {
            flag++;
          }
        });
      });
    });
});
$(document).on("click", ".expand", function (event) {
  console.log(this);
  if ($(this).hasClass("fa-plus")) {
    $(this).removeClass("fa-plus").addClass("fa-minus");
  } else {
    $(this).removeClass("fa-minue").addClass("fa-plus");
  }
  let tr = $(this).parent().parent();
  let no = $(tr).attr("class").split(" ")[0].split("_")[1];
  console.log(no);
  let classid = ".inner_" + (parseInt(no) + 1);
  debugger;
  console.log(document.querySelectorAll(classid));
  document.querySelectorAll(classid).forEach(function (t) {
    if ($(t).hasClass("hide")) {
      $(t).removeClass("hide").addClass("show");
    } else {
      $(t).removeClass("show").addClass("hide");
    }
  });
});
