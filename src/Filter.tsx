function FilteredWater(
  contaminated: string[],
  contaminates: string[],
): string[] {
  let filteredWater: string[] = contaminated.filter(
    (contaminate) => !contaminates.includes(contaminate),
  );
  return filteredWater;
}

export default FilteredWater;
