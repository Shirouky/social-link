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
    user: null,
    posts: null,
  }),
  components: {
    Post,
  },
  methods: {
    loadPosts() {
      this.axios
        .get("http://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          this.posts = response.data;
          this.posts.forEach((post) => {
            var id = post.userId;
            this.axios
              .get("https://jsonplaceholder.typicode.com/users/" + id)
              .then((response) => {
                post.username = response.data.name;
                post.avatar =
                  "https://randomuser.me/api/portraits/men/" + id + ".jpg";
              });
          });
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
