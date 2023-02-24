import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { IMember } from 'src/app/entities/user';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  url = 'http://localhost:3000/members/';
  members: IMember[] = [];
  member: IMember = {
    id:0,
    name: '',
    age:null,
    email:'',
    phone:''
  }

  constructor(
    private httpService: HttpClient,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.getMembers()
  }

  onSubmit(data: any): void {
    if(data.value.id !== 0) {
      this.httpService.put(this.url + data.value.id, data.value).subscribe(() => {
        console.log('edit member successfully');
        this.getMembers()
        this.modalService.dismissAll()
      })
    }else {
      this.httpService.post(this.url, data.value).subscribe(() => {
        console.log('add member successfully');
        this.getMembers()
        this.modalService.dismissAll()
      })
    }
  }

  open(content: any,id:null | number=null) {
    if(!id) {
      this.modalService.open(content);
      this.member = {
        id:0,
        name: '',
        age:null,
        email:'',
        phone:''
      }
    }else {
      this.httpService.get(this.url + id).subscribe(data => {
        this.member = data as IMember
        this.modalService.open(content);
      })
    }
  }

  getMembers(): void {
    this.httpService.get(this.url).subscribe((data) => {
      this.members = data as IMember[];
    });
  }

  deleteMember(id: number): void {
    if(confirm('Are you sure you want to delete')){
      this.httpService.delete(this.url + id).subscribe(() => {
        console.log('delete member successfully');
        this.getMembers()
      })
    }
  }
}
