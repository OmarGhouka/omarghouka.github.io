$(document).ready(function(){
    var typed2 = new Typed('#typed2', {
        stringsElement: '#typed-strings2',
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 0,
        startDelay: 500,
        loop: true,
    });

    let lastScroll = 0;
    let heroHeight = $(".hero-section").first().height();
    $(window).scroll(function(e){
        let thisScroll = $(this).scrollTop();
        if ((thisScroll < lastScroll && thisScroll > (heroHeight / 2)))
            $("nav").first().addClass("nav-fixed").removeClass("nav-hide");
        else if (thisScroll < 80)
            $("nav").first().removeClass("nav-fixed").removeClass("nav-hide");
        else
            $("nav").first().removeClass("nav-fixed").addClass("nav-hide");

        lastScroll = thisScroll;
    });
    if (!navigator.userAgentData.mobile)
        animateOnHover();

    $("#offcanvasNavbar").on("hidden.bs.offcanvas", function(){
        $("nav").removeClass("open-canvas");
    })
    $("#offcanvasNavbar").on("show.bs.offcanvas", function(){
        $("nav").addClass("open-canvas");
    })
});




function copyEmail(i) {
    navigator.clipboard.writeText("omarghouka@gmail.com");
    var contactBtn = document.getElementById("contact-btn" + i);
    contactBtn.innerText = "E-Mail Copied";
    if (i == 2)
        contactBtn.classList = "custom-btn2 custom-btn-active2";
    else {
        contactBtn.classList = "custom-btn custom-btn-active";
    }
    
}

function animateOnHover(){
    const maxShadowDistance = 20;
    const $body = $(".hero-section").first();

    function mouseMove(event, ele) {
        const pageWidth = $body.width();
        const pageHeight = $body.height();
        const x = (event.clientX / pageWidth) * 2 - 1;
        const y = (event.clientY / pageHeight) * 2 - 1;
        const xShadow = -x * maxShadowDistance;
        const yShadow = -y * maxShadowDistance;
        ele.find(".move-element").attr(
            "style",
            ("top:" + Math.ceil(yShadow) + "px;left:" + Math.ceil(xShadow) + "px;")
        )

    }
    $(".move-element-parent").each(function(){
        $(this).on("mousemove", function(event){ mouseMove(event, $(this))});
    })
}
