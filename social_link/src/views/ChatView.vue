<template>
  <div>
    <v-card>
      <v-app-bar color="green" dark prominent height="37px">
        <template v-slot:extension>
          <v-tabs align-with-title class="overflow-x-auto">
            <v-tab
              v-for="person in people"
              :key="person.id"
              @click="updateMessage(person.id)"
              >{{ person.name }}</v-tab
            >
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet id="scrolling-techniques-4" class="overflow-y-auto">
        <ChatWindow :text="text" :author="author" @send-data="sendMessage">
          <div v-for="item in friend_messages" :key="item.id">
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
      this.updateMessage(this.friendId);
    }, 10000);
    this.loadMessage();
    this.loadUsers();
    this.currentId = this.$route.params.id;
  },
  methods: {
    loadUsers() {
      this.axios
        .get("https://61f41a9710f0f7001768c80c.mockapi.io/users")
        .then((response) => {
          this.people = response.data;
        });
    },
    updateMessage(friend_id) {
      this.loadMessage();
      let friend_messages = [];
      this.friendId = friend_id;
      this.messages.forEach((elem) => {
        if (elem.to == friend_id) {
          friend_messages.push(elem);
        }
      });
      this.friend_messages = friend_messages;
    },
    loadMessage() {
      this.axios
        .get(
          "https://61f41a9710f0f7001768c80c.mockapi.io/messages?author=" +
            this.currentId
        )
        .then((response) => {
          this.messages = response.data;
        });
    },
    sendMessage(data) {
      data["author"] = Number(this.currentId);
      data["to"] = this.friendId;
      data["datetime"] = 12;
      this.axios
        .post("https://61f41a9710f0f7001768c80c.mockapi.io/messages", data)
        .then((response) => {
          this.messages = response.data;
        });
    },
  },
  watch: {
    $route() {
      this.currentId = this.$route.params.id;
    },
  },

  data() {
    return {
      author: "",
      text: "",
      messages: [],
      people: [],
      friendId: 1,
      cuurentId: 1,
      friend_messages: [],
    };
  },
};
</script>
