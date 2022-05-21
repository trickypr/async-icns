/**
 * Don't change `d.ts` files. Change the documentation in icns.js
 */
declare interface Notes {
}

/**
 * MIT License Copyright (c) 2016 Moin Uddin and 2022 TrickyPR Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare interface Copyright {
}

/**
 * The config that is used for the primary conversion
 */
declare interface Config {
    /**
     * The input file
     */
    input: string;
    /**
     * The output file name
     */
    output: string;
    /**
     * The temporary directory to use
     */
    tmpDirectory: string;
    /**
     * The list of sizes to use
     */
    sizes: number[];
}

/**
 * Resizes an image using SIPs
 * @param source The source image to be processed
 * @param out The output file name
 * @param size The size of the new image
 */
declare function resizeImage(source: string, out: string, size: number): void;

/**
 * 
 * @param iter The list to iterate through
 * @returns
 */
declare function forAll<T>(iter: T[]): Promise.<Array.<U>>;

/**
 * Convert an image file to a .icns file
 * @param config The configuration object
 */
declare function convert(config: Config): void;

