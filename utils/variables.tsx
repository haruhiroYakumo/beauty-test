export type SimpleItemArray = {
  label: string,
  id: number
}

export const NAVIGATION_ELEMENTS: Array<SimpleItemArray> = [
  {
    label: 'Top',
    id: 1
  },
  {
    label: 'Accounts',
    id: 2
  },
  {
    label: 'Videos',
    id: 3
  },
  {
    label: 'Products',
    id: 4
  },
  {
    label: 'Hashtags',
    id: 5
  }
];

// ---------------------------------------------------------------------------------------------------------------------

export const TAGS_PLACEHOLDER_DATA: Array<SimpleItemArray> = [
  {
    id: 1,
    label: 'aster'
  },
  {
    id: 2,
    label: 'lantana'
  },
  {
    id: 3,
    label: 'lily'
  },
  {
    id: 4,
    label: 'cherry blossom'
  }
];

// ---------------------------------------------------------------------------------------------------------------------

export type DynamicArrayDataItem = {
  type: string,
  avatar: string,
  name: string,
  storyImage: string,
  storyTitle: string,
  itemName: string,
  itemSource: string,
  id: number,
  itemImage: string
}

export const DYNAMIC_ARRAY_DATA: Array<DynamicArrayDataItem> = [
  {
    type: 'fullwidth',
    avatar: 'https://cnet2.cbsistatic.com/img/9tf6BfVtKOpwjMwKYAc2usl0WRg=/105x158:744x517/1200x675/2020/01/20/ada6b2c1-465f-409e-8956-df61acd3a067/bouqs-valentines-day-flowers.jpg',
    name: 'Cherry Starfighter',
    storyImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-flowers-1579719085.jpg',
    storyTitle: 'Dichromatic Shifting Rabbit',
    itemName: 'Single Flower',
    itemSource: 'SFL hub',
    id: 1,
    itemImage: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    type: 'fullwidth',
    avatar: 'https://cnet2.cbsistatic.com/img/9tf6BfVtKOpwjMwKYAc2usl0WRg=/105x158:744x517/1200x675/2020/01/20/ada6b2c1-465f-409e-8956-df61acd3a067/bouqs-valentines-day-flowers.jpg',
    name: 'Cherry1 Starfighter2',
    storyImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-flowers-1579719085.jpg',
    storyTitle: 'Dichromatic Shifting Rabbit',
    itemName: 'Single Flower',
    itemSource: 'SFL hub',
    id: 98,
    itemImage: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    type: 'fullwidth',
    avatar: 'https://cnet2.cbsistatic.com/img/9tf6BfVtKOpwjMwKYAc2usl0WRg=/105x158:744x517/1200x675/2020/01/20/ada6b2c1-465f-409e-8956-df61acd3a067/bouqs-valentines-day-flowers.jpg',
    name: 'Perfect Blossom',
    storyImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-flowers-1579719085.jpg',
    storyTitle: 'Dichromatic Shifting Rabbit',
    itemName: 'Single Flower',
    itemSource: 'SFL hub',
    id: 45,
    itemImage: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    type: 'halfwidth',
    avatar: 'https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg',
    name: 'Cherry Starfighter',
    storyImage: 'https://www.thespruce.com/thmb/H-iQrPNeFmnylx-LzZwUC9gJA34=/1887x1415/smart/filters:no_upscale()/GettyImages-971582964-ee0f28aa66b04fb1a54171fa4bdee7a6.jpg',
    storyTitle: 'Dichromatic Shifting',
    itemName: 'Single Flower',
    itemSource: 'SFL hub',
    id: 2,
    itemImage: 'https://cnet2.cbsistatic.com/img/9tf6BfVtKOpwjMwKYAc2usl0WRg=/105x158:744x517/1200x675/2020/01/20/ada6b2c1-465f-409e-8956-df61acd3a067/bouqs-valentines-day-flowers.jpg'
  },
  {
    type: 'halfwidth',
    avatar: 'https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg',
    name: 'Cherry Starfighter',
    storyImage: 'https://www.thespruce.com/thmb/H-iQrPNeFmnylx-LzZwUC9gJA34=/1887x1415/smart/filters:no_upscale()/GettyImages-971582964-ee0f28aa66b04fb1a54171fa4bdee7a6.jpg',
    storyTitle: 'Dichromatic Shifting',
    itemName: 'Single Flower',
    itemSource: 'SFL hub',
    id: 4,
    itemImage: 'https://cnet2.cbsistatic.com/img/9tf6BfVtKOpwjMwKYAc2usl0WRg=/105x158:744x517/1200x675/2020/01/20/ada6b2c1-465f-409e-8956-df61acd3a067/bouqs-valentines-day-flowers.jpg'
  },
  {
    type: 'halfwidth',
    avatar: 'https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg',
    name: 'Cherry Starfighter',
    storyImage: 'https://www.thespruce.com/thmb/H-iQrPNeFmnylx-LzZwUC9gJA34=/1887x1415/smart/filters:no_upscale()/GettyImages-971582964-ee0f28aa66b04fb1a54171fa4bdee7a6.jpg',
    storyTitle: 'Dichromatic Shifting',
    itemName: 'Single Flower',
    itemSource: 'SFL hub',
    id: 41,
    itemImage: 'https://cnet2.cbsistatic.com/img/9tf6BfVtKOpwjMwKYAc2usl0WRg=/105x158:744x517/1200x675/2020/01/20/ada6b2c1-465f-409e-8956-df61acd3a067/bouqs-valentines-day-flowers.jpg'
  },
  {
    type: 'triwidth',
    avatar: 'https://images-na.ssl-images-amazon.com/images/I/71zNWbTHzxL._SX679_.jpg',
    name: 'Cherry Starfighter',
    storyImage: 'https://www.thespruce.com/thmb/H-iQrPNeFmnylx-LzZwUC9gJA34=/1887x1415/smart/filters:no_upscale()/GettyImages-971582964-ee0f28aa66b04fb1a54171fa4bdee7a6.jpg',
    storyTitle: 'Dichromatic Shifting Rabbit',
    itemName: 'Single Flower',
    itemSource: 'SFL hub',
    id: 3,
    itemImage: 'https://cnet2.cbsistatic.com/img/9tf6BfVtKOpwjMwKYAc2usl0WRg=/105x158:744x517/1200x675/2020/01/20/ada6b2c1-465f-409e-8956-df61acd3a067/bouqs-valentines-day-flowers.jpg'
  },
  {
    type: 'triwidth',
    avatar: 'https://images-na.ssl-images-amazon.com/images/I/71zNWbTHzxL._SX679_.jpg',
    name: 'Cherry Starfighter',
    storyImage: 'https://www.thespruce.com/thmb/H-iQrPNeFmnylx-LzZwUC9gJA34=/1887x1415/smart/filters:no_upscale()/GettyImages-971582964-ee0f28aa66b04fb1a54171fa4bdee7a6.jpg',
    storyTitle: 'Dichromatic Shifting Rabbit',
    itemName: 'Single Flower',
    itemSource: 'SFL hub',
    id: 5,
    itemImage: 'https://cnet2.cbsistatic.com/img/9tf6BfVtKOpwjMwKYAc2usl0WRg=/105x158:744x517/1200x675/2020/01/20/ada6b2c1-465f-409e-8956-df61acd3a067/bouqs-valentines-day-flowers.jpg'
  },
  {
    type: 'triwidth',
    avatar: 'https://images-na.ssl-images-amazon.com/images/I/71zNWbTHzxL._SX679_.jpg',
    name: 'Cherry Starfighter',
    storyImage: 'https://www.thespruce.com/thmb/H-iQrPNeFmnylx-LzZwUC9gJA34=/1887x1415/smart/filters:no_upscale()/GettyImages-971582964-ee0f28aa66b04fb1a54171fa4bdee7a6.jpg',
    storyTitle: 'Dichromatic Shifting Rabbit',
    itemName: 'Single Flower',
    itemSource: 'SFL hub',
    id: 54,
    itemImage: 'https://cnet2.cbsistatic.com/img/9tf6BfVtKOpwjMwKYAc2usl0WRg=/105x158:744x517/1200x675/2020/01/20/ada6b2c1-465f-409e-8956-df61acd3a067/bouqs-valentines-day-flowers.jpg'
  },
  {
    type: 'triwidth',
    avatar: 'https://images-na.ssl-images-amazon.com/images/I/71zNWbTHzxL._SX679_.jpg',
    name: 'Cherry Starfighter',
    storyImage: 'https://www.thespruce.com/thmb/H-iQrPNeFmnylx-LzZwUC9gJA34=/1887x1415/smart/filters:no_upscale()/GettyImages-971582964-ee0f28aa66b04fb1a54171fa4bdee7a6.jpg',
    storyTitle: 'Dichromatic Shifting Rabbit',
    itemName: 'Single Flower',
    itemSource: 'SFL hub',
    id: 98,
    itemImage: 'https://cnet2.cbsistatic.com/img/9tf6BfVtKOpwjMwKYAc2usl0WRg=/105x158:744x517/1200x675/2020/01/20/ada6b2c1-465f-409e-8956-df61acd3a067/bouqs-valentines-day-flowers.jpg'
  }
];
