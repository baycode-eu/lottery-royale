<template>
  <ResultsPageWithResults />
</template>
<script>
import withResults from "~/components/hocs/with-results";
import ResultsPage from "~/components/pages/results";

const ResultsPageWithResults = withResults(ResultsPage)

export default {
  components: { ResultsPageWithResults }
}
</script>
