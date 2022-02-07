import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { GithubAuthService } from 'src/app/services/github-auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit {
  @Input() repoUri: string;
  repos: any;

  constructor(
    private githubService: GithubAuthService,
    private ref: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    console.log('repoUri in repos', this.repoUri);
    if (this.repoUri) {
      this.githubService.getRepos(this.repoUri).subscribe(
        (repos: any) => {
          this.repos = repos;

          this.ref.detectChanges();
        },
        (err) => {
          console.log('err:', err);
        }
      );
    }
  }
}
