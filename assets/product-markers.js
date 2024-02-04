(function () {
	const productTags = () => {
		const pullsBtns = document.querySelectorAll(".pulsating");
		pullsBtns[0].parentElement.classList.add("active-pulse");

		const products = document.querySelectorAll(".collection-markers-card");
		products[0].classList.add("active");

		pullsBtns.forEach((elem) => {
			elem.addEventListener("click", function (e) {
				document.querySelectorAll(".pulsating-circle").forEach((remEl) => {
					remEl.classList.remove("active-pulse");
				});
				let clickedBtnData = e.target.getAttribute("data-index");
				let activeMarker = e.target.parentElement;

				activeMarker.classList.add("active-pulse");
				products.forEach((e) => {
					const clickedDataIndex = e.getAttribute("data-index");
					e.classList.remove("active");

					if (clickedBtnData == clickedDataIndex) {
						e.classList.add("active");
					}
				});
			});
		});
	};

	document.addEventListener("shopify:section:load", function () {
		productTags();
	});

	productTags();
})();

//button-with-underline
if (window.screen.width > 990) {
	let attachedMarkers = false;

	let thisSection = document.querySelector(".product-markers-section");

	let imageContainerMarkers = thisSection.querySelector(
		".button--with-underline--container"
	);

	const followMouseMarkers = (event) => {
		if (imageContainerMarkers) {
			imageContainerMarkers.style.left = event.pageX + "px";
			imageContainerMarkers.style.top = event.pageY + 30 + "px";
		}
	};

	function showTextMarkers() {
		if (!attachedMarkers && imageContainerMarkers) {
			attachedMarkers = true;
			imageContainerMarkers.style.display = "block";
			document.addEventListener("pointermove", followMouseMarkers);
		}
	}

	function hideTextMarkers() {
		if (imageContainerMarkers) {
			attachedMarkers = false;
			imageContainerMarkers.style.display = "";
			document.removeEventListener("pointermove", followMouseMarkers);
		}
	}
}
