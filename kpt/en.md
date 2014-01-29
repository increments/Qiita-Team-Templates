# Keep
*List your keeping things.*

# Problem
*List your problems.*

# Try
*List how to solve these problems.*

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
  names = ['keepContent', 'problemContent', 'tryContent'];
  data = {};
  $item.find('h1').each(function (i) {
    if (names[i]) { data[names[i]] = getHTML(this); }
  });
  $table = $(_.template($('#js-kpt-%{id}').html(), data));
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
</script>
<script type='text/template' id='js-kpt-%{id}'>
<table class='table table-bordered'>
  <tr>
    <td>
      <h1>Keep</h1><%= keepContent %>
    </td>
    <td rowspan="2">
      <h1>Try</h1><%= tryContent %>
    </td>
  </tr>
  <tr>
    <td><h1>Problem</h1><%= problemContent %></td>
  </tr>
</table>
</script>
