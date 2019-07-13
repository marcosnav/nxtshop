import { shallowMount } from '@vue/test-utils';
import OneButton from '@/components/OneButton.vue';

describe('<OneButton>', () => {
  test('renders properly', () => {
    const component = shallowMount(OneButton, {
      slots: {
        default: 'Add to Cart',
      },
    });
    expect(component.classes('OneButton')).toBeTruthy();
    expect(component.text()).toMatch('Add to Cart');
    expect(component.element).toMatchSnapshot();
  });

  describe('button sizes', () => {
    test('big=true', () => {
      const component = shallowMount(OneButton, {
        propsData: {
          big: true,
        },
      });
      expect(component.classes('OneButton--big')).toBeTruthy();
      expect(component.element).toMatchSnapshot();
    });

    test('small=true', () => {
      const component = shallowMount(OneButton, {
        propsData: {
          small: true,
        },
      });
      expect(component.classes('OneButton--small')).toBeTruthy();
      expect(component.element).toMatchSnapshot();
    });
  });

  describe('button types', () => {
    test('textline=true', () => {
      const component = shallowMount(OneButton, {
        propsData: {
          textline: true,
        },
      });
      expect(component.classes('OneButton--textline')).toBeTruthy();
      expect(component.element).toMatchSnapshot();
    });

    test('secondary=true', () => {
      const component = shallowMount(OneButton, {
        propsData: {
          secondary: true,
        },
      });
      expect(component.classes('OneButton--secondary')).toBeTruthy();
      expect(component.element).toMatchSnapshot();
    });
  });
});
