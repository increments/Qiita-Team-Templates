# Problem
*List your top 1-3 problems.*

# Existing Alternatives
*List how these problems are solved today.*

# Customer Segments
*List your target customers and users.*

# Early Adopters
*List the characteristics of your ideal customers.*

# Unique Value Proposition
*Single, clear, compelling message that states why you are different and worth paying attention.*

# High-Level Concept
*List your X for Y analogy e.g. YouTube = Flickr for videos.*

# Solution
*Outline a possible solution for each problem.*

# Channels
*List your path to customers (inbound or outbound).*

# Revenue Streams
*List your sources of revenue.*

# Cost Structure
*List your fixed and variable costs.*

# Key Metrics
*List the key numbers that tell you how your business is doing.*

# Unfair Advantage
*Something that cannot easily be bought or copied.*

# Memo
*Feel free to use.*


<script>
$(function () {
  'use strict';
  var $item, $table, getHTML, names, data;
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
  $item = $('#item-%{id}');
  names = ['problem', 'alternatives', 'segments', 'early_adopters', 'uvp', 'concept',
    'solution', 'channels', 'revenue', 'cost', 'key_metrics', 'advantage'];
  data = {};
  $item.find('h1').each(function (i) {
    if (names[i]) { data[names[i]] = getHTML(this); }
  });
  $table = $(_.template($('#js-leancanvas-%{id}').html(), data));
  $table.find('h4').css('margin-top', '0');
  $table.find('td').css({
    backgroundColor: 'white',
    verticalAlign: 'top',
    width: '20%'
  });
  $item.prepend($table);
});
</script>
<script type='text/template' id='js-leancanvas-%{id}'>
<table class='table table-bordered'>
  <tr>
    <td rowspan="2" colspan="2">
      <h4>Problem</h4><%= problem %>
      <h5>Existing Alternatives</h5><%= alternatives %>
    </td>
    <td colspan="2"><h4>Solution</h4><%= solution %></td>
    <td rowspan="2" colspan="2">
      <h4>Unique Value Proposition</h4><%= uvp %>
      <h5>High-Level Concept</h5><%= concept %>
    </td>
    <td colspan="2"><h4>Unfair Advantage</h4><%= advantage %></td>
    <td rowspan="2" colspan="2">
      <h4>Customer Segments</h4><%= segments %>
      <h5>Early Adopters</h5><%= early_adopters %>
    </td>
  </tr>
  <tr>
    <td colspan="2"><h4>Key Metrics</h4><%= key_metrics %></td>
    <td colspan="2"><h4>Channels</h4><%= channels %></td>
  </tr>
  <tr>
    <td colspan="5"><h4>Cost Structure</h4><%= cost %></td>
    <td colspan="5"><h4>Revenue Streams</h4><%= revenue %></td>
  </tr>
</table>
</script>
