<template>
  <div class="chat-message">
    <div class="info">{{ author }} {{ datetime }}</div>
    {{ text }}
  </div>
</template>
 
<script>
export default {
 name: "ChatMessage",
 props: {
  author: Number,
  datetime: Number,
  text: String,
 },
};
</script>
 
<style>
.chat-message {
  font-family: "Arial", sans-serif;
  font-size: 16px;
  padding: 15px 20px;
  border-radius: 20px;
  background: #77c27a;
  border: 1px solid #4caf50;
  box-shadow: 0 3px 5px 0 #5f5f5f73;
  color: white;
  margin-bottom: 15px;
}
.chat-message .info {
  color: #78909c;
  background-color: #eee;
  font-size: 13px;
  margin-bottom: 5px;
}
</style>