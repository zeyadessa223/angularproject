import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [HttpClientModule, RouterModule, NgxSpinnerModule],
  providers: [UserService],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css',
})
export class UserdetailsComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    this.spinner.show();
    this.userService.getUserById(userId).subscribe((data: any) => {
      this.user = data.data;
      this.spinner.hide();
    });
  }
}
