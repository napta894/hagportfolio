var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)

// get the form elements defined in your form HTML above
window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        status.classList.add("success");
        status.innerHTML = "Thanks for submitting!";
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

// helper function for sending an AJAX request

$(window).load(() => {
    windowLoaded();
  });
  
  const windowLoaded = () => {
    $('.preloader')
      .delay(400)
      .fadeOut('slow');
  
    const popUpElem = $('.popUp');
    const mainElem = $('main');
    let popUpState = false;
    const closePopUpBtn = $('#cancelBtn');
  
    const projectElem = $('.project-item');
    //   Hiding the popUp element for now. and show it only when a 'project' is clicked.
    $(popUpElem).hide(1);
  
    mainElem.on('click', e => {
      if ($(e.target).closest('.project-item').length > 0) {
        // check if popUp is already 'up'
        if (popUpState === false) {
          // Now set popUp state to true so it can be taken the F out!
          popUpState = true;
          if ($(window).width() >= 768) {
            // blur the shiit outta the main element and make it unscrollable. ONLY ON TAB AND DESKTOPS
            $('.projects').css('filter', 'blur(7px)');
          } else {
            // if been viewed on mobile just take away all element except popUp.
            $('.projects').css('display', 'none');
            $('footer').css('display', 'none');
            $('.intro').css('display', 'none');
            $('.contact').css('display', 'none');
          }
  
          // now the scroll is only disabled for smaller-screen size devices
          if ($(window).width() > 768) {
            $('body').css('overflow', 'hidden');
          }
  
          // now display the popUp like it's a grammy!
          $(popUpElem).show(400);
  
          //   below is the data of the project clicked.
          const projectHeading = $(e.target)
            .closest('.project-figure')
            .children('figcaption')
            .children('h2')
            .text();
  
          const projectDesc = $(e.target)
            .closest('.project-figure')
            .children('figcaption')
            .children('.popUpdesc')
            .text();
  
          const projectImg = $(e.target)
            .closest('.project-figure')
            .children('img')
            .attr('src');
  
          const projetGithubRepo = $(e.target)
            .closest('.project-figure')
            .children('figcaption')
            .children('#githubRepo')
            .attr('href');
  
          const projectLivePreview = $(e.target)
            .closest('.project-figure')
            .children('figcaption')
            .children('#livePreview')
            .attr('href');
  
          //  END OF data of the project clicked.
          // setting the PARAGRAPH of the popUp to match that of the project clicked.
          $(popUpElem)
            .children('#popUpText')
            .children('p')
            .text(`${projectDesc}`);
  
          // setting the HEADING of the popUp to match that of the project clicked.
          $(popUpElem)
            .children('#popUpText')
            .children('h1')
            .text(`${projectHeading}`);
  
          // Setting the image here.
          $(popUpElem)
            .children('.popUpImg')
            .css('backgroundImage', `url(${projectImg})`);
  
          // setting up the github linking here
          $(popUpElem)
            .children('#popUpText')
            .children('div')
            .children('#githubLink')
            .attr('href', `${projetGithubRepo}`);
  
          // setting the preview link here.
          $(popUpElem)
            .children('#popUpText')
            .children('div')
            .children('#previewLink')
            .attr('href', `${projectLivePreview}`);
        }
      }
    });
  
    $(closePopUpBtn).on('click', () => {
      if (popUpState === true) {
        $(popUpElem).fadeOut(500);
  
        //   Unblur the main element and take off overflow: hidden
      }
      if ($(window).width() >= 768) {
        // blur the shiit outta the main element and make it unscrollable. ONLY ON TAB AND DESKTOPS
        $('.projects').css('filter', 'blur(0px)');
        $('body').css('overflow', 'scroll');
      } else {
        // if been viewed on mobile just take away all element except popUp.
        $('.projects').css('display', 'block');
        $('footer').css('display', 'block');
        $('.intro').css('display', 'block');
        $('.contact').css('display', 'block');
      }
      // set popUpState back to false so it could work accoridingly.
      popUpState = false;
    });
  };
