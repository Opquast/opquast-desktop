{{? it.error }}
  <div class="error"><strong>{{! it.locales['oqs.error'] }}:</strong>
  {{! it.error }}
  </div>
{{?}}

<div id="main">
  <h2>{{! it.locales['oqs.export_reporting'] }}</h2>

  <div id="accounts">
    {{? it.accounts.length > 0 }}
    <p>{{! it.locales['oqs.saved_accounts'] }}</p>
    <table>
    {{~ it.accounts :account }}
      <tr data-username="{{! account.username }}">
        <td><a href="#" class="link use">{{! account.username }}</a></td>
        <td>
          (<a href="#" class="link edit">{{! it.locales['oqs.edit'] }}</a> |
          <a href="#" class="link remove">{{! it.locales['oqs.remove'] }}</a>)
        </td>
      </tr>
    {{~}}
    </table>
    {{??}}
      <p><a class="link external" href="http://reporting.opquast.com/">{{! it.locales['oqs.reporting_learn'] }}</a></p>
      <p><strong><a class="link external" href="https://reporting.opquast.com/plans/">{{! it.locales['oqs.reporting_subscribe'] }}</a></p>
    {{?}}
  </div>

  <div id="loginForm">
    <form autocomplete="off">
      <p>{{! it.locales['oqs.login_form'] }}</p>
      <p class="field">
        <label for="username">{{! it.locales['oqs.email'] }}</label>
        <input id="username" type="text" size="30" />
      </p>

      <p class="field">
        <label for="password">{{! it.locales['oqs.password'] }}</label>
        <input id="password" type="password" size="30" />
      </p>

      <p class="check"><input id="keep" type="checkbox" />
        <label for="keep">{{! it.locales['oqs.account_save'] }}</label>
      </p>

      <p class="submit"><input type="submit" value="{{! it.locales['oqs.show_projects'] }}" /></p>
    </form>
  </div>
</div>
