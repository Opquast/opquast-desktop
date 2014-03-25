<div id="tabs">
<ul>
  <li><a href="#tab-scores">{{! it.locales['oqs.scores'] }}
    <strong class="score {{! it.scores.global.class }}">{{! it.scores.global.value }}/10</strong></a>
  </li>
  <li><a href="#tab-results">{{! it.locales['oqs.results'] }}</a></li>
</ul>

<div id="tab-scores">
<table id="scores">
  <tr class="global">
    <td>{{! it.locales['oqs.global_score'] }}</td>
    <td class="score"><a href="#" class="score {{! it.scores.global.class }}">{{! it.scores.global.value }}/10</a></td>
    <td>{{? it.scores.global.c > 0 }}
      <a href="#" class="score pass" data-result="{{! it.scores.labels.c }}">{{! it.scores.global.c_label }}</a>
    {{??}}
      {{! it.scores.glocal.c_label }}
    {{?}}</td>
    <td>{{? it.scores.global.nc > 0 }}
      <a href="#" class="score fail" data-result="{{! it.scores.labels.nc }}">{{! it.scores.global.nc_label }}</a>
    {{??}}
      {{! it.scores.glocal.nc_label }}
    {{?}}</td>
  </tr>

  {{~ it.scores.details :score }}
    <tr>
      <td>{{! score.checklist }}</td>
      <td class="score"><a href="#" class="score {{! score.class }}"
        data-cl="{{! score.checklist }}">{{! score.value }}/10</a></td>
      <td>{{? score.c > 0 }}
        <a href="#" class="score pass" data-cl="{{! score.checklist }}"
        data-result="{{! it.scores.labels.c }}">{{! score.c_label }}</a>
      {{??}}
        {{! score.c_label }}
      {{?}}</td>
      <td>{{? score.nc > 0 }}
        <a href="#" class="score fail" data-cl="{{! score.checklist }}"
        data-result="{{! it.scores.labels.nc }}">{{! score.nc_label }}</a>
      {{??}}
        {{! score.nc_label }}
      {{?}}</td>
    </tr>
  {{~}}
</table>

<p><a href="#" class="link preferences">{{! it.locales['oqs.choose_checklists'] }}</a></p>
</div>

<div id="tab-results">
<table id="test_result" class="data">
  <thead>
    <tr>
      <th id="hID">ID</th>
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
      <td colspan="7"></td>
    </tr>
  </tfoot>
  <tbody>
    {{~ it.tests['oaa_results'] :result }}
      <tr>
        <td headers="hID">{{! result.id }}</td>
        <td headers="hChecklist">{{! result.criterion.checklist.name}}</td>
        <td headers="hRef">{{! result.criterion.name }}</td>
        <td headers="hThema">{{! result.criterion.thema }}</td>
        <td headers="hLabel"><a href="#">{{! result.criterion.description }}</a></td>
        <td headers="hDuration">{{! result.time }}</td>
        <td headers="hResult" data-stlabel="{{! result.label }}">
          <span class="user-defined icon" aria-hidden="true"
          style="{{? result.auto }}visibility:hidden{{?}}">•</span>
          <span class="user-defined backup" style="{{? result.auto }}visibility:hidden{{?}}">
            {{! it.locales['oqs.user_defined_value'] }}</span>
          <span><img class="result" src="img/{{! result.result }}.png" alt="{{! result.label }}" /></span>
          <span style="display:none;">{{! result.label }}</span>
        </td>
      </tr>
    {{~}}
  </tbody>
</table>
</div>

</div>

<div id="resultDetails" tabindex="-1">
  <ul id="ctx1" class="ctx">
    <li><a href="#" class="link prev" title="{{! it.locales['oqs.previous_result'] }}"><span class="key">&#x2190; </span>{{! it.locales['oqs.previous_result'] }}</a> | </li>
    <li><a href="#" class="link next" title="{{! it.locales['oqs.next_result'] }}">{{! it.locales['oqs.next_result'] }}<span class="key"> &#x2192;</span></a> | </li>
    <li><a href="#" class="link close" title="{{! it.locales['oqs.close'] }}">{{! it.locales['oqs.close'] }}<span class="key"> esc</span></a></li>
  </ul>
  <div id="content"></div>
  <ul id="ctx2" class="ctx">
    <li><a href="#" class="link feedback">{{! it.locales['oqs.report_test_problem'] }}</a></li>
  </ul>
</div>
