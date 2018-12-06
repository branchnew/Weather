<template>
    <div class="forecastGrid tile is-ancestor">
        <ForecastBlock/><ForecastBlock/><ForecastBlock/><ForecastBlock/><ForecastBlock/>
    </div>
</template>

<script>
import ForecastBlock from "@/components/ForecastBlock.vue";

export default {
 name: 'ForecastGrid',
 components: {
    ForecastBlock
  }
}
</script>

<style>

</style>
