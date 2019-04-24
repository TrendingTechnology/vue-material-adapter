import { cssClasses } from './constants';

export default {
  name: 'mdc-top-app-bar-row',
  props: {
    tag: {
      type: String,
      default() {
        return 'div';
      },
    },
  },
  functional: true,

  render(
    createElement,
    {
      props: { tag },
      slots,
      data: { attrs, staticClass },
    },
  ) {
    return createElement(
      tag,
      { class: [cssClasses.ROW, staticClass], attrs },
      slots().default,
    );
  },
};