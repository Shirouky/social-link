<template>
  <div class="d-flex justify-center">
    <v-card width="600px" class="mt-12 pa-10">
      <v-card-title> Регистрация </v-card-title>

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

      <v-text-field label="Введите имя" v-model="name" outlined></v-text-field>

      <v-text-field
        label="Введите свой сайт"
        v-model="website"
        outlined
      ></v-text-field>

      <v-text-field
        label="Введите email"
        v-model="email"
        outlined
      ></v-text-field>

      <v-text-field
        label="Введите свой город"
        v-model="city"
        outlined
      ></v-text-field>

      <v-text-field
        label="Введите свою компанию"
        v-model="company"
        outlined
      ></v-text-field>

      <v-text-field
        label="Введите аватар"
        v-model="photo"
        outlined
      ></v-text-field>

      <v-btn @click="register"> Зарегистрироваться </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    login: "",
    password: "",
    name: "",
    website: "",
    email: "",
    city: "",
    company: "",
    photo: "",
  }),
  methods: {
    register() {
      const data = {
        login: this.login,
        password: this.password,
        name: this.name,
        website: this.website,
        email: this.email,
        city: this.city,
        company: this.company,
        photo: this.photo,
      };
      this.axios;
      this.axios.post(
        "https://61f41a9710f0f7001768c80c.mockapi.io/users",
        data
      );
      this.$router.push("/profile/" + 4);
    },
  },
};
</script>
