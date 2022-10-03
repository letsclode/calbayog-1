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
<<<<<<< HEAD
              :src=activeNews.img
=======
              :src="activeNews.img"
>>>>>>> main
              @click="newsShowPopup"
            >
          </div>
          <div class="grid-img">
            <div class="nsp-imgs">
              <img
                :src="require('~/static/images/news2.png')"
                @click="newsShowPopup"
              >
            </div>
            <div class="nsp-imgs">
              <img
                :src="require('~/static/images/news3.png')"
                @click="newsShowPopup"
              >
            </div>
            <div class="nsp-imgs">
              <img
                :src="require('~/static/images/news4.png')"
                @click="newsShowPopup"
              >
              <p
                class="more-img-jobs"
                @click="newsShowPopup"
              >25+</p>
            </div>
          </div>
          <div class="nsp-articles">
            <div class="header">
<<<<<<< HEAD
              <h5 class="title">{{ activeNews.title }}</h5>
=======
              <h5 class="title">Graduation Cerimony</h5>
>>>>>>> main
              <p class="date">15 JULY, 2022</p>
            </div>
            <div class="desc">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
                v-for="(item,i) in newsArray"
                :key="i"
                :src="item.img"
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
                {{ activeNews.title }}
              </h3>
              <div class="date-info">
                <p>{{ activeNews.date }}</p>
              </div>
            </div>
            <div class="news-modal-content">
              <div class="news-description">
                <p>{{ activeNews.description }}
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
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { news, activeNews } from "@/assets/js/news.js";
export default {
  name: "IndexPage",
  layouts: "default",
  components: { VueSlickCarousel },
  data() {
    return {
      newsArray: news,
<<<<<<< HEAD
      activeNewsIndex: "",
=======
>>>>>>> main
      activeNews: activeNews,
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
<<<<<<< HEAD
      this.activeNewsIndex = val;
=======
      this.activeNews = val;
>>>>>>> main
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