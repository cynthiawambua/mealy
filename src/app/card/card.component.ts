import { Component, OnInit, TemplateRef } from '@angular/core';
// Firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// Bootstrap
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-card', // the selector is what will be used in the tag ex. <app-card> </app-card>
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  modalRef: BsModalRef;
  trucks: Observable<any[]>;
  entrees: Observable<{}>;
  sides: Observable<{}>;

  constructor(private modalService: BsModalService, db: AngularFirestore){
    this.trucks = db.collection('trucks').valueChanges();

    // view debugger console on browser and look at what's being logged below
    console.log(this.trucks); // observable
    this.trucks.subscribe(data => console.log(data)); // must subscribe observable to get data
  
    this.entrees = db.collection('trucks').doc('Burger Tank').collection('Entrees').valueChanges();
    console.log(this.entrees);
    this.entrees.subscribe(data => console.log(data));
  
    this.sides = db.collection('trucks').doc('Burger Tank').collection('Sides').valueChanges();
    console.log(this.sides);
    this.sides.subscribe(data => console.log(data));

  
  }


    getDocument() {
      var db: AngularFirestore;
    // [START get_document]
    var truckRef = db.collection('trucks').doc('Burger Tank');
    var getDoc = truckRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          console.log('Document data:', doc.data());
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
    // [END get_document]
  
   return getDoc;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
  }
}
