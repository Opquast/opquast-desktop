<!--
<h1>
  <img src="img/{{! it.result }}.png" alt="{{! it.stTerms['hResult'] }}" />
  <span>{{! it.stTerms['hLabel']}}</span>
</h1>
-->
<p class="status {{! it.result }}">{{! it.label }}</p>
<h1>{{! it.stTerms['hLabel']}}</h1>
<p class="label">{{! it.stTerms['hChecklist'] }} - {{! it.stTerms['hRef']}}</p>

<h2>{{! it.locales['oqs.comment'] }}</h2>
<p>{{! it.comment }}</p>
{{? it.nodes.length > 0 }}
  <h2>{{! it.locales['oqs.targeted_elements'] }}</h2>
  <ul>
    {{~ it.nodes :node }}
      <li>
      {{? node.selector }}
        <a href="#" class="inspect" data-path="{{! node.selector }}">{{! node.text }}</a>
      {{??}}
        <pre>{{! node }}</pre>
      {{?}}
      </li>
    {{~}}
  </ul>
{{?}}
