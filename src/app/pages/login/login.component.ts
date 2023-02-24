import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router'
import { Iuser } from '../../entities/user';
@Component({
      selector: 'app-login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
      userData = {
            tenDN: '',
            matKhau: '',
      };
      constructor(private route :ActivatedRoute,private router : Router) {}
      ngOnInit(): void {}
      onSubmit(loginForm:NgForm) {
            const userid = this.user.filter(email => email.email === loginForm.value.user && email.pass === loginForm.value.pass)
            const isAdminn = this.user.filter((item)=>{return item.isAdmin == userid[0].isAdmin})
            
            localStorage.setItem('id', JSON.stringify(userid[0].id))
            if(isAdminn[0].isAdmin==true){
                  this.router.navigate(['/dashboard'])
            }else{
                  this.router.navigate(['/employ'])
            }
      }
      user : Iuser[] = [
            {
                  id: 1,
                  name : 'Nghiêm mạnh cường',
                  isAdmin : true,
                  location : 'East',
                  status : 'Available',
                  img : 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  email : 'nghiemmanhcuong98@gmail.com',
                  pass: '123456'
            },
        ]
}
