/* eslint-disable */

'use strict';

module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-less',
		'stylelint-config-css-modules',
		'stylelint-config-standard-scss',
		'stylelint-config-rational-order',
	],
	plugins: [
		'stylelint-order',
		'stylelint-scss',
		'stylelint-less',
		'stylelint-declaration-block-no-ignored-properties'
	],
	rules: {
		'selector-no-vendor-prefix': null,
		'selector-class-pattern': null,
		'property-no-vendor-prefix': null,
		'color-function-notation': null,
		'no-descending-specificity': null,
		'at-rule-no-unknown': null,
		"scss/at-rule-no-unknown": [
			true,
			{
				"ignoreAtRules": ["tailwind"]
			}
		],
		'scss/selector-no-redundant-nesting-selector': true,
		'plugin/declaration-block-no-ignored-properties': true,
		'number-max-precision': 10,
		'selector-id-pattern': null,
		'font-family-no-missing-generic-family-keyword': null,
		'declaration-property-value-no-unknown': null,
		'scss/selector-no-redundant-nesting-selector': null,
		'scss/operator-no-unspaced': null
	}
};
