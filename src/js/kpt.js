/**
 * @name kpt.js
 * @description Render KPT on Qiita:Team.
 */

(function (global) {
    if (!global.Qiita.TeamTemplates) {
        throw 'Qiita.TeamTemplates is required';
    }

    var ns = global.Qiita.TeamTemplates; // Namespace

    if (ns.isRegistered('kpt')) {
        // KPT template has already been registered.
        return;
    }

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
    kptTemplate = <%= template %>;

    ns.register('kpt', function (selector) {
        var $item, $table, names, data;
        $item = $(selector);
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
})(this);

// vim: filetype=jst
