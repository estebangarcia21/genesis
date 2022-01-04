import screenBreakpoints, { ScreenBreakpoints } from './screenBreakpoints';
import { useWindowDimensions } from './useWindowDimensions';

export type ResponsiveValueMap<T> = {
  [key in keyof Partial<ScreenBreakpoints>]: T;
};

/**
 * Mobile first responsive value selection.
 *
 * @param defaultValue
 * @param values
 * @returns
 */
export function useResponsiveValue<T>(
  defaultValue: T,
  values: ResponsiveValueMap<T>
): T {
  const { width, error } = useWindowDimensions();

  if (error) {
    console.error(error);
  }

  const screenBreakpointKeys = Object.keys(screenBreakpoints) as Array<
    keyof ScreenBreakpoints
  >;
  const sortedBreakpointKeys = screenBreakpointKeys.sort(
    (a, b) => screenBreakpoints[b] - screenBreakpoints[a]
  );

  const mapKeys = Object.keys(values) as Array<keyof ScreenBreakpoints>;

  for (const key of sortedBreakpointKeys) {
    const bpWidth = screenBreakpoints[key];

    if (width >= bpWidth && mapKeys.includes(key)) {
      return values[key]!;
    }
  }

  return defaultValue;
}
