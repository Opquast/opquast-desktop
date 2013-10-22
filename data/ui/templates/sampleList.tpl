{{? it.samples.length == 0 }}
<h2>{{! it.locales['oqs.no_sample'] }}</h2>

<p>{{! it.locales['oqs.create_sample'] }}</p>

{{??}}
<h2>{{! it.locales['oqs.choose_sample'] }}</h2>

<table id="samples" class="data">
  <thead>
    <tr>
      <th id="hName">{{! it.locales['oqs.sample_name'] }}</th>
      <th id="hAction" class="min">{{! it.locales['oqs.project_choice'] }}</th>
    </tr>
  </thead>
  <tbody>
  {{~ it.samples :sample }}
    <tr data-sample_id="{{! sample.id }}">
      <td headers="hName">{{! sample.name }}</td>
      <td class="min nowrap"><button>{{! it.locales['oqs.project_choice'] }}</button></td>
    </tr>
  {{~}}
  </tbody>
</table>
{{?}}
