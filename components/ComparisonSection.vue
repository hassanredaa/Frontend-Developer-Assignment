<script setup lang="ts">
const comparisonRows = [
  ['AI-native architecture', true, false],
  ['Confidence scoring per doc', true, false],
  ['Multi-dimensional quality assessment', true, false],
  ['Human-in-the-loop review workflows', true, false],
  ['Gamified community contributions', true, false],
  ['Real-time ROI dashboard', true, false],
  ['ISO / SOC2 compliance reporting', true, false],
  ['CI/CD quality gate integration', true, false],
  ['Basic markdown editing', true, true],
  ['Team collaboration', true, true],
];
</script>

<template>
  <section id="comparison" class="bg-white px-5 py-16 md:px-[90px] md:py-[88px]">
    <div class="mx-auto max-w-[1600px]">
      <div class="text-center">
        <p class="text-xs font-semibold uppercase text-[#F3A30B]">Why TechniDox</p>
        <h2 class="mt-3 text-[28px] font-bold leading-tight text-[#4B3BB3] md:text-[38px]">Not Just Another Documentation Tool</h2>
        <p class="mx-auto mt-4 max-w-[860px] text-sm font-semibold leading-6 text-[#5F5A66] md:text-[16px]">
          Traditional tools give you a place to write. TechniDox gives you a system that generates, scores, validates, and continuously improves documentation automatically.
        </p>
      </div>

      <div class="mt-12 overflow-x-auto">
        <div class="min-w-[760px] overflow-hidden rounded-t-[8px] border border-[#B9B5C3] bg-white">
          <div class="grid grid-cols-[1.25fr_0.88fr_0.88fr] bg-[#4B3BB3] text-[15px] font-bold leading-5 text-white">
            <span class="border-r border-white/35 px-4 py-[10px]">Capability</span>
            <span class="border-r border-white/35 px-4 py-[10px] text-center">TechniDox</span>
            <span class="px-4 py-[10px] text-center">Traditional Documentation</span>
          </div>
          <div
            v-for="row in comparisonRows"
            :key="row[0]"
            class="grid grid-cols-[1.25fr_0.88fr_0.88fr] border-t border-[#B9B5C3] text-[13px] leading-5 text-[#111111]"
          >
            <span class="border-r border-[#B9B5C3] px-4 py-[7px]">{{ row[0] }}</span>
            <span class="border-r border-[#B9B5C3] px-4 py-[7px] text-center text-lg font-semibold leading-5">{{ row[1] ? '✓' : '−' }}</span>
            <span class="px-4 py-[7px] text-center text-lg font-semibold leading-5">{{ row[2] ? '✓' : '−' }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
