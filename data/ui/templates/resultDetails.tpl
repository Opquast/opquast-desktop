<!--
<h1>
  <img src="img/{{! it.result }}.png" alt="{{! it.stTerms['hResult'] }}" />
  <span>{{! it.stTerms['hLabel']}}</span>
</h1>
-->
<p class="status {{! it.result }}">
  <select name="testStatus" id="testStatus">
    <option value="nt" {{? it.result == 'nt' }}selected="selected"{{?}}>{{! it.locales['oqs.not_tested'] }}</option>
    <option value="c" {{? it.result == 'c' }}selected="selected"{{?}}>{{! it.locales['oqs.pass'] }}</option>
    <option value="nc" {{? it.result == 'nc' }}selected="selected"{{?}}>{{! it.locales['oqs.fail'] }}</option>
    <option value="i" {{? it.result == 'i' }}selected="selected"{{?}}>{{! it.locales['oqs.cannot_tell'] }}</option>
    <option value="na" {{? it.result == 'na' }}selected="selected"{{?}}>{{! it.locales['oqs.not_applicable'] }}</option>
  </select>
</p>
<h1>{{! it.stTerms['hLabel']}}</h1>
<p class="label">{{! it.stTerms['hChecklist'] }} - {{! it.stTerms['hRef']}}</p>

<h2>{{! it.locales['oqs.comment'] }}</h2>
<p class="comment"><textarea id="editComment" cols="40" rows="5">{{! it.comment }}</textarea>
<br /><button id="saveComment" class="action">{{! it.locales['oqs.save_comment'] }}</button></p>
{{? it.nodes.length > 0 }}
  <h2>{{! it.locales['oqs.targeted_elements'] }}</h2>
  <ul>
    {{~ it.nodes :node }}
      <li>
      {{? node.selector }}
        <a href="#" class="link inspect" data-path="{{! node.selector }}">{{! node.text }}</a> {{? node.extra }}({{! node.extra }}){{?}}
      {{??}}
        <pre>{{! node }}</pre>
      {{?}}
      </li>
    {{~}}
  </ul>
{{?}}
