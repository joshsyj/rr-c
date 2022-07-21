<template>
  <div class="sparrow">
    <div class="sparrow-content" v-show="showEdit">
      <iframe class="sparrow-iframe" src="http://localhost:8000/" />
    </div>
    <div class="sparrow-button" @click="toggleEdit">
      <img class="sparrow-button-icon" src="@/assets/images/sparrow.png" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sparrow',
  data() {
    return {
      showEdit: false,
    }
  },
  methods: {
    toggleEdit() {
      this.showEdit = !this.showEdit
    },
  },
}
</script>
<style lang="scss" scoped>
.sparrow {
  bottom: 32px;
  position: fixed;
  z-index: 10000;
  right: 32px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
}
.sparrow-button {
  background: #304156;
  width: 56px;
  height: 56px;
  padding: 15px;
  border-radius: 68px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
}
.sparrow-content {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  overflow: hidden;
}
.sparrow-iframe {
  border: 0;
  width: 1200px;
  height: 600px;
}
.sparrow-button-icon {
  width: 100%;
  height: 100%;
}
</style>
