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
    };

    return (
      <button class={`btn ${methods.getAllButtonParams(props)}`}>
        {children}
      </button>
    );
  }
};
