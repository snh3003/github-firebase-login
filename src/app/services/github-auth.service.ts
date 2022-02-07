import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubAuthService {
  private gitUri = 'https://api.github.com/users/';
  constructor(private httpClient: HttpClient) {}

  getUser = (username: string) => this.httpClient.get(this.gitUri + username);

  getRepos(repoUrl: string) {
    return this.httpClient.get(repoUrl);
  }
}
