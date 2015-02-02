/**
 * @name kpt.js
 * @description Render KPT on Qiita:Team.
 * @version 0.0.1
 */

(function (global) {
    global.Qiita || (global.Qiita = {});
    global.Qiita.Team || (global.Qiita.Team = {});

    var ns = global.Qiita.Team; // Namespace

    var getHTML, kptTemplate;

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

    // src/jst/kpt.jst
    kptTemplate = function(obj) {
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
};

    ns.renderKpt = function (item_id) {
        $(function () {
            var $item, $table, names, data;
            $item = $(item_id);
            names = ['keepContent', 'problemContent', 'tryContent'];
            data = {};
            $item.find('h1').each(function (i) {
                if (names[i]) { data[names[i]] = getHTML(this); }
            });
            $table = $(kptTemplate(data));
            $table.find('h1').css({
                marginTop: '0',
                marginBottom: '20px'
            });
            $table.find('td').css({
                backgroundColor: 'white',
                verticalAlign: 'top',
                width: '50%'
            });
            $item.prepend($table);
        });
    };
})(this);

// vim: filetype=jst
