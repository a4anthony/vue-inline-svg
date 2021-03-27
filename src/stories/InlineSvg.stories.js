import InlineSvg from "../components/InlineSvg";
import "./style.css";

export default {
  title: "Inline Svg",
  component: InlineSvg,
  argTypes: {
    size: { control: "number" },
    classes: { control: "text" },
    path: { control: "text" }
  },
  parameters: {
    docs: {
      source: {
        type: "code"
      }
    }
  }
};

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { InlineSvg },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { ...args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    "<ul class='h-list' ><" +
    "li  v-for='(path,index) in paths' :key='index'><inline-svg :size='size' :classes='classes'  :path='path'/></li>" +
    "</ul>"
});

export const Primary = Template.bind({});
Primary.args = {
  size: 40,
  classes: "",
  // path: require(`!html-loader!./assets/code-brackets.svg`),
  paths: [
    require(`!html-loader!./assets/code-brackets.svg`),
    require(`!html-loader!./assets/colors.svg`),
    require(`!html-loader!./assets/comments.svg`),
    require(`!html-loader!./assets/direction.svg`),
    require(`!html-loader!./assets/flow.svg`),
    require(`!html-loader!./assets/plugin.svg`),
    require(`!html-loader!./assets/repo.svg`),
    require(`!html-loader!./assets/stackalt.svg`)
  ]
};
