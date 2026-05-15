<script setup lang="ts">
const docsCards = [
  ['Getting Started', 'Install the SDK and set up your account in minutes.'],
  ['Core Features', 'Master the fundamentals behind automated documentation.'],
  ['AI Capabilities', 'Review the power of AI automation and human review.'],
  ['Collaboration', 'Work together with reviews, approvals, and feedback.'],
  ['Integrations', 'Connect GitHub, Slack, Jira, and internal tools.'],
  ['Enterprise', 'Advanced controls for large organizations.'],
];
</script>

<template>
  <section id="docs" class="bg-[#F0EEF8] px-5 py-20 md:px-[120px] md:py-[120px]">
    <div class="mx-auto max-w-[1680px]">
      <div class="text-center">
        <h2 class="text-[28px] font-bold leading-tight text-[#342C8E] md:text-[44px]">Documentation & Guides</h2>
        <p class="mx-auto mt-3 max-w-[760px] text-sm leading-6 text-[#6B657D]">
          Everything you need to learn about building, managing, and scaling your knowledge base with TechniDox.
        </p>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <article v-for="(card, index) in docsCards" :key="card[0]" class="rounded-[8px] bg-white p-6 shadow-[0_12px_32px_rgba(40,32,85,0.1)]">
          <span class="grid h-9 w-9 place-items-center rounded-[4px] bg-[#F3F0FF] text-xs font-bold text-[#4B3BB3]">{{ index + 1 }}</span>
          <h3 class="mt-5 text-base font-bold text-[#2F2974]">{{ card[0] }}</h3>
          <p class="mt-2 text-sm leading-6 text-[#716B80]">{{ card[1] }}</p>
          <ul class="mt-4 space-y-1.5 text-xs text-[#817B90]">
            <li>Overview</li>
            <li>Recommended steps</li>
            <li>Best practices</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
