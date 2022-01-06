import { ContentDefinition } from './content-definition';
/**
 * Class that contains the global style definitions
 */
export declare abstract class StyleDefinition<T extends StyleDefinition<T, I>, I> extends ContentDefinition<T, I> {
    /**
     * Set the fontSize
     * @param size Size
     */
    fontSize(size: number): T;
    /**
     * Sets the width. If a string is passed it allows
     * '*', 'auto', '<1-100>%'
     * @param size Size
     */
    width(size: number | string): T;
    /**
     * Sets the height. if a string is passed it allows
     * '*', 'auto', '<1-100>%'
     * @param size Size
     */
    height(size: number | string): T;
    /**
     * Set the alignment
     * @param align The alignment
     */
    alignment(align: 'center' | 'left' | 'right' | 'justify'): T;
    /**
     * Set bold text
     */
    bold(): T;
    /**
     * Set italics text
     */
    italics(): T;
    /**
     * Set a margin
     * @param margin Margins
     */
    margin(margin: number | [number, number] | [number, number, number, number]): T;
    /**
     * Set a style
     */
    style(style: string | string[]): T;
    /**
     * Set a color
     */
    color(color: string): T;
    /**
     * Set a background
     */
    background(background: string): T;
    /**
     * Set a link
     */
    link(link: string): T;
    /**
     * Set a link to any page
     */
    linkToPage(page: number): T;
    /**
     * Set noWrap
     */
    noWrap(): T;
    /**
     * Set decoration
     */
    decoration(decoration: 'underline' | 'lineThrough' | 'overline'): T;
    /**
     * Set decorationStyle
     */
    decorationStyle(decorationStyle: 'dashed' | 'dotted' | 'double' | 'wavy'): T;
    /**
     * Set decorationColor
     */
    decorationColor(decorationColor: string): T;
    /**
     * Set fontFeatures
     */
    fontFeatures(fontFeatures: ('smcp' | 'c2sc' | 'onum')[]): T;
    /**
     * Set a specific font to a text
     * @param fontName The key of the font name
     */
    font(fontName: string): T;
    /**
     * Sets the content in an absolute position
     * @param x coord X
     * @param y coord Y
     */
    absolutePosition(x: number, y: number): T;
    /**
     * Sets the content in an relative position
     * @param x coord X
     * @param y coord Y
     */
    relativePosition(x: number, y: number): T;
    /**
     * Sets the line height, default 1 accroding to [PDFMake documentations](https://pdfmake.github.io/docs/0.1/document-definition-object/styling/#style-properties)
     * @param height number
     */
    lineHeight(height: number): T;
    /**
     * Sets size of the letter spacing in pt
     * @param spacing
     */
    characterSpacing(spacing: number): T;
}
//# sourceMappingURL=style-definition.d.ts.map