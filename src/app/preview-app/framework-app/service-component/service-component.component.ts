import { Component } from '@angular/core'
import {FormControl, FormGroup} from "@angular/forms"
import {NominatimResult, NominatimService} from "../../../services/nominatim.service"

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrl: './service-component.component.scss'
})
export class ServiceComponentComponent {

  nominatimResult!: NominatimResult[]
  form!: FormGroup
  constructor(private nominatimService: NominatimService) {
      this.form = new FormGroup({
        placeQuery: new FormControl(null, []),
      })
  }

  onSubmit() {
    this.nominatimService.searchPlace(this.form.controls['placeQuery'].value).subscribe(
      r => this.nominatimResult = r
    )
  }


  code = '//NOMINATIM SERVICE \n' +
    'export interface NominatimResult {\n' +
    '  addresstype: string;\n' +
    '  boundingbox: number []\n' +
    '  class: string;\n' +
    '  display_name: string;\n' +
    '  importance: number;\n' +
    '  lat: number;\n' +
    '  lon: number;\n' +
    '  licence: string;\n' +
    '  name: string;\n' +
    '  osm_id: number;\n' +
    '  osm_type: string;\n' +
    '  place_id: number;\n' +
    '  place_rank: number;\n' +
    '  type: string;\n' +
    '}\n' +
    '\n' +
    '@Injectable({\n' +
    '  providedIn: \'root\'\n' +
    '})\n' +
    'export class NominatimService {\n' +
    '\n' +
    '  constructor(private http: HttpClient) {\n' +
    '  }\n' +
    '\n' +
    '  searchPlace(placeName: string): Observable< NominatimResult[]> {\n' +
    '    return this.http.get<any>(`${API_URL}/search?X-Requested-With=overpass-turbo&format=json&q=${placeName}`)\n' +
    '  }\n' +
    '\n' +
    '}\n'
}
