import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Category {
  id: number;
  name: string;
  parentId?: number | null;
  children?: Category[];
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category.html',
})
export class CategoryComponent implements OnChanges {
  @Input() categories: Category[] = [];
  @Input() selectedCategoryId: number | null = null;
  @Output() categorySelected = new EventEmitter<number | null>();

  searchTerm = '';
  filteredCategories: Category[] = [];
  expanded: Record<number, boolean> = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categories']) {
      this.filterCategories();
    }
  }

  filterCategories(): void {
    if (!this.searchTerm.trim()) {
      this.filteredCategories = this.categories;
      return;
    }
    const term = this.searchTerm.toLowerCase();
    this.filteredCategories = this.categories.map(c => this.filterNode(c, term)).filter(c => c !== null) as Category[];
  }

  private filterNode(node: Category, term: string): Category | null {
    const isMatch = node.name.toLowerCase().includes(term);
    
    // Check children
    const matchingChildren = node.children 
      ? node.children.map(c => this.filterNode(c, term)).filter(c => c !== null) as Category[]
      : [];

    if (isMatch || matchingChildren.length > 0) {
      if (matchingChildren.length > 0) {
        this.expanded[node.id] = true; // Auto-expand matching nodes
      }
      return {
        ...node,
        children: matchingChildren.length > 0 ? matchingChildren : node.children
      };
    }
    return null;
  }

  toggleExpand(category: Category, event: Event): void {
    event.stopPropagation();
    if (category.children && category.children.length > 0) {
      this.expanded[category.id] = !this.expanded[category.id];
    }
  }

  selectCategory(id: number | null, event?: Event): void {
    if (event) event.stopPropagation();
    if (this.selectedCategoryId !== id) {
      this.selectedCategoryId = id;
      this.categorySelected.emit(id);
    }
  }
}
