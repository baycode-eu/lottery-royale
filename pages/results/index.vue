<template>
  <ResultsPageWithResults />
</template>
<script>
import withReviews from "~/components/hocs/withReviews";
import ResultsPage from "~/components/pages/results";

const ResultsPageWithResults = withReviews(ResultsPage)

export default {
  components: { ResultsPageWithResults }
}
</script>
