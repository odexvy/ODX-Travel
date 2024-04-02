<script setup lang="ts">
import TextButton from '@/components/TextButton.vue'
import MapLeafLet from '@/components/MapLeafLet.vue'
import { getImageURL } from '@/helpers/getImageURL'
import { isMobile } from '@/helpers/isMobile'
import { useSelectedTravel } from '@/stores/selectedTravel'
import { useToPayTravel } from '@/stores/toPayTravel'
import { useRouter } from 'vue-router'
import CarIcon from '../components/svg/CarIcon.vue'
import CameraIcon from '../components/svg/CameraIcon.vue'
import BikeIcon from '../components/svg/BikeIcon.vue'
import WalkIcon from '../components/svg/WalkIcon.vue'
import { ref } from 'vue'

const router = useRouter()
const contentSection = ref()
const { selectedTravel } = useSelectedTravel()
const { setToPayTravel } = useToPayTravel()

const scrollTo = () => {
  contentSection.value.scrollIntoView({ behavior: 'smooth' })
}

const navigateToCartPage = () => {
  setToPayTravel(selectedTravel, { cancelInsurance: true, equipmentLoan: true })

  router.push({ name: 'cart' })
}
</script>

<template>
  <div class="mainDetailView">
    <div class="aboutContainer">
      <div class="bento">
        <div class="bento__container">
          <div
            class="bento__item"
            style="--columns: span 3"
            :style="{
              backgroundColor: selectedTravel.color,
              color: selectedTravel.textColor
            }"
          >
            <h1 style="font-size: 56px">{{ selectedTravel.title.toUpperCase() }}</h1>
          </div>
          <div
            class="bento__item"
            style="--columns: span 1"
            :style="{
              backgroundColor: selectedTravel.color
            }"
          >
            <template v-if="selectedTravel.iconType === 'car'">
              <CarIcon height="78" width="78" :svgColor="selectedTravel.textColor" />
            </template>
            <template v-else-if="selectedTravel.iconType === 'photo'">
              <CameraIcon height="78" width="78" :svgColor="selectedTravel.textColor" />
            </template>
            <template v-else-if="selectedTravel.iconType === 'foot'">
              <WalkIcon height="78" width="78" :svgColor="selectedTravel.textColor" />
            </template>
            <template v-else-if="selectedTravel.iconType === 'bike'">
              <BikeIcon height="78" width="78" :svgColor="selectedTravel.textColor" />
            </template>
          </div>
          <div
            class="bento__item"
            style="--rows: span 4; --columns: 1 / -1"
            :style="{
              backgroundColor: selectedTravel.color,
              flex: 1
            }"
          >
            <MapLeafLet
              :coordinates="selectedTravel.gps.map((coord) => [coord.latitude, coord.longitude])"
            />
            <!-- <TextButton
              text="Réserver votre voyage"
              :text-color="selectedTravel.textColor"
              :color="selectedTravel.color"
              @click="navigateToCartPage()"
            /> -->
          </div>
          <div
            class="bento__item"
            :style="{
              backgroundColor: selectedTravel.color,
              color: selectedTravel.textColor
            }"
          >
            <h1>{{ selectedTravel.steps }} Etapes</h1>
          </div>
          <div
            class="bento__item"
            :style="{
              backgroundColor: selectedTravel.color,
              color: selectedTravel.textColor
            }"
          >
            <h1>{{ selectedTravel.duration }} Jours</h1>
          </div>
          <div
            class="bento__item"
            :style="{
              backgroundColor: selectedTravel.color,
              color: selectedTravel.textColor
            }"
          >
            <h1>{{ selectedTravel.distance }} Km</h1>
          </div>
          <button
            @click="scrollTo()"
            class="bento__item"
            :style="{
              background:
                'linear-gradient(120deg, ' +
                selectedTravel.color +
                ' 30%, ' +
                selectedTravel.textColor +
                ' 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              border: 'solid 4px' + selectedTravel.color + '',
              flexDirection: 'column',
              padding: '0 8px'
            }"
          >
            <h1>Plus de détails</h1>
            <v-icon size="x-large" icon="mdi-arrow-down" :color="selectedTravel.color"></v-icon>
          </button>
        </div>
      </div>
      <div ref="contentSection" class="content">
        <h1>Qui sommes nous</h1>
        <p>Bienvenue chez ODX Travel !</p>
        <br />
        <p>
          Nous sommes là pour rendre vos rêves d'aventure réalité, tout en gardant un œil sur notre
          impact sur la planète. Que vous soyez accro à l'adrénaline, passionné de nature ou
          simplement en quête de nouvelles expériences, nous avons ce qu'il vous faut. Imaginez-vous
          en train de pédaler à travers les steppes de Mongolie lors d'une randonnée VTT épique, ou
          en train de capturer des clichés incroyables lors d'un safari photo dans les coins les
          plus reculés du globe.
        </p>
        <br />
        <p>
          Chez nous, l'aventure est au rendez-vous, et nous veillons à ce que chaque expérience soit
          à la fois palpitante et respectueuse de l'environnement. Alors, prêts à partir à
          l'aventure avec nous ?
        </p>
        <h1 class="test">Nos voyages</h1>
      </div>
    </div>
    <div
      class="picture"
      :style="{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)), url(' +
          getImageURL(selectedTravel.image as string, 'jpg') +
          ')',
        display: isMobile() ? 'none' : 'block'
      }"
    >
      <h1
        :style="{
          color: selectedTravel.color
        }"
      >
        {{ selectedTravel.gps[0].latitude }}°N, {{ selectedTravel.gps[0].longitude }}°
      </h1>
    </div>
  </div>
</template>

<style>
.mainDetailView {
  display: flex;
  width: 100vw;
  min-height: calc(100vh - 88px);
  flex-direction: row;
}
.aboutContainer {
  display: flex;
  background-color: #fff;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 64px;
}
.bento {
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 32px;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 90vw;
  max-width: 1240px;
}

.bento__container {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  gap: 8px;
  min-height: inherit;
  flex: 2 0 320px;
}

.bento__item {
  height: 100%;
  width: 100%;
  grid-column: var(--columns, span 1);
  grid-row: var(--rows, span 1);
  background-color: var(--bg);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.content {
  display: flex;
  min-height: 90vh;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1240px;
  padding: 24px 16px 16px 16px;
}
.picture {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  padding: 16px 8px;
  text-align: end;
  width: 64px;
  position: fixed;
  top: 100;
  right: 0;
  height: calc(100vh - 88px);
  display: flex;
}
</style>
