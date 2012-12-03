<table id="test_result" class="data">
  <thead>
    <tr>
      <th id="hChecklist">{{! it.locales['oqs.checklists'] }}</th>
      <th id="hRef">{{! it.locales['oqs.references'] }}</th>
      <th id="hThema">{{! it.locales['oqs.themas'] }}</th>
      <th id="hLabel">{{! it.locales['oqs.test_label'] }}</th>
      <th id="hDuration">{{! it.locales['oqs.test_duration'] }}</th>
      <th id="hResult">{{! it.locales['oqs.results'] }}</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td colspan="6"></td>
    </tr>
  </tfoot>
  <tbody>
    {{~ it.tests['oaa_results'] :result }}
      <tr>
        <td headers="hChecklist">{{! result.criterion.checklist.name}}</td>
        <td headers="hRef">{{! result.criterion.name }}</td>
        <td headers="hThema">{{! result.criterion.thema }}</td>
        <td headers="hLabel">{{! result.criterion.description }}</td>
        <td headers="hDuration">{{! result.time }}</td>
        <td headers="hResult" data-stlabel="{{! result.label }}">
          <img src="img/{{! result.result }}.png" alt="{{! result.label }}" />
          <span style="display:none;">{{! result.label }}</span>
        </td>
      </tr>
    {{~}}
  </tbody>
</table>

<div id="resultDetails">
  <ul id="ctx1" class="ctx">
    <li><a href="#" class="prev" title="{{! it.locales['oqs.previous_result'] }}">{{! it.locales['oqs.previous_result'] }}</a></li>
    <li><a href="#" class="next" title="{{! it.locales['oqs.next_result'] }}">{{! it.locales['oqs.next_result'] }}</a></li>
    <li><a href="#" class="close" title="{{! it.locales['oqs.close'] }}">{{! it.locales['oqs.close'] }}</a></li>
  </ul>
  <div id="content"></div>
  <ul id="ctx2" class="ctx">
    <li><a href="#" class="feedback">{{! it.locales['oqs.report_test_problem'] }}</a></li>
  </ul>
</div>
