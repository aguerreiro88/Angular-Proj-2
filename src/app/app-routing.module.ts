import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component'

const routes: Routes = [
  {
    path: 'tickets',
    component: TicketListComponent
  },
  {
    path: 'tickets/create',
    component: TicketFormComponent
  },
  {
    path: 'tickets/:id',
    component: TicketDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'tickets',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
