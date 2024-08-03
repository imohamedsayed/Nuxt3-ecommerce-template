<template>
  <div class="chat-page">

    <v-container>
      <div class="chat" v-if="1 === 1">
        <div class="chat-content">
          <div class="replay" dir="ltr">
            <v-list-item
              flat
              prepend-avatar="~/assets/images/users/avatar-2.jpg"
            >
              <span class="text-muted d-block text-body-2">9 minuets ago</span>
              <v-card-text class="msg-text">Hello, how can i help</v-card-text>
            </v-list-item>
          </div>
          <div class="replay" dir="rtl">
            <v-list-item
              flat
              prepend-avatar="~/assets/images/users/avatar-1.jpg"
            >
              <span class="text-muted d-block text-body-2">Just Now</span>
              <v-card-text class="msg-text"
                >I forget my password, and iam afraid if i logged out i cant use
                my account again</v-card-text
              >
            </v-list-item>
          </div>
          <div class="replay" dir="ltr">
            <v-list-item
              flat
              prepend-avatar="~/assets/images/users/avatar-2.jpg"
            >
              <span class="text-muted d-block text-body-2">2 secs ago</span>
              <v-card-text class="msg-text"
                >Don't Worry you can reset your password if you forgot it with
                your email</v-card-text
              >
            </v-list-item>
          </div>
          <div class="replay" dir="rtl">
            <v-list-item
              flat
              prepend-avatar="~/assets/images/users/avatar-1.jpg"
            >
              <span class="text-muted d-block text-body-2">Just Now</span>
              <v-card-text class="msg-text">Thanks a lot</v-card-text>
            </v-list-item>
          </div>
          <div class="replay" dir="ltr">
            <v-list-item
              flat
              prepend-avatar="~/assets/images/users/avatar-2.jpg"
            >
              <span class="text-muted d-block text-body-2">just now</span>
              <v-card-text class="msg-text">You're welcome ❤️</v-card-text>
            </v-list-item>
          </div>
          <div class="replay" dir="rtl">
            <v-list-item
              flat
              prepend-avatar="~/assets/images/users/avatar-1.jpg"
            >
              <span class="text-muted d-block text-body-2">Just Now</span>
              <v-card-text class="msg-text">❤️❤️😘</v-card-text>
            </v-list-item>
          </div>
        </div>
        <div class="chat-input mt-10">
          <div class="d-flex align-center py-4">
            <v-text-field
              variant="text"
              label="Message"
              hint="we will reply as soon as possible"
              prepend-inner-icon="mdi-text"
              color="primary"
            ></v-text-field>
            <v-btn flat icon="mdi-send" class="text-primary"></v-btn>
          </div>
        </div>
      </div>
      <div v-else>
        <v-empty-state
            headline="Whoops"
            title="You have to login first to start chatting with us!"
            text="We are waiting you <3"
            image="./images/background/chat.svg"
          >
          <v-btn color="primary">login</v-btn>
        </v-empty-state>
      </div>

    </v-container>
  </div>
</template>

<script setup>
definePageMeta({
    enterClass: 'animate__animated animate__fadeInLeft',
    leaveClass: 'animate__animated animate__fadeOutRight'
})
</script>

<style lang="scss" scoped>
.chat-page {
  .chat {
    .chat-content {
      height: 70vh;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background: #5d88ff82;
        border-radius: 20px;
        transition: all 0.3s ease;

        &:hover {
          background: #5d87ff;
        }
      }

      .msg-text {
        background: #e8f7ff;
        display: inline-block;
        padding: 20px 10px;
        border-radius: 10px;
      }
    }
  }
}
</style>
