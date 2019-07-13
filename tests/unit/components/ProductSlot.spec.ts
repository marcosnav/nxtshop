import { mount } from '@vue/test-utils';
import ProductSlot from '@/components/ProductSlot.vue';
import { Catalog } from '@/store/types';

const productMockData: Catalog.ProductQuickView = {
  id: '1234-1234-1234',
  name: 'SmartWatch X',
  tagline: 'Smart tech wrapping your wrist',
  thumbnail: 'https://bla.bla.image.com/tech.jpg',
  price: '599',
};

describe('<ProductSlot>', () => {
  const component = mount(ProductSlot, {
    propsData: {
      product: productMockData,
    },
  });

  test('renders properly', () => {
    const priceTag = component.find('.PriceTag');
    const sectionTitle = component.find('.SectionTitle');
    const tagline = component.find('.Tagline');
    expect(component.classes('ProductSlot')).toBeTruthy();
    expect(priceTag.text()).toBe('$599');
    expect(sectionTitle.text()).toBe(productMockData.name);
    expect(tagline.text()).toBe(productMockData.tagline);
    expect(component.element).toMatchSnapshot();
  });
});
