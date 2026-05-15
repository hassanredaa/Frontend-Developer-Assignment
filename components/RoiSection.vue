<script setup lang="ts">
const metrics = ['82%', '+245%', '-42%', '3.4x', '$2.4m', '144h', '91%', '6.8x'];
</script>

<template>
  <section class="bg-white px-5 py-20 md:px-[120px] md:py-[120px]">
    <div class="mx-auto max-w-[1680px] text-center">
      <p class="text-xs font-semibold uppercase text-[#F3A30B]">Enterprise analytics</p>
      <h2 class="mt-3 text-[28px] font-bold leading-tight text-[#342C8E] md:text-[44px]">Enterprise-Grade ROI And Analytics</h2>
      <p class="mx-auto mt-3 max-w-[720px] text-sm leading-6 text-[#6B657D]">
        Track documentation performance, quality improvements, and business impact from one dashboard.
      </p>
      <div class="mx-auto mt-10 max-w-[980px] rounded-[8px] bg-[#0E0A26] p-6 text-left text-white shadow-[0_20px_50px_rgba(22,17,55,0.18)]">
        <div class="mb-5 flex items-center justify-between">
          <span class="text-sm font-bold">Executive ROI Dashboard</span>
          <span class="rounded-[4px] bg-[#145F37] px-3 py-1 text-xs">Live</span>
        </div>
        <div class="grid gap-4 md:grid-cols-4">
          <div v-for="metric in metrics" :key="metric" class="rounded-[6px] border border-white/10 bg-white/5 p-4">
            <strong class="text-2xl text-[#C9C4FF]">{{ metric }}</strong>
            <div class="mt-3 h-1.5 rounded-full bg-white/10"><span class="roi-bar block h-1.5 rounded-full bg-[#39D074]" /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
