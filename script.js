$(document).ready(function () {
  let infoOpen = false;
  let menuOpen = false;
  let currentHero = null;
  let heroContent = [
    {
      title: "HERO—1",
      content: `
          <div class="info-content"> 
            <div class="info-content--lines">  
                <div class="info-content-line--header"></div>
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
            </div>
            
            <img src="../assets/images/contentImages/image_four.png"">
            <img src="../assets/images/contentImages/image_five.png"">
  
            <div class="info-content--lines">  
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
            </div>
  
            <img src="../assets/images/contentImages/image_six.png"">
            <img src="../assets/images/contentImages/image_eight.png"">
            <img src="../assets/images/contentImages/image_nine.png"">
  
            <div class="info-content--lines">  
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
            </div>
  
            <img src="../assets/images/contentImages/image_ten.png"">
            <img src="../assets/images/contentImages/image_eleven.png"">
            <img src="../assets/images/contentImages/image_twelve.png"">
            <img src="../assets/images/contentImages/image_thirteen.png"">
  
            <div class="info-content--lines">  
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
            </div>
  
            <img src="../assets/images/contentImages/image_fourteen.png"">
            <img src="../assets/images/contentImages/image_fifteen.png"">
            <img src="../assets/images/contentImages/image_sixteen.png"">
            <img src="../assets/images/contentImages/image_seventeen.png"">
  
            <div class="info-content--lines">  
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
                <div class="info-content-sub-header"></div>
            </div>
  
            <img src="../assets/images/contentImages/image_eighteen.png"">
            <img src="../assets/images/contentImages/image_nineteen.png"">
  
            <div class="info-footer">
                  <div class="info-footer--line">
                      <div class="info-content-line--header"></div>
                      <div class="info-content-sub-header"></div>
                  </div>
                  <div class="info-footer--line">
                      <div class="info-content-line--header"></div>
                      <div class="info-content-sub-header"></div>
                  </div>
            </div>
  
          </div>
        `,
    },
  ];

  $(".hero").each(function () {
    $(this).append(
      `<div class="hero-content"> 
              <div class="hero-content--header-line"> </div>
              <div class="hero-content--sub-header-line"> </div>
          </div>`
    );
  });

  $(".all-projects--project").each(function () {
    $(this).append(
      `<div class="all-projects--project--container"> 
              <div class="all-projects--project--image"> </div>
  
              <div class="all-projects--project--description">
                  <div class="all-projects--header-line"> </div>
                  <div class="all-projects--sub-header-line"> </div>
                  <div class="all-projects--sub-header-line"> </div>
              </div>
       
          </div>`
    );
  });

  $(".hero").click(function (e) {
    e.preventDefault();
    if (!infoOpen) {
      currentHero = $(this);
      if (currentHero) {
        $(currentHero).css({
          position: "fixed",
          top: "0",
          left: "0",
          height: "100vh",
          transform: "translateX(-500px)",
          zIndex: "10",
          transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
        });

        $("body").css({
          overflow: "hidden",
        });
        $(".info").css({
          overflow: "scroll",
          transform: "translateX(0%)",
          transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
        });
        $(".hamburger-menu .hamburger-menu--line").css({
          backgroundColor: "black",
          transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
        });
      }
      infoOpen = true;
    } else {
      $(currentHero).css({
        position: "relative",
        top: "0",
        left: "0",
        transform: "translateX(0)",
        zIndex: "1",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
      });

      $(".info").css({
        overflow: "hidden",
        transform: "translateX(100%)",
        zIndex: "100",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
      });

      $("body").css({
        overflow: "scroll",
      });

      infoOpen = false;
      $(".hamburger-menu .hamburger-menu--line").css({
        backgroundColor: "white",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
      });
    }
  });

  $(".hero").click(function () {
    const heroIndex = $(this).index(".hero");
    const content = heroContent[heroIndex];
    if (content && content.content) {
      $(".info").html(content.content).css({
        display: "block",
        visibility: "visible",
        opacity: "1",
      });
    } else {
      console.error("No content found for the current hero");
    }
  });

  // Handle menu click event
  $(".hamburger-menu").click(function (e) {
    e.preventDefault();
    if (menuOpen) {
      $(".menu").css({
        overflow: "none",
        zIndex: "-1",
        opacity: "0",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
      });

      $(".hmb-first--line").css({
        backgroundColor: "white",
        transform: "rotate(0) translate(0, 0)",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
      });

      $(".hmb-second--line").css({
        backgroundColor: "white",
        transform: "rotate(0)",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
        mixBlendMode: "difference",
      });

      if (infoOpen) {
        $(".hamburger-menu .hamburger-menu--line").css({
          backgroundColor: "black",
          transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
        });
      } else {
        $(".hamburger-menu .hamburger-menu--line").css({
          backgroundColor: "white",
          transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
        });
      }

      menuOpen = false;
      return;
    }
    $(".menu").css({
      overflow: "scroll",
      zIndex: "990",
      opacity: "1",
      transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
    });

    // the hamburger menu icon becomes a cross
    $(".hmb-first--line").css({
      backgroundColor: "white",
      mixBlendMode: "normal",
      transform: "rotate(45deg) translate(5px, 5px)",
      transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
    });

    $(".hmb-second--line").css({
      backgroundColor: "white",
      transform: "rotate(-45deg)",
      transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
      mixBlendMode: "normal",
    });

    menuOpen = true;
  });

  if (infoOpen && !menuOpen) {
    $(".hamburger-menu .hamburger-menu--line").css({
      backgroundColor: "black",
      transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
    });
  }

  // after the top of the navbar touches the bottom of the hero-container .logo and ..hamburger-menu .hamburger-menu--line get invert filter
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(".hero-container").height() - 50) {
      $(".logo").css({
        filter: "invert(1)",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
      });

      $(".hamburger-menu .hamburger-menu--line").css({
        backgroundColor: "black",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
      });
    } else {
      $(".logo").css({
        filter: "invert(0)",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
      });

      $(".hamburger-menu .hamburger-menu--line").css({
        backgroundColor: "white",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
      });
    }
  });
});
