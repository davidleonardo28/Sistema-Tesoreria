"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleDefinition = void 0;
var content_definition_1 = require("./content-definition");
/**
 * Class that contains the global style definitions
 */
var StyleDefinition = /** @class */ (function (_super) {
    __extends(StyleDefinition, _super);
    function StyleDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set the fontSize
     * @param size Size
     */
    StyleDefinition.prototype.fontSize = function (size) {
        this.content.fontSize = size;
        return this;
    };
    /**
     * Sets the width. If a string is passed it allows
     * '*', 'auto', '<1-100>%'
     * @param size Size
     */
    StyleDefinition.prototype.width = function (size) {
        this.content.width = size;
        return this;
    };
    /**
     * Sets the height. if a string is passed it allows
     * '*', 'auto', '<1-100>%'
     * @param size Size
     */
    StyleDefinition.prototype.height = function (size) {
        this.content.height = size;
        return this;
    };
    /**
     * Set the alignment
     * @param align The alignment
     */
    StyleDefinition.prototype.alignment = function (align) {
        this.content.alignment = align;
        return this;
    };
    /**
     * Set bold text
     */
    StyleDefinition.prototype.bold = function () {
        this.content.bold = true;
        return this;
    };
    /**
     * Set italics text
     */
    StyleDefinition.prototype.italics = function () {
        this.content.italics = true;
        return this;
    };
    /**
     * Set a margin
     * @param margin Margins
     */
    StyleDefinition.prototype.margin = function (margin) {
        this.content.margin = margin;
        return this;
    };
    /**
     * Set a style
     */
    StyleDefinition.prototype.style = function (style) {
        this.content.style = style;
        return this;
    };
    /**
     * Set a color
     */
    StyleDefinition.prototype.color = function (color) {
        this.content.color = color;
        return this;
    };
    /**
     * Set a background
     */
    StyleDefinition.prototype.background = function (background) {
        this.content.background = background;
        return this;
    };
    /**
     * Set a link
     */
    StyleDefinition.prototype.link = function (link) {
        this.content.link = link;
        return this;
    };
    /**
     * Set a link to any page
     */
    StyleDefinition.prototype.linkToPage = function (page) {
        this.content.linkToPage = page;
        return this;
    };
    /**
     * Set noWrap
     */
    StyleDefinition.prototype.noWrap = function () {
        this.content.noWrap = true;
        return this;
    };
    /**
     * Set decoration
     */
    StyleDefinition.prototype.decoration = function (decoration) {
        this.content.decoration = decoration;
        return this;
    };
    /**
     * Set decorationStyle
     */
    StyleDefinition.prototype.decorationStyle = function (decorationStyle) {
        this.content.decorationStyle = decorationStyle;
        return this;
    };
    /**
     * Set decorationColor
     */
    StyleDefinition.prototype.decorationColor = function (decorationColor) {
        this.content.decorationColor = decorationColor;
        return this;
    };
    /**
     * Set fontFeatures
     */
    StyleDefinition.prototype.fontFeatures = function (fontFeatures) {
        this.content.fontFeatures = fontFeatures;
        return this;
    };
    /**
     * Set a specific font to a text
     * @param fontName The key of the font name
     */
    StyleDefinition.prototype.font = function (fontName) {
        this.content.font = fontName;
        return this;
    };
    /**
     * Sets the content in an absolute position
     * @param x coord X
     * @param y coord Y
     */
    StyleDefinition.prototype.absolutePosition = function (x, y) {
        this.content.absolutePosition = { x: x, y: y };
        return this;
    };
    /**
     * Sets the content in an relative position
     * @param x coord X
     * @param y coord Y
     */
    StyleDefinition.prototype.relativePosition = function (x, y) {
        this.content.relativePosition = { x: x, y: y };
        return this;
    };
    /**
     * Sets the line height, default 1 accroding to [PDFMake documentations](https://pdfmake.github.io/docs/0.1/document-definition-object/styling/#style-properties)
     * @param height number
     */
    StyleDefinition.prototype.lineHeight = function (height) {
        this.content.lineHeight = height;
        return this;
    };
    /**
     * Sets size of the letter spacing in pt
     * @param spacing
     */
    StyleDefinition.prototype.characterSpacing = function (spacing) {
        this.content.characterSpacing = spacing;
        return this;
    };
    return StyleDefinition;
}(content_definition_1.ContentDefinition));
exports.StyleDefinition = StyleDefinition;
//# sourceMappingURL=style-definition.js.map