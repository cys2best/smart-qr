export const padLeadingZeros = (number: number, size: number = 2): string => {
    let s = number+"";
    while (s.length < size) s = "0" + s;
    return s;
  };
  
  export default padLeadingZeros;
  