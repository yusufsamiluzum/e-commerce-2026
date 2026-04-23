declare module 'plotly.js-dist-min' {
  export function newPlot(
    root: HTMLElement | string,
    data: any[],
    layout?: any,
    config?: any
  ): Promise<any>;

  export function react(
    root: HTMLElement | string,
    data: any[],
    layout?: any,
    config?: any
  ): Promise<any>;

  export function purge(root: HTMLElement | string): void;
}
