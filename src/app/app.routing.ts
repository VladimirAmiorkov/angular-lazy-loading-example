import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { EagerComponent } from './pages/eager/eager.component';

export const routing: ModuleWithProviders = RouterModule.forRoot([
    { path: '', redirectTo: 'eager', pathMatch: 'full' },
    { path: 'eager', component: EagerComponent },
    { path: 'lazy', loadChildren: 'app/pages/lazy/lazy.module#LazyModule' }
]);
