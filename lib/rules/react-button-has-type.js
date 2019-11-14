/**
 * @fileoverview Enforces that a JSX Button Elements have set type attributes
 * @author Robert Crous
 */
"use strict";

const getProp = require('jsx-ast-utils/getProp');
const hasProp = require('jsx-ast-utils/hasProp');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Enforces that a JSX Button Elements have set type attributes",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        const messages = {
            missing: "Missing type attribute on button",
            empty: "Button type property is empty"
        };

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods
            JSXElement(node) {
                if (node.openingElement.name.name !== 'button') {
                    // this is not a jsx button
                    return;
                }


                if (!hasProp(node.openingElement.attributes, 'type')) {
                    // there are no "type" attributes on this button
                    context.report({ node, message: messages.missing });
                    return;
                }

                const { value } = getProp(node.openingElement.attributes, 'type');

                if (!value.value) {
                    context.report({ node, message: messages.empty });
                }
            }

        };
    }
};