<script setup lang="ts">
const isMenuOpen = ref(false);

const navItems = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Docs', '#docs'],
  ['Pricing', '#pricing'],
];
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[#E8E5F5] bg-white/95 backdrop-blur">
    <nav class="mx-auto flex h-[70px] max-w-[1680px] items-center justify-between px-5 md:h-[110px] md:px-[120px]">
      <a href="#home" class="flex items-center gap-2.5" aria-label="TechniDox home">
        <span class="grid h-8 w-8 place-items-center rounded-[4px] bg-[#4B3BB3] text-sm font-bold text-white">T</span>
        <span class="text-base font-semibold text-[#332B73]">TechniDox</span>
      </a>

      <div class="hidden items-center gap-7 text-sm font-medium text-[#2C2942] md:flex">
        <a
          v-for="item in navItems"
          :key="item[0]"
          :href="item[1]"
          class="rounded-[4px] px-1 py-2 transition hover:text-[#4B3BB3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4B3BB3]"
        >
          {{ item[0] }}
        </a>
      </div>

      <a href="#pricing" class="hidden rounded-[4px] bg-[#4B3BB3] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#372A8C] md:inline-flex">
        Get Started
      </a>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#D8D2F1] text-[#29234B] md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="relative block h-4 w-5" aria-hidden="true">
          <span class="absolute left-0 top-0 h-0.5 w-5 bg-current transition" :class="isMenuOpen ? 'translate-y-[7px] rotate-45' : ''" />
          <span class="absolute left-0 top-[7px] h-0.5 w-5 bg-current transition" :class="isMenuOpen ? 'opacity-0' : ''" />
          <span class="absolute left-0 top-[14px] h-0.5 w-5 bg-current transition" :class="isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''" />
        </span>
      </button>
    </nav>

    <div v-if="isMenuOpen" id="mobile-menu" class="border-t border-[#E8E5F5] bg-white px-5 py-5 md:hidden">
      <div class="flex flex-col gap-4 text-sm font-semibold text-[#2C2942]">
        <a v-for="item in navItems" :key="item[0]" :href="item[1]" @click="isMenuOpen = false">{{ item[0] }}</a>
        <a href="#pricing" class="w-max rounded-[4px] bg-[#4B3BB3] px-5 py-2.5 text-white" @click="isMenuOpen = false">Get Started</a>
      </div>
    </div>
  </header>
</template>
