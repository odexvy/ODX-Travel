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
import { getImageURL } from '../helpers/getImageURL.ts'
import { useCurrentAccentColorFromCarouselStore } from '../stores/CurrentAccentColorFromCarousel'
import { ref } from 'vue'
import TravelsHorizontalSlider from '@/components/TravelsHorizontalSlider.vue'
import { useRouter } from 'vue-router'
import { useSelectedTravel } from '@/stores/selectedTravel'

const { carouselColor } = useCurrentAccentColorFromCarouselStore()
const { setSelectedTravel } = useSelectedTravel()
const travelsOfTheDay = travelsOfTheDayDatas
const contentSection = ref()
const router = useRouter()

const scrollTo = () => {
  contentSection.value.scrollIntoView({ behavior: 'smooth' })
}

const navigateToDetailsPage = (data: any) => {
  //fix this any type
  setSelectedTravel(data)
  router.push({ name: 'details', query: { id: data.uuid } })
}

const handleCarouselChange = (index: any) => {
  carouselColor.color = travelsOfTheDay[index].color
  carouselColor.textColor = travelsOfTheDay[index].textColor
}
</script>

<template>
  <v-carousel
    :show-arrows="false"
    cycle
    hide-delimiters
    height="100vh"
    @update:model-value="handleCarouselChange($event)"
  >
    <v-carousel-item
      v-for="(toto, i) in travelsOfTheDay"
      :key="i"
      :src="getImageURL(toto.image, 'jpg')"
      cover
    >
      <v-row
        class="d-flex fill-height justify-center align-center flex-column mx-1"
        :style="{ gap: 24 }"
      >
        <h1
          class="text-h1"
          :style="{
            color: toto.color,
            fontWeight: 'bold',
            fontSize: '12vw !important',
            lineHeight: '12vw !important',
            textAlign: 'center'
          }"
        >
          {{ toto.title.toUpperCase() }}
        </h1>
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
          <TextButton
            text="Découvrir"
            :text-color="toto.textColor"
            :color="toto.color"
            @click="navigateToDetailsPage(toto)"
          />
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
  <div class="goDownButton">
    <IconButton
      @click="scrollTo()"
      iconName="arrow-down-thin"
      :icon-color="carouselColor.textColor"
      :color="carouselColor.color"
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
      <p>
        Partez à l'aventure et découvrez les merveilles naturelles cachées du monde avec nos voyages
        en trek. Parcourez des sentiers escarpés, traversez des vallées verdoyantes et atteignez des
        sommets spectaculaires. Laissez-vous imprégner par la beauté brute de la nature et créez des
        souvenirs inoubliables en compagnie de guides expérimentés.
      </p>
      <TravelsHorizontalSlider :datas="trekTravalesDatas" />
      <h1 class="test">Vélo</h1>
      <p>
        Pour les amateurs de vélo et d'aventure, nos voyages en trek vélo offrent une expérience
        unique en combinant la beauté des sentiers de randonnée avec l'excitation du cyclisme.
        Pédalez à travers des paysages époustouflants, explorez des villages pittoresques et
        ressentez l'adrénaline monter à mesure que vous gravissez des cols difficiles. Une aventure
        à couper le souffle pour les amoureux de la nature et du vélo.
      </p>
      <TravelsHorizontalSlider :datas="vttTravalesDatas" />
      <h1 class="test">Road trip</h1>
      <p>
        Libérez l'aventurier qui sommeille en vous avec nos road trips. Empruntez des routes
        pittoresques, découvrez des destinations hors des sentiers battus et vivez des expériences
        authentiques loin des complexes hôteliers. Imprégnez-vous de la culture locale, rencontrez
        des habitants chaleureux et créez des souvenirs uniques lors de ce voyage en toute
        simplicité.
      </p>
      <TravelsHorizontalSlider :datas="roadTravalesDatas" />
      <h1 class="test">Safari photo</h1>
      <p>
        Explorez les merveilles naturelles et les paysages époustouflants à travers nos voyages en
        safari photo. Parcourez des terrains variés, des vastes plaines aux sommets des volcans, en
        passant par des forêts luxuriantes. Immortalisez la beauté brute de la nature, capturez des
        panoramas à couper le souffle et saisissez l'essence des lieux de tournage emblématiques.
        Accompagné par des guides expérimentés, plongez au cœur de la nature sauvage et créez des
        souvenirs photographiques qui dureront toute une vie.
      </p>
      <TravelsHorizontalSlider :datas="photoTravalesDatas" />
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
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 16px;
}
.discoverButton {
  margin-top: 24px;
}
.goDownButton {
  position: absolute;
  bottom: 0;
  margin-bottom: 24px;
}
</style>
