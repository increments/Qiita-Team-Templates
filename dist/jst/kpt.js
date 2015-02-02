function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table class=\'table table-bordered\'>\n    <tr>\n        <td>\n            <h1>Keep</h1>' +
((__t = ( keepContent )) == null ? '' : __t) +
'\n        </td>\n        <td rowspan="2">\n            <h1>Try</h1>' +
((__t = ( tryContent )) == null ? '' : __t) +
'\n        </td>\n    </tr>\n    <tr>\n        <td><h1>Problem</h1>' +
((__t = ( problemContent )) == null ? '' : __t) +
'</td>\n    </tr>\n</table>\n';

}
return __p
}