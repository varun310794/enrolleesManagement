import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MdbTableDirective } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { EnroleesService } from 'src/app/services/enrolees.service';
import { takeUntil } from 'rxjs/operators';
import { Enrollee } from 'src/app/interfaces/enrollee.interface';

@Component({
  selector: 'app-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.scss'],
})
export class EnrolleeComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable:
    | MdbTableDirective
    | any;
  elements: Enrollee[] = [];
  headElements = ['id', 'name', 'date Of Birth', 'active'];
  private readonly destroy$ = new Subject();

  constructor(
    private cdRef: ChangeDetectorRef,
    private enroleesService: EnroleesService,
    private route: Router
  ) {}

  ngOnInit() {
    this.enroleesService
      .getEnrolees()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Enrollee[]) => {
        this.elements = data;
        this.mdbTable.setDataSource(data);
        this.elements = this.mdbTable.getDataSource();
        this.cdRef.detectChanges();
      });
  }

  ngAfterViewInit() {}

  searchEnrolee() {}

  editEnrollee(id: string) {
    this.route.navigate(['/enrollee-detail', id]);
  }

  getValue(value: boolean) {
    return value ? 'Active' : 'Inactive';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
