type HorizontallItem = {
  id: number;
  value: number;
};

type VerticalItem = {
  id: number;
  value: HorizontallItem[];
};

export const generateRandomNumber = (min: number = 10): number =>
  Math.floor(Math.random() * 100) + min;

export const generateRandomArray = (length: number): VerticalItem[] => {
  const result = [];
  for (let i = 0; i < length; i++) {
    const subItems = [];
    const subItemsLength = generateRandomNumber();
    for (let j = 0; j < subItemsLength; j++) {
      subItems.push({ id: j, value: generateRandomNumber() });
    }
    result.push({ id: i, value: subItems });
  }
  return result;
};
