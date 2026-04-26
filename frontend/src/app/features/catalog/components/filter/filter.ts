import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export interface FilterOptions {
  search: string;
  minPrice: number | null;
  maxPrice: number | null;
  sort: string;
  minRating: number | null;
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.html',
})
export class FilterComponent implements OnInit, OnChanges, OnDestroy {
  @Input() searchQuery: string = '';
  @Input() minPrice: number | null = null;
  @Input() maxPrice: number | null = null;
  @Input() sortBy: string = '';
  @Input() minRating: number | null = null;

  @Output() filterChanged = new EventEmitter<FilterOptions>();

  readonly priceMax = 2000;
  readonly priceStep = 25;

  minPriceSlider = 0;
  maxPriceSlider = 2000;

  private searchSubject = new Subject<string>();
  private searchSubscription!: Subscription;

  ngOnInit() {
    this.searchSubscription = this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(value => {
      this.searchQuery = value;
      this.applyFilters();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['minPrice']) {
      this.minPriceSlider = this.minPrice ?? 0;
    }
    if (changes['maxPrice']) {
      this.maxPriceSlider = this.maxPrice ?? this.priceMax;
    }
  }

  ngOnDestroy() {
    this.searchSubscription?.unsubscribe();
  }

  onSearchChange(value: string) {
    this.searchSubject.next(value);
  }

  onPriceChange(): void {
    if (this.minPriceSlider > this.maxPriceSlider) {
      const tmp = this.minPriceSlider;
      this.minPriceSlider = this.maxPriceSlider;
      this.maxPriceSlider = tmp;
    }
    this.minPrice = this.minPriceSlider > 0 ? this.minPriceSlider : null;
    this.maxPrice = this.maxPriceSlider < this.priceMax ? this.maxPriceSlider : null;
    this.applyFilters();
  }

  setMinRating(rating: number | null): void {
    this.minRating = rating;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filterChanged.emit({
      search: this.searchQuery,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      sort: this.sortBy,
      minRating: this.minRating,
    });
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.minPrice = null;
    this.maxPrice = null;
    this.sortBy = '';
    this.minRating = null;
    this.minPriceSlider = 0;
    this.maxPriceSlider = this.priceMax;
    this.applyFilters();
  }
}
