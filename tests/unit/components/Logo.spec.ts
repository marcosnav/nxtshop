import { shallowMount } from '@vue/test-utils';
import Logo from '@/components/Logo.vue';

describe('<Logo>', () => {
  const component = shallowMount(Logo);

  test('renders properly', () => {
    const logoSquares = component.findAll('.Logo__icon-sq');
    expect(component.classes('Logo')).toBeTruthy();
    expect(component.text()).toMatch('NxtShop');
    expect(logoSquares.length).toBe(3);
    expect(component.element).toMatchSnapshot();
  });

  describe(':loading=true', () => {
    test('animates the logo icon', () => {
      expect(component.classes('Logo--loading-anim')).toBeFalsy();

      component.setProps({ loading: true });
      expect(component.classes('Logo--loading-anim')).toBeTruthy();
      expect(component.element).toMatchSnapshot();
    });
  });
});
