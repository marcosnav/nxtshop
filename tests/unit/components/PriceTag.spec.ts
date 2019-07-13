import { shallowMount } from '@vue/test-utils';
import PriceTag from '@/components/PriceTag.vue';

describe('<PriceTag>', () => {
  test('renders properly', () => {
    const component = shallowMount(PriceTag, {
      slots: {
        default: '$199',
      },
    });
    expect(component.classes('PriceTag')).toBe(true);
    expect(component.text()).toMatch('$199');
    expect(component.element).toMatchSnapshot();
  });
});
