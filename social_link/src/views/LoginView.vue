<template>
  <div class="d-flex justify-center">
    <v-card width="600px" class="mt-12 pa-10">
      <v-card-title> Войдите в аккаунт </v-card-title>

      <v-text-field
        label="Введите логин"
        v-model="login"
        outlined
      ></v-text-field>

      <v-text-field
        label="Введите пароль"
        v-model="password"
        outlined
      ></v-text-field>

      <v-btn @click="authenticate"> Войти </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    login: "",
    password: "",
  }),
  methods: {
    authenticate() {
      this.axios
        .get(
          "https://61f41a9710f0f7001768c80c.mockapi.io/users"
        )
        .then((response) => {
          const users = response.data;
          var found = false;
          for (var index in users) {
            if (
              this.login == users[index].login &&
              this.password == users[index].password
            ) {
              this.$emit("currentId", users[index].id);
              this.$router.push("/profile/" + users[index].id);
              found = true;
              break;
            }
          }
          if (!found) {
            window.alert("Wrond login or password");
          }
        });
    },
  },
};
</script>
