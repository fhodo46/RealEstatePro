import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './student/student.component';
import { PropertyComponent } from './property/property.component';
import { PropertiesComponent } from './properties/properties.component';

import { CalendarComponent } from './calendar/calendar.component';
import { WithoutLoginComponent } from './withoutlogin/withoutlogin.component';
import { AgentComponent } from './agent/agent.component';
import { NewsComponent } from './news/news.component';
import { JobPositionsComponent } from './jobpositions/jobpositions.component';
import { FooterComponent } from './footer/footer.component';



export const routes: Routes = [
    
    {path: '', redirectTo:'withoutlogin', pathMatch: 'full'},  
    
    {path: 'withoutlogin',   component: WithoutLoginComponent },
    {path: 'login',   component: LoginComponent  },
    

    {path: 'home',   component: HomeComponent}, 
    {path: 'sign-up',   component: SignupComponent  },
    
    {path: 'property',   component: PropertyComponent }, 
    {path: 'properties',   component: PropertiesComponent }, 
    {path: 'calendar',   component: CalendarComponent},
    
    
    {path: 'agent', component: AgentComponent },
    

    { path: 'news', component: NewsComponent },

    { path: 'jobpositions', component: JobPositionsComponent }, { path: 'footer', component: FooterComponent }];