// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

// 1) Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const galleryContainerItems = document.querySelector('.gallery');
const createGalleryItems = galleryItemsCardsMarkup(galleryItems);
galleryContainerItems.insertAdjacentHTML('afterbegin', createGalleryItems);

function galleryItemsCardsMarkup(galleryItems) {
	return galleryItems
		.map(({ description, original, preview}) => {
			return `
			<a class="gallery__item" href="${original}">
			<img class="gallery__image" 
			src="${preview}" 
			alt="${description}" />
		</a>
		`;
	})
		.join('');
	}

	// 2) Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
const lightbox = new SimpleLightbox('.gallery a', {
	captionsData:'alt',
	captionPosition:'bottom',
	captionDelay:'250'
});