<template>
  <v-list-item link :to="data[2]">
    <v-list-item-action>
      <v-icon>{{ data[0] }}</v-icon>
    </v-list-item-action>

    <v-list-item-content>
      <v-list-item-title class="text-left">{{ data[1] }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "Home",
  props: ["data"],
};
</script>
