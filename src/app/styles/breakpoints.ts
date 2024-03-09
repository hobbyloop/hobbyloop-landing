interface Size {
  sm: string;
  md: string;
  lg: string;
}

const size: Size = {
  sm: "360px", // for small screen mobile
  md: "800px", //
  lg: "1200px", // 800px 이상
};

export const device = {
  sm: `(min-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
};
