import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproject } from '../entities/user';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
      taskData = {
            name: '',
            description: '',
            project : '',
            priority : '',
            assigned : '',
            status : '',
      };
      ngOnInit(): void {}
      onSubmit(taskForm:NgForm) {
            console.log(taskForm.value);

      }
      project : Iproject[] = [
            {
                  id : 1,
                  name : 'Project 1',
                  status : 'waiting',
                  price : 2000000,
                  employ: [1,2,3],
                  totalMoney : 100000000,
                  date : new Date(2022,1,2),
                  employs : 10,
                  members:[]
            },
            {
                  id : 2,
                  name : 'Project 2',
                  status : 'waiting',
                  price : 20000000,
                  employ: [4,5,3,6],
                  totalMoney : 100000000,
                  date : new Date(2022,1,1),
                  employs : 10,
                  members:[]
            },
            {
                  id : 3,
                  name : 'Project 3',
                  status : 'processing',
                  price : 20000000,
                  employ: [7,8],
                  totalMoney : 100000000,
                  date : new Date(2022,1,3),
                  employs : 10,
                  members:[]
            },
            {
                  id : 4,
                  name : 'Project 4',
                  status : 'processing',
                  price : 20000000,
                  employ: [9],
                  totalMoney : 100000000,
                  date : new Date(2022,1,4),
                  employs : 10,
                  members:[]
            },
            {
                  id : 5,
                  name : 'Project 5',
                  status : 'processing',
                  price : 20000000,
                  employ: [10,11,12,13,14,15],
                  totalMoney : 100000000,
                  date : new Date(2022,1,5),
                  employs : 10,
                  members:[]
            },
      ]
}
