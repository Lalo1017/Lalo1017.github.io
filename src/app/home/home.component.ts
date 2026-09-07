import { Component } from '@angular/core';
import { MetaService } from '../services/meta-service.service.ts.service';
import { Meta } from '../models/meta.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  metas:Array<Meta> = new Array<Meta>;

  constructor(public metaService: MetaService) {
    console.log(this.metaService);
    this.metaService.getMeta().snapshotChanges().pipe(
      
      map(changes => 
        changes.map(c => 
        ({ id : c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(
      data => {
        this.metas = data;
        console.log(this.metas);
      }
    )
  }

  form = {
    new_goal : ""
  }
  submit() {
    console.log('Datos enviados:', this.form);
    this.metaService.addItem(this.form.new_goal);
  }

  deleteElement(meta : Meta){
    this.metaService.deleteItem(meta.id ?? '');
  }

}
