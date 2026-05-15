<script setup lang="ts">
const openGuide = ref(0);

const quickSteps = [
  {
    title: 'Set up your workspace',
    items: ['Connect your repository', 'Invite reviewers', 'Choose documentation rules'],
  },
  {
    title: 'Generate docs',
    items: ['Scan code changes', 'Create initial pages', 'Score confidence'],
  },
  {
    title: 'Publish with review',
    items: ['Resolve flagged sections', 'Approve final output', 'Track performance'],
  },
];
</script>

<template>
  <section class="bg-white px-5 py-20 md:px-[120px] md:py-[120px]">
    <div class="mx-auto max-w-[1680px] overflow-hidden rounded-[8px] bg-[#0E0A26] p-8 text-white md:p-16">
      <div class="mx-auto max-w-[960px] text-center">
        <h2 class="text-[28px] font-bold md:text-[44px]">Quick Start Guide</h2>
        <div class="mt-2 flex justify-center gap-1">
          <span v-for="(_, index) in quickSteps" :key="index" class="h-1.5 w-1.5 rounded-full" :class="openGuide === index ? 'bg-white' : 'bg-white/30'" />
        </div>
        <div class="relative mt-8 rounded-[8px] border border-white/15 bg-white/10 p-5 text-left shadow-2xl">
          <button type="button" class="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-white/70" aria-label="Previous step" @click="openGuide = openGuide === 0 ? quickSteps.length - 1 : openGuide - 1">
            ‹
          </button>
          <button type="button" class="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-white/70" aria-label="Next step" @click="openGuide = openGuide === quickSteps.length - 1 ? 0 : openGuide + 1">
            ›
          </button>
          <div class="mx-auto max-w-[620px] px-8">
            <p class="mb-3 text-xs font-semibold text-[#F3A30B]">Step {{ openGuide + 1 }}</p>
            <h3 class="text-lg font-bold">{{ quickSteps[openGuide].title }}</h3>
            <ol class="mt-4 space-y-2 text-sm text-[#DFDAFF]">
              <li v-for="item in quickSteps[openGuide].items" :key="item">{{ item }}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
