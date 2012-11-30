<h1>
  <img src="img/{{! it.result }}.png" alt="{{! it.stTerms['hResult'] }}" />
  {{! it.stTerms['hChecklist'] }} - {{! it.stTerms['hRef']}}
</h1>
<p class="label">{{! it.stTerms['hLabel']}}</p>

<h2>{{! it.locales['oqs.comment'] }}</h2>
<p>{{! it.comment }}</p>
{{? it.nodes.length > 0 }}
  <h2>{{! it.locales['oqs.targeted_elements'] }}</h2>
  <ul>
    {{~ it.nodes :node }}
      <li>
      {{? node.path }}
        <a href="#" class="inspect" data-path="{{! node.path }}">{{! node.text }}</a>
      {{??}}
        <pre>{{! node }}</pre>
      {{?}}
      </li>
    {{~}}
  </ul>
{{?}}
<h2>{{! it.locales['oqs.feedback'] }}</h2>
<p><a href="#" class="feedback">{{! it.locales['oqs.report_test_problem'] }}</a>
</p>
