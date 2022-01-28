<template>
  <div>
    <v-container fluid>
      <v-row dense>
        <v-col dense nav v-for="user in users" :key="user.id">
          <User :user="user" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import User from "@/components/User.vue";

export default {
  data: () => ({
    currentId: 2,
    users: [],
  }),
  components: {
    User,
  },
  methods: {
    loadUsers() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.users = response.data;
          this.users.forEach((user) => {
            user.avatar =
              "https://randomuser.me/api/portraits/men/" + user.id + ".jpg";
          });
        });
    },
  },

  watch: {
    $route() {
      this.avatar =
        "https://randomuser.me/api/portraits/men/" + this.currentId + ".jpg";
      this.loadUsers();
    },
  },

  mounted() {
    this.currentId = this.$route.params.id;
    this.avatar =
      "https://randomuser.me/api/portraits/men/" + this.currentId + ".jpg";
    this.loadUsers();
  },
};
</script>
