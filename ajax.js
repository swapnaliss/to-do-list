function todoList() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

      var response = JSON.parse(this.responseText)

      for (i = 0; i <= response.length; i++) {

        var data =
          `<li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                      <div class="d-flex align-items-center">
                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." id="cheq" onclick="countCheckBox()"/>
                        ${response[i].id}
                          |
                        ${response[i].title}
                      </div>
            </li>`
        document.getElementById("tableBody").innerHTML += data;
      }
    }
  }

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true)
  xhttp.send();
}


function countCheckBox() {

  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  if (checkboxes.length == 5) {
    alert(' Congrats. 5 Tasks have been Successfully Completed');
  }

}


function logout(){
  window.location = "index.html";
}

window.addEventListener("load", todoList);


