import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-alert-detail-blade',
  templateUrl: './alert-detail-blade.component.html',
  styleUrls: ['./alert-detail-blade.component.css']
})
export class AlertDetailBladeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  private alertId: string;

  ngOnInit() {
    this.alertId = this.route.snapshot.paramMap.get('alertId');
  }

}