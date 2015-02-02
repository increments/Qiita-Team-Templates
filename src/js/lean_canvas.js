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
    leanCanvasTemplate = <%= template %>;

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
