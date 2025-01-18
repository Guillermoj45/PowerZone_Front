import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(http: HttpClient) { }

  createUser(form: FormGroup) {

  }



}
