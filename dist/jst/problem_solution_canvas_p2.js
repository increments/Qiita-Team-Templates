function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>' +
((__t = ( title )) == null ? '' : __t) +
'</h2>\n<table>\n    <tr>\n        <td class="solutions">\n            <h4>HYPOTHESIZED SOLUTIONS</h4>\n            ' +
((__t = ( solutions )) == null ? '' : __t) +
'\n        </td>\n        <td class="metrics">\n            <h4>METRICS / PROOF + GOALS</h4>\n            ' +
((__t = ( metrics )) == null ? '' : __t) +
'\n        </td>\n    </tr>\n</table>\n';

}
return __p
}