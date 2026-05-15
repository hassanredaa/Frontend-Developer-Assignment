<script setup lang="ts">
const teamCards = [
  {
    title: 'AI workflows as fast as your team',
    body: 'Turn repository activity, pull requests, and release notes into accurate documentation without slowing delivery.',
    bullets: ['Real-time code analysis', 'Automated updates', 'Confidence checks'],
    featured: false,
  },
  {
    title: 'Custom knowledge in one place',
    body: 'Bring engineering, support, and product context together so every answer has the right source behind it.',
    bullets: ['Team-specific rules', 'Shared review history', 'Reusable templates'],
    featured: false,
  },
  {
    title: 'AI learns from your experts',
    body: 'Route low-confidence sections to reviewers and use approvals to improve future documentation quality.',
    bullets: ['Human review queue', 'Feedback loops', 'Expert ownership'],
    featured: false,
  },
  {
    title: 'Enterprise-grade operations at scale',
    body: 'Give large teams governance, compliance visibility, and measurable documentation health across every workflow.',
    bullets: ['Security-ready workflows', 'Audit-friendly history', 'ROI reporting'],
    featured: true,
  },
];
</script>

<template>
  <section class="bg-white px-5 py-20 md:px-[120px] md:py-[120px]">
    <div class="mx-auto max-w-[1680px] text-center">
      <p class="text-xs font-semibold uppercase text-[#F3A30B]">Teams</p>
      <h2 class="mt-3 text-[28px] font-bold leading-tight text-[#342C8E] md:text-[44px]">Built For Every Team That Ships Code</h2>
      <p class="mx-auto mt-3 max-w-[720px] text-sm leading-6 text-[#6B657D]">
        Flexible plans and workflows support engineers, docs teams, and enterprise operations without changing how teams already ship.
      </p>
      <div class="mt-10 grid gap-5 md:grid-cols-2">
        <article
          v-for="card in teamCards"
          :key="card.title"
          class="rounded-[8px] border p-6 text-left shadow-[0_14px_34px_rgba(38,31,82,0.08)]"
          :class="card.featured ? 'border-[#4B3BB3] bg-[#4B3BB3] text-white' : 'border-[#E1DEEE] bg-white text-[#17142A]'"
        >
          <h3 class="text-lg font-bold" :class="card.featured ? 'text-white' : 'text-[#2F2974]'">{{ card.title }}</h3>
          <p class="mt-3 text-sm leading-6" :class="card.featured ? 'text-[#E5E0FF]' : 'text-[#6B657D]'">{{ card.body }}</p>
          <ul class="mt-5 space-y-2 text-xs" :class="card.featured ? 'text-[#F1EEFF]' : 'text-[#6B657D]'">
            <li v-for="item in card.bullets" :key="item" class="flex items-center gap-2">
              <span class="h-1.5 w-1.5 rounded-full" :class="card.featured ? 'bg-white' : 'bg-[#4B3BB3]'" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
