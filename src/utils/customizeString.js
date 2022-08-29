export const formatCash=(str) =>{
    let result = str;
    result = str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
      });
      return result;
}