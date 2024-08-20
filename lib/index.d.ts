/**
 * @example
 * // Create your instance
 * const gradient = new Gradient()
 *
 * // Call `initGradient` with the selector to your canvas
 * gradient.initGradient('#gradient-canvas')
 * @link https://whatamesh.vercel.app/
 */
class Gradient {
  /**
   * Creates an instance of Gradient.
   *
   * @memberof Gradient
   */
  constructor();

  /**
   * Pauses the gradient animation.
   *
   * @memberof Gradient
   */
  pause(): void;

  /**
   * Plays the gradient animation.
   *
   * @memberof Gradient
   */
  play(): void;

  /**
   * Initializes the gradient with the provided element or selector.
   *
   * @param {string} elementOrSelector - An HTMLCanvasElement or a selector to the canvas element.
   * @memberof Gradient
   */
  initGradient(elementOrSelector: HTMLCanvasElement | string): void;

  /**
   * Toggles the color at the specified index.
   *
   * @param {number} index - The index of the color to toggle.
   * @memberof Gradient
   */
  toggleColor(index: number): void;

  /**
   * Shows the legend for the gradient.
   *
   * @memberof Gradient
   */
  showGradientLegend(): void;

  /**
   * Hides the legend for the gradient.
   *
   * @memberof Gradient
   */
  hideGradientLegend(): void;
}

export { Gradient };
