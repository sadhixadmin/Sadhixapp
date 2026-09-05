var userForm = document.getElementById("get-user-details-form"),
  printUserDetails = document.getElementById("print-user-details")

userForm.onsubmit = function (e) {
  // console.log("Form submitted")
  e.preventDefault()

  userId = Number.parseInt(document.getElementById("user-id").value);
  // console.log(userId)

  if (userId >= 1 && userId <= 10) {
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((response) => response.json())
      .then((userData) => {
        // console.log(userData)
        printUserDetails.innerText =
          userData.name +
          " lives in " +
          userData.address.city +
          " and works for " +
          userData.company.name +
          "."
      })
  } else {
    alert("Kindly enter a user id between 1 to 10.");
  }
}
