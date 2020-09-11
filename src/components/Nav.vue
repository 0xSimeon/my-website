<template>
  <div class="navigation shadow-xl">
    <input
      type="checkbox"
      name="navigation menu"
      class="navigation__checkbox hidden"
      id="nav-toggle"
      v-model="checked"
      :checked="checked"
    />
    <label
      name="toggle__button"
      role="toggle button"
      class="navigation__button fixed z-50 rounded-full text-center cursor-pointer shadow-lg"
      for="nav-toggle"
    >
      <span class="navigation__icon relative">&nbsp;</span>
    </label>
    <div class="navigation__background z-30 fixed rounded-full">
      &nbsp;
    </div>
    <nav class="navigation__nav left-0 w-full fixed top-0 right-0 z-40">
      <ul class="navigation__list">
        <li
          v-for="(link, index) in navLinks"
          :key="index"
          class="navigation__item"
        >
          <a
            :href="`#${link}`"
            @click="checked = !checked"
            class="navigation__link text-3xl font-light uppercase py-4 px-8 mb-4 block font-textFont rounded"
            >{{ link }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: ['About', 'Services', 'Projects', 'Contact'],
      checked: false
    };
  }
};
</script>

<style lang="scss" scoped>
.navigation {
    color: var(--color-nav);

  &__button {
    background: var(--bg);
    height: 4.5rem;
    width: 4.5rem;
    top: 2.5rem;
    right: 3.5rem;
  }

  &__background {
    height: 3.5rem;
    width: 3.5rem;
    top: 3rem;
    right: 4rem;
    background: radial-gradient(var(--color-secondary), var(--color-primary));
    transition: transform 0.8s cubic-bezier(0.45, 0, 0.55, 1);
  }

  &__nav {
    height: 100vh;
    opacity: 0;
    visibility: hidden;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  &__list {
    @include center;
    list-style: none;
    text-align: center;
  }

  &__link {
    &:link,
    &:visited {
      background: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        var(--color-nav) 50%
      );
      background-size: 220%;
      transition: all 0.5s;
    }

    &:hover,
    &:active {
      background-position: 100%;
      transform: scale(1.05);
      color: var(--navLinkHover);
      transform: translateX(1rem);
    }
  }

  &__checkbox:checked ~ &__background {
    transform: scale(100);
  }

  &__checkbox:checked ~ &__nav {
    width: 100%;
    visibility: visible;
    opacity: 1;
  }
  &__icon {
    margin-top: 2rem;
    &,
    &::before,
    &::after {
      width: 2.5rem;
      height: 2px;
      background: var(--color-text);
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }

  &__button:hover &__icon::before {
    top: -1rem;
  }

  &__button:hover &__icon::after {
    top: 1rem;
  }

  &__checkbox:checked + &__button &__icon {
    background: transparent;
  }

  &__checkbox:checked + &__button &__icon::before {
    top: 0;
    transform: rotate(calc(180deg - 45deg));
  }

  &__checkbox:checked + &__button &__icon::after {
    top: 0;
    transform: rotate(calc(180deg + 45deg));
  }
}

@keyframes slidein {
  from {
    transform: translateX(-30px);
  }
  to {
    transform: translateX(0);
  }
}

@media only screen and (max-width: 500px) {
  .navigation {
    &__background {
      top: 2.5rem;
      right: 2rem;
    }

    &__button {
      width: 3.5rem;
      height: 3.5rem;
      right: 2rem;
    }

    &__icon {
      margin-top: 1.7rem;

      &::before {
        top: -0.7rem;
      }
      &::after {
        top: 0.7rem;
      }
    }
  }
}
</style>
