import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'room',
        component: RoomComponent,
      },
      {
        path: '**',
        redirectTo: 'room',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
