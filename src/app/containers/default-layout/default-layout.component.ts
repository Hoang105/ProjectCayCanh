import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Modules/Login/authentication.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  public isShow: boolean = false;
  constructor(
    public route:Router,
    private authenticationService: AuthenticationService,
    @Inject(DOCUMENT) _document?: any) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
  Logout(){
    this.authenticationService.logout();
    this.route.navigate(['login']);
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  hideMenu(){
    this.isShow = !this.isShow;
  }
  setting(){
    this.route.navigate(['/base/setting']);
  }
}
