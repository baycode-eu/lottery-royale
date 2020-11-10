<template>
  <landing-page-template>
    <template slot="welcome">
      <welcome text="Welcome, future lucky winner!" />
    </template>
    <template slot="lottery-brief">
      <lottery-brief text="Once in a lifetime, everybody has a chance to become a millionaire in a matter of time!" />
    </template>
    <template slot="social-proof">
      <social-proof :reviews="reviews" />
    </template>
    <template slot="lottery-win-grand">
      <lottery-win-grand
        before-cta-text="No need to wait no more. Imagine yourself having a penthouse, just because you were brave enough to test your luck."
        cta-text="Imagine yourself laying on the beach with a drink. Retire early, nothing more is needed. Lets do it now together."
      />
    </template>
    <template slot="call-to-action">
      <cta
        @clicked="ctaClicked"
        discount="And I want to get a -70% discount for a first bet."
        btn-text="I want to become a millionaire!"
      />
    </template>
    <template slot="citation">
      <citation
        cite="Everyone could win big money quickly, yet only those win, who dare."
        author="Sun Tzu"
      />
    </template>
  </landing-page-template>
</template>

<script>
import LandingPageTemplate from "~/components/templates/landing-page-template";
import Welcome from "~/components/organisms/landing/welcome";
import Cta from "~/components/organisms/landing/cta";
import SocialProof from "~/components/organisms/landing/social-proof";
import LotteryWinGrand from "~/components/organisms/landing/lottery-win-grand";
import LotteryBrief from "~/components/organisms/landing/lottery-brief";
import Citation from "~/components/organisms/landing/citation";

export default {
  components: {
    Citation,
    Welcome,
    LandingPageTemplate,
    LotteryBrief,
    LotteryWinGrand,
    SocialProof,
    Cta
  },

  methods: {
    ctaClicked(event) {
      // send analytics
      this.$router.push({"name": "results"})
    }
  },

  props: {
    reviews: {
      type: Array
    }
  }
}

</script>
