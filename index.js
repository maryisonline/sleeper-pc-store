function bannerConfig() {

    const firstBanner = document.getElementById("banner1");
    const secondBanner = document.getElementById("banner2");
    const fBannerInput = document.getElementById("input-banner1");
    const sBannerInput = document.getElementById("input-banner2");

    banners = [
        firstBanner,
        secondBanner
    ]

    inputs = [
        fBannerInput,
        sBannerInput
    ]

    function changeBanner(activeBanner, direction) {
        banners.forEach(banner => {
            if (banner === activeBanner) {
                banner.style.display = "block";
            } else {
                banner.style.display = "none";
            }
    });

    };

    changeBanner(firstBanner)

    inputs.forEach((input, index) => {
        input.addEventListener("change", function() {
            changeBanner(banners[index]);

        })
    });

}

bannerConfig()
