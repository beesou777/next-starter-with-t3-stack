/**
 * Convert a string from snake_case to Title Case.
 *
 * @param {string} input a string in snake_case
 * @returns {string} a string in Title Case
 * @example
 * snakeCaseToString('hello_world') // returns 'Hello World'
 */
export function snakeCaseToString(input: string): string {
    return input
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}


/**
 * Capitalize the first letter of a string.
 *
 * @param {string} input a string
 * @returns {string} a string with the first letter capitalized
 * @example
 * capitalizeFirst('hello') // returns 'Hello'
 */
export function capitalizeFirst(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
}