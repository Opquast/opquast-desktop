{{? it.error }}
  <div class="error"><strong>{{! it.locales['oqs.error'] }}:</strong>
  {{! it.error }}
  </div>
{{?}}

<div id="main">
  <h2>{{! it.locales['oqs.export_reporting'] }}</h2>

  <div id="accounts">
    <p>{{! it.locales['oqs.saved_accounts'] }}</p>
    <table>
    {{~ it.accounts :account }}
      <tr data-username="{{! account.username }}">
        <td><a href="#" class="use">{{! account.username }}</a></td>
        <td>
          (<a href="#" class="edit">{{! it.locales['oqs.edit'] }}</a> |
          <a href="#" class="remove">{{! it.locales['oqs.remove'] }}</a>)
        </td>
      </tr>
    {{~}}
    </table>
  </div>

  <div id="loginForm">
    <form autocomplete="off">
      <p>{{! it.locales['oqs.login_form'] }}</p>
      <p class="field">
        <label for="username">{{! it.locales['oqs.username'] }}</label>
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
