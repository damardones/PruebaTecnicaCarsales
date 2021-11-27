import { NgModule } from "@angular/core";
import { Route, RouterModule} from '@angular/router';
import { CharacterComponent } from "./pages/characters/character/character.component";
import { MarcoComponent } from "./pages/shared/marco/marco.component";

const ROUTES: Route[] = [
    {
        path: '',
        component: MarcoComponent,
        children: [
            {
                path: 'episodes',
                loadChildren: () => import('src/app/pages/episodes/episodes.module').then(m => m.EpisodesModule)
            },
            {
                path: 'characters',
                loadChildren: () => import('src/app/pages/characters/characters.module').then(m => m.CharactersModule)
            }            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule{}