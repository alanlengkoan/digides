const CACHE_NAME = "digitaldesa-v6";
var urlsToCache = [
"./",
"./manifest.json",
"./admin/config.yml",
"./admin/index.html",
"./css/animate.css",
"./css/animate.min.css",
"./css/artikel.css",
"./css/bootstrap.css",
"./css/custom.css",
"./css/flexslider.css",
"./css/icomoon.css",
"./css/magnific-popup.css",
"./css/normalize.min.css",
"./css/owl.carousel.min.css",
"./css/owl.theme.default.min.css",
"./css/popup.css",
"./css/style.css",
"./css/stylecost.css",
"./css/css/animate.min.css",
"./css/css/normalize.min.css",
"./js/bootstrap.min.js",
"./js/google_map.js",
"./js/jquery.countTo.js",
"./js/jquery.easing.1.3.js",
"./js/jquery.magnific-popup.min.js",
"./js/jquery.mb.YTPlayer.min.js",
"./js/jquery.min.js",
"./js/jquery.stellar.min.js",
"./js/jquery.waypoints.min.js",
"./js/magnific-popup-options.js",
"./js/main.js",
"./js/modernizr-2.6.2.min.js",
"./js/owl.carousel.min.js",
"./js/paralaks.js",
"./js/respond.min.js",
"./js/script.js",
"./js/js/animatedModal.js",
"./js/js/animatedModal.min.js",
"./js/js/jquery.min.js",
"./js/js/main.js",
"./js/js/plugin.js",
"./images/23.png",
"./images/Administrasi.png",
"./images/Asset5.png",
"./images/closebt.svg",
"./images/digides-aset.jpg",
"./images/digides-dapodes.jpg",
"./images/digides-mobile.jpg",
"./images/digides-surat.jpg",
"./images/digides.ico",
"./images/Digides.png",
"./images/Digides2.png",
"./images/favicon-32x32.png",
"./images/favicon-96x96.png",
"./images/favicon.png",
"./images/isi.svg",
"./images/Layanan.png",
"./images/loader.gif",
"./images/loc.png",
"./images/mobile-3.png",
"./images/no-pic.png",
"./images/Picture1.png",
"./images/walpaper.jpg",
"./modal/css/style.css",
"./modal/css/reset.css",
"./modal/img/cd-icon-close.svg",
"./modal/js/velocity.min.js",
"./modal/js/modernizr.js",
"./modal/js/main.js",
"./modal/js/jquery-2.1.1.js"
];

self.addEventListener("install",
	function(event) {
		console.log("ServiceWorker: Menginstall..");

		event.waitUntil(
			caches.open(CACHE_NAME).then(function(cache) {
				console.log("ServiceWorker: Membuka cache..");
				return cache.addAll(urlsToCache);
			})
		);
	});	

self.addEventListener("fetch", function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			console.log("ServiceWorker: Menarik data: ", event.request.url);

			if (response) {
				console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
				return response;
			}

			console.log(
				"ServiceWorker: Memuat aset dari server: ",
				event.request.url
				);
			return fetch(event.request);
		})
	);
});


