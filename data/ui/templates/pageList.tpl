<h2>{{! it.locales['oqs.alert_limit_reached'] }}</h2>

<p>{{! it.locales['oqs.alert_page_replacement'] }}</p>

<table id="pages" class="data">
  <tbody>
  {{~ it.pages :page }}
    <tr data-resource_uri="{{= page.resource_uri }}">
      <td>{{! page.title }}</td>
      <td>{{! page.uri }}</td>
      <td class="min nowrap"><button>{{! it.locales['oqs.replace_page'] }}</button></td>
    </tr>
  {{~}}
  </tbody>
</table>
