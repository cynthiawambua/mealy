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

  constructor(private modalService: BsModalService, db: AngularFirestore){
    this.trucks = db.collection('trucks').valueChanges();

    // view debugger console on browser and look at what's being logged below
    console.log(this.trucks); // observable
    this.trucks.subscribe(data => console.log(data)); // must subscribe observable to get data
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
  }
}
