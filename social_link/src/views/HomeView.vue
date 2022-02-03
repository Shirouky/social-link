<template>
  <div>
    <v-list dense nav v-for="post in posts" :key="post.id">
      <Post :item="post" />
    </v-list>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  data: () => ({
    user: [],
    posts: [],
  }),
  components: {
    Post,
  },
  methods: {
    loadPosts() {
      this.axios
        .get("https://61f41a9710f0f7001768c80c.mockapi.io/posts")
        .then((response) => {
          var data = response.data;
          for (let i = 1; i < 3; i++) {
            var more_data = [];
            this.axios
              .get("https://61f41a9710f0f7001768c80c.mockapi.io/users?id=" + i)
              .then((resp) => {
                const data = resp.data[0];
                const more_data_id = {
                  avatar: data.avatar,
                  username: data.name,
                };
                more_data[i] = more_data_id;
              });
          }
          for (var index in data) {
            data[index] = Object.assign(
              data[index],
              more_data[data[index].userId - 1]
            );
          }
          this.posts = data;
        });
    },
  },

  watch: {
    $route() {
      this.loadPosts();
    },
  },

  mounted() {
    this.loadPosts();
  },
};
</script>
