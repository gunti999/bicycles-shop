import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';
import { Order, PurchaseHistoryService } from 'src/app/services/history/purchase-history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  ordersForUser: Order[] = [];

  constructor(
    public auth: AuthorizationService,
    public purchaseHistory: PurchaseHistoryService
  ) { }

  ngOnInit(): void {
    if (this.auth.logInUser != undefined) {
      this.ordersForUser = this.purchaseHistory.getOrdersByUserId(this.auth.logInUser.id);
    }
  }

}
