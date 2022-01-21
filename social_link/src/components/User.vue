<template>
  <div class="d-flex flex-no-wrap justify-space-between">
    <v-card class="mx-auto" color="white" light>
      <v-list-item class="grow" two-line>
        <v-list-item-avatar>
          <v-img :src="avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content class="text-left">
          <v-list-item-title class="font-weight-black">{{
            item.title
          }}</v-list-item-title>
          <v-list-item-subtitle> автор {{ username }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text class="text-h5 font-weight-bold">
        {{ item.body }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-row align="center" justify="end">
            <v-icon class="mr-1"> mdi-heart </v-icon>
            <span class="mr-1">·</span>
            <v-icon class="mr-1"> mdi-share-variant </v-icon>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["item", "username", "avatar"],
};
</script>
