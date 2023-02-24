import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Icustom, IMember, Iproject, Iuser } from '../../entities/user';

@Component({
  selector: 'app-pject-detail',
  templateUrl: './pject-detail.component.html',
  styleUrls: ['./pject-detail.component.css'],
})
export class PjectDetailComponent implements OnInit {
  project: any;
  today = Date.now();
  users: any;
  customers:Icustom[] = [];
  projectMembers:IMember[] = [];
  url: string = 'http://localhost:3000/';
  id = Number(localStorage.getItem('id'));
  constructor(private route: ActivatedRoute, private httpService: HttpClient) {}
  ngOnInit(): void {
    this.getUser(`users/${this.id}`);
    let idProject = this.route.snapshot.params['id'];
    let id = Number(localStorage.getItem('id'));
    this.httpService.get(this.url + `projects/${idProject}`).subscribe(data => {
      this.project = data as Iproject
    })
    this.getCustomers('customers');
  }
  numberWithComas = (num: number) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  getUser(end_point: string) {
    this.httpService.get(this.url + end_point).subscribe((data) => {
      this.users = data as Iuser;
    });
  }

  getCustomers(end_point: string) {
    this.httpService.get(this.url + end_point).subscribe((data) => {
      this.customers = data as Icustom[];
    });
  }
}
