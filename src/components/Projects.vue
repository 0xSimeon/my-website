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
        <div class="project__card-test border  rounded shadow-lg flex flex-col items-stretch">
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

            <div class="project__grid-info">
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
    <app-button
      link="https://github.com/simeon4real/repositories"
      title="View more on Github!"
      pill="true"
      color="red"
      classes="sm:mb-8"
    ></app-button>
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
          title: 'CalIT',
          description: `A calculator web app`,
          imgUrl: 'calculator.png',
          tools: 'html5, css3, javascript.',
          links: {
            github: 'https://github.com/simeon4real/Calculator',
            link: 'https://calculatorjs-app.netlify.app/'
          }
        },
        {
          title: 'JQuizy',
          description: `A fun quiz app`,
          imgUrl: 'js-quiz.png',
          tools: 'html, css, javascript.',
          links: {
            github: 'https://github.com/simeon4real/Javascript-quiz',
            link: 'https://javascript-quiz-game.netlify.app/'
          }
        },
        {
          title: 'My Personal Website',
          description: `My Portfolio website. `,
          imgUrl: 'my-website.png',
          tools: 'Vue, Tailwindcss, Sass.',
          links: {
            github: 'https://github.com/simeon4real/my-website',
            link: 'https://simicode.me'
          }
        },
        {
          title: 'Shortly',
          description: `An API-Based Url shortener `,
          imgUrl: 'shortly.png',
          tools: 'Vue, Sass, API.',
          links: {
            github: 'https://github.com/simeon4real/my-website',
            link: 'https://simicode.me'
          }
        },
        {
          title: 'WeBlog',
          description: `An API-Based Blogsite`,
          imgUrl: 'weblog.png',
          tools: 'Vue, Tailwindcss, Sass, Vue Router',
          links: {
            github: 'https://github.com/simeon4real/my-website',
            link: 'https://simicode.me'
          }
        },

      ]
    };
  },
  filters: {
    capitalize(value) {
      return value
        .split(' ')
        .map(el => `${el.toUpperCase()}`)
        .join(' ');
    }
  }
};
</script>

<style lang="scss" scoped>
.project {
  color: black;
  &__heading {
    @include dots;
    color: var(--color-primary);
  }

  &__img {
    height: 11rem;
    object-fit: cover;
    width: 100%;
  }

  &__grid {
    justify-items: center;
    align-items: stretch;
    @include respond(phone) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }


    &-list {

    }
  }

  &__title {
    border-bottom: 5px solid var(--color-heading);
    color: var(--color-heading);
  }

  &__text {
    color: var(--color-text);
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
        var(--color-primary) 10%,
        var(--color-secondary) 25%,
        var(--color-tertiary) 50%,
        var(--color-primary) 75%,
        var(--color-secondary) 90%
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
      fill: var(--color-heading);

      @include respond(phone) {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
}
</style>
