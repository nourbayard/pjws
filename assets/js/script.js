var likes = document.querySelectorAll(".like"),
  orientation = document.querySelectorAll("button.orientation"),
  article = document.querySelector("main article"),
  main = document.querySelector("main"),
  later = document.querySelectorAll(".later"),
  download = document.querySelectorAll(".nijntje"),
  login = document.querySelectorAll(".aanmaken button, fieldset > button"),
  voegtoe = document.querySelectorAll(".voegtoe")


// LIKE BUTTON

if (likes[0]) {
  for (var i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", function() {
      var that = this,
        span = that.querySelector("span"),
        num = parseInt(span.innerHTML);

      num += 1;
      span.innerHTML = num;
      that.querySelector("svg").classList.add("big");
      setTimeout(function() {
        that.querySelector("svg").classList.remove("big");
      }, 300);
    });
  }
}

// LIKE BUTTON END

// ACCOUNT AANMAKEN

if (document.querySelectorAll("main article div.aanmaken")[0]) {
  for (var i = 0; i < login.length; i++) {
    login[i].addEventListener("click", function(event) {
      event.preventDefault();
      var allForm = document.querySelectorAll("main article > form"),
        aanmaken = document.querySelectorAll(".aanmaken")[0];
      aanmaken.style.display = "none";
      allForm[0].style.display = "none";
      allForm[1].style.display = "none";
      document.querySelectorAll("main article > h1")[0].style.display = "none";
      this.innerHTML == "Annuleren" ? aanmaken.style.display = "block" : allForm[1].style.display = "block";
      this.innerHTML == "Annuleren" ? allForm[0].style.display = "block" : "";
      this.innerHTML == "Annuleren" ? document.querySelectorAll("main article > h1")[0].style.display = "block" : "";
    });
  }
}

// ACCOUNT AANMAKEN END



// LAYOUT AANPASSEN

if (document.querySelectorAll("button.orientation")[0]) {
  document.querySelectorAll("button.orientation")[0].addEventListener("click", function() {
    main.classList.toggle("full");
  });
}

// LAYOUT AANPASSEN END

// LATER LEZEN BUTTON

if (later[0]) {
  for (var i = 0; i < later.length; i++) {
    later[i].addEventListener("click", function() {
      this.classList.toggle("active");
    });
  }

  // LATER LEZEN BUTTON END



  // DOWNLOAD BUTTON

  for (var i = 0; i < download.length; i++) {
    download[i].addEventListener("click", function() {
      this.classList.toggle("active");
      this.addEventListener("webkitAnimationEnd", function() {
        afterDownload(this)
      })
      this.addEventListener("AnimationEnd", function() {
        afterDownload(this);
      })
    })
  }

  function afterDownload(that) {
    var p = that.querySelector("p")
    p.innerHTML = "Verhaal aan het downloaden...";
    that.classList.add("downloading")
    setTimeout(function() {
      p.innerHTML = "Open PDF";
      that.classList.add("done");
    }, 2000);
  }
}

// DOWNLOAD BUTTON END

//Functie om het aantal woorden in het invoerveld/textarea te tellen
var el = document.getElementById('recensie-tekstvak');

function telAantalTekens(e) {
  var ingevoerdeTekst, tekensResterend, teller;
  ingevoerdeTekst = el.value;
  teller = ingevoerdeTekst.length;
  tekensResterend = document.querySelector('.recensie-beschrijving');
  tekensResterend.textContent = "Beschrijf je leeservaring (" + teller + "/500 tekens gebruikt)";
}

el.addEventListener('keyup', telAantalTekens, false);

//Functie om het versturen van een beoordeling te simuleren
const nieuweReview = document.querySelector('.review-hidden');
var verstuurReview = document.querySelector('.send');
verstuurReview.addEventListener('click', function() {
  nieuweReview.classList.remove('form-filter-inactive');
  nieuweReview.classList.add('review-visible');
  event.preventDefault();
})