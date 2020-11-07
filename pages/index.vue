<template>
  <LandingPageWithReviews />
</template>
<script>
import LandingPage from "../components/pages/landingPage"
import withReviews from "~/components/hocs/withReviews";

const LandingPageWithReviews = withReviews(LandingPage)

export default {
  name: 'index',
  components: { LandingPageWithReviews }
}
</script>
