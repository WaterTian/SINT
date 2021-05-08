import * as core from '../core';


/**
 * @class
 * @extends SINT.Text
 * @memberof SINT
 *
 * @param {string} [txt='']
 * @param {number} [_x=0]
 * @param {number} [_y=0]
 * @param {object|SINT.TextStyle} [style] - The style parameters 
 * {fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'}
 */

export default class TextClip extends core.Text {
	constructor(txt = '', _x = 0, _y = 0, style) {

		super(txt, style);

		this.x = _x;
		this.y = _y;
	}

}