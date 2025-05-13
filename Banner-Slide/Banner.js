/*
 * banner.js - Responsive Banner Slider Application
 * Author: Bocaletto Luca
 * License: GPL v3
 * Description: This script implements a responsive banner slider that automatically cycles through banner slides.
 *              It also provides manual navigation using previous/next buttons and dot indicators.
 */

class BannerSlider {
  /**
   * Constructor for the BannerSlider.
   * @param {string} containerId - The id of the slider container element.
   * @param {number} interval - The auto-slide interval in milliseconds.
   */
  constructor(containerId, interval = 5000) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      throw new Error(`Container with id "${containerId}" not found.`);
    }

    // Get all banner slides, navigation buttons, and dot indicators
    this.slides = this.container.getElementsByClassName('banner-slide');
    this.prevButton = this.container.querySelector('.prev');
    this.nextButton = this.container.querySelector('.next');
    this.dots = this.container.getElementsByClassName('dot');
    this.totalSlides = this.slides.length;
    this.currentIndex = 0;
    this.interval = interval;
    this.autoSlideInterval = null;

    // Bind event listeners to controls
    this.bindEvents();
  }

  /**
   * Binds event listeners to navigation buttons and dot indicators.
   */
  bindEvents() {
    // Previous button click
    if (this.prevButton) {
      this.prevButton.addEventListener('click', () => {
        this.showPrevious();
        this.resetAutoSlide();
      });
    }
    // Next button click
    if (this.nextButton) {
      this.nextButton.addEventListener('click', () => {
        this.showNext();
        this.resetAutoSlide();
      });
    }
    // Dot click events
    for (let dot of this.dots) {
      dot.addEventListener('click', (event) => {
        const index = parseInt(event.target.getAttribute('data-index'));
        this.showSlide(index);
        this.resetAutoSlide();
      });
    }
  }

  /**
   * Starts the auto-slide functionality.
   */
  start() {
    this.showSlide(this.currentIndex);
    this.autoSlideInterval = setInterval(() => this.showNext(), this.interval);
  }

  /**
   * Resets the auto-slide timer.
   */
  resetAutoSlide() {
    clearInterval(this.autoSlideInterval);
    this.start();
  }

  /**
   * Displays the next slide.
   */
  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.showSlide(this.currentIndex);
  }

  /**
   * Displays the previous slide.
   */
  showPrevious() {
    this.currentIndex =
      (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.showSlide(this.currentIndex);
  }

  /**
   * Shows the slide at the provided index and updates dot indicators.
   * @param {number} index - The index of the slide to display.
   */
  showSlide(index) {
    // Hide all slides
    for (let i = 0; i < this.totalSlides; i++) {
      this.slides[i].classList.remove('active');
      this.dots[i].classList.remove('active');
    }
    // Show the chosen slide
    this.slides[index].classList.add('active');
    this.dots[index].classList.add('active');
    this.currentIndex = index;
  }
}

// When DOM content is loaded, create and start the BannerSlider.
document.addEventListener('DOMContentLoaded', () => {
  try {
    const slider = new BannerSlider('bannerSlider', 5000); // 5000ms interval
    slider.start();
  } catch (error) {
    console.error("Error initializing BannerSlider:", error);
  }
});
