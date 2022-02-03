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
    currentId: 0,
    users: [],
  }),
  components: {
    User,
  },
  methods: {
    loadUsers() {
      this.axios
        .get("https://61f41a9710f0f7001768c80c.mockapi.io/users")
        .then((response) => {
          this.users = response.data;
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
