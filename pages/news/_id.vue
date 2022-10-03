<template>
  <div>
    <div class="banner-wrapper small-banner">
      <!-- <img :src="require('~/static/images/Calbayog.png')"  alt=""> -->
      <VueSlickCarousel
        v-bind="sliderHeader"
        class="officials-slider"
      >
        <img
          :src="item.img"
          alt=""
          v-for="(item,i) in headerCarousel"
          :key="i"
        >
      </VueSlickCarousel>
    </div>
    <div class="news-single-wrapper">
      <div class="container">
        <div class="title-search-wrapper">
          <h3>Activities Post</h3>
          <!-- <form action="#">
                      <div class="search-wrapper">
                          <button type="submit">
                              <img :src="require('~/static/images/Icon-search.png')">
                          </button>
                          <input type="text" class="search-input">
                      </div>
                  </form> -->
        </div>
        <div class="nsp-content">
          <div class="full-img">
            <img
              :src="newsArray[selectedNewsIndex].images[0]"
              @click="newsShowPopup"
            >
          </div>
          <div class="grid-img">
            <div
              class="nsp-imgs"
              v-for="(item,i) in newsArray[selectedNewsIndex].images"
              :key="i"
            >
              <img
                :src="item"
                @click="newsShowPopup"
              >
            </div>

          </div>
          <div class="nsp-articles">
            <div class="header">
              <h5 class="title">{{ newsArray[selectedNewsIndex].title }}</h5>
              <p class="date">{{ newsArray[selectedNewsIndex].date }}</p>
            </div>
            <div class="desc">
              <p>{{ newsArray[selectedNewsIndex].description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <modal
        name="newsModal"
        width="100%"
        height="100%"
      >
        <div class="newspopup">
          <div class="images-slider">
            <v-carousel class="news-slider-img">
              <v-carousel-item
                v-for="(item,i) in newsArray[selectedNewsIndex].images"
                :key="i"
                :src="item"
              ></v-carousel-item>
            </v-carousel>
          </div>
          <div class="right-content">
            <div class="close">
              <v-icon
                @click="closeNewsModal()"
                class="x-close"
              >mdi-close</v-icon>
            </div>
            <div class="title-close-wrapper">
              <h3 class="title">
                {{ newsArray[selectedNewsIndex].title }}
              </h3>
              <div class="date-info">
                <p>{{ newsArray[selectedNewsIndex].date }}</p>
              </div>
            </div>
            <div class="news-modal-content">
              <div class="news-description">
                <p>{{ newsArray[selectedNewsIndex].description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { news, selectedNewsIndex } from "@/assets/js/news.js";
export default {
  name: "IndexPage",
  layouts: "default",
  components: { VueSlickCarousel },
  data() {
    return {
      selectedNewsIndex: selectedNewsIndex,
      newsArray: news,
      headerCarousel: [
        { title: "Cathedral", img: "/images/Calbayog.png" },
        { title: "Falls", img: "/images/calbcover.png" },
        { title: "Falls", img: "/images/falls.png" },
      ],
      sliderHeader: {
        dots: false,
        dotsClass: "slick-dots header-dots",
        infinite: true,
        slidesToShow: 1,
        slidesPerRow: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        fade: true,
        adaptiveHeight: false,
      },
    };
  },
  mounted() {},
  methods: {
    newsShowPopup(val) {
      this.activeNews = val;
      this.$modal.show("newsModal");
    },
    closeNewsModal() {
      this.$modal.hide("newsModal");
    },
    readMoreWelcome() {
      this.showWelcomeMessage = !this.showWelcomeMessage;
    },
  },
};
</script>