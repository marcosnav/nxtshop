import { shallowMount } from '@vue/test-utils';
import Tagline from '@/components/Tagline.vue';

describe('<Tagline>', () => {
  const component = shallowMount(Tagline, {
    slots: {
      default: 'Smart tech wrapping your wrist',
    },
  });

  test('renders properly', () => {
    expect(component.classes('Tagline')).toBeTruthy();
    expect(component.text()).toMatch('Smart tech wrapping your wrist');
    expect(component.element).toMatchSnapshot();
  });
});
