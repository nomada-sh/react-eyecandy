export function modifyLessVars(vars: { [key: string]: string }) {
  // TODO: Add window.less type and remove ts-ignore
  // @ts-ignore
  if (window.less === undefined)
    console.warn('useTheme: window.less is undefined');
  // @ts-ignore
  else window.less.modifyVars(vars);
}