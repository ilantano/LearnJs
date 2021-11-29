export const formatInput = e => {
  let checkIfNum;
  if (e.key !== undefined) {
    checkIfNum = e.key === 'e' || e.key === '+' || e.key === '-' || e.key === '.';
  } else if (e.keyCode !== undefined) {
    checkIfNum = e.keyCode === 69 || e.keyCode === 187 || e.keyCode === 189 || e.keyCode === 190;
  }
  return checkIfNum && e.preventDefault();
};
