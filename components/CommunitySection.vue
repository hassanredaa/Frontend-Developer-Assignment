<script setup lang="ts">
const communityItems = [
  ['Expert contributions', 'Technical owners can validate important answers and suggest improvements.'],
  ['Micro-contributions', 'Small updates become structured improvements instead of scattered comments.'],
  ['Team knowledge flywheel', 'Every review improves confidence scores and future AI output.'],
];

const workflowSteps = [
  ['1', 'AI generates documentation', 'From codebase analysis'],
  ['2', 'Quality scoring & routing', 'Confidence: 72% - Review needed'],
  ['3', 'Community review', '3 contributors validated'],
  ['4', 'Published & improving', 'AI learns from feedback'],
];
</script>

<template>
  <section class="bg-white px-5 py-20 md:px-[120px] md:py-[120px]">
    <div class="mx-auto grid max-w-[1680px] gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
      <div>
        <p class="text-xs font-semibold uppercase text-[#F3A30B]">Community-driven improvement</p>
        <h2 class="mt-3 text-[28px] font-bold leading-tight text-[#342C8E] md:text-[44px]">Community-Driven Improvement At Scale</h2>
        <p class="mt-5 max-w-[650px] text-sm leading-7 text-[#6B657D]">
          Documentation improves when the right experts can review, approve, and strengthen AI-generated content without creating extra process.
        </p>
        <div class="mt-8 grid gap-5">
          <div v-for="item in communityItems" :key="item[0]" class="flex gap-4">
            <span class="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-[4px] bg-[#F0EEF8] text-sm font-bold text-[#4B3BB3]">✓</span>
            <span>
              <strong class="block text-sm text-[#2F2974]">{{ item[0] }}</strong>
              <span class="mt-1 block text-sm leading-6 text-[#6B657D]">{{ item[1] }}</span>
            </span>
          </div>
        </div>
      </div>

      <div class="rounded-[8px] border border-[#D8D5E6] bg-white p-5 shadow-[0_18px_48px_rgba(32,25,76,0.1)]">
        <div v-for="(step, index) in workflowSteps" :key="`community-${step[1]}`" class="flex items-center gap-4 rounded-[6px] border border-[#E3E0EF] bg-[#FAFAFD] p-4" :class="index > 0 ? 'mt-3' : ''">
          <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold" :class="index === 1 ? 'bg-[#FFF0D2] text-[#F3A30B]' : index === 3 ? 'bg-[#E5FAEA] text-[#17A34A]' : 'bg-[#EFEAFF] text-[#4B3BB3]'">
            {{ step[0] }}
          </span>
          <span class="min-w-0 flex-1">
            <strong class="block text-sm text-[#2D285A]">{{ step[1] }}</strong>
            <span class="text-xs text-[#817B90]">{{ step[2] }}</span>
          </span>
          <span class="text-sm text-[#20B451]">OK</span>
        </div>
      </div>
    </div>
  </section>
</template>
