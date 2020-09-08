<template>
  <footer class="pt-10 pb-2 px-8 sm:px-4 sm:py-4 w-full about" id="Contact">
    <h2
      class="sm:ml-0 px-4 sm:px-1 py-6 sm:text-4xl text-5xl font-bold font-headingFont footer__heading"
    >
      Reach out... I'm available.
    </h2>
    <div class="footer__container w-full mx-auto border-2 px-6 py-3">
      <p
        class="text-2xl sm:text-lg  font-light font-textFont px-4 sm:px-1 py-2 footer__text"
      >
        Whether you want me to contribute to your paid / free project or you
        just want to get acquinted and be friends, feel free to reach out. I'd
        appreciate!
      </p>
      <app-button
        link="mailto:simeon.udoh45@gmail.com"
        title="Say Hello 👋"
        classes="mx-auto w-2/5 sm:w-4/5 flex justify-center my-4"
      ></app-button>
    </div>
    <div class="footer__details rounded">
      <p class="footer__text font-textFont text-2xl sm:text-lg">Copyright &copy; {{ getYear }}.</p>
      <p class="footer__text font-textFont text-2xl sm:text-lg">
        Made with <i class="footer__coffee fas fa-coffee"></i> and
        <i class="fas fa-heart footer__heart pulse"></i> <br />by
        <span>Simeon Udoh</span>
      </p>
    </div>
  </footer>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
  computed: {
    getYear() {
      return new Date().getFullYear();
    }
  },
  components: {
    appButton: Button
  }
};
</script>

<style lang="scss" scoped>
.footer {
  &__heading {
    @include dots;
    color: $color-primary;

    &::after {
      @include respond(phone) {
        top: 88px;
      }
    }
  }

  &__container {
    max-width: 40rem;
    border: 2.5px solid $color-primary;
  }

  &__details {
    margin-top: 4.5rem;
    background: $color-secondary;
    padding: 1rem;
    color: white;
  }

  &__text {
    text-align: center;
    transition: all 0.2s;
  }

  &__heart {
    color: white;
  }

  &__coffee {
    color: $color-primary;
  }

  &__heart,
  &__coffee {
    font-size: 2rem;
  }
}

.pulse {
  animation: 1s infinite pulse cubic-bezier(0.215, 0.61, 0.355, 1);
}

@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>
