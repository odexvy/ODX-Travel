<script setup lang="ts">
import TextButton from '@/components/TextButton.vue'
import IconButton from '@/components/IconButton.vue'
import {
  travelsOfTheDayDatas,
  photoTravalesDatas,
  trekTravalesDatas,
  vttTravalesDatas,
  roadTravalesDatas
} from '../travelDatas.ts'
import { useCurrentAccentColorFromCarouselStore } from '../stores/CurrentAccentColorFromCarousel'
import { ref } from 'vue'

const currentAccentColorFromCarousel = useCurrentAccentColorFromCarouselStore()
const travelsOfTheDay = travelsOfTheDayDatas
const contentSection = ref()

const getImageUrl = (name: string, ext: 'jpg' | 'png') => {
  return new URL(`../assets/images/${name}.${ext}`, import.meta.url).href
}

const scrollTo = () => {
  contentSection.value.scrollIntoView({ behavior: 'smooth' })
}

const handleCarouselChange = (index: any) => {
  currentAccentColorFromCarousel.carouselColor.color = travelsOfTheDay[index].color
  currentAccentColorFromCarousel.carouselColor.textColor = travelsOfTheDay[index].textColor
}
</script>

<template>
  <v-carousel
    ref="carouselSection"
    :show-arrows="false"
    cycle
    hide-delimiters
    height="100vh"
    @update:model-value="handleCarouselChange($event)"
  >
    <v-carousel-item
      v-for="(toto, i) in travelsOfTheDay"
      :key="i"
      :src="getImageUrl(toto.image, 'jpg')"
      cover
    >
      <v-row
        class="d-flex fill-height justify-center align-center flex-column"
        :style="{ gap: 24 }"
      >
        <div
          class="text-h1"
          :style="{
            color: toto.color,
            fontWeight: 'bold',
            fontSize: '12vw !important',
            lineHeight: '12vw !important'
          }"
        >
          {{ toto.title.toUpperCase() }}
        </div>
        <div
          class="text-h2"
          :style="{
            color: toto.color,
            fontWeight: 'bold',
            fontSize: '7vw !important',
            lineHeight: '7vw !important'
          }"
        >
          {{ toto.subTitle }}
        </div>
        <div class="discoverButton">
          <TextButton text="Découvrir" :text-color="toto.textColor" :color="toto.color" />
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
  <div class="goDownButton">
    <IconButton
      @click="scrollTo()"
      iconName="arrow-down-thin"
      :icon-color="currentAccentColorFromCarousel.carouselColor.textColor"
      :color="currentAccentColorFromCarousel.carouselColor.color"
    />
  </div>
  <div ref="contentSection" class="content">
    <h1>Qui sommes nous</h1>
    <p>Bienvenue chez ODX Travel !</p>
    <br />
    <p>
      Nous sommes là pour rendre vos rêves d'aventure réalité, tout en gardant un œil sur notre
      impact sur la planète. Que vous soyez accro à l'adrénaline, passionné de nature ou simplement
      en quête de nouvelles expériences, nous avons ce qu'il vous faut. Imaginez-vous en train de
      pédaler à travers les steppes de Mongolie lors d'une randonnée VTT épique, ou en train de
      capturer des clichés incroyables lors d'un safari photo dans les coins les plus reculés du
      globe.
    </p>
    <br />
    <p>
      Chez nous, l'aventure est au rendez-vous, et nous veillons à ce que chaque expérience soit à
      la fois palpitante et respectueuse de l'environnement. Alors, prêts à partir à l'aventure avec
      nous ?
    </p>
    <h1 class="test">Nos voyages</h1>
    <div class="travels">
      <h1 class="test">Trek</h1>
      <v-sheet>
        <v-slide-group show-arrows="always" direction="horizontal">
          <v-row justify="center" align="center" class="my-1">
            <v-slide-group-item v-for="data in trekTravalesDatas" :key="data.title">
              <v-card
                class="mx-2"
                :image="getImageUrl(data.image, 'jpg')"
                width="450"
                height="188"
                @click=""
              >
                <h1 :style="{ color: data.color, paddingLeft: '16px' }">
                  {{ data.title.toUpperCase() }}
                </h1>
              </v-card>
            </v-slide-group-item>
          </v-row>
        </v-slide-group>
      </v-sheet>
      <h1 class="test">Vélo</h1>
      <v-sheet>
        <v-slide-group show-arrows="always" direction="horizontal">
          <v-row justify="center" align="center" class="my-1">
            <v-slide-group-item v-for="data in vttTravalesDatas" :key="data.title">
              <v-card
                class="mx-2"
                :image="getImageUrl(data.image, 'jpg')"
                width="400"
                height="188"
                @click=""
              >
                <h1 :style="{ color: data.color, paddingLeft: '16px', fontWeight: 'bold' }">
                  {{ data.title.toUpperCase() }}
                </h1>
              </v-card>
            </v-slide-group-item>
          </v-row>
        </v-slide-group>
      </v-sheet>
      <h1 class="test">Road trip</h1>
      <v-sheet>
        <v-slide-group show-arrows="always" direction="horizontal">
          <v-row justify="center" align="center" class="my-1">
            <v-slide-group-item v-for="data in roadTravalesDatas" :key="data.title">
              <v-card
                class="mx-2"
                :image="getImageUrl(data.image, 'jpg')"
                width="450"
                height="188"
                @click=""
              >
                <h1 :style="{ color: data.color, paddingLeft: '16px' }">
                  {{ data.title.toUpperCase() }}
                </h1>
              </v-card>
            </v-slide-group-item>
          </v-row>
        </v-slide-group>
      </v-sheet>
      <h1 class="test">Safari photo</h1>
      <v-sheet>
        <v-slide-group show-arrows="always" direction="horizontal">
          <v-row justify="center" align="center" class="my-1">
            <v-slide-group-item v-for="data in photoTravalesDatas" :key="data.title">
              <v-card
                class="mx-2"
                :image="getImageUrl(data.image, 'jpg')"
                width="400"
                height="188"
                @click=""
              >
                <h1 :style="{ color: data.color, paddingLeft: '16px' }">
                  {{ data.title.toUpperCase() }}
                </h1>
              </v-card>
            </v-slide-group-item>
          </v-row>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>

<style>
.content {
  display: flex;
  min-height: 90vh;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1240px;
  padding: 24px 8px 8px 8px;
}
.travels {
  padding: 8px 8px 8px 24px;
}
.discoverButton {
  margin-top: 24px;
}
.goDownButton {
  position: absolute;
  bottom: 0;
  margin-bottom: 24px;
  z-index: 2000;
}
</style>
