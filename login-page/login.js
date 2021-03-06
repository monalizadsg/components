//user data
var users = [
  {
    userId: "1",
    email: "mona@gmail.com",
    password: "heytest01",
  },
  {
    userId: "2",
    email: "nikko@gmail.com",
    password: "heylookoh",
  },
  {
    userId: "3",
    email: "monik@gmail.com",
    password: "magandaako",
  },
];

function handleLogin() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  console.log({ email, password });

  const validEmail = validateEmail(email);
  const validPassword = validatePassword(password);

  if (validEmail && validPassword) {
    //check if the email and password input match the users
    const foundUser = users.find(
      (elem) => elem.email === email && elem.password === password
    );
    console.log(foundUser);
    alert("Successful login");
  } else {
    alert("no login details found. create an account first");
  }
}

function validateEmail(email) {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(emailFormat) ? true : false;
}

function validatePassword(password) {
  const re = /^[A-Za-z]\w{7,14}$/;
  return password.match(re) ? true : false;
}
