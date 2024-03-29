import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { TemplateComponent } from './components/template/template.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LegalComponent } from './pages/legal/legal.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { SelectionDropdownComponent } from './components/reusable/selection-dropdown/selection-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogPostComponent,
    TemplateComponent,
    HomeComponent,
    AboutComponent,
    LegalComponent,
    RoadmapComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SelectionDropdownComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
