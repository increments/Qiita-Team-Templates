/**
 * @name problem_solution_canvas.js
 * @description Render ProblemSolutionCanvas on Qiita:Team.
 * @version 0.0.1
 */

(function (global) {
    global.Qiita || (global.Qiita = {});
    global.Qiita.Team || (global.Qiita.Team = {});

    var ns = global.Qiita.Team; // Namespace

    var getBoxHTML, pscTemplateP1, pscTemplateP2;

    getBoxHTML = function (h2) {
        var html = '';
        for (el = h2.nextElementSibling; !_.include(['H1', 'H2', 'SCRIPT'], el.tagName); el = el.nextElementSibling) {
            html += el.outerHTML;
        }
        return [html, el];
    }

    // src/jst/problem_solution_canvas_p1.jst
    pscTemplateP1 = <%= templateP1 %>;

    // src/jst/problem_solution_canvas_p2.jst
    pscTemplateP2 = <%= templateP2 %>;

    ns.renderProblemSolutionCanvas = function (item_id) {
        $(function () {
            var $item = $(item_id);

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
    };
})(this);

// vim: filetype=jst
