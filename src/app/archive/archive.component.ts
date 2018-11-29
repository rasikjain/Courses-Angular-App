import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year: number;
  month: number;
  paramTemp: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.year = +params.get('year');
    this.month = +params.get('month');
    console.log(this.paramTemp);
  }

  viewAll() {
    this.router.navigate(['/']);
  }
}
