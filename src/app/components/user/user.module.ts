import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component'; 
import { EditUserComponent } from './edit-user/edit-user.component';
import { RouterModule, Routes } from '@angular/router';

export const userRoutes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'users/edit/:id', component: EditUserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UserComponent, EditUserComponent],
})
export class UserModule { }
