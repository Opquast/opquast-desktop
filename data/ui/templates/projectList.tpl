<table id="projects" class="data">
  <thead>
    <tr>
      <th id="hName">{{! it.locales['oqs.project'] }}</th>
      <th id="hUrl">{{! it.locales['oqs.project_url'] }}</th>
      <th id="hAction" class="min">{{! it.locales['oqs.project_choice'] }}</th>
    </tr>
  </thead>
  <tbody>
  {{~ it.projects :project }}
    <tr data-project_id="{{! project.id }}">
      <td headers="hName">{{! project.name }}</td>
      <td headers="hUrl">{{! project.url }}</td>
      <td headers="hAction" class="min nowrap"><button>{{! it.locales['oqs.project_choice'] }}</button></td>
    </tr>
  {{~}}
  </tbody>
</table>
