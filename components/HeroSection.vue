<template>
  <section id="home" class="grid-bg relative overflow-hidden bg-[#F8F7FF]">
    <div class="mx-auto grid min-h-[720px] max-w-[1680px] place-items-center px-5 py-20 md:min-h-[970px] md:px-[120px]">
      <div class="relative w-full text-center">
        <div class="float-card left-card hidden md:block">
          <div class="h-3 w-16 rounded-full bg-[#EFEFF7]" />
          <div class="mt-5 space-y-2">
            <div class="h-2.5 rounded bg-[#DAD7EF]" />
            <div class="h-2.5 w-9/12 rounded bg-[#ECEAF7]" />
            <div class="h-2.5 w-7/12 rounded bg-[#ECEAF7]" />
          </div>
        </div>

        <div class="float-card right-card hidden md:block">
          <div class="ml-auto h-3 w-16 rounded-full bg-[#EFEFF7]" />
          <div class="mt-5 space-y-2">
            <div class="ml-auto h-2.5 w-10/12 rounded bg-[#DAD7EF]" />
            <div class="ml-auto h-2.5 w-8/12 rounded bg-[#ECEAF7]" />
            <div class="ml-auto h-2.5 w-6/12 rounded bg-[#ECEAF7]" />
          </div>
        </div>

        <p class="animate-rise text-xs font-semibold uppercase tracking-normal text-[#F3A30B]">AI-powered documentation</p>
        <h1 class="animate-rise mx-auto mt-4 max-w-[980px] text-[34px] font-bold leading-[1.14] tracking-normal text-[#342C8E] sm:text-[48px] md:text-[68px]">
          Documentation that <span class="text-[#F3A30B]">builds</span> itself, <span class="text-[#F3A30B]">improves</span> itself, and proves its value
        </h1>
        <p class="animate-rise mx-auto mt-5 max-w-[930px] text-sm leading-6 text-[#68637C] md:text-base">
          AI-native platform that generates documentation from code, scores quality in real-time, routes low confidence content to expert review, and delivers measurable ROI for enterprise teams.
        </p>

        <div class="animate-rise mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#docs" class="inline-flex h-11 min-w-[178px] items-center justify-center rounded-[4px] bg-[#4B3BB3] px-5 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(75,59,179,0.22)] transition hover:-translate-y-0.5 hover:bg-[#372A8C]">
            Explore the Library
          </a>
          <a href="#pricing" class="inline-flex h-11 min-w-[190px] items-center justify-center rounded-[4px] border border-[#CFC8EA] bg-white px-5 text-sm font-semibold text-[#4B3BB3] transition hover:-translate-y-0.5 hover:bg-[#F1EFFF]">
            Get Quick Tax Estimate
          </a>
        </div>

        <div class="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-medium text-[#6E6782]">
          <span class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-[#68C978]" />AI-generated docs in minutes</span>
          <span class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-[#68C978]" />Confidence scoring built in</span>
          <span class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-[#68C978]" />Enterprise-grade compliance</span>
        </div>
      </div>
    </div>
  </section>
</template>
