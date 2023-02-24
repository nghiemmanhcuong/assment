import { Component } from '@angular/core';
import { Iuser } from './entities/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectname';
  user : Iuser[] = [
      {
            id: 1,
            name : 'Nguyễn Văn A',
            isAdmin : false,
            location : 'East',
            status : 'Available',
            img : 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600',
            email : 'nguyenvana@gmail.com',
            pass: '123123123'
      },
      {
            id: 2,
            name : 'Nguyễn Văn B',
            isAdmin : false,
            location : 'East',
            status : 'Available',
            img : 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600',
            email : 'nguyenvanb@gmail.com',
            pass: '123123123'
      },
      {
            id: 3,
            name : 'Nguyễn Văn C',
            isAdmin : false,
            location : 'East',
            status : 'Busy',
            img : 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600',
            email : 'nguyenvanc@gmail.com',
            pass: '123123123'
      },
      {
            id: 4,
            name : 'Nguyễn Văn D',
            isAdmin : false,
            location : 'East',
            status : 'Busy',
            img : 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600',
            email : 'nguyenvand@gmail.com',
            pass: '123123123'
      },
      {
            id: 5,
            name : 'Nguyễn Văn E',
            isAdmin : false,
            location : 'East',
            status : 'Available',
            img : 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600',
            email : 'nguyenvane@gmail.com',
            pass: '123123123'
      },
  ]
}
