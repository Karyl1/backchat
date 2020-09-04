 jQuery(document).ready(function($) {

  const login = $("#login");
  const password = $("#password");
  

})


  // handle the event sent with socket.send()
  socket.on('message', data => {
  console.log(data);
});

// handle the event sent with socket.emit()
socket.on('greetings', (elem1, elem2, elem3) => {
  console.log(elem1, elem2, elem3);
});


function postSignup(login, password, mail) {
  const _body = JSON.stringify({login, password, mail})
  const _params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: _body
  };
  const _url = "http://localhost:3000/";
  fetch(_url + "signup",_params)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
}

function postSignin(login, password){
  const body = JSON.stringify({login: "login", password: "password"})
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  };
  const url = "http://localhost:3000/";
  fetch(url + "signin",params)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
};