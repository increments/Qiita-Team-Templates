function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n<table class="table table-bordered">\n    <tr>\n        <td class="currentStatus">\n            <h4>CURRENT STATUS</h4>\n            ' +
((__t = ( currentStatus )) == null ? '' : __t) +
'\n        </td>\n        <td class="leaned">\n            <h4>LAST WEEK\'S LESSON LEARNED (AND ACCOMPLISHMENTS)</h4>\n            ' +
((__t = ( learned )) == null ? '' : __t) +
'\n        </td>\n    </tr>\n    <tr>\n        <td colspan="2">\n            <h4>TOP PROBLEMS</h4>\n            ' +
((__t = ( problems )) == null ? '' : __t) +
'\n        </td>\n    </tr>\n</table>\n';

}
return __p
}