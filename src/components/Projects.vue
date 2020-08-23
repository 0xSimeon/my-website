<template>
  <section class="project py-4 pb-32 px-8 sm:px-4 sm:py-4 w-full" id="Projects">
    <h2
      class="project__heading sm:ml-0 px-4 sm:px-1 py-6 sm:text-4xl text-5xl font-bold font-headingFont"
    >
      {{ sectionTitle }}
    </h2>
    <div
      class="project__grid grid gap-8  justify-center align-center py-16 px-4 sm:px-0  grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mx-auto mb-8 sm:mb-1"
    >
      <div
        v-for="(project, index) in projects"
        :key="index"
        class=" project__card border shadow-lg rounded"
      >
        <div class="project__card-test border  rounded shadow-lg">
          <img
            :src="require(`../assets/img/${project.imgUrl}`)"
            alt=""
            class="project__img rounded"
          />
          <h4
            class="project__title font-bold headingFont text-3xl sm:text-2xl p-2"
          >
            {{ project.title }}
          </h4>
          <p class="p-2 project__text textFont text-xl sm:text-lg ">
            {{ project.description }}
          </p>
          <p class="p-2 textFont text-xl sm:text-base">
            <strong>{{ toolsTitle }}</strong
            >{{ project.tools | capitalize }}
          </p>
          <div class="flex mt-4 justify-between">
            <div>
              <p class="textFont font-bold text-xl sm:text-lg">Code</p>
              <a :href="project.links.github">
              <svg class="project__card-icon m-1">
                <use href="../assets/img/icons/sprite.svg#icon-github"></use>
              </svg>
            </a>
            </div>

            <div>
              <p class="textFont font-bold text-xl sm:text-lg">Live</p>
              <a :href="project.links.link">
              <svg class="project__card-icon m-1">
                <use href="../assets/img/icons/sprite.svg#icon-tab"></use>
              </svg>
            </a>
            </div>

          </div>
        </div>
      </div>
    </div>
    <app-button link="https://github.com/simeon4real/repositories" title="View more on Github!" pill="true" color='red'></app-button>
  </section>
</template>

<script>
import Button from './Button.vue';
export default {
  components: {
    appButton: Button
  },
  data() {
    return {
      sectionTitle: `Stuffs I've built`,
      toolsTitle: 'Built with: ',
      projects: [
        {
          title: 'Calculator app',
          description: `A fully responsive web app to perform basic arithmetic operations. It's also my first javascript app! 😄`,
          imgUrl: 'calculator.png',
          tools: 'html5, css3, javascript',
          links: {
            github: 'https://github.com/simeon4real/Calculator',
            link: 'https://calculatorjs-app.netlify.app/'
          }
        },
        {
          title: 'Javascript Quiz app',
          description: `This is a fun quiz application I built as one of the task I got during start.ng internship in May 2020.`,
          imgUrl: 'js-quiz.png',
          tools: 'html5, css3, javascript',
          links: {
            github: 'https://github.com/simeon4real/Javascript-quiz',
            link: 'https://javascript-quiz-game.netlify.app/'
          }
        },
        {
          title: 'My Personal Website',
          description: `Yup! It's this website you're on right now. I created my personal website to practice using Vue for creating web apps.`,
          imgUrl: 'my-website.png',
          tools: 'Vue, Tailwind, Sass',
          links: {
            github: 'https://github.com/simeon4real/my-website',
            link: 'https://simicode.me'
          }
        }
      ]
    };
  },
  filters: {
    capitalize(value) {
      return value.split(" ")
      .map(el => `${el[0].toUpperCase()}${el.slice(1, el.length)}`)
      .join(" ");
    }
  }
};
</script>

<style lang="scss" scoped>
.project {
  color: black;
  &__heading {
    @include dots;
  }

  &__img {
    height: 11rem;
    object-fit: cover;
    width: 100%;
  }

  &__grid {
    justify-items: center;
    @include respond(phone) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  &__title {
    border-bottom: 5px solid $color-heading;
    color: $color-heading;
  }

  &__text {
    color: $color-text;
  }

  &__card,
  &__card-test {
    background: white;
  }

  &__card {
    transform: skewY(-5deg);
    transform-origin: 100% 0;
    z-index: 10;
    padding: 0.5rem;

    @include respond(phone) {
      transform: skewY(0);
    }

    &:hover::before {
      transform: scale(1);
      opacity: 1;
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 270ms all ease-in-out;
      border-radius: 4px;
      background: linear-gradient(
        30deg,
        $color-primary 10%,
        $color-secondary 25%,
        $color-tertiary 50%,
        $color-primary 75%,
        $color-secondary 90%
      );
      opacity: 0;
      content: '';
      z-index: -1;
    }

    &-test {
      transform: skewY(5deg);
      z-index: 2;
      padding: 0.5rem;
      height: 100%;
      @include respond(phone) {
        transform: skewY(0);
      }

      @include respond(phone) {
        height: unset;
      }
    }
    &::after {
      top: 1px;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      z-index: -1;
    }

    &::after,
    &::before {
      position: absolute;
    }

    &-icon {
      width: 2rem;
      height: 2rem;
      fill: $color-heading;

      @include respond(phone) {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
}
</style>
