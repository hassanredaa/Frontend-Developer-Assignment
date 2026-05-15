<script setup lang="ts">
const engineCards = [
  {
    title: 'AI Documentation Generator',
    body: 'Automatically turns code, PRs, and workflows into accurate docs.',
    tone: 'purple',
  },
  {
    title: 'Documentation Quality Score',
    body: 'Scores completeness, clarity, freshness, and technical confidence.',
    tone: 'amber',
  },
  {
    title: 'Human-in-the-Loop Review',
    body: 'Routes uncertain content to the right expert before publishing.',
    tone: 'green',
  },
];
</script>

<template>
  <section id="features" class="bg-white px-5 py-20 md:px-[120px] md:py-[120px]">
    <div class="mx-auto max-w-[1680px] text-center">
      <p class="text-xs font-semibold uppercase text-[#F3A30B]">Smart documentation engine</p>
      <h2 class="mt-3 text-[28px] font-bold leading-tight text-[#342C8E] md:text-[44px]">AI-Native Documentation Engine</h2>
      <p class="mx-auto mt-3 max-w-[720px] text-sm leading-6 text-[#6B657D]">
        Three complementary AI capabilities power every workflow, review, and content decision.
      </p>

      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <article
          v-for="card in engineCards"
          :key="card.title"
          class="feature-card rounded-[8px] border p-6 text-left shadow-[0_14px_38px_rgba(28,24,66,0.08)]"
          :class="{
            'border-[#DCD6F7] bg-[#F4F1FF]': card.tone === 'purple',
            'border-[#FFE5BD] bg-[#FFF8ED]': card.tone === 'amber',
            'border-[#CFECCF] bg-[#F0FFF1]': card.tone === 'green',
          }"
        >
          <span class="grid h-9 w-9 place-items-center rounded-[4px] bg-white text-sm font-bold text-[#4B3BB3] shadow-sm">AI</span>
          <h3 class="mt-6 text-lg font-bold text-[#2F2974]">{{ card.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-[#6F697D]">{{ card.body }}</p>
          <ul class="mt-5 space-y-2 text-xs text-[#6F697D]">
            <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-[#4B3BB3]" />Real-time updates</li>
            <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-[#4B3BB3]" />Context-aware output</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
