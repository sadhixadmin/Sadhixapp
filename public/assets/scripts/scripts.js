var userForm = document.getElementById("get-user-details-form"),
  printUserDetails = document.getElementById("print-user-details");

userForm.onsubmit = function (e) {
  // console.log("Form submitted")
  e.preventDefault()

  userId = Number.parseInt(document.getElementById("user-id").value);
  console.log(userId)

  if (!userId || isNaN(userId)) {
    alert("Please enter a valid user ID.");
    return;
  } else if (userId >= 1 && userId <= 10) {
    // location.href = location.href + 'user/' + userId;
    getUserDetails();
  } else {
    alert("Kindly enter a user id between 1 to 10.");
  }
}


async function getUserDetails() {
  // API to get user details
  try {
    const response = await fetch(`/user/${userId}`);
    const data = await response.json();
    // document.getElementById("print-user-details").innerText = JSON.stringify(data, null, 2);
    document.getElementById("print-user-details").innerText = data.name + ' works for ' + data.company_name;
  } catch (error) {
    document.getElementById("print-user-details").innerText = "Error fetching user details.";
  }   
}