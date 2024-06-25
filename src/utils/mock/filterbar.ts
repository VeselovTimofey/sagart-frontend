import type { IForm } from '../../components/FilterBarWidget/lib';

const filterBar: IForm = [
  {
    name: 'Price',
    fields: [
      { inputName: 'price_0_50', title: 'Under $50' },
      { inputName: 'price_50_100', title: '$50 - $100' },
      { inputName: 'price_100_500', title: '$100 - $500' },
      { inputName: 'price_500_1000', title: '$500 - $1000' },
      { inputName: 'price_1000_5000', title: '$1000 - $5000' },
      { inputName: 'price_over_5000', title: 'Over $5000' },
    ],
  },
  {
    name: 'Size',
    fields: [
      { inputName: 'size_small', title: 'Small (under 30cm)' },
      { inputName: 'size_medium', title: 'Medium (30cm - 60cm)' },
      { inputName: 'size_large', title: 'Large (60cm - 120cm)' },
      { inputName: 'size_extra_large', title: 'Extra Large (over 120cm)' },
    ],
  },
  {
    name: 'Orientation',
    fields: [
      { inputName: 'orientation_vertical', title: 'Vertical' },
      { inputName: 'orientation_horizontal', title: 'Horizontal' },
      { inputName: 'orientation_square', title: 'Square' },
      { inputName: 'orientation_panorama', title: 'Panorama' },
    ],
  },
  {
    name: 'Genre',
    fields: [
      { inputName: 'genre_abstract', title: 'Abstract' },
      { inputName: 'genre_landscape', title: 'Landscape' },
      { inputName: 'genre_portrait', title: 'Portrait' },
      { inputName: 'genre_still_life', title: 'Still Life' },
      { inputName: 'genre_surrealism', title: 'Surrealism' },
    ],
  },
  {
    name: 'Color',
    fields: [
      { inputName: 'color_red', title: 'Red' },
      { inputName: 'color_blue', title: 'Blue' },
      { inputName: 'color_green', title: 'Green' },
      { inputName: 'color_yellow', title: 'Yellow' },
      { inputName: 'color_black_white', title: 'Black & White' },
    ],
  },
];

export default filterBar;
