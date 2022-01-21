<template>
  <v-app id="app">
      <v-row class="fill-height" no-gutters>
        <v-navigation-drawer
          absolute
          right
          hide-overlay
          expand-on-hover
          dark
          mini-variant-width="56"
          color="green"
          permanent
        >
          <v-list-item two-line class="px-2">
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/3.jpg"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content class="text-left">
              <v-list-item-title class="font-weight-black"
                >SocialLink</v-list-item-title
              >
              <v-list-item-subtitle>{{user.name}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-3"></v-divider>

          <v-list dense nav shaped>
            <v-list-item link to="/">
              <v-list-item-action>
                <v-icon>mdi-home-outline</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title class="text-left">Главная</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link to="/profile/3">
              <v-list-item-action>
                <v-icon>mdi-account-outline</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title class="text-left">Мой профиль</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link to="/search/2">
              <v-list-item-action>
                <v-icon>mdi-account-multiple-outline</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title class="text-left">Найти друзей</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-list class="grow">
          <v-list-item v-for="link in links" :key="link" link>
            <v-list-item-title v-text="link"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-row>
    <v-main class="px-12 py-3">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    currentId: null,
    user: null,
  }),
  methods: {
    loadUser() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/users/" + this.currentId)
        .then((response) => {
          this.user = response.data;
        });
    },
  },

  watch: {
    $route() {
      this.currentId = this.$route.params.id;
      this.loadUser();
    },
  },

  mounted() {
    this.currentId = this.$route.params.id;
    this.loadUser();
  },
};
</script>
