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
            <v-list-item-subtitle>{{ name }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-3"></v-divider>

        <v-list dense nav shaped v-for="item in items" :key="item[2]">
          <Navigation :data="item" />
        </v-list>
      </v-navigation-drawer>
    </v-row>
    <v-main>
        <router-view v-on:login="loadUser" />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  data: () => ({
    currentId: 0,
    name: "",
    avatar: "",
    items: [
      ["mdi-home-outline", "Главная", "/"],
      ["mdi-account-outline", "Мой профиль", "/profile/"],
      ["mdi-account-multiple-outline", "Найти друзей", "/search/"],
      ["mdi-chat-outline", "Чат", "/chat/"],
    ],
  }),
  components: {
    Navigation,
  },
  methods: {
    loadUser() {
      this.axios
        .get(
          "https://61f41a9710f0f7001768c80c.mockapi.io/users?id=" +
            this.currentId
        )
        .then((response) => {
          this.name = response.data[0].name;
          this.items[0][2] = "/";
          this.items[1][2] = "/profile/" + this.currentId;
          this.items[2][2] = "/search/" + this.currentId;
          this.items[3][2] = "/chat/" + this.currentId;
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
