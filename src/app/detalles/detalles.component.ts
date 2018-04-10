import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: []
})
export class DetallesComponent implements OnInit {
  viajeObservable: Observable<any[]>;
  id: number;
  viaje={};
  constructor(private router: Router,private route: ActivatedRoute, private db: AngularFireDatabase) { }


  ngOnInit() {
    console.log("ID");
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.viajeObservable=this.getDetalleViajes('/viajes');
    
  }

  getDetalleViajes(listPath) {
    return this.db.list(listPath).valueChanges();
  }

  getViajes(listPath) {
    console.log("getViajes");
    return this.db.list(listPath).valueChanges();


      
    
    
      
    }
    
    }

    
 