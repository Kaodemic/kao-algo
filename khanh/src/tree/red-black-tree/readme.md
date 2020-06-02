```js
function fixRed(fixme)
 if parent of fixme is root
    make root black and we're all done

if fixme has red uncle 
    make parent and uncle black,
    and make grandParent red.

if grandparent violates red property
    fixedRed(grandParent)
else
    #rotateUp changes color of outside child's parent.

    #so, if fixMe is outside child, then
    #rotateUp(parent of Fixme) fixed red violations.

    if Fixme is not and outside childe 
    