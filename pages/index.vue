<template>
  <div>
    <Banners />
    <div class="section2">
      <div class="welcome-text-section">
        <div class="container wt-container">
          <div class="wt-wrapper">
            <div class="img-holder">
              <img
                :src="require('~/static/images/Mayor12 – 10.jpg')"
                alt=""
              >
            </div>
            <div class="wt-content">
              <div class="wtc-inner">
                <h4>Welcome to Calbayog City</h4>
                <p>
                  Welcome to the official website of the City Government of Calbayog!
                </p>
                <br>
                <p>
                  Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                </p>
                <div
                  class="hid-message-welcome"
                  :class="{animate : showWelcomeMessage}"
                >
                  <p>
                    Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                  </p>
                  <p>
                    Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                  </p>
                </div>
              </div>
              <button
                class="read-more"
                @click="readMoreWelcome"
                :class="{animate : showWelcomeMessage}"
              >READ MORE</button>
            </div>
          </div>
          <div class="mobile-wt-wrapper">
            <div class="img-holder">
              <img
                :src="require('~/static/images/Mayor12 – 10.jpg')"
                alt=""
              >
            </div>
            <div class="wtc-inner">
              <h4>Welcome to Calbayog City</h4>
              <p>
                Welcome to the official website of the City Government of Calbayog!
              </p>
              <br>
              <p>
                Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
              </p>
              <div
                class="hid-message-welcome"
                :class="{animate : showWelcomeMessage}"
              >
                <p>
                  Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                </p>
                <p>
                  Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                </p>
              </div>
            </div>
            <button
              class="read-more"
              @click="readMoreWelcome"
              :class="{animate : showWelcomeMessage}"
            >READ MORE</button>
          </div>
        </div>
      </div>
      <div class="city-news-section">
        <div class="container">
          <h4 class="title">
            Be Updated With City News
          </h4>
          <div class="news-grid">
            <template>
              <v-card
                :class="activeNews == index ? 'active' : ''"
                @click="newsShowPopup(index)"
                class="news-card-wrappper"
                v-for="(news, index) in newsArray"
                :key="index"
              >
                <a href="news/_id">
                  <v-img
                    height="210"
                    class="news-card-img"
                    :src="news.images[0]"
                  ></v-img>
                  <v-card-text class="news-content-wrapper">
                    <p class="news-date">{{news.date}}</p>
                    <h5 class="news-title">{{news.title}}</h5>
                    <p class="news-desc">{{news.description}}</p>
                    <a
                      href="news/_id"
                      class="readmore-a"
                    >
                      <Nuxtlink
                        text
                        class="readmore-btn"
                      >
                        Read More
                      </Nuxtlink>
                    </a>
                  </v-card-text>
                </a>
              </v-card>
            </template>

          </div>
          <VueSlickCarousel
            v-bind="newsSettings"
            class="mobile-news"
          >
            <v-card
              :class=" activeNews == index ? 'active' : ''"
              @click="newsShowPopup(index)"
              class="news-card-wrappper"
              v-for="(news, index) in newsArray"
              :key="index"
            >
              <a href="news/_id">
                <v-img
                  height="auto"
                  class="news-card-img"
                  :src="news.images[0]"
                ></v-img>
                <v-card-text class="news-content-wrapper">
                  <p class="news-date">{{news.date}}</p>
                  <h5 class="news-title">{{news.title}}</h5>
                  <p class="news-desc">{{news.description}}</p>
                  <a
                    href="news/_id"
                    class="readmore-a"
                  >
                    <Nuxtlink
                      text
                      class="readmore-btn-mobile"
                    >
                      Read More
                    </Nuxtlink>
                  </a>
                </v-card-text>
              </a>
            </v-card>
          </VueSlickCarousel>
          <div class="news-slider-wrapper">
            <div class="viewall-news">
              <NuxtLink
                to="news"
                class="news-seemore"
                outlined
              >
                See More
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="events-section">
      <div class="overlay">
        <div class="container">
          <h4 class="title">Calendar of Activities</h4>
          <p class="section-desc">Our aim to provide transparency and accountability
            to our constituents and to others who take interest in our beloved City
            is further extended in this website. As Calbayog consistently delivers good
            governance and is an emporium of natural attractions, we are indeed dubbed as a
            City “Where Good Things Happen”.
          </p>
          <div class="events-gallery">
            <div
              class="img-gallery"
              v-for="(item, index) in eventGallery"
              :key="index"
            >
              <img
                :src="item.img"
                :alt="item.title"
              >
              <div class="events-content">
                <p>
                  {{item.title}}
                </p>
                <a href="events/_id">
                  <v-btn
                    class="ma-2 events-btn"
                    outlined
                  >
                    View Event
                  </v-btn>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="plans-program-section">
      <div class="container">
        <h4 class="title">
          Plans and Programs
        </h4>
        <div class="agencies-wrapper">
          <div
            class="agency"
            v-for="(agency, index) in agencyArray"
            :key="index"
            :id="agency.name"
          >
            <div class="front-desc">
              <!-- <span class="icon">
                <img :src="agency.icon">
              </span> -->
              <p class="dep-name">{{agency.title}}</p>
            </div>
            <div class="back-desc">
              <!-- <p class="dep-name">{{agency.title}}</p> -->
              <a
                href="departments/_id#manadte-scroll"
                class="desc"
              >{{agency.mandate}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="welcome-statement-section">
      <div class="container">
        <div class="logo-wrapper">
          <a
            href="https://www.dbm.gov.ph/index.php/about-us/philippine-transparency-seal"
            target="_blank"
          >
            <img
              src="images/Transparency_seal-01.png"
              alt="Transparency seal Seal"
            >
          </a>
        </div>
        <v-divider
          vertical
          class="wss-hr"
        ></v-divider>
        <div class="statement">
          <p>Welcome to the official website of the City Government of Calbayog!</p><br>
          <p>Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.</p>
        </div>
      </div>
    </div>
    <div class="maps-section">
      <img src="images/snazzy-image.png">
    </div>
    <div class="services-section">
      <div class="container services-con">
        <div class="services-offer">
          <h4 class="title">
            Services
          </h4>
          <p class="section-desc">Our aim to provide transparency and accountability
            to our constituents and to others who take interest in our beloved City
            is further extended in this website.
          </p>
          <div class="services-wrapper">
            <a
              :href="service.url"
              class="service"
              v-for="(service, index) in servicesArray"
              :key="index"
              target="_blank"
            >
              <span class="icon">
                <img :src="service.icon">
              </span>
              <p class="dep-name">{{service.title}}</p>
            </a>
          </div>
        </div>
        <div class="helplines-wrapper">
          <h4 class="title">
            Helplines & Emergency Services
          </h4>
          <template>
            <div class="collapsible-helplines">
              <v-expansion-panels class="mb-6 hp-item">
                <v-expansion-panel
                  v-for="(item,i) in helpLines"
                  :key="i"
                >
                  <v-expansion-panel-header
                    expand-icon="mdi-menu-down"
                    class="hp-header"
                  >
                    {{item.name}}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="hp-details">{{item.hotline}}</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="official-section">
      <div class="container">
        <h4 class="title">
          Your Calbayog City Public Servants
        </h4>
        <div class="officials-wrapper">
          <VueSlickCarousel
            v-bind="sliderSettings"
            class="officials-slider"
          >
            <div
              class="official"
              v-for="(official, index) in officials"
              :key="index"
            >
              <v-avatar
                class="profile"
                height="117"
                width="117"
                rounded="true"
              >
                <img :src="official.profile">
              </v-avatar>
              <div class="name-and-position">
                <p>{{official.name}}</p>
                <v-divider class="line"></v-divider>
                <span>{{official.position}}</span>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Banners from "../components/Banners.vue";
import { news, setSelected } from "@/assets/js/news.js";
import { events } from "@/assets/js/events.js";
import { departments } from "@/assets/js/departments.js";
import { services } from "@/assets/js/services.js";
import { helplines } from "@/assets/js/helplines.js";
import { officials } from "@/assets/js/officials.js";
export default {
  name: "IndexPage",
  layouts: "default",
  components: { VueSlickCarousel, Banners },

  data() {
    return {
      newsArray: news,
      eventGallery: events,
      agencyArray: departments,
      servicesArray: services,
      helpLines: helplines,
      activeNews: "",

      showWelcomeMessage: false,
      items: [],
      limitationList: 3,
      screenWidth: 0,
      officials: officials,
      sliderSettings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        infinite: true,
        slidesToShow: 5,
        speed: 300,
        rows: 2,
        slidesPerRow: 1,
        draggable: true,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              rows: 1,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2.2,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 475,
            settings: {
              slidesToShow: 1.3,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              rows: 1,
              dots: false,
            },
          },
        ],
      },
      newsSettings: {
        dots: false,
        infinite: true,
        slidesToShow: 1.4,
        speed: 300,
        rows: 1,
        slidesPerRow: 1,
        draggable: true,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 475,
            settings: {
              slidesToShow: 1.3,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1.2,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 360,
            settings: {
              slidesToShow: 1,
              rows: 1,
              dots: false,
            },
          },
        ],
      },
    };
  },
  // mounted() {
  //   window.addEventListener("scroll", this.onScroll)
  // },
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.onScroll)
  // },
  methods: {
    newsShowPopup(val) {
      this.activeNews = val;
      setSelected(val);
      console.log(val);
      this.$modal.show("newsModal");
    },
    closeNewsModal() {
      this.$modal.hide("newsModal");
    },
    readMoreWelcome() {
      this.showWelcomeMessage = !this.showWelcomeMessage;
    },
    // onScroll(e) {
    //   this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
    //   if(this.windowTop >= 2000){
    //   }
    // }
  },
};
</script>