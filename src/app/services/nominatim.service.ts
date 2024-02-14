import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";

const API_URL = 'https://nominatim.openstreetmap.org'

export interface NominatimResult {
  addresstype: string;
  boundingbox: number []
  class: string;
  display_name: string;
  importance: number;
  lat: number;
  lon: number;
  licence: string;
  name: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  place_rank: number;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class NominatimService {

  constructor(private http: HttpClient) {
  }

  searchPlace(placeName: string): Observable< NominatimResult[]> {
    return this.http.get<any>(`${API_URL}/search?X-Requested-With=overpass-turbo&format=json&q=${placeName}`)
  }

}
