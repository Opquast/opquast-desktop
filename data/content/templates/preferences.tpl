<div id="header-wrap">
    <div id="header">
      <h1>{{! it.locales['oqs.pref_title'] }}</h1>
    </div>
  </div>

  <div id="main-wrap">
    <div id="main">
      <div id="pref_saved">{{! it.locales['oqs.pref_saved'] }}</div>
      <h2>{{! it.locales['oqs.pref_display'] }}</h2>
      <ul class="prefs" id="prefgen">
      <li>
        <input id="p_showRefs" value="showRefs" type="checkbox"
        {{? it.prefs.showRefs }}checked="checked"{{?}}/>
        <label for="p_showRefs">{{! it.locales['oqs.pref_show_refs'] }}</label>
      </li>

      <li>
        <input id="p_showThemas" value="showThemas" type="checkbox"
        {{? it.prefs.showThemas }}checked="checked"{{?}}/>
        <label for="p_showThemas">{{! it.locales['oqs.pref_show_themas'] }}</label>
      </li>
      </ul>

      <h2>{{! it.locales['oqs.pref_checklists'] }}</h2>
      <ul class="prefs" id="prefcl">
      {{~ it.checklists :cl }}
        <li>
          <input id="p_{{! cl[0] }}" value="{{! cl[0] }}" type="checkbox" name="checklist"
          {{? cl[1].selected }}checked="checked"{{?}} />
          <label for="p_{{! cl[0] }}">{{? cl[1].html }}{{= cl[1].html }}{{??}}{{! cl[1].name }}{{?}}
          - {{! cl[1].category }}
          ({{! cl[1].langs.join(', ') }})</label>
        </li>
      {{~}}
      </ul>
    </div>
  </div>
</div>
