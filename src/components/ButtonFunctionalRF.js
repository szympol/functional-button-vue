/* eslint-disable no-unused-vars */
import style from "./ButtonFunctionalRF.scss";
export default {
  name: "Button",
  functional: true,
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
  render(h, { props, children }) {
    const methods = {
      getBackgroundColor() {
        return props.backgroundColor ? "btn--background-color" : "";
      },
      getFontColor() {
        return props.fontColor ? "btn--font-color" : "";
      },
      getBoxShadow() {
        return props.boxShadow ? "btn--shadow" : "";
      },
      getOvalShape() {
        return props.ovalShape ? "btn--oval" : "";
      },
      getAllButtonParams() {
        return `${this.getBackgroundColor()} ${this.getFontColor()} ${this.getBoxShadow()} ${this.getOvalShape()}`;
      }
    };

    return (
      <button class={`btn ${methods.getAllButtonParams()}`}>{children}</button>
    );
  }
};
