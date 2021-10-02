class Gallery {
	constructor(images, container) {
		this.images = images;
		this.container = container;

		this.galleryIndex = 0;
	}

	next = () => {
		if (this.galleryIndex === this.images.length - 1) {
			this.galleryIndex = 0;
		} else {
			this.galleryIndex++;
		}
		this.updateImage(this.images[this.galleryIndex]);
	};

	prev = () => {
		this.galleryIndex--;
		if (this.galleryIndex < 0) {
			this.galleryIndex = this.images.length - 1;
		}
		this.updateImage(this.images[this.galleryIndex]);
	};

	updateImage(image) {
		this.container
			.find(
				".gallery-container .gallery__image img, .gallery-container .gallery__backdrop img"
			)
			.attr("src", image);
	}

	render() {
		this.container.empty();
		this.container.append(`<div class="gallery-container">
        <div class="gallery__image">
			<img src="" alt="" />
        </div>
        <div class="gallery__backdrop">
			<img src="" alt="" />
        </div>
        <div class="gallery__actions">
			<button id="prev"><</button>
			<button id="next">></button>
        </div>
		</div>`);

		this.updateImage(this.images[this.galleryIndex]);

		this.container.on("click", "#prev", this.prev);
		this.container.on("click", "#next", this.next);
	}
}

const gallery = new Gallery(
	[
		"images/atheco1.jpeg",
		"images/atheco2.jpeg",
		"images/atheco3.jpeg",
		"images/atheco4.jpeg",
	],
	$("#gallery")
);

gallery.render();
