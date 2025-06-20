console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
  return `
    <li style="background: orange"
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1">
              Ozgartirish
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm">
              Ochirish
            </button>
          </div>
        </li>
    `;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault(); //STOP: Traditional API

  //REST API nin ishga tushunarmiz
  // console.log("STEP-1: FRONTEND => BACKEND Rest API yuboriladi form buttoni bosilganda");
  axios //htmlga linkini qoyib chaqirib olganmiz
    //axios bu FRONTEND => BACKEND ga Rest API yuboradigan object
    .post("/create-item", { reja: createField.value })
    //post(header, {body} => API request structure )
    .then((response) => {
      //   console.log("STEP-6: BACKEND => FRONTENDga data kiradi ");
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      //itemTemplate(response.data) - html da qoshilishi kerak bolgan dzayn
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Qaytadan harakat qiling");
    });
});

// UPDATE and DELETE

document.addEventListener("click", function (e) {
  //   console.log(e);
  //DELETE operation
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq ochirasizmi"));
    // console.log("STEP-1: FRONTEND => BACKEND Rest API yuboriladi");
    {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          //   console.log("STEP-6: BACKEND => FRONTENDga data kiradi ");
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Qaytadan harakat qiling");
        });
    }
  }

  //UPDATE operation
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "Ozgartirishni kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {});
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((response) => {
    alert(response.data.state);
    document.location.reload();
  });
});