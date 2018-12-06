<template>
    <div class="searchField">
        <input type="text" :value="city" @input="update" class="input" :placeholder="text">
        <p> {{city}} </p>
    </div>
</template>

<script>
import axios from "axios";

const appid = '0ec9f3609b6817dca551684e5b7d2d13';
const apiAddress = 'https://api.openweathermap.org/data/2.5/weather';

export default {
  name: "SearchField",
  data: () => {{
    city: ''
    }
  },
  props: {
    text: String
  },
  methods: {
    update: async e => {
        console.log(e.target.value);
        try {
            const response = await axios.get(`${apiAddress}?q=${e.target.value}&appid=${appid}`);
            console.log(response);
        }

        catch (e){
            
        }
    }

  }
};
</script>

<style lang="sass">

</style>
