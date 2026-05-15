<script setup lang="ts">
const pricingPlans = [
  {
    name: 'Standard',
    price: '$499',
    suffix: '/month',
    featured: false,
    items: ['AI Documentation Assistant', 'Team Collaboration', 'Basic Analytics', '5GB Storage', 'Email Support', 'Standard Templates', 'Public API Access'],
  },
  {
    name: 'Enhanced',
    price: '$1,499',
    suffix: '/month',
    featured: true,
    items: ['Everything in Starter', 'Advanced AI Features', 'SSO Integration', 'Advanced Analytics', '50GB Storage', 'Priority Support', 'Custom Branding'],
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    suffix: '',
    featured: false,
    items: ['Everything in Growth', 'Custom Integration', 'Dedicated Support', 'Custom AI Training', 'Unlimited Storage', '24/7 Premium Support', 'SLA Guarantee'],
  },
];
</script>

<template>
  <section id="pricing" class="bg-white">
    <div class="pricing-shell w-full overflow-hidden">
      <div class="pricing-panel px-5 py-16 text-white md:min-h-[640px] md:px-[120px] md:py-[110px]">
        <h2 class="text-center text-2xl font-bold leading-tight md:text-[32px]">Plans Built For Every Stage Of Growth</h2>

        <div class="mx-auto mt-[54px] grid max-w-[1394px] gap-8 md:grid-cols-3 md:gap-[54px]">
          <article
            v-for="plan in pricingPlans"
            :key="plan.name"
            class="pricing-card relative rounded-[8px] border border-white/28 bg-white/[0.045] p-7 text-left backdrop-blur-[2px] transition hover:-translate-y-1 hover:border-white/45 md:min-h-[352px]"
            :class="plan.featured ? 'ring-1 ring-[#6E5BFF]' : ''"
          >
            <span v-if="plan.featured" class="absolute right-5 top-5 rounded-full bg-[#F3A30B] px-3 py-1 text-[10px] font-bold text-[#2B1A00]">Popular</span>

            <div class="grid h-8 w-8 place-items-center text-[#37D67A]" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-none stroke-current stroke-2">
                <path d="M5 12h14M12 5v14" />
                <path d="M7 7h10v10H7z" />
              </svg>
            </div>

            <h3 class="mt-4 text-sm font-bold text-white">{{ plan.name }}</h3>
            <p class="mt-2 text-[34px] font-bold leading-none" :class="plan.featured ? 'text-[#F3A30B]' : 'text-white'">
              {{ plan.price }}<span v-if="plan.suffix" class="ml-1 text-xs font-medium text-white/80">{{ plan.suffix }}</span>
            </p>

            <div class="my-7 h-px bg-white/28" />

            <ul class="space-y-4 text-xs text-white/84">
              <li v-for="item in plan.items" :key="item" class="flex items-center gap-3">
                <span class="text-[#37D67A]">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <a
              href="#"
              class="mt-7 inline-flex h-9 w-full items-center justify-center rounded-[4px] border border-white/45 text-xs font-bold text-white transition hover:bg-white hover:text-[#17122F]"
              :class="plan.featured ? 'border-[#5F4CE2] bg-[#5F4CE2]' : ''"
            >
              Get Started
            </a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
