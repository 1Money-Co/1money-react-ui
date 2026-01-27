# Checklist (for Code Assistant)

## Imports
- [ ] 只从 `@1money/react-ui` 导入 UI 组件
- [ ] 未出现 `primereact/*` 直引

## Doc / Props
- [ ] 组件选择来自 `references/<Category>/<Component>.md`
- [ ] Props 优先与文档 API/示例一致
- [ ] 若使用 PrimeReact 兼容 props（例如 `invalid` / `paginator`），已确认该组件 `<X>/interface.ts` 支持

## Foundation
- [ ] 需要视觉规范时已参考 `references/Foundation/*`
- [ ] 未写死颜色值；自定义 spacing/typography 遵循 Foundation 约定

## States
- [ ] 按场景覆盖：loading / empty / error / disabled / validation（需要哪些写哪些）
- [ ] 状态呈现清晰（按钮 loading、字段 invalid+message、列表 empty 等）

## Output
- [ ] 输出包含：Components / States / Code
- [ ] TSX 可直接粘贴运行（命名清晰、最少依赖）
