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
            <v-img :src="avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content class="text-left">
            <v-list-item-title class="font-weight-black"
              >SocialLink</v-list-item-title
            >
            <v-list-item-subtitle>{{ user.name }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-3"></v-divider>

        <v-list dense nav shaped v-for="item in items" :key="item[2]">
          <Navigation :data="item" />
        </v-list>
      </v-navigation-drawer>
    </v-row>
    <v-main class="px-12 py-3">
      <v-container>
        <router-view v-on:login="loadUser" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  data: () => ({
    currentId: 0,
    user: "",
    avatar: "https://randomuser.me/api/portraits/men/" + 0 + ".jpg",
    items: [
      ["mdi-home-outline", "Главная", "/"],
      ["mdi-account-outline", "Мой профиль", "/profile/"],
      ["mdi-account-multiple-outline", "Найти друзей", "/search/"],
    ],
  }),
  components: {
    Navigation,
  },
  methods: {
    loadUser() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/users/" + this.currentId)
        .then((response) => {
          this.user = response.data;
          this.items[0][2] = "/" + this.currentId;
          this.items[1][2] = "/profile/" + this.currentId;
          this.items[2][2] = "/search/" + this.currentId;
        });
    },
  },

  watch: {
    $route() {
      this.currentId = this.$route.params.id;
      this.avatar =
        "https://randomuser.me/api/portraits/men/" + this.currentId + ".jpg";
      this.loadUser();
    },
  },

  mounted() {
    this.currentId = this.$route.params.id;
    this.avatar =
      "https://randomuser.me/api/portraits/men/" + this.currentId + ".jpg";
    this.loadUser();
  },
};
</script>
