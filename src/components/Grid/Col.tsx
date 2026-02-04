import { memo, useMemo } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import { GRID_BREAKPOINTS, GRID_CLASS, GRID_COL_PREFIX, GRID_CSS_VARS } from './constants';
import { normalizeColSize, normalizeFlex } from './helper';
import type { FC, PropsWithChildren, CSSProperties } from 'react';
import type { GridBreakpoint, GridColProps, GridColSize } from './interface';

export const Col: FC<PropsWithChildren<GridColProps>> = props => {
  const {
    children,
    span,
    offset,
    order,
    pull,
    push,
    flex,
    sm,
    md,
    lg,
    className,
    style,
    prefixCls = GRID_COL_PREFIX,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const responsive = { sm, md, lg } as Record<GridBreakpoint, GridColSize | undefined>;
  const { responsiveClasses, responsiveFlexVars } = useMemo(() => {
    const classList: string[] = [];
    const flexVars: Record<string, string> = {};

    const applyBreakpoint = (breakpoint: string, size?: GridColSize) => {
      if (!size) return;

      const normalized = normalizeColSize(size);
      const hasFlex = normalized.flex !== undefined;

      if (normalized.span !== undefined && !hasFlex) {
        classList.push(classes(`${breakpoint}-${normalized.span}`));
      }
      if (normalized.offset !== undefined) {
        classList.push(classes(`${breakpoint}-${GRID_CLASS.offset}-${normalized.offset}`));
      }
      if (normalized.order !== undefined) {
        classList.push(classes(`${breakpoint}-${GRID_CLASS.order}-${normalized.order}`));
      }
      if ((normalized as GridColSize & { pull?: number }).pull !== undefined) {
        classList.push(classes(`${breakpoint}-${GRID_CLASS.pull}-${(normalized as GridColSize & { pull?: number }).pull}`));
      }
      if ((normalized as GridColSize & { push?: number }).push !== undefined) {
        classList.push(classes(`${breakpoint}-${GRID_CLASS.push}-${(normalized as GridColSize & { push?: number }).push}`));
      }
      if (normalized.flex !== undefined) {
        const flexValue = normalizeFlex(normalized.flex);
        if (flexValue) {
          flexVars[`${GRID_CSS_VARS.colFlexPrefix}${breakpoint}`] = flexValue;
        }
      }
    };

    GRID_BREAKPOINTS.forEach((breakpoint) => applyBreakpoint(breakpoint, responsive[breakpoint]));

    return { responsiveClasses: classList, responsiveFlexVars: flexVars };
  }, [responsive, classes]);

  const flexValue = normalizeFlex(flex);

  const mergedStyle = {
    ...style,
    ...(flexValue ? { [GRID_CSS_VARS.colFlex]: flexValue } : {}),
    ...responsiveFlexVars
  } as CSSProperties;

  return (
    <div
      {...rest}
      style={mergedStyle}
      className={classes(void 0, joinCls(
        span !== undefined && !flexValue && classes(`${span}`),
        offset !== undefined && classes(`${GRID_CLASS.offset}-${offset}`),
        order !== undefined && classes(`${GRID_CLASS.order}-${order}`),
        push !== undefined && classes(`${GRID_CLASS.push}-${push}`),
        pull !== undefined && classes(`${GRID_CLASS.pull}-${pull}`),
        ...responsiveClasses,
        className
      ))}
    >
      {children}
    </div>
  );
};

export default memo(Col);
