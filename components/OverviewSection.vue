<script setup lang="ts">
const workflowSteps = [
  ['1', 'AI generates documentation', 'From codebase analysis'],
  ['2', 'Quality scoring & routing', 'Confidence: 72% - Review needed'],
  ['3', 'Community review', '3 contributors validated'],
  ['4', 'Published & improving', 'AI learns from feedback'],
];
</script>

<template>
  <section id="about" class="bg-white px-5 py-20 md:px-[120px] md:py-[120px]">
    <div class="mx-auto grid max-w-[1680px] gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
      <div>
        <p class="text-xs font-semibold uppercase text-[#F3A30B]">Enterprise-grade knowledge</p>
        <h2 class="mt-3 text-[28px] font-bold leading-tight text-[#342C8E] md:text-[44px]">TechniDox Overview</h2>
        <p class="mt-6 max-w-[560px] text-sm leading-7 text-[#6B657D]">
          TechniDox is an enterprise-grade knowledge infrastructure platform designed to transform how teams create, manage, and scale their documentation.
        </p>
        <p class="mt-4 max-w-[560px] text-sm leading-7 text-[#6B657D]">
          By combining AI-powered insights with collaborative workflows, TechniDox ensures organizational knowledge is always accurate, accessible, and up to date.
        </p>
        <div class="mt-6 grid gap-2 text-sm text-[#4B3BB3]">
          <span>AI-Powered Writing Assistant</span>
          <span>Real-time Health Analysis</span>
          <span>Enterprise Security</span>
          <span>Cross-Team Collaboration</span>
        </div>
      </div>

      <div class="rounded-[8px] border border-[#D8D5E6] bg-white p-5 shadow-[0_18px_48px_rgba(32,25,76,0.1)]">
        <div
          v-for="(step, index) in workflowSteps"
          :key="step[1]"
          class="workflow-step flex items-center gap-4 rounded-[6px] border border-[#E3E0EF] bg-[#FAFAFD] p-4"
          :class="index > 0 ? 'mt-3' : ''"
          :style="{ animationDelay: `${index * 140}ms` }"
        >
          <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold" :class="index === 1 ? 'bg-[#FFF0D2] text-[#F3A30B]' : index === 3 ? 'bg-[#E5FAEA] text-[#17A34A]' : 'bg-[#EFEAFF] text-[#4B3BB3]'">
            {{ step[0] }}
          </span>
          <span class="min-w-0 flex-1">
            <strong class="block text-sm text-[#2D285A]">{{ step[1] }}</strong>
            <span class="text-xs text-[#817B90]">{{ step[2] }}</span>
          </span>
          <span class="text-sm text-[#20B451]">{{ index === 1 ? 'Review' : 'OK' }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
