<template>
  <div>
    <v-row class="text-left">
      <v-col cols="10">
        <h1 class="green--text text--darken-2">
          <v-icon large color="green darken-2">mdi-account-outline</v-icon>
          {{ user.name }}
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="2">
        <img :src="avatar" style="max-width: 100%" />
      </v-col>
      <v-col cols="10" class="text-left">
        <p>
          Веб-сайт:
          <a href="user.website" target="_blank">{{ user.website }}</a>
        </p>
        <p>
          E-mail: <a href="user.email">{{ user.email }}</a>
        </p>
        <p>Город: {{ user.city }}</p>
        <p>Место работы: {{ user.company }}</p>
      </v-col>
    </v-row>
    <v-list dense nav v-for="post in posts" :key="post.id">
      <Post :item="post" :username="user.name" :avatar="avatar" />
    </v-list>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  data: () => ({
    currentId: 3,
    user: "",
    posts: [],
    avatar: "",
  }),
  components: {
    Post,
  },
  methods: {
    loadUser() {
      this.axios
        .get(
          "https://61f41a9710f0f7001768c80c.mockapi.io/users?id=" +
            this.currentId
        )
        .then((response) => {
          this.user = response.data[0];
        });
    },
    loadPosts() {
      this.axios
        .get(
          "https://61f41a9710f0f7001768c80c.mockapi.io/posts?userId=" +
            this.currentId
        )
        .then((response) => {
          const more_data = {
            avatar:
              "https://randomuser.me/api/portraits/men/" +
              this.currentId +
              ".jpg",
            username: this.user.name,
          };
          var data = response.data;
          for (var index in data) {
            data[index] = Object.assign(data[index], more_data);
          }
          this.posts = data;
        });
    },
  },

  watch: {
    $route() {
      this.currentId = this.$route.params.id;
      this.avatar =
        "https://randomuser.me/api/portraits/men/" + this.currentId + ".jpg";
      this.loadUser();
      this.loadPosts();
    },
  },

  mounted() {
    this.currentId = this.$route.params.id;
    this.avatar =
      "https://randomuser.me/api/portraits/men/" + this.currentId + ".jpg";
    this.loadUser();
    this.loadPosts();
  },
};
</script>