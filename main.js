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
    var intern = JSON.parse(content); 
    

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
          if (value.colors !== undefined, Array.isArray(value.colors)) {
            const select = document.createElement("select")
            for (let i = 0; i < value.colors.length; i++) {

              select.options[i] = new Option((value.colors[i]));
              
              //document.body.appendChild(select);
              newContainer.append(select);
            }
            
          }
          
          if (value.technologies !==undefined, Array.isArray(value.technologies)) {
            const select = document.createElement("select")
            for (let i = 0; i < value.technologies.length; i++) {
  
              
              select.options[i] = new Option((value.technologies[i]));
  
              //document.body.appendChild(select);
              newContainer.append(select);
            }
            
             select.onclick = () => {
              console.log('ok')
            }
            
          }

          else {
            for (const [atributeName, atributeValue] of Object.entries(value)) {
              newElement.setAttribute(atributeName, atributeValue);
            }
          }
        }
        
        newContainer.append(newElement);
        

      }
      container.append(newContainer);
    }
    

    if (intern.buttons != undefined) {
      for (const button of intern.buttons) {
        const buttonElement = document.createElement("button");
        buttonElement.innerText = button.text;
        container.append(buttonElement);
      }
    }



    document.getElementById("demo").append(container);

    
   
  };
  fileread.readAsText(file_to_read);
  
});



