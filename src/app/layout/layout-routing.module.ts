import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'bs-element', loadChildren: () => import('./bs-element/bs-element.module').then(m => m.BsElementModule) },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
            { path: 'components', loadChildren: () => import('./bs-component/bs-component.module').then(m => m.BsComponentModule) },
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            // tslint:disable-next-line: max-line-length
            { path: 'newloan', loadChildren: () => import('./new-loan-application/new-loan-application.module').then(m => m.NewLoanApplicationModule) },
            // tslint:disable-next-line: max-line-length
            { path: 'loanlist', loadChildren: () => import('./list-of-loan-application/list-of-loan-application.module').then(m => m.ListOfLoanApplicationModule) },
            { path: 'loanstatus', loadChildren: () => import('./loan-status/loan-status.module').then(m => m.LoanStatusModule) },
            // tslint:disable-next-line: max-line-length
            //{ path: 'applicationdetail', loadChildren: () => import('./application-details/application-details.module').then(m => m.ApplicationDetailsModule)}
            // tslint:disable-next-line: max-line-length
            { path: 'allapplications', loadChildren: () => import('./loanOfficer/all-applications/all-applications.module').then(m => m.AllApplicationsModule) },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
