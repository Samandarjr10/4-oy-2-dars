var elContainer = document.querySelector("#container");

// for (var item in pokemons) {

    var newDiv = document.createElement("div");
    var newH1 = document.createElement("h1");
    var newDiv2 = document.createElement("div");
    var newDiv3 = document.createElement("div");
    var newDiv4 = document.createComment("div");
    var newButton = document.createComment("button");
    var newH2 = document.createComment("h2");
    var newUl = document.createComment("ul");
    // var newDiv4 = document.createComment("");
    var newForm = document.createComment("form");
    var newSelect = document.createComment("select");
    var newSelect2 = document.createComment("select");
    var newInput = document.createComment("input");
    var newInput2 = document.createComment("input");
    // var newDiv4 = document.createComment("");
    // newForm.textContent = "salom"
    
    newH1.classList.add("h2");
    newH1.classList.add("text-center");
    newH1.textContent = "Movies catalog";
    newDiv.classList.add("row");
    newDiv2.classList.add("col");
    newDiv3.classList.add("col-8");
    newDiv4.textContent = newForm;
    newForm.textContent = newInput;
    newForm.textContent = newInput2;
    // newInput.classList.add("form-control");
    // newInput.classList.add("mb-2");
    newInput.textContent = "hello";
    
    // newDiv4.appendChild(newForm);
    // newForm.appendChild(newInput);
    // newForm.appendChild(newInput2);
    newDiv2.appendChild(newDiv4);
    newDiv2.appendChild(newButton);
    newDiv2.appendChild(newH2);
    newDiv2.appendChild(newUl);
    newDiv.appendChild(newDiv2);
    newDiv.appendChild(newDiv3);
    elContainer.appendChild(newH1);
    elContainer.appendChild(newDiv);


    console.log(newDiv);
