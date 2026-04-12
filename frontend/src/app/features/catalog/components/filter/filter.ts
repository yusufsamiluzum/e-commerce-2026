import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export interface FilterOptions {
  search: string;
  minPrice: number | null;
  maxPrice: number | null;
  sort: string;
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.html',
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() searchQuery: string = '';
  @Input() minPrice: number | null = null;
  @Input() maxPrice: number | null = null;
  @Input() sortBy: string = '';

  @Output() filterChanged = new EventEmitter<FilterOptions>();

  private searchSubject = new Subject<string>();
  private searchSubscription!: Subscription;

  ngOnInit() {
    this.searchSubscription = this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(searchValue => {
      this.searchQuery = searchValue;
      this.applyFilters();
    });
  }

  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  onSearchChange(value: string) {
    this.searchSubject.next(value);
  }

  applyFilters(): void {
    this.filterChanged.emit({
      search: this.searchQuery,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      sort: this.sortBy,
    });
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.minPrice = null;
    this.maxPrice = null;
    this.sortBy = '';
    this.applyFilters();
  }
}
