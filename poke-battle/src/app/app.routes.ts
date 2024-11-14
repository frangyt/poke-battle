import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BattleComponent } from './battle/battle.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'battle', component: BattleComponent },
];
