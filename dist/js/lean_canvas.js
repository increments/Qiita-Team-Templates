/**
 * @name lean_canvas.js
 * @description Render LeanCanvas on Qiita:Team.
 * @version 0.0.1
 */

(function (global) {
    global.Qiita || (global.Qiita = {});
    global.Qiita.Team || (global.Qiita.Team = {});

    var ns = global.Qiita.Team; // Namespace

    var getHTML, leanCanvasTemplate;

    getHTML = function (h1) {
        var el, prev, html = '';
        for (el = h1.nextElementSibling;
            !/H1|SCRIPT/.test(el.tagName);
            prev = el, el = el.nextElementSibling, $(prev).remove()) {
            html += el.outerHTML;
        }
        $(h1).remove();
        return html;
    }

    // src/jst/lean_canvas.jst
    leanCanvasTemplate = function(obj) {
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
};

    ns.renderLeanCanvas = function (item_id) {
        $(function () {
            var $item, $table, names, data, template;

            $item = $(item_id);

            names = ['problem', 'alternatives', 'segments', 'early_adopters', 'uvp', 'concept',
                'solution', 'channels', 'revenue', 'cost', 'key_metrics', 'advantage'];
            data = {};

            $item.find('h1').each(function (i) {
                if (names[i]) { data[names[i]] = getHTML(this); }
            });

            $table = $(leanCanvasTemplate(data));
            $table.find('h4').css('margin-top', '0');
            $table.find('td').css({
                backgroundColor: 'white',
                verticalAlign: 'top',
                width: '20%'
            });

            $item.prepend($table);
        });
    };
})(this);

// vim: filetype=jst
