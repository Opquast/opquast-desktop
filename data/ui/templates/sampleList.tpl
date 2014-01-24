<div id="main">
  {{? it.samples.length == 0 }}
  <h2>{{! it.locales['oqs.no_evaluation'] }}</h2>
  <p>{{! it.locales['oqs.no_eval_desc'] }}</p>

  <ul>
    <li>{{= it.no_eval_1 }}</li>
    <li>{{! it.locales['oqs.no_eval_2'] }}
      <ul>{{~ it.clNames :cl}}<li>{{! cl }}</li>{{~}}</ul>
    </li>
    <li>{{= it.no_eval_3 }}</li>
  </ul>

  <p>{{= it.no_eval_4 }}</p>

  {{??}}
  <h2>{{! it.locales['oqs.choose_evaluation'] }}</h2>
  <form id="inject">
  {{~ it.samples :sample}}
    {{? it.samples.length > 1 }}
      <h3>{{! it.locales['oqs.sample']}}&nbsp;: {{! sample.name }}</h3>
    {{?}}

    <ul>
    {{~ sample.evaluations :evaluation}}
      <li><label><input type="checkbox" value=""
      data-sample="{{! sample.id }}" data-evaluation="{{! evaluation.id }}"
      data-checklist="{{! evaluation.checklist.id }}" />
      <strong>{{! evaluation.checklist.name }}</strong>
      (Progress: {{! evaluation.progress }}%)</label></li>
    {{~}}
    </ul>
  {{~}}

  <p><input type="submit" value="Send"></p>
  </form>
  {{?}}
</div>
