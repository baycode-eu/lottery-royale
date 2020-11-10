<template>
  <LandingPageWithReviews />
</template>
<script>
import LandingPage from "../components/pages/landing-page"
import withReviews from "~/components/hocs/with-reviews";

const LandingPageWithReviews = withReviews(LandingPage)

export default {
  name: 'index',
  components: { LandingPageWithReviews }
}
</script>
