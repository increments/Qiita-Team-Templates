/**
 * @name problem_solution_canvas.js
 * @description Render ProblemSolutionCanvas on Qiita:Team.
 */

(function (global) {
    if (!global.Qiita.TeamTemplates) {
        throw 'Qiita.TeamTemplates is required';
    }

    var ns = global.Qiita.TeamTemplates; // Namespace

    if (ns.isRegistered('problem_solution_canvas')) {
        // KPT template has already been registered.
        return;
    }

    var getBoxHTML, pscTemplateP1, pscTemplateP2;

    getBoxHTML = function (h2) {
        var html = '';
        for (el = h2.nextElementSibling; !_.include(['H1', 'H2', 'SCRIPT'], el.tagName); el = el.nextElementSibling) {
            html += el.outerHTML;
        }
        return [html, el];
    }

    // src/jst/problem_solution_canvas_p1.jst
    pscTemplateP1 = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n<table>\n    <tr>\n        <td class="currentStatus">\n            <h4>CURRENT STATUS</h4>\n            ' +
((__t = ( currentStatus )) == null ? '' : __t) +
'\n        </td>\n        <td class="leaned">\n            <h4>LAST WEEK\'S LESSON LEARNED (AND ACCOMPLISHMENTS)</h4>\n            ' +
((__t = ( learned )) == null ? '' : __t) +
'\n        </td>\n    </tr>\n    <tr>\n        <td colspan="2">\n            <h4>TOP PROBLEMS</h4>\n            ' +
((__t = ( problems )) == null ? '' : __t) +
'\n        </td>\n    </tr>\n</table>\n';

}
return __p
};

    // src/jst/problem_solution_canvas_p2.jst
    pscTemplateP2 = function(obj) {
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
};

    ns.register('problem_solution_canvas', function (selector) {
        var $item = $(selector);

        var html = '';
        _.each($item.find('h1'), function (h1, i) {
            var htmlEl, page, h2;
            page = { title: h1.innerText };
            h2 = h1.nextElementSibling;
            if (i === 0) {
                htmlEl = getBoxHTML(h2);
                page.currentStatus = htmlEl[0];
                h2 = htmlEl[1];
                htmlEl = getBoxHTML(h2);
                page.learned = htmlEl[0];
                h2 = htmlEl[1];
                page.problems = getBoxHTML(h2)[0];
                html += pscTemplateP1(page);
            } else {
                htmlEl = getBoxHTML(h2);
                page.solutions = htmlEl[0];
                h2 = htmlEl[1];
                page.metrics = getBoxHTML(h2)[0];
                html += pscTemplateP2(page);
            }
        });

        $item.html(html);
    });
})(this);

// vim: filetype=jst
