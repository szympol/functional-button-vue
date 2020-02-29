<template>
  <button class="btn" :class="getAllButtonParams()">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    backgroundColor: {
      type: Boolean,
      default: false
    },
    fontColor: {
      type: Boolean,
      default: false
    },
    boxShadow: {
      type: Boolean,
      default: false
    },
    ovalShape: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getBackgroundColor() {
      return this.backgroundColor ? "btn--background-color" : "";
    },
    getFontColor() {
      return this.fontColor ? "btn--font-color" : "";
    },
    getBoxShadow() {
      return this.boxShadow ? "btn--shadow" : "";
    },
    getOvalShape() {
      return this.ovalShape ? "btn--oval" : "";
    },
    getAllButtonParams() {
      return `${this.getBackgroundColor()} ${this.getFontColor()} ${this.getBoxShadow()} ${this.getOvalShape()}`;
    }
  }
};
</script>

<style scoped lang="scss">
$color-amber: #ffbe00;
$color-white: #fff;

.btn {
  display: inline-block;
  min-width: 150px;
  font-weight: 400;
  text-align: center;
  color: $color-white;
  background-color: transparent;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid $color-amber;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 4px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn--background-color {
  background-color: $color-amber;
}
.btn--font-color {
  color: $color-amber;
}
.btn--shadow {
  box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.3);
}
.btn--oval {
  width: auto;
  min-width: 0;
  border-radius: 15px;
}
</style>
