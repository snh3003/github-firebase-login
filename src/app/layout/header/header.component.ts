import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  email: any = null;
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    authService.getUser().subscribe((user) => {
      this.email = user!.email;
    });
  }

  userSignIn = (email: string, password: string) => {
    this.authService.signIn(email, password);
  };

  async userSignOut() {
    try {
      const res = await this.authService.signOut();
      this.router.navigateByUrl(['/signin']);
      this.toastr.success('You have been signed out');
      this.toastr.info('Login again to continue');
      this.email = null;
    }catch(e: any){
      this.toastr.error(e.message);
    }
  }

  ngOnInit(): void {}
}
