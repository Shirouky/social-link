<template>
  <div>
    <div class="chat-messages">
      <div class="scroll-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="chat-send-panel">
      <input
        type="text"
        placeholder="Сообщение..."
        class="chat-send-message-field"
        v-model="text"
      />
      <button>
        <img
          src="/img/send.png"
          @click="$emit('send-data', { text, author })"
        />
      </button>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "ChatWindow",
  data: () => ({
    author: "",
    text: "",
  }),
};
</script>
 
<style>
.chat-messages {
  width: calc(100vw - 60px);
  height: calc(100vh - 150px);
  overflow: auto;
  box-sizing: border-box;
}
.chat-messages .scroll-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px;
  min-height: calc(100vh - 150px);
  box-sizing: border-box;
}
.chat-send-panel {
  width: calc(100vw - 70px);
  height: 60px;
  box-sizing: border-box;
  background-color: #4caf50;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chat-send-panel input,
.chat-send-panel button {
  border-radius: 50px;
  color: white;
  font-size: 14px;
  border: 0;
}
::placeholder {
  color: #bdd8c9;
}
.chat-send-panel input {
  border: 2px solid white;
  padding: 10px 20px;
}
.chat-send-message-field {
  flex-grow: 1;
  color: white;
}
.chat-send-name-field {
  width: 100px;
  flex-grow: 0;
}
.chat-send-panel button {
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
  transition: 0.2s;
}
.chat-send-panel button:active {
  transform: scale(0.9);
}
.chat-send-panel button img {
  width: 100%;
}
</style>