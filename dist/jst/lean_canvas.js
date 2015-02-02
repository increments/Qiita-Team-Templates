function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table class=\'table table-bordered\'>\n    <tr>\n        <td rowspan="2" colspan="2">\n            <h4>Problem</h4>' +
((__t = ( problem )) == null ? '' : __t) +
'\n            <h5>Existing Alternatives</h5>' +
((__t = ( alternatives )) == null ? '' : __t) +
'\n        </td>\n        <td colspan="2"><h4>Solution</h4>' +
((__t = ( solution )) == null ? '' : __t) +
'</td>\n        <td rowspan="2" colspan="2">\n            <h4>Unique Value Proposition</h4>' +
((__t = ( uvp )) == null ? '' : __t) +
'\n            <h5>High-Level Concept</h5>' +
((__t = ( concept )) == null ? '' : __t) +
'\n        </td>\n        <td colspan="2"><h4>Unfair Advantage</h4>' +
((__t = ( advantage )) == null ? '' : __t) +
'</td>\n        <td rowspan="2" colspan="2">\n            <h4>Customer Segments</h4>' +
((__t = ( segments )) == null ? '' : __t) +
'\n            <h5>Early Adopters</h5>' +
((__t = ( early_adopters )) == null ? '' : __t) +
'\n        </td>\n    </tr>\n    <tr>\n        <td colspan="2"><h4>Key Metrics</h4>' +
((__t = ( key_metrics )) == null ? '' : __t) +
'</td>\n        <td colspan="2"><h4>Channels</h4>' +
((__t = ( channels )) == null ? '' : __t) +
'</td>\n    </tr>\n    <tr>\n        <td colspan="5"><h4>Cost Structure</h4>' +
((__t = ( cost )) == null ? '' : __t) +
'</td>\n        <td colspan="5"><h4>Revenue Streams</h4>' +
((__t = ( revenue )) == null ? '' : __t) +
'</td>\n    </tr>\n</table>\n';

}
return __p
}