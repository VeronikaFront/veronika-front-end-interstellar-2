let inputs = document.querySelectorAll('.input__file');
            Array.prototype.forEach.call(inputs, function (input) {
              let label = input.nextElementSibling,
                labelVal = label.querySelector('.input__file-button-text').innerText;
            });

let button = document.getElementById("reset-file");
button.onclick = () => {
  document.getElementById("demo").innerHTML = "";
}

document.getElementById("input__file").addEventListener("change", function() {
  var file_to_read = document.getElementById("input__file").files[0];
  var fileread = new FileReader();
  
  fileread.onload = function(e) {
    var content = e.target.result;
    // console.log(content);
    var intern = JSON.parse(content); // Array of Objects.
    console.log(intern); 
    console.log(intern.name);

    const container = document.createElement("div");

    const name = document.createElement("h2");
    name.innerText = intern.name;
    container.append(name);

    for (const field of intern.fields) {
      const newContainer = document.createElement("div");
      for (const [key, value] of Object.entries(field)) {
        const newElement = document.createElement(key);
        if (typeof value === "string") {
          newElement.innerText = value;
        }
        else {
          for (const [atributeName, atributeValue] of Object.entries(value)){
             newElement.setAttribute(atributeName, atributeValue);
          }
        }
        newContainer.append(newElement);

      }
      container.append(newContainer);
    }

    for (const button of intern.buttons) {
      const buttonElement = document.createElement("button");
      buttonElement.innerText = button.text;
      container.append(buttonElement);
    }



    document.getElementById("demo").append(container);

   // document.getElementById("demo").innerHTML = content;
   
  };
  fileread.readAsText(file_to_read);
  
});



