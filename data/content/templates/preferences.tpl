<div id="header-wrap">
    <div id="header">
      <h1>{{! it.locales['oqs.pref_title'] }}</h1>
    </div>
  </div>

  <div id="main-wrap">
    <div id="main">
      <div id="pref_saved">{{! it.locales['oqs.pref_saved'] }}</div>
      <h2>{{! it.locales['oqs.pref_checklists'] }}</h2>
      {{ for(var category in it.checklists ) { }}
        <h3>{{! category }}</h3>

        <ul class="prefs" id="prefcl">
        {{~ it.checklists[category] :cl }}
          <li>
            <input id="p_{{! cl[0] }}" value="{{! cl[0] }}" type="checkbox" name="checklist"
            {{? cl[1].selected }}checked="checked"{{?}} />
            <label for="p_{{! cl[0] }}">{{? cl[1].html }}{{= cl[1].html }}{{??}}{{! cl[1].name }}{{?}}
            {{? cl[1].sub }}- {{! cl[1].sub }}{{?}}
            ({{! cl[1].langs.join(', ') }})</label>
          </li>
        {{~}}
        </ul>
      {{ } }}
    </div>
  </div>
</div>
