

function navbar() {
  let bars = document.querySelector(".navbar");
  let submenu = document.querySelector("span.fas");
   
  bars.addEventListener('click', function() {
     submenu.classList.toggle('cancel'); 
  });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "#a19d9d";
    document.getElementById("submenu").style.backgroundColor = "#a19d9d";
    document.getElementById("navbar").style.transition = "background-color 0.4s ease-in-out";    
  } 
  else {
    document.getElementById("navbar").style.backgroundColor = "#FAFAFA";
    document.getElementById("navbar").style.transition = "background-color 0.4s ease-in-out";
  }
}

function form() { 
  window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted

    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
}

function searchIt() {
  const searchBox = document.querySelector(".search-box");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");
  const searchInput = document.querySelector("input");
  const searchData = document.querySelector(".search-data");
  searchBtn.onclick =()=>{
    searchBox.classList.add("active");
    searchBtn.classList.add("active");
    searchInput.classList.add("active");
    cancelBtn.classList.add("active");
    searchInput.focus();
    if(searchInput.value != ""){
      var values = searchInput.value;
      searchData.classList.remove("active");
      searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
    }else{
      searchData.textContent = "";
    }
  }
  cancelBtn.onclick =()=>{
    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    searchInput.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchData.classList.toggle("active");
    searchInput.value = "";
  }
}