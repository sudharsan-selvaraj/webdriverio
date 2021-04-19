import { shadowFnFactory } from '../../scripts/shadowFnFactory'

/**
 *
 * Access an element inside a given element's shadowRoot.
 *
 * <example>
    :shadow$$.js
    it('should return an element inside a shadowRoot', () => {
        const innerEl = $('.input').shadow$('#innerEl');
        console.log(innerEl.getValue()); // outputs: 'test123'
    });
 * </example>
 *
 * If you are working with lots of nested shadow roots,
 * an alternative approach to `shadow$` is to use the [deep selector](https://webdriver.io/docs/selectors#deep-selectors).
 *
 * @alias element.shadow$
 * @param {String|Function} selector  selector or JS Function to fetch a certain element
 * @return {Element}
 * @type utility
 *
 */
export default async function shadowRoot (
    this: WebdriverIO.Element,
    selector: string
) {
    return await this.$(shadowFnFactory(selector))
}
