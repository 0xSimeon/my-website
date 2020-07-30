<template>
  <section class="project py-4 pb-32 px-8 sm:px-4 sm:py-4 w-full" id="Projects">
    <h2
      class="project__heading sm:ml-0 px-4 sm:px-1 py-6 sm:text-4xl text-5xl font-bold font-headingFont"
    >
      {{ sectionTitle }}
    </h2>
    <div
      class="project__grid grid gap-8  justify-center align-center py-16 px-4 sm:px-0  grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mx-auto"
    >
      <div
        v-for="(project, index) in projects"
        :key="index"
        class=" project__card border  shadow-lg"
      >
        <div class="project__card-test  rounded shadow-lg">
          <h4 class="headingFont text-3xl p-2">{{ project.title }}</h4>
          <img
            :src="require(`../assets/img/${project.imgUrl}`)"
            alt=""
            class="project__img"
          />
          <p class="p-2 textFont text-xl">{{ project.description }}</p>
          <p class="p-2 textFont text-xl">
            <strong>{{ toolsTitle }}</strong
            >{{ project.tools }}
          </p>
          <div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      deviceHeight: 0,
      sectionTitle: `Stuffs I've built`,
      toolsTitle: 'Built with: ',
      projects: [
        {
          title: 'Calculator app',
          description: `A fully responsive web app to perform basic arithmetic operations. It's also my first javascript app! 😄`,
          imgUrl: 'simeon.png',
          tools: 'html5, css3, javascript'
        },
        {
          title: 'Javascript Quiz app',
          description: `A fun quiz application I built as one of the task I got during start.ng internship.`,
          imgUrl: 'simeon.png',
          tools: 'html5, css3, javascript'
        },
        {
          title: 'loremjdlkjfkld',
          description:
            'jkhdksj hajshiuayhg  yufdghhdjgsfdssss ssss ssssssss ssssssss ss sss sssg',
          imgUrl: 'simeon.png',
          tools: 'html5, css3, javascript'
        },

      ]
    };
  },
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

  &__card,
  &__card-test {
    background: white;
  }

  &__card {
    transform: skewY(-5deg);
    transform-origin: 100% 0;
    z-index: 10;
    padding: 0.8rem;

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
      height: 32rem;
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
  }
}
</style>
