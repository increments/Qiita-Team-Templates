<!-- Page 1 -->
# *Title*
## CURRENT STATUS
- *List key metrics you're tracking, where they're at, and compare with last few weeks*
    - *How are things trending?*

## LAST WEEK'S LESSON LEARNED (AND ACCOMPLISHMENTS)
- *What did you learn last week?*
- *What was accomplished?*
- *On track: YES/NO*

## TOP PROBLEMS
- *List and describe the top three problems.*
- *Prioritize them.*

<!-- Page 2 -->
# *Problem #1*
## HYPOTHESIZED SOLUTIONS
- *List possible solutions that you'll start working on in the next week. Rank them.*
- *Why do you believe each solution will help solve or completely solve the problem?*

## METRICS / PROOF + GOALS
- *List metrics you'll use to measure whether or not the solutions are doing what you expected.*
- *List proof (qualitative) you'll use as well.*
- *Define goals for the metric.*

# *Problem #2*
## HYPOTHESIZED SOLUTIONS

## METRICS / PROOF + GOALS


# *Problem #3*
## HYPOTHESIZED SOLUTIONS

## METRICS / PROOF + GOALS

<script>
$(function () {
  var $item = $('#item-%{id}');

  var getBoxHTML = function (h2) {
    var html = '';
    for (el = h2.nextElementSibling; !_.include(['H1', 'H2', 'SCRIPT'], el.tagName); el = el.nextElementSibling) {
      html += el.outerHTML;
    }
    return [html, el];
  }

  var p2Template = _.template($('#js-pscanvas-p2-%{id}').html());
  var html = '';
  _.each($item.find('h1'), function (h1, i) {
    var html_el, page = { title: h1.innerText }, h2 = h1.nextElementSibling;
    if (i === 0) {
      html_el = getBoxHTML(h2);
      page.currentStatus = html_el[0];
      h2 = html_el[1];
      html_el = getBoxHTML(h2);
      page.learned = html_el[0];
      h2 = html_el[1];
      page.problems = getBoxHTML(h2)[0];
      html += _.template($('#js-pscanvas-p1-%{id}').html(), page);
    } else {
      html_el = getBoxHTML(h2);
      page.solutions = html_el[0];
      h2 = html_el[1];
      page.metrics = getBoxHTML(h2)[0];      
      html += p2Template(page);
    }
  });

  $item.html(html);  
});
</script>
<script type='text/template' id='js-pscanvas-p1-%{id}'>
  <h1><%= title %></h1>
  <table>
    <tr>
      <td class="currentStatus">
        <h4>CURRENT STATUS</h4>
        <%= currentStatus %>
      </td>
      <td class="leaned">
        <h4>LAST WEEK'S LESSON LEARNED (AND ACCOMPLISHMENTS)</h4>
        <%= learned %>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <h4>TOP PROBLEMS</h4>
        <%= problems %>
      </td>
    </tr>
  </table>
</script>
<script type='text/template' id='js-pscanvas-p2-%{id}'>
  <h2><%= title %></h2>
  <table>
    <tr>
      <td class="solutions">
        <h4>HYPOTHESIZED SOLUTIONS</h4>
        <%= solutions %>
      </td>
      <td class="metrics">
        <h4>METRICS / PROOF + GOALS</h4>
        <%= metrics %>
      </td>
    </tr>
  </table>
</script>
