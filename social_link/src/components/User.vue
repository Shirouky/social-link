<template>
  <v-card light width="40vw">
    <v-card-title class="mt-8">
      <v-avatar size="56">
        <img :src="user.avatar" />
      </v-avatar>
      <v-divider vertical class="ma-2"></v-divider>
      <v-list width="28vw">
        <v-list-item two-line class="px-2">
          <v-list-item-content class="text-left">
            <v-list-item-title class="font-weight-black">{{
              user.name
            }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ user.address.city }}</v-list-item-subtitle
            >
            <v-btn link :to="'/profile/' + String(user.id)"
              class="d-flex flex-no-wrap justify-space-between ma-1"
              outlined
              color="green"
              width="240"
            >
              <v-icon
                >mdi-card-account-details-outline</v-icon
              >
              Перейти в профиль
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  props: ["user"],
};
</script>
