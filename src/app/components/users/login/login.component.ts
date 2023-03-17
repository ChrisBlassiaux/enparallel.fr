import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UserService) {}

  ngOnInit() {
    // this.store.collection('todo').add({ test: 'coucou' })

    this.usersService.getUser(9).subscribe(res => {
      res.forEach((data: any) => {
        console.log(data.payload.doc.data())
      })
    })

  }


}
