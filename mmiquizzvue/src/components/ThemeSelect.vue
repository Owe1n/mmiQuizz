<template>
  <div class="container">
    <h1 class="theme-title m-5">LE SUPER QUIZZ MMI</h1>
    <div class="row">
      <div id="card" class="col-6">
        <h3 class="text-left m-3">Thème</h3>
        <button
          id="boutton"
          class="btn btn-primary m-5 col-8"
          @click="montrerListe = !montrerListe"
        >
          <h2 class="m-auto">{{ theme ? theme.titre : "Choisir un thème..." }}</h2>
        </button>
        <div class="d-flex flex-column mt-n4 mb-5" v-if="montrerListe">
          <button
            id="boutton2"
            type="button"
            class="col-3 mx-auto btn my-2"
            v-for="theme in list_theme"
            :key="theme.id"
            @click="selectTheme(theme)"
          >{{ theme.titre }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSelect",
  props: ["list_theme"],
  data: function() {
    return {
      theme: null,
      montrerListe: false
    };
  },
  methods: {
    selectTheme(theme) {
      this.theme = theme;
      this.montrerListe = false;
      this.$emit("select-theme", theme.id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.theme-title {
  margin-right: 1rem;
}

#card {
  border-radius: 20px;
  background-color: #f5b0c2;
}

.container {
  font-family: "Raleway", sans-serif;
}

h1 {
  font-weight: 800;
}

h3 {
  font-weight: 600;
  color: white;
}

#boutton {
  border: none;
  border-radius: 20px;
  background-color: #eb5787;
  box-shadow: 13px 15px 12px -10px rgba(0, 0, 0, 0.1);
}

#boutton2 {
  border-radius: 20px;
  background-color: #f4c6db;
  border: none;
  box-shadow: inset 13px 15px 12px -20px rgba(0, 0, 0, 0.1);
  font-weight: 500;
}
</style>
