import { shallowMount } from '@vue/test-utils';
import SectionTitle from '@/components/SectionTitle.vue';

describe('<SectionTitle>', () => {
  const component = shallowMount(SectionTitle, {
    slots: {
      default: 'SmartWatch X',
    },
  });

  test('renders properly', () => {
    expect(component.classes('SectionTitle')).toBeTruthy();
    expect(component.text()).toMatch('SmartWatch X');
    expect(component.element).toMatchSnapshot();
  });
});
