// let title = document.getElementById("title");
// // console.log(title);

// let blueTexts = document.getElementsByClassName("text-blue");
// // console.log(blueTexts);

// let el = document.querySelector(".text-blue");
// console.log(el);

// // let allBlue = document.querySelectorAll(".text-blue");
// // console.log(allBlue);

// el.classList.remove("text-blue");
// el.classList.add("text-yellow");

// let header = document.querySelector("h1");
// // header.textContent = "<p>welcome</p>";
// header.innerHTML = `<i>
//     welcome
//     <span class='text-blue'> back to my channel</span>
//   </i>`;

// let button = document.querySelector("#btn");
// let descText = document.querySelector("#desc-text");

// button.addEventListener("click", () => {
//   // descText.stextContent = "button di click";
//   window.location = "https://skilvul.com/";
// });

// perlu data dari form
// bisa pake event form submission
// ketika form di submit, ngevalidasi data
// uda dapet data nya berupa object, bikin validasi logic

const form = document.querySelector("#form");
console.log(form);

form.addEventListener("submit", function () {
  event.preventDefault();
  console.log("form sudah di submit");

  const formData = new FormData(form);
  console.log(formData);

  const data = Object.fromEntries(formData);
  console.log(data);
  console.log(data.nama_lengkap);
});
