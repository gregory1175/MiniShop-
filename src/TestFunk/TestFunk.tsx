
const getStepValue = (price: number, isAdding: boolean): number => {
    let step;
    if (isAdding) {
      if (price >= 1000) {
        step = 1000;
      } else if (price >= 100) {
        step = 100;
      } else if (price >= 10) {
        step = 10;
      } else if (price >= 1) {
        step = 1;
      } else {
        step = 0.01;
      }
    } else {
      if (price > 1000 && price < 10000) {
        step = 1000;
      } else if (price === 1000 && price < 1001 && price > 999) {
        step = 1;
      } else if (price > 100 && price < 1000) {
        step = 100;
      } else if (price === 100 && price < 101 && price > 99) {
        step = 1;
      } else if (price > 10 && price < 100) {
        step = 10;
      } else if (price === 10 && price < 11  && price > 9) {
        step = 1;
      } else if (price > 1 && price < 10) {
        step = 1;
      } else {
        step = 0.01;
      }
    }
    return isAdding ? step : -step;
  };