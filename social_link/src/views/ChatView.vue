<template>
  <div>
    <v-card>
      <v-app-bar
        color="green"
        dark
        prominent
        height=37px
      >

        <v-menu bottom left>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>Tab 1</v-tab>
            <v-tab>Tab 2</v-tab>
            <v-tab>Tab 3</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-4"
        class="overflow-y-auto"
      >
        <ChatWindow :text="text" :author="author" @send-data="sendMessage">
          <div v-for="item in messages" :key="item.id">
            <ChatMessage
              :author="item.author"
              :datetime="item.datetime"
              :text="item.text"
            ></ChatMessage>
          </div>
        </ChatWindow>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
import ChatMessage from "../components/ChatMessage.vue";
import ChatWindow from "../components/ChatWindow.vue";

export default {
  name: "Chat",
  components: {
    ChatMessage,
    ChatWindow,
  },
  mounted() {
    setInterval(() => {
      this.loadMessage();
    }, 10000);
  },
  methods: {
    loadMessage() {
      this.axios
        .get("https://61f41a9710f0f7001768c80c.mockapi.io/messages")
        .then((response) => {
          this.messages = response.data;
        });
    },
    sendMessage(data) {
      console.log("send-data", data);
      this.axios
        .post("https://61f41a9710f0f7001768c80c.mockapi.io/messages", data)
        .then((response) => {
          this.messages = response.data;
        });
    },
  },
  data() {
    return {
      author: "",
      text: "",
      messages: [],
    };
  },
};
</script>
