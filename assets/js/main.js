$(document).ready(function () {
  feather.replace();

  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });

  $('.banner-carousel').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          centerMode: true,
          centerPadding: "10px"
        }
      }
    ]
  });

  $('.flash-sale').slick({
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: "20px",
        initialSlide: 1
        }
      }
    ]
  });

  $('.brands-slider').slick({
    arrows: false,
    speed: 500,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          infinite: true,
          initialSlide: 1
        }
      }
    ]
  });

  $('.sec-product').slick({
    arrows: true,
    speed: 500,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        centerPadding: "20px",
        initialSlide: 1
        }
      }
    ]
  });

  $('.slider-forproduct').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-navproduct'
  });

  $('.slider-navproduct').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-forproduct',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

  $('#list').on("click", function(event){
    event.preventDefault();
    $('.mc-product .card-group').addClass('list-grid');
    $('#grid').removeClass('active');
    $('#list').addClass('active');
  });
  $('#grid').on("click", function(event){
    event.preventDefault();
    $('.mc-product .card-group').removeClass('list-grid');
    $('#grid').addClass('active');
    $('#list').removeClass('active');
  });
  $("#filterBtn").on('click', function(event) {
    document.getElementById("sidebar-widget").style.display="block";
    console.log('sadassa');
  });

  $("#sortingBtn").on('click', function(event) {
    document.getElementById("sorting-mobile").style.display="block";
  });

  $("#closeFilter").on('click', function(event) {
    document.getElementById("sidebar-widget").style.display="none";
  });

  $("#closeSorting").on('click', function(event) {
    document.getElementById("sorting-mobile").style.display="none";
  });

  $("#ex2").slider({});

});
