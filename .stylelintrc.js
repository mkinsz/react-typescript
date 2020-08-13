module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
    plugins: ['stylelint-order'],
    rules: {
        'prettier/prettier': true,
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'local', 'export'] }],
        'property-no-unknown': [true, { ignoreProperties: ['composes', '/^var/'] }],
        'order/order': ['custom-properties', 'declarations'],
        'order/properties-alphabetical-order': true
    }
}
