import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatRippleModule,
    MatDividerModule,
  ],
  exports: [LayoutComponent, FooterComponent, HeaderComponent],
})
export class LayoutModule { }
