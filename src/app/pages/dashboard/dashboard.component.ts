import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Icustom, Iproject, Iuser } from '../../entities/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  today = Date.now();
  fixedTimezone = this.today;
  user:any;
  customers:any;
  totalMoney: any;
  taskProcessing: any;
  taskWaiting: any;

  url = 'http://localhost:3000/';
  projects: Iproject[] = [];
  id = Number(localStorage.getItem('id'));

  constructor(private route: ActivatedRoute, private httpService: HttpClient) {}
  ngOnInit(): void {
    this.getProjects('projects');
    this.getUser(`users/${this.id}`);
    this.getCustomers('customers');
  }

  getProjects(end_point: string) {
    this.httpService.get(this.url + end_point).subscribe((data) => {
      this.projects = data as Iproject[];
      this.taskWaiting = this.projects.filter((item) => item.status == 'waiting');
      this.taskProcessing = this.projects.filter(
            (item) => item.status == 'processing'
          );
      this.totalMoney = this.projects.reduce((total, project) => {
        return total + project.totalMoney;
      }, 0);
    });
  }

  getUser(end_point:string) {
      this.httpService.get(this.url + end_point).subscribe((data) => {
            this.user = data as Iuser;
      })
  }

  getCustomers(end_point:string) {
      this.httpService.get(this.url + end_point).subscribe((data) => {
            this.customers = data as Icustom[];
      })
  }

  numberWithComas = (num: number) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

}
