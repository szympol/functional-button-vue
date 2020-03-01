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
  render(h, context) {
    const getBackgroundColor = props =>
      props.backgroundColor ? "btn--background-color" : "";
    const getFontColor = props => (props.fontColor ? "btn--font-color" : "");
    const getBoxShadow = props => (props.boxShadow ? "btn--shadow" : "");
    const getOvalShape = props => (props.ovalShape ? "btn--oval" : "");

    const getAllButtonParams = props =>
      `${getBackgroundColor(props)} ${getFontColor(props)} ${getBoxShadow(
        props
      )} ${getOvalShape(props)}`;

    return (
      <button class={`btn ${getAllButtonParams(context.props)}`}>
        {context.children}
      </button>
    );
  }
};
