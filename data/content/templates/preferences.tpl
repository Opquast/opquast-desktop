<div id="header-wrap">
    <div id="header">
      <h1>{{! it.locales['oqs.preferences_title'] }}</h1>
    </div>
  </div>

  <div id="main-wrap">
    <div id="main">
      <h2>{{! it.locales['oqs.general_preferences'] }}</h2>
      <ul class="prefs" id="prefgen">
      <li>
        <input id="p_showRefs" value="showRefs" type="checkbox"
        {{? it.prefs.showRefs }}checked="checked"{{?}}/>
        <label for="p_showRefs">{{! it.locales['oqs.pref_showRefs'] }}</label>
      </li>

      <li>
        <input id="p_showThemas" value="showThemas" type="checkbox"
        {{? it.prefs.showThemas }}checked="checked"{{?}}/>
        <label for="p_showThemas">{{! it.locales['oqs.pref_showThemas'] }}</label>
      </li>
      </ul>

      <h2>{{! it.locales['oqs.available_checklists'] }}</h2>
      <ul class="prefs" id="prefcl">
      {{~ it.checklists :cl }}
        <li>
          <input id="p_{{! cl[0] }}" value="{{! cl[0] }}" type="checkbox" name="checklist"
          {{? cl[1].selected }}checked="checked"{{?}} />
          <label for="p_{{! cl[0] }}">{{! cl[1].name }} ({{! cl[1].langs.join(', ') }})</label>
        </li>
      {{~}}
      </ul>
    </div>
  </div>
</div>
