/* eslint-disable no-restricted-globals */
/* eslint-disable use-isnan */
/* eslint-disable no-compare-neg-zero */
/* eslint-disable eqeqeq */
/* eslint-disable import/prefer-default-export */

// eslint-disable-next-line arrow-body-style
export const strictEquals = (a, b) => {
    if ((a == 0 && b == -0) || (a == -0 && b == 0)) {
        return true;
    }
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return false;
    }

    return Object.is(a, b);
};
