<template>
  <div class="docs">
    <section class="section">
      <div class="container">
        <h2 class="is-size-2">Dokumentation</h2>
      </div>
      <div class="container">
        <h4 class="is-size-4">Väderprognos-app</h4>
        <p>Min idé handlar om en ren och enkel webbsida för att kolla på vädret i vilken stad som helst runt hela världen.
          <br>Användarna får väjla staden genom att knappa in dess namn i ett input-fält.
        </p>
      </div>
      <div class="container">
        <h4 class="is-size-4">Utmaningar</h4>
        <p>
          Appen måste vara utformad med Vue och använda flera komponenter för olika funktionaliteter.
          Den behöver också hämta väderdata från en extern tjänst och bearbeta svaret. Jag har valt
          <a href="https://www.openweathermap.org">OpenWeatherMap</a> som erbjuder gratis tillgång i sitt API efter man har registrerat sig.
          Datan måste sedan sparas globalt: flera komponenter kommer att behöva läsa/skriva från och till samma källa. Vuex passar bra för uppgiften.
        </p>
      </div>
      <div class="container">
        <h4 class="is-size-4">Vue CLI & konfiguration</h4>
        <p>För att skapa projektet har jag använt Vue-CLI genom att installera det som globalt paket och sedan använda Vue UI för att förbereda själva projekt:</p>
        <pre class="has-background-black has-text-white">npm install -g @vue/cli<br>vue ui</pre>
        <p>Vue UI startar en lokal webbsida där man kan skapa ett nytt projekt från grunden med hjälp av ett enkelt, snyggt gränssnytt. Mallet som skapas av Vue UI har redan på plats det mesta som behövs för att börja med Vue, t.ex. det kommer med Router, Vuex, Sass och EsLint redan konfigurerade.</p>
      </div>
      <div class="container">
        <h4 class="is-size-4">Axios & API</h4>
        <p>
          <a href="https://github.com/axios/axios">Axios</a> är ett berömt bibliotek för att kommunicera via HTTP, och passar väldigt bra för att prata med externa API:er. För att få ett svar i form av JSON anropar jag get() metod med
          en sträng som innehåller API adress med önskade parametrar. Ett exempel i detta fall är:
        </p>
        <pre>axios.get("https://api.openweathermap.org/data/2.5/weather?q=Gothenburg&appid=0ec9f3609b6817dca551684e5b7d2d13&units=metric");</pre>
        <p>I exemplet skickas <i>Gothenburg</i> som stad att söka om, och OpenWeatherMap kräver en <i>appid</i> för att verifiera vem som skickar förfrågan.</p>
        <p>Axios returnerar en Promise, ett sätt för att hantera asynkrona händelser, dvs funktioner som inte kan svara direkt utan endast efter en stund. Det enklaste och snyggaste sättet att hantera en Promise är <a href="https://javascript.info/async-await">async/await</a>:</p>
        <pre>async () => {<br>    const response = await axios.get("...");<br>}</pre>
        <p>I kontexter där async/await inte kan användas kan man anropa then() på en Promise för att göra saker när händelsen är klar:</p>
        <pre>axios.get("...").then((data) => { response = data; }</pre>
      </div>
      <div class="container">
        <h4 class="is-size-4">Forecast Komponenter & Vuex</h4>
        <p>När användaren skriver ett namn i sökfältet kommer appen att trigga en Vuex <i>action</i> (FETCH_FORECAST). Detta action använder Axios för att hämta väderprognos och får tillbaka ett svar som har en prognos om var tredje timme under de nästkommande 5 dagarna. Resultatet filtreras för att spara endast en prognos per dygn. Till sist använder en <i>mutation</i> för att spara det bearbetat resultatet i Vuex <i>state</i>.</p>
        <p>Komponenten ForecastGrid lyssnar på ändringar i state.forecast och visar en ForecastBlock för varje element som finns där i, dvs en för varje dygn. ForecastBlock får all data som en HTML property och därför behöver inte tillgång i state.</p>
      </div>
    </section>
  </div>
</template>


<style lang="sass" scoped>
pre
  padding: 5px 15px

.container
  padding: 10px 0

  h2, h4
    font-weight: bold
</style>

