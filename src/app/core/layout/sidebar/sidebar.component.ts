import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent  implements OnChanges{
  activeRoute: string = '';
  pageList: string[] = ['dashboard', 'vehicles']

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
  ) {
    this.activeRoute = this.router.url.substring(1);
    this.cd.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cd.markForCheck();
  }

}
