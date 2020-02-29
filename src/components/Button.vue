<template functional>
  <button class="btn" :class="$options.methods.getAllButtonParams(props)">
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
    getBackgroundColor(props) {
      return props.backgroundColor ? "btn--background-color" : "";
    },
    getFontColor(props) {
      return props.fontColor ? "btn--font-color" : "";
    },
    getBoxShadow(props) {
      return props.boxShadow ? "btn--shadow" : "";
    },
    getOvalShape(props) {
      return props.ovalShape ? "btn--oval" : "";
    },
    getAllButtonParams(props) {
      return `${this.getBackgroundColor(props)} ${this.getFontColor(
        props
      )} ${this.getBoxShadow(props)} ${this.getOvalShape(props)}`;
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
