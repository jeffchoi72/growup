import { css, CSSObject, Interpolation, InterpolationFunction, ThemedStyledProps } from 'styled-components';

interface BuildMediaQueryParams {
  minWidth?: number;
  maxWidth?: number;
}

export const SIZE = {
  mobile: { maxWidth: 743 },
  tablet: { minWidth: 744, maxWidth: 1127 },
  desktop: { minWidth: 1128 }
};

export const buildMediaQuery = ({
  minWidth,
  maxWidth
}: BuildMediaQueryParams) => {
  let query = "";

  if (minWidth) {
    query += `(min-width: ${minWidth}px)`;
  }

  if (minWidth && maxWidth) {
    query += " and ";
  }

  if (maxWidth) {
    query += `(max-width: ${maxWidth}px)`;
  }

  return query;
};

export const media = {
  mobile<T extends object>(
    first:
      | TemplateStringsArray
      | CSSObject
      | InterpolationFunction<ThemedStyledProps<T, {}>>,
    ...interpolations: Interpolation<ThemedStyledProps<T, {}>>[]
  ) {
    const mediaQuery = buildMediaQuery(SIZE.mobile);
    return css<T>`
      @media ${mediaQuery} {
        ${css<T>(first, ...interpolations)};
      }
    `;
  },
  tablet<T extends object>(
    first:
      | TemplateStringsArray
      | CSSObject
      | InterpolationFunction<ThemedStyledProps<T, {}>>,
    ...interpolations: Interpolation<ThemedStyledProps<T, {}>>[]
  ) {
    const mediaQuery = buildMediaQuery(SIZE.tablet);
    return css<T>`
      @media ${mediaQuery} {
        ${css<T>(first, ...interpolations)};
      }
    `;
  },
  desktop<T extends object>(
    first:
      | TemplateStringsArray
      | CSSObject
      | InterpolationFunction<ThemedStyledProps<T, {}>>,
    ...interpolations: Interpolation<ThemedStyledProps<T, {}>>[]
  ) {
    const mediaQuery = buildMediaQuery(SIZE.desktop);
    return css<T>`
      @media ${mediaQuery} {
        ${css<T>(first, ...interpolations)};
      }
    `;
  }
};
