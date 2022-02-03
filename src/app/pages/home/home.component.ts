import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GithubAuthService } from 'src/app/services/github-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any = null;
  userName: string;
  Error = null;

  constructor(
    private ref: ChangeDetectorRef,
    private githubService: GithubAuthService
  ) { }

  ngOnInit(): void {
  }

  handleFindUser() {
    this.githubService.getUser(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.Error = null;
        this.ref.detectChanges();
      },
      (error) => {
        this.Error = error;
        this.user = null;
        this.ref.detectChanges();
      }
    )
  }

}
