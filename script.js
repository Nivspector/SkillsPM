function changeColor() {
    var elements = document.getElementsByClassName("understand");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "black";
    }

    elements = document.getElementsByClassName("notunderstand");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "black";
    }

    elements = document.getElementsByClassName("middel");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "black";
    }
  }

  function Color() {
    var elements = document.getElementsByClassName("understand");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "green";
    }

    elements = document.getElementsByClassName("notunderstand");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "red";
    }

    elements = document.getElementsByClassName("middel");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "orange";
    }
  }