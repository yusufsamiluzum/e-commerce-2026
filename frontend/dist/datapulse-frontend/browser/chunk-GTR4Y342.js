import {
  ReviewService
} from "./chunk-F2OG5JAR.js";
import {
  AuthService
} from "./chunk-LK4C7XHL.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-E3IWJWXM.js";
import {
  CartService
} from "./chunk-VP2T37FR.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-XXXBABRB.js";
import {
  toSignal
} from "./chunk-QWXYW3ER.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  HttpClient,
  HttpParams,
  Injectable,
  Input,
  NgClass,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  Output,
  Subject,
  __spreadProps,
  __spreadValues,
  catchError,
  debounceTime,
  distinctUntilChanged,
  inject,
  of,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7LZR64HY.js";

// src/app/core/services/product.ts
var ProductService = class _ProductService {
  http = inject(HttpClient);
  // Point this to your Spring Boot API URL
  apiUrl = "http://localhost:8080/api/products";
  // Fetch all products, optionally passing search/filter params
  getProducts(filters = {}) {
    let params = new HttpParams();
    if (filters.search)
      params = params.set("search", filters.search);
    if (filters.categoryId)
      params = params.set("categoryId", filters.categoryId);
    if (filters.minPrice)
      params = params.set("minPrice", filters.minPrice);
    if (filters.maxPrice)
      params = params.set("maxPrice", filters.maxPrice);
    if (filters.sort)
      params = params.set("sort", filters.sort);
    return this.http.get(this.apiUrl, { params });
  }
  getCategories() {
    return this.http.get("http://localhost:8080/api/categories/tree");
  }
  // Fetch a single product for the details page
  getProductById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function ProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/catalog/components/product-card/product-card.ts
var _c0 = (a0) => ["/catalog", a0];
function ProductCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-blue-500", ctx_r0.product.badge.type === "new")("bg-red-500", ctx_r0.product.badge.type === "discount");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.product.badge.text, " ");
  }
}
function ProductCardComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", ctx_r0.product.originalPrice);
  }
}
var ProductCardComponent = class _ProductCardComponent {
  // We use the 'required' flag so Angular throws an error if we forget to pass a product
  product;
  static \u0275fac = function ProductCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, decls: 23, vars: 13, consts: [[1, "bg-white", "rounded-xl", "border", "border-gray-100", "shadow-sm", "overflow-hidden", "hover:shadow-lg", "transition-shadow", "duration-300", "relative", "group", "cursor-pointer", 3, "routerLink"], [1, "absolute", "top-3", "left-3", "z-10", "text-xs", "font-bold", "px-2", "py-0.5", "rounded", "text-white", 3, "bg-blue-500", "bg-red-500"], [1, "absolute", "top-3", "right-3", "z-10", "bg-white", "rounded-full", "p-1.5", "shadow-sm", "text-gray-400", "hover:text-red-500", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"], [1, "h-48", "w-full", "bg-gray-50", "flex", "items-center", "justify-center", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-500", 3, "src", "alt"], [1, "p-4"], [1, "text-xs", "text-gray-500", "mb-1"], [1, "font-semibold", "text-gray-900", "mb-2", "truncate", 3, "title"], [1, "flex", "items-center", "gap-1", "mb-3"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-4", "w-4", "text-yellow-400"], ["d", "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"], [1, "text-sm", "text-gray-700", "font-medium"], [1, "text-xs", "text-gray-400"], [1, "flex", "items-center", "gap-2"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-400", "line-through"], [1, "absolute", "top-3", "left-3", "z-10", "text-xs", "font-bold", "px-2", "py-0.5", "rounded", "text-white"]], template: function ProductCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ProductCardComponent_Conditional_1_Template, 2, 5, "div", 1);
      \u0275\u0275elementStart(2, "button", 2);
      \u0275\u0275listener("click", function ProductCardComponent_Template_button_click_2_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "p", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h3", 9);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 11);
      \u0275\u0275element(14, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "span", 13);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 14);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 15)(20, "span", 16);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, ProductCardComponent_Conditional_22_Template, 2, 1, "span", 17);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, ctx.product.id));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.product.badge ? 1 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("src", ctx.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx.product.name);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.product.category);
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.product.name);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.product.name, " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.product.rating);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.product.reviewCount, ")");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("$", ctx.product.price);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.product.originalPrice ? 22 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCardComponent, [{
    type: Component,
    args: [{ selector: "app-product-card", standalone: true, imports: [CommonModule, RouterModule], template: `<div
  [routerLink]="['/catalog', product.id]"
  class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer"
>
  @if (product.badge) {
    <div
      class="absolute top-3 left-3 z-10 text-xs font-bold px-2 py-0.5 rounded text-white"
      [class.bg-blue-500]="product.badge.type === 'new'"
      [class.bg-red-500]="product.badge.type === 'discount'"
    >
      {{ product.badge.text }}
    </div>
  }

  <button
    (click)="$event.stopPropagation()"
    class="absolute top-3 right-3 z-10 bg-white rounded-full p-1.5 shadow-sm text-gray-400 hover:text-red-500 transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  </button>

  <div class="h-48 w-full bg-gray-50 flex items-center justify-center overflow-hidden">
    <img
      [src]="product.imageUrl"
      [alt]="product.name"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </div>

  <div class="p-4">
    <p class="text-xs text-gray-500 mb-1">{{ product.category }}</p>
    <h3 class="font-semibold text-gray-900 mb-2 truncate" [title]="product.name">
      {{ product.name }}
    </h3>

    <div class="flex items-center gap-1 mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-yellow-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
      <span class="text-sm text-gray-700 font-medium">{{ product.rating }}</span>
      <span class="text-xs text-gray-400">({{ product.reviewCount }})</span>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-lg font-bold text-gray-900">\${{ product.price }}</span>
      @if (product.originalPrice) {
        <span class="text-sm text-gray-400 line-through">\${{ product.originalPrice }}</span>
      }
    </div>
  </div>
</div>
` }]
  }], null, { product: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "app/features/catalog/components/product-card/product-card.ts", lineNumber: 12 });
})();

// src/app/features/catalog/components/category/category.ts
var _c02 = (a0, a1) => ({ "bg-blue-50 text-blue-600": a0, "text-gray-600 hover:bg-gray-50": a1 });
var _c1 = (a0) => ({ $implicit: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function CategoryComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CategoryComponent_ng_template_13_For_1_button_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function CategoryComponent_ng_template_13_For_1_button_2__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
}
function CategoryComponent_ng_template_13_For_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function CategoryComponent_ng_template_13_For_1_button_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const category_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleExpand(category_r3, $event));
    });
    \u0275\u0275template(1, CategoryComponent_ng_template_13_For_1_button_2__svg_svg_1_Template, 2, 0, "svg", 17)(2, CategoryComponent_ng_template_13_For_1_button_2__svg_svg_2_Template, 2, 0, "svg", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.expanded[category_r3.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.expanded[category_r3.id]);
  }
}
function CategoryComponent_ng_template_13_For_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
function CategoryComponent_ng_template_13_For_1_ul_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CategoryComponent_ng_template_13_For_1_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 22);
    \u0275\u0275template(1, CategoryComponent_ng_template_13_For_1_ul_6_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    const categoryTree_r6 = \u0275\u0275reference(14);
    \u0275\u0275classProp("hidden", !ctx_r3.expanded[category_r3.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", categoryTree_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c1, category_r3.children));
  }
}
function CategoryComponent_ng_template_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div", 11);
    \u0275\u0275listener("click", function CategoryComponent_ng_template_13_For_1_Template_div_click_1_listener($event) {
      const category_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectCategory(category_r3.id, $event));
    });
    \u0275\u0275template(2, CategoryComponent_ng_template_13_For_1_button_2_Template, 3, 2, "button", 12)(3, CategoryComponent_ng_template_13_For_1_span_3_Template, 1, 0, "span", 13);
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CategoryComponent_ng_template_13_For_1_ul_6_Template, 2, 6, "ul", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c02, ctx_r3.selectedCategoryId === category_r3.id, ctx_r3.selectedCategoryId !== category_r3.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", category_r3.children && category_r3.children.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !category_r3.children || category_r3.children.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", category_r3.children && category_r3.children.length > 0);
  }
}
function CategoryComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CategoryComponent_ng_template_13_For_1_Template, 7, 8, "li", null, _forTrack0);
  }
  if (rf & 2) {
    const nodes_r7 = ctx.$implicit;
    \u0275\u0275repeater(nodes_r7);
  }
}
var CategoryComponent = class _CategoryComponent {
  categories = [];
  selectedCategoryId = null;
  categorySelected = new EventEmitter();
  searchTerm = "";
  filteredCategories = [];
  expanded = {};
  ngOnChanges(changes) {
    if (changes["categories"]) {
      this.filterCategories();
    }
  }
  filterCategories() {
    if (!this.searchTerm.trim()) {
      this.filteredCategories = this.categories;
      return;
    }
    const term = this.searchTerm.toLowerCase();
    this.filteredCategories = this.categories.map((c) => this.filterNode(c, term)).filter((c) => c !== null);
  }
  filterNode(node, term) {
    const isMatch = node.name.toLowerCase().includes(term);
    const matchingChildren = node.children ? node.children.map((c) => this.filterNode(c, term)).filter((c) => c !== null) : [];
    if (isMatch || matchingChildren.length > 0) {
      if (matchingChildren.length > 0) {
        this.expanded[node.id] = true;
      }
      return __spreadProps(__spreadValues({}, node), {
        children: matchingChildren.length > 0 ? matchingChildren : node.children
      });
    }
    return null;
  }
  toggleExpand(category, event) {
    event.stopPropagation();
    if (category.children && category.children.length > 0) {
      this.expanded[category.id] = !this.expanded[category.id];
    }
  }
  selectCategory(id, event) {
    if (event)
      event.stopPropagation();
    if (this.selectedCategoryId !== id) {
      this.selectedCategoryId = id;
      this.categorySelected.emit(id);
    }
  }
  static \u0275fac = function CategoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryComponent, selectors: [["app-category"]], inputs: { categories: "categories", selectedCategoryId: "selectedCategoryId" }, outputs: { categorySelected: "categorySelected" }, features: [\u0275\u0275NgOnChangesFeature], decls: 15, vars: 9, consts: [["categoryTree", ""], [1, "bg-white", "p-5", "rounded-xl", "shadow-sm", "border", "border-gray-100"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-gray-500", "mb-4", "ml-1"], [1, "relative", "mb-4"], [1, "absolute", "inset-y-0", "left-3", "flex", "items-center", "text-gray-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Kategori Ara...", 1, "pl-9", "pr-3", "py-2", "border", "border-gray-200", "rounded-lg", "w-full", "text-sm", "bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "transition-colors", 3, "ngModelChange", "keyup", "ngModel"], [1, "space-y-1"], ["type", "button", 1, "w-full", "text-left", "px-3", "py-2", "rounded-lg", "text-sm", "font-medium", "transition-colors", "duration-200", "focus:outline-none", 3, "click", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "items-center", "w-full", "px-3", "py-2", "rounded-lg", "text-sm", "font-medium", "transition-colors", "duration-200", "cursor-pointer", 3, "click", "ngClass"], ["class", "mr-2 focus:outline-none text-gray-400 hover:text-gray-600 flex items-center justify-center p-1 rounded hover:bg-gray-200 transition-colors", "style", "width: 20px; height: 20px;", 3, "click", 4, "ngIf"], ["class", "mr-2 w-[20px] inline-block", 4, "ngIf"], [1, "flex-1", "truncate"], ["class", "pl-4 mt-1 space-y-1", 3, "hidden", 4, "ngIf"], [1, "mr-2", "focus:outline-none", "text-gray-400", "hover:text-gray-600", "flex", "items-center", "justify-center", "p-1", "rounded", "hover:bg-gray-200", "transition-colors", 2, "width", "20px", "height", "20px", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "class", "h-3 w-3", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-3", "w-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "mr-2", "w-[20px]", "inline-block"], [1, "pl-4", "mt-1", "space-y-1"]], template: function CategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
      \u0275\u0275text(2, "Kategoriler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function CategoryComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keyup", function CategoryComponent_Template_input_keyup_7_listener() {
        return ctx.filterCategories();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "ul", 8)(9, "li")(10, "button", 9);
      \u0275\u0275listener("click", function CategoryComponent_Template_button_click_10_listener($event) {
        return ctx.selectCategory(null, $event);
      });
      \u0275\u0275text(11, " T\xFCm Kategoriler ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, CategoryComponent_ng_container_12_Template, 1, 0, "ng-container", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, CategoryComponent_ng_template_13_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const categoryTree_r6 = \u0275\u0275reference(14);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c02, ctx.selectedCategoryId === null, ctx.selectedCategoryId !== null));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngTemplateOutlet", categoryTree_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c1, ctx.filteredCategories));
    }
  }, dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryComponent, [{
    type: Component,
    args: [{ selector: "app-category", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
  <h3 class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 ml-1">Kategoriler</h3>
  
  <!-- Search Bar -->
  <div class="relative mb-4">
    <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </span>
    <input 
      type="text" 
      [(ngModel)]="searchTerm" 
      (keyup)="filterCategories()"
      placeholder="Kategori Ara..." 
      class="pl-9 pr-3 py-2 border border-gray-200 rounded-lg w-full text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
    />
  </div>

  <ul class="space-y-1">
    <li>
      <button 
        (click)="selectCategory(null, $event)"
        type="button"
        class="w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none"
        [ngClass]="{
          'bg-blue-50 text-blue-600': selectedCategoryId === null,
          'text-gray-600 hover:bg-gray-50': selectedCategoryId !== null
        }">
        T\xFCm Kategoriler
      </button>
    </li>

    <ng-container *ngTemplateOutlet="categoryTree; context:{ $implicit: filteredCategories }"></ng-container>
  </ul>
</div>

<ng-template #categoryTree let-nodes>
  @for (category of nodes; track category.id) {
    <li>
      <div 
        class="flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
        [ngClass]="{
          'bg-blue-50 text-blue-600': selectedCategoryId === category.id,
          'text-gray-600 hover:bg-gray-50': selectedCategoryId !== category.id
        }"
        (click)="selectCategory(category.id, $event)">
        
        <button 
          *ngIf="category.children && category.children.length > 0"
          (click)="toggleExpand(category, $event)"
          class="mr-2 focus:outline-none text-gray-400 hover:text-gray-600 flex items-center justify-center p-1 rounded hover:bg-gray-200 transition-colors"
          style="width: 20px; height: 20px;">
          <svg *ngIf="expanded[category.id]" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
          <svg *ngIf="!expanded[category.id]" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <span *ngIf="!category.children || category.children.length === 0" class="mr-2 w-[20px] inline-block"></span>
        
        <span class="flex-1 truncate">{{ category.name }}</span>
      </div>

      <ul *ngIf="category.children && category.children.length > 0" [class.hidden]="!expanded[category.id]" class="pl-4 mt-1 space-y-1">
        <ng-container *ngTemplateOutlet="categoryTree; context:{ $implicit: category.children }"></ng-container>
      </ul>
    </li>
  }
</ng-template>
` }]
  }], null, { categories: [{
    type: Input
  }], selectedCategoryId: [{
    type: Input
  }], categorySelected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryComponent, { className: "CategoryComponent", filePath: "app/features/catalog/components/category/category.ts", lineNumber: 18 });
})();

// src/app/features/catalog/components/filter/filter.ts
var FilterComponent = class _FilterComponent {
  searchQuery = "";
  minPrice = null;
  maxPrice = null;
  sortBy = "";
  filterChanged = new EventEmitter();
  searchSubject = new Subject();
  searchSubscription;
  ngOnInit() {
    this.searchSubscription = this.searchSubject.pipe(debounceTime(400), distinctUntilChanged()).subscribe((searchValue) => {
      this.searchQuery = searchValue;
      this.applyFilters();
    });
  }
  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
  onSearchChange(value) {
    this.searchSubject.next(value);
  }
  applyFilters() {
    this.filterChanged.emit({
      search: this.searchQuery,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      sort: this.sortBy
    });
  }
  clearFilters() {
    this.searchQuery = "";
    this.minPrice = null;
    this.maxPrice = null;
    this.sortBy = "";
    this.applyFilters();
  }
  static \u0275fac = function FilterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilterComponent, selectors: [["app-filter"]], inputs: { searchQuery: "searchQuery", minPrice: "minPrice", maxPrice: "maxPrice", sortBy: "sortBy" }, outputs: { filterChanged: "filterChanged" }, decls: 34, vars: 4, consts: [[1, "bg-white", "p-5", "rounded-xl", "shadow-sm", "border", "border-gray-100", "flex", "flex-col", "space-y-6"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-gray-500", "mb-3", "ml-1"], [1, "relative"], [1, "absolute", "inset-y-0", "left-3", "flex", "items-center", "text-gray-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "\xDCr\xFCn ad\u0131...", 1, "pl-9", "pr-3", "py-2", "border", "border-gray-200", "rounded-lg", "w-full", "text-sm", "bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "transition-colors", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "flex", "items-center", "space-x-3"], ["type", "number", "placeholder", "Min\u20BA", 1, "w-full", "px-3", "py-2", "border", "border-gray-200", "rounded-lg", "text-sm", "bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "transition-colors", 3, "ngModelChange", "change", "ngModel"], [1, "text-gray-400", "text-sm"], ["type", "number", "placeholder", "Max\u20BA", 1, "w-full", "px-3", "py-2", "border", "border-gray-200", "rounded-lg", "text-sm", "bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "transition-colors", 3, "ngModelChange", "change", "ngModel"], [1, "w-full", "px-3", "py-2", "border", "border-gray-200", "rounded-lg", "text-sm", "text-gray-700", "bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "transition-colors", "cursor-pointer", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "newest"], ["value", "price_asc"], ["value", "price_desc"], ["value", "rating_desc"], [1, "pt-2"], [1, "w-full", "px-4", "py-2", "border", "border-gray-200", "text-gray-600", "bg-white", "hover:bg-gray-50", "rounded-lg", "text-sm", "font-medium", "transition-colors", "focus:outline-none", "focus:ring-2", "focus:ring-gray-200", 3, "click"]], template: function FilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h3", 1);
      \u0275\u0275text(3, "Ara");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "span", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 4);
      \u0275\u0275element(7, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "input", 6);
      \u0275\u0275listener("ngModelChange", function FilterComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.onSearchChange($event);
      })("keyup.enter", function FilterComponent_Template_input_keyup_enter_8_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div")(10, "h3", 1);
      \u0275\u0275text(11, "Fiyat Aral\u0131\u011F\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function FilterComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minPrice, $event) || (ctx.minPrice = $event);
        return $event;
      });
      \u0275\u0275listener("change", function FilterComponent_Template_input_change_13_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 9);
      \u0275\u0275text(15, "-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function FilterComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.maxPrice, $event) || (ctx.maxPrice = $event);
        return $event;
      });
      \u0275\u0275listener("change", function FilterComponent_Template_input_change_16_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div")(18, "h3", 1);
      \u0275\u0275text(19, "S\u0131rala");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function FilterComponent_Template_select_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
        return $event;
      });
      \u0275\u0275listener("change", function FilterComponent_Template_select_change_20_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(21, "option", 12);
      \u0275\u0275text(22, "\xD6nerilen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 13);
      \u0275\u0275text(24, "En Yeniler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 14);
      \u0275\u0275text(26, "Fiyat: Artan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 15);
      \u0275\u0275text(28, "Fiyat: Azalan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 16);
      \u0275\u0275text(30, "En Y\xFCksek Puanl\u0131lar");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 17)(32, "button", 18);
      \u0275\u0275listener("click", function FilterComponent_Template_button_click_32_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275text(33, " Temizle ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngModel", ctx.searchQuery);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.minPrice);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.maxPrice);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterComponent, [{
    type: Component,
    args: [{ selector: "app-filter", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col space-y-6">\n  \n  <!-- Search -->\n  <div>\n    <h3 class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 ml-1">Ara</h3>\n    <div class="relative">\n      <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">\n        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />\n        </svg>\n      </span>\n      <input \n        type="text" \n        [ngModel]="searchQuery" \n        (ngModelChange)="onSearchChange($event)"\n        (keyup.enter)="applyFilters()"\n        placeholder="\xDCr\xFCn ad\u0131..." \n        class="pl-9 pr-3 py-2 border border-gray-200 rounded-lg w-full text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"\n      />\n    </div>\n  </div>\n\n  <!-- Price Range -->\n  <div>\n    <h3 class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 ml-1">Fiyat Aral\u0131\u011F\u0131</h3>\n    <div class="flex items-center space-x-3">\n      <input \n        type="number" \n        [(ngModel)]="minPrice" \n        (change)="applyFilters()"\n        placeholder="Min\u20BA" \n        class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"\n      />\n      <span class="text-gray-400 text-sm">-</span>\n      <input \n        type="number" \n        [(ngModel)]="maxPrice" \n        (change)="applyFilters()"\n        placeholder="Max\u20BA" \n        class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"\n      />\n    </div>\n  </div>\n\n  <!-- Sort By -->\n  <div>\n    <h3 class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 ml-1">S\u0131rala</h3>\n    <select \n      [(ngModel)]="sortBy" \n      (change)="applyFilters()"\n      class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer"\n    >\n      <option value="">\xD6nerilen</option>\n      <option value="newest">En Yeniler</option>\n      <option value="price_asc">Fiyat: Artan</option>\n      <option value="price_desc">Fiyat: Azalan</option>\n      <option value="rating_desc">En Y\xFCksek Puanl\u0131lar</option>\n    </select>\n  </div>\n  \n  <!-- Clear Filters -->\n  <div class="pt-2">\n    <button \n      (click)="clearFilters()"\n      class="w-full px-4 py-2 border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"\n    >\n      Temizle\n    </button>\n  </div>\n</div>\n' }]
  }], null, { searchQuery: [{
    type: Input
  }], minPrice: [{
    type: Input
  }], maxPrice: [{
    type: Input
  }], sortBy: [{
    type: Input
  }], filterChanged: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilterComponent, { className: "FilterComponent", filePath: "app/features/catalog/components/filter/filter.ts", lineNumber: 20 });
})();

// src/app/features/catalog/pages/product-list/product-list.ts
var _c03 = () => [];
var _c12 = () => [1, 2, 3, 4, 5, 6];
var _forTrack02 = ($index, $item) => $item.id;
function ProductListComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 9);
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275property("product", product_r1);
  }
}
function ProductListComponent_Conditional_10_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p", 11);
    \u0275\u0275text(2, "Arama kriterlerinize uygun \xFCr\xFCn bulunamad\u0131.");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, ProductListComponent_Conditional_10_For_2_Template, 1, 1, "app-product-card", 9, _forTrack02, false, ProductListComponent_Conditional_10_ForEmpty_3_Template, 3, 0, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx);
  }
}
function ProductListComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275element(3, "div", 15)(4, "div", 16)(5, "div", 17)(6, "div", 18);
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, ProductListComponent_Conditional_12_For_2_Template, 7, 0, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c12));
  }
}
var ProductListComponent = class _ProductListComponent {
  productService = inject(ProductService);
  // Lists
  products$;
  categories$;
  // Filters
  filters = {
    search: "",
    categoryId: null,
    minPrice: null,
    maxPrice: null,
    sort: ""
  };
  ngOnInit() {
    this.categories$ = this.productService.getCategories();
    this.loadProducts();
  }
  loadProducts() {
    this.products$ = this.productService.getProducts(this.filters);
  }
  onCategorySelect(categoryId) {
    this.filters.categoryId = categoryId;
    this.loadProducts();
  }
  onFiltersChange(filterOptions) {
    this.filters.search = filterOptions.search;
    this.filters.minPrice = filterOptions.minPrice;
    this.filters.maxPrice = filterOptions.maxPrice;
    this.filters.sort = filterOptions.sort;
    this.loadProducts();
  }
  static \u0275fac = function ProductListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], decls: 13, vars: 12, consts: [[1, "container", "mx-auto", "px-4", "py-8", "mb-[50px]", "max-w-7xl"], [1, "flex", "flex-col", "lg:flex-row", "gap-8"], [1, "w-full", "lg:w-64", "flex-shrink-0", "flex", "flex-col", "space-y-6"], [3, "categorySelected", "categories", "selectedCategoryId"], [3, "filterChanged", "searchQuery", "minPrice", "maxPrice", "sortBy"], [1, "flex-1"], [1, "flex", "justify-between", "items-end", "mb-6"], [1, "text-2xl", "font-bold", "text-gray-900"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-3", "gap-6"], [3, "product"], [1, "col-span-full", "py-20", "text-center", "bg-white", "rounded-xl", "shadow-sm", "border", "border-gray-100"], [1, "text-lg", "text-gray-500"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-gray-100", "h-[340px]", "animate-pulse"], [1, "h-48", "bg-gray-200", "w-full", "rounded-t-xl"], [1, "p-5", "space-y-3", "mt-2"], [1, "h-3", "bg-gray-200", "rounded", "w-1/4"], [1, "h-4", "bg-gray-200", "rounded", "w-3/4"], [1, "h-3", "bg-gray-200", "rounded", "w-1/2"], [1, "h-5", "bg-gray-200", "rounded", "w-1/3", "mt-4"]], template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "app-category", 3);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275listener("categorySelected", function ProductListComponent_Template_app_category_categorySelected_3_listener($event) {
        return ctx.onCategorySelect($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-filter", 4);
      \u0275\u0275listener("filterChanged", function ProductListComponent_Template_app_filter_filterChanged_5_listener($event) {
        return ctx.onFiltersChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "main", 5)(7, "div", 6)(8, "h1", 7);
      \u0275\u0275text(9, "T\xFCm \xDCr\xFCnler");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, ProductListComponent_Conditional_10_Template, 4, 1, "div", 8);
      \u0275\u0275pipe(11, "async");
      \u0275\u0275conditionalBranchCreate(12, ProductListComponent_Conditional_12_Template, 3, 1, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("categories", \u0275\u0275pipeBind1(4, 7, ctx.categories$) || \u0275\u0275pureFunction0(11, _c03))("selectedCategoryId", ctx.filters.categoryId);
      \u0275\u0275advance(2);
      \u0275\u0275property("searchQuery", ctx.filters.search)("minPrice", ctx.filters.minPrice)("maxPrice", ctx.filters.maxPrice)("sortBy", ctx.filters.sort);
      \u0275\u0275advance(5);
      \u0275\u0275conditional((tmp_6_0 = \u0275\u0275pipeBind1(11, 9, ctx.products$)) ? 10 : 12, tmp_6_0);
    }
  }, dependencies: [CommonModule, ProductCardComponent, CategoryComponent, FilterComponent, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductListComponent, [{
    type: Component,
    args: [{ selector: "app-product-list", standalone: true, imports: [CommonModule, ProductCardComponent, CategoryComponent, FilterComponent], template: '<div class="container mx-auto px-4 py-8 mb-[50px] max-w-7xl">\n  \n  <div class="flex flex-col lg:flex-row gap-8">\n    \n    <!-- Sidebar -->\n    <aside class="w-full lg:w-64 flex-shrink-0 flex flex-col space-y-6">\n      \n      <!-- Category Component -->\n      <app-category \n        [categories]="(categories$ | async) || []"\n        [selectedCategoryId]="filters.categoryId"\n        (categorySelected)="onCategorySelect($event)">\n      </app-category>\n\n      <!-- Filter Component -->\n      <app-filter\n        [searchQuery]="filters.search"\n        [minPrice]="filters.minPrice"\n        [maxPrice]="filters.maxPrice"\n        [sortBy]="filters.sort"\n        (filterChanged)="onFiltersChange($event)">\n      </app-filter>\n      \n    </aside>\n\n    <!-- Main Content -->\n    <main class="flex-1">\n      <div class="flex justify-between items-end mb-6">\n        <h1 class="text-2xl font-bold text-gray-900">T\xFCm \xDCr\xFCnler</h1>\n      </div>\n\n      @if (products$ | async; as products) {\n        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">\n          @for (product of products; track product.id) {\n            <app-product-card [product]="product"></app-product-card>\n          } @empty {\n            <div class="col-span-full py-20 text-center bg-white rounded-xl shadow-sm border border-gray-100">\n              <p class="text-lg text-gray-500">Arama kriterlerinize uygun \xFCr\xFCn bulunamad\u0131.</p>\n            </div>\n          }\n        </div>\n      } @else {\n        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">\n          @for (i of [1, 2, 3, 4, 5, 6]; track i) {\n            <div class="bg-white rounded-xl shadow-sm border border-gray-100 h-[340px] animate-pulse">\n              <div class="h-48 bg-gray-200 w-full rounded-t-xl"></div>\n              <div class="p-5 space-y-3 mt-2">\n                <div class="h-3 bg-gray-200 rounded w-1/4"></div>\n                <div class="h-4 bg-gray-200 rounded w-3/4"></div>\n                <div class="h-3 bg-gray-200 rounded w-1/2"></div>\n                <div class="h-5 bg-gray-200 rounded w-1/3 mt-4"></div>\n              </div>\n            </div>\n          }\n        </div>\n      }\n    </main>\n\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "app/features/catalog/pages/product-list/product-list.ts", lineNumber: 17 });
})();

// src/app/features/catalog/components/product-reviews/product-reviews.component.ts
var _c04 = () => [1, 2, 3, 4, 5];
var _forTrack03 = ($index, $item) => $item.id;
function ProductReviewsComponent_Conditional_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ProductReviewsComponent_Conditional_3_For_9_Template_button_click_0_listener() {
      const star_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRating(star_r4));
    });
    \u0275\u0275text(1, " \u2605 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    const star_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("text-yellow-400", ((tmp_11_0 = ctx_r1.reviewForm.get("starRating")) == null ? null : tmp_11_0.value) >= star_r4)("text-gray-300", ((tmp_12_0 = ctx_r1.reviewForm.get("starRating")) == null ? null : tmp_12_0.value) < star_r4);
  }
}
function ProductReviewsComponent_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Submitting...");
    \u0275\u0275elementEnd();
  }
}
function ProductReviewsComponent_Conditional_3_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Submit Review ");
  }
}
function ProductReviewsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h3", 6);
    \u0275\u0275text(2, "Write a Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 7);
    \u0275\u0275listener("ngSubmit", function ProductReviewsComponent_Conditional_3_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(4, "div", 8)(5, "label", 9);
    \u0275\u0275text(6, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10);
    \u0275\u0275repeaterCreate(8, ProductReviewsComponent_Conditional_3_For_9_Template, 2, 4, "button", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12, "Your Review");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 13);
    \u0275\u0275conditionalCreate(15, ProductReviewsComponent_Conditional_3_Conditional_15_Template, 2, 0, "span", 14)(16, ProductReviewsComponent_Conditional_3_Conditional_16_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.reviewForm);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(3, _c04));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.reviewForm.invalid || ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSubmitting ? 15 : 16);
  }
}
function ProductReviewsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, " Please ");
    \u0275\u0275elementStart(2, "a", 16);
    \u0275\u0275text(3, "log in");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " to write a review. ");
    \u0275\u0275elementEnd();
  }
}
function ProductReviewsComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "No reviews yet. Be the first to review this product!");
    \u0275\u0275elementEnd();
  }
}
function ProductReviewsComponent_Conditional_6_For_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r5 = ctx.$implicit;
    const review_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("text-yellow-400", review_r6.starRating >= star_r5)("text-gray-300", review_r6.starRating < star_r5);
  }
}
function ProductReviewsComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22);
    \u0275\u0275repeaterCreate(8, ProductReviewsComponent_Conditional_6_For_2_For_9_Template, 2, 4, "span", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r6.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 3, review_r6.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(6, _c04));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r6.reviewText);
  }
}
function ProductReviewsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProductReviewsComponent_Conditional_6_Conditional_0_Template, 2, 0, "p", 17);
    \u0275\u0275repeaterCreate(1, ProductReviewsComponent_Conditional_6_For_2_Template, 12, 7, "div", 18, _forTrack03);
  }
  if (rf & 2) {
    const reviews_r7 = ctx;
    \u0275\u0275conditional(reviews_r7.length === 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(reviews_r7);
  }
}
function ProductReviewsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 25)(2, "div", 25)(3, "div", 25);
    \u0275\u0275elementEnd();
  }
}
var ProductReviewsComponent = class _ProductReviewsComponent {
  productId;
  reviewService = inject(ReviewService);
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  reviewsSubject = new BehaviorSubject([]);
  reviews$ = this.reviewsSubject.asObservable();
  reviewForm;
  isSubmitting = false;
  get isAuthenticated() {
    return this.authService.currentUserRole() !== "GUEST";
  }
  constructor() {
    this.reviewForm = this.fb.group({
      starRating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
      reviewText: ["", [Validators.required, Validators.minLength(3)]]
    });
  }
  ngOnInit() {
    this.loadReviews();
  }
  loadReviews() {
    this.reviewService.getReviewsByProductId(this.productId).subscribe({
      next: (reviews) => this.reviewsSubject.next(reviews),
      error: (err) => console.error("Failed to load reviews", err)
    });
  }
  setRating(rating) {
    this.reviewForm.patchValue({ starRating: rating });
  }
  onSubmit() {
    if (this.reviewForm.invalid || !this.isAuthenticated)
      return;
    this.isSubmitting = true;
    this.reviewService.addReview(this.productId, this.reviewForm.value).subscribe({
      next: (newReview) => {
        const currentReviews = this.reviewsSubject.value;
        this.reviewsSubject.next([newReview, ...currentReviews]);
        this.reviewForm.reset({ starRating: 5, reviewText: "" });
        this.isSubmitting = false;
      },
      error: (err) => {
        console.error("Failed to add review", err);
        this.isSubmitting = false;
      }
    });
  }
  static \u0275fac = function ProductReviewsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductReviewsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductReviewsComponent, selectors: [["app-product-reviews"]], inputs: { productId: "productId" }, decls: 9, vars: 4, consts: [[1, "mt-12", "bg-white", "rounded-2xl", "p-8", "border", "border-gray-100", "shadow-sm"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-6"], [1, "mb-10", "bg-gray-50", "p-6", "rounded-xl", "border", "border-gray-100"], [1, "mb-10", "p-4", "bg-blue-50", "text-blue-800", "rounded-lg", "text-sm"], [1, "space-y-6"], [1, "animate-pulse", "flex", "flex-col", "gap-4"], [1, "text-lg", "font-semibold", "text-gray-800", "mb-4"], [3, "ngSubmit", "formGroup"], [1, "mb-4"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "flex", "gap-1"], ["type", "button", 1, "text-2xl", "focus:outline-none", "transition-colors", 3, "text-yellow-400", "text-gray-300"], ["formControlName", "reviewText", "rows", "4", "placeholder", "What did you like or dislike?", 1, "w-full", "px-4", "py-3", "rounded-lg", "border", "border-gray-300", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors"], ["type", "submit", 1, "bg-gray-900", "hover:bg-gray-800", "text-white", "font-semibold", "py-2", "px-6", "rounded-lg", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [1, "animate-pulse"], ["type", "button", 1, "text-2xl", "focus:outline-none", "transition-colors", 3, "click"], ["routerLink", "/auth/login", 1, "font-bold", "underline"], [1, "text-gray-500", "italic"], [1, "border-b", "border-gray-100", "pb-6", "last:border-0", "last:pb-0"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "font-semibold", "text-gray-900"], [1, "text-sm", "text-gray-400"], [1, "flex", "text-yellow-400", "text-sm", "mb-3"], [3, "text-yellow-400", "text-gray-300"], [1, "text-gray-600", "leading-relaxed"], [1, "h-20", "bg-gray-100", "rounded-lg", "w-full"]], template: function ProductReviewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Customer Reviews");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, ProductReviewsComponent_Conditional_3_Template, 17, 4, "div", 2)(4, ProductReviewsComponent_Conditional_4_Template, 5, 0, "div", 3);
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275conditionalCreate(6, ProductReviewsComponent_Conditional_6_Template, 3, 1);
      \u0275\u0275pipe(7, "async");
      \u0275\u0275conditionalBranchCreate(8, ProductReviewsComponent_Conditional_8_Template, 4, 0, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isAuthenticated ? 3 : 4);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_1_0 = \u0275\u0275pipeBind1(7, 2, ctx.reviews$)) ? 6 : 8, tmp_1_0);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, AsyncPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductReviewsComponent, [{
    type: Component,
    args: [{ selector: "app-product-reviews", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="mt-12 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>

  @if (isAuthenticated) {
    <div class="mb-10 bg-gray-50 p-6 rounded-xl border border-gray-100">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Write a Review</h3>
      <form [formGroup]="reviewForm" (ngSubmit)="onSubmit()">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">Rating</label>
          <div class="flex gap-1">
            @for (star of [1, 2, 3, 4, 5]; track star) {
              <button
                type="button"
                (click)="setRating(star)"
                class="text-2xl focus:outline-none transition-colors"
                [class.text-yellow-400]="reviewForm.get('starRating')?.value >= star"
                [class.text-gray-300]="reviewForm.get('starRating')?.value < star"
              >
                \u2605
              </button>
            }
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
          <textarea
            formControlName="reviewText"
            rows="4"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="What did you like or dislike?"
          ></textarea>
        </div>
        <button
          type="submit"
          [disabled]="reviewForm.invalid || isSubmitting"
          class="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          @if (isSubmitting) {
            <span class="animate-pulse">Submitting...</span>
          } @else {
            Submit Review
          }
        </button>
      </form>
    </div>
  } @else {
    <div class="mb-10 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm">
      Please <a routerLink="/auth/login" class="font-bold underline">log in</a> to write a review.
    </div>
  }

  <div class="space-y-6">
    @if (reviews$ | async; as reviews) {
      @if (reviews.length === 0) {
        <p class="text-gray-500 italic">No reviews yet. Be the first to review this product!</p>
      }

      @for (review of reviews; track review.id) {
        <div class="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
          <div class="flex items-center justify-between mb-2">
            <span class="font-semibold text-gray-900">{{ review.userName }}</span>
            <span class="text-sm text-gray-400">{{ review.createdAt | date:'mediumDate' }}</span>
          </div>
          <div class="flex text-yellow-400 text-sm mb-3">
            @for (star of [1, 2, 3, 4, 5]; track star) {
              <span [class.text-yellow-400]="review.starRating >= star" [class.text-gray-300]="review.starRating < star">\u2605</span>
            }
          </div>
          <p class="text-gray-600 leading-relaxed">{{ review.reviewText }}</p>
        </div>
      }
    } @else {
      <div class="animate-pulse flex flex-col gap-4">
        <div class="h-20 bg-gray-100 rounded-lg w-full"></div>
        <div class="h-20 bg-gray-100 rounded-lg w-full"></div>
        <div class="h-20 bg-gray-100 rounded-lg w-full"></div>
      </div>
    }
  </div>
</div>` }]
  }], () => [], { productId: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductReviewsComponent, { className: "ProductReviewsComponent", filePath: "app/features/catalog/components/product-reviews/product-reviews.component.ts", lineNumber: 16 });
})();

// src/app/features/catalog/pages/product-detail/product-detail.ts
var _c05 = () => [1, 2, 3, 4];
var _c13 = () => [1, 2, 3, 4, 5];
var _c2 = () => ({ icon: "fa-shield-alt", label: "G\xFCvenli \xD6deme" });
var _c3 = () => ({ icon: "fa-undo", label: "30 G\xFCn \u0130ade" });
var _c4 = () => ({ icon: "fa-truck", label: "\xDCcretsiz Kargo" });
var _c5 = (a0, a1, a2) => [a0, a1, a2];
var _forTrack04 = ($index, $item) => $item.icon;
var _forTrack1 = ($index, $item) => $item.id;
function ProductDetailComponent_Conditional_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function ProductDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275element(2, "div", 6);
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275repeaterCreate(4, ProductDetailComponent_Conditional_5_For_5_Template, 1, 0, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275element(7, "div", 10)(8, "div", 11)(9, "div", 12)(10, "div", 13)(11, "div", 14)(12, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c05));
  }
}
function ProductDetailComponent_Conditional_6_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_6_Conditional_6_For_2_Template_button_click_0_listener() {
      const img_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectImage(img_r3.imageUrl));
    });
    \u0275\u0275element(1, "img", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r3.thumbClass(img_r3));
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r3.imageUrl, \u0275\u0275sanitizeUrl)("alt", img_r3.altText || ctx_r3.product().name);
  }
}
function ProductDetailComponent_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, ProductDetailComponent_Conditional_6_Conditional_6_For_2_Template, 2, 4, "button", 47, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.product().images);
  }
}
function ProductDetailComponent_Conditional_6_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 50);
  }
  if (rf & 2) {
    const star_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(star_r5 <= (ctx_r3.product().rating || 0) ? "text-yellow-400" : "text-gray-700");
  }
}
function ProductDetailComponent_Conditional_6_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 52);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(3, 2, ctx_r3.product().originalPrice, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" -", \u0275\u0275pipeBind2(6, 5, (1 - ctx_r3.product().price / ctx_r3.product().originalPrice) * 100, "1.0-0"), "% ");
  }
}
function ProductDetailComponent_Conditional_6_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const badge_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("fas ", badge_r6.icon, " text-blue-400 text-base"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r6.label);
  }
}
function ProductDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 5)(2, "div", 17);
    \u0275\u0275element(3, "img", 18);
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275element(5, "i", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ProductDetailComponent_Conditional_6_Conditional_6_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22)(8, "p", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h1", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 25)(13, "div", 26);
    \u0275\u0275repeaterCreate(14, ProductDetailComponent_Conditional_6_For_15_Template, 1, 2, "i", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 28);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 29);
    \u0275\u0275text(20, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 30);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 31)(24, "span", 32);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, ProductDetailComponent_Conditional_6_Conditional_27_Template, 7, 8, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 34);
    \u0275\u0275text(29, " Premium kalite yap\u0131, dayan\u0131kl\u0131l\u0131k ve g\xFCnl\xFCk kullan\u0131m i\xE7in tasarlanm\u0131\u015Ft\u0131r. Bu \xFCr\xFCn hayat\u0131n\u0131za sorunsuz entegre olur; titiz standart testlere dayanarak e\u015Fsiz g\xFCvenilirlik ve performans sunar. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 35)(31, "div", 36)(32, "button", 37);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_6_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.decreaseQty());
    });
    \u0275\u0275element(33, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 39);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 37);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_6_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.increaseQty());
    });
    \u0275\u0275element(37, "i", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 41);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_6_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addToCart(ctx_r3.product()));
    });
    \u0275\u0275element(39, "i", 42);
    \u0275\u0275text(40, " Sepete Ekle ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 43);
    \u0275\u0275repeaterCreate(42, ProductDetailComponent_Conditional_6_For_43_Template, 4, 4, "div", 44, _forTrack04);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 45);
    \u0275\u0275element(45, "app-product-reviews", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r3.activeImageUrl(ctx_r3.product()), \u0275\u0275sanitizeUrl)("alt", ctx_r3.activeAltText(ctx_r3.product()));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.product().images && ctx_r3.product().images.length > 1 ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r3.product().category, " \u2022 SKU: ", ctx_r3.product().sku, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.product().name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(18, _c13));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 12, ctx_r3.product().rating, "1.1-1"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.product().reviewCount, " De\u011Ferlendirme ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(26, 15, ctx_r3.product().price, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.product().originalPrice ? 27 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r3.quantity());
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pureFunction3(22, _c5, \u0275\u0275pureFunction0(19, _c2), \u0275\u0275pureFunction0(20, _c3), \u0275\u0275pureFunction0(21, _c4)));
    \u0275\u0275advance(3);
    \u0275\u0275property("productId", ctx_r3.product().id);
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  cartService = inject(CartService);
  product = toSignal(this.route.paramMap.pipe(switchMap((params) => {
    const id = Number(params.get("id"));
    return this.productService.getProductById(id).pipe(catchError(() => of(null)));
  })), { initialValue: null });
  // Galeride seçili görsel URL'si
  selectedImageUrl = signal(null, ...ngDevMode ? [{ debugName: "selectedImageUrl" }] : (
    /* istanbul ignore next */
    []
  ));
  quantity = signal(1, ...ngDevMode ? [{ debugName: "quantity" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
  }
  /** Galeriden bir thumbnail seçilince */
  selectImage(url) {
    this.selectedImageUrl.set(url);
  }
  /** Ana görselin URL'si: seçili yoksa ürünün imageUrl'sini kullan */
  activeImageUrl(product) {
    return this.selectedImageUrl() ?? product.imageUrl ?? "https://placehold.co/600x600?text=No+Image";
  }
  activeAltText(product) {
    const images = product.images ?? [];
    const selected = images.find((i) => i.imageUrl === this.selectedImageUrl());
    return selected?.altText ?? product.name;
  }
  /** Thumbnail class — seçili mi değil mi */
  thumbClass(img) {
    const isSelected = this.selectedImageUrl() ? this.selectedImageUrl() === img.imageUrl : img.isPrimary;
    return isSelected ? "border-blue-500 opacity-100 scale-105" : "border-transparent opacity-60 hover:opacity-90 hover:scale-102";
  }
  increaseQty() {
    this.quantity.set(this.quantity() + 1);
  }
  decreaseQty() {
    if (this.quantity() > 1)
      this.quantity.set(this.quantity() - 1);
  }
  addToCart(product) {
    this.cartService.addToCart(product, this.quantity());
  }
  static \u0275fac = function ProductDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], decls: 7, vars: 1, consts: [[1, "min-h-screen", 2, "background", "#0a0a0f"], [1, "container", "mx-auto", "px-4", "py-8", "max-w-6xl"], ["routerLink", "/catalog", 1, "inline-flex", "items-center", "gap-2", "text-sm", "text-gray-500", "hover:text-blue-400", "mb-8", "transition-colors", "group"], [1, "fas", "fa-arrow-left", "group-hover:-translate-x-1", "transition-transform", "duration-200"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-12", "animate-pulse"], [1, "space-y-4"], [1, "rounded-2xl", "aspect-square", "w-full", 2, "background", "rgba(255,255,255,0.04)"], [1, "flex", "gap-3"], [1, "w-20", "h-20", "rounded-xl", "flex-shrink-0", 2, "background", "rgba(255,255,255,0.04)"], [1, "flex", "flex-col", "space-y-5", "pt-4"], [1, "h-4", "rounded-lg", "w-1/3", 2, "background", "rgba(255,255,255,0.06)"], [1, "h-10", "rounded-lg", "w-4/5", 2, "background", "rgba(255,255,255,0.06)"], [1, "h-6", "rounded-lg", "w-1/4", 2, "background", "rgba(255,255,255,0.06)"], [1, "h-12", "rounded-lg", "w-1/3", 2, "background", "rgba(255,255,255,0.04)"], [1, "h-32", "rounded-lg", "w-full", 2, "background", "rgba(255,255,255,0.04)"], [1, "h-14", "rounded-xl", "w-full", "mt-auto", 2, "background", "rgba(255,255,255,0.06)"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-12"], [1, "relative", "rounded-2xl", "overflow-hidden", "flex", "items-center", "justify-center", "aspect-square", "border", "border-white/5", "transition-all", "duration-300", "group", 2, "background", "rgba(255,255,255,0.03)"], [1, "max-w-full", "max-h-full", "object-contain", "select-none", "transition-all", "duration-500", "group-hover:scale-105", 3, "src", "alt"], [1, "absolute", "top-3", "right-3", "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-200", 2, "background", "rgba(0,0,0,0.5)"], [1, "fas", "fa-expand-alt", "text-white", "text-xs"], [1, "flex", "gap-3", "overflow-x-auto", "pb-1", "scrollbar-thin"], [1, "flex", "flex-col", "gap-5"], [1, "text-xs", "text-gray-500", "uppercase", "tracking-widest", "font-bold"], [1, "text-3xl", "lg:text-4xl", "font-black", "text-white", "leading-tight"], [1, "flex", "items-center", "gap-3", "pb-5", "border-b", "border-white/5"], [1, "flex", "items-center", "gap-1"], [1, "fas", "fa-star", "text-sm", 3, "class"], [1, "font-bold", "text-white", "text-sm"], [1, "text-gray-700"], [1, "text-sm", "text-blue-400", "hover:underline", "cursor-pointer"], [1, "flex", "items-end", "gap-3"], [1, "text-4xl", "font-black", "text-white"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "text-gray-400", "leading-relaxed", "text-sm"], [1, "flex", "gap-3", "mt-auto", "pt-2"], [1, "flex", "items-center", "rounded-xl", "border", "border-white/10", "overflow-hidden", "flex-shrink-0", 2, "background", "rgba(255,255,255,0.03)"], [1, "w-11", "h-12", "flex", "items-center", "justify-center", "text-gray-400", "hover:text-white", "hover:bg-white/5", "transition-all", "active:scale-90", 3, "click"], [1, "fas", "fa-minus", "text-xs"], [1, "w-10", "text-center", "font-black", "text-white", "text-sm"], [1, "fas", "fa-plus", "text-xs"], [1, "flex-1", "flex", "items-center", "justify-center", "gap-2.5", "py-3", "px-6", "rounded-xl", "text-sm", "font-black", "text-white", "transition-all", "duration-200", "hover:shadow-xl", "hover:shadow-blue-900/30", "hover:-translate-y-0.5", "active:scale-95", 2, "background", "linear-gradient(135deg, #3b82f6, #6366f1)", 3, "click"], [1, "fas", "fa-shopping-cart"], [1, "grid", "grid-cols-3", "gap-3", "pt-2"], [1, "flex", "flex-col", "items-center", "gap-1.5", "p-3", "rounded-xl", "border", "border-white/5", "text-center", 2, "background", "rgba(255,255,255,0.01)"], [1, "mt-16"], [3, "productId"], [1, "flex-shrink-0", "w-20", "h-20", "rounded-xl", "overflow-hidden", "border-2", "transition-all", "duration-200", "active:scale-95", 3, "class"], [1, "flex-shrink-0", "w-20", "h-20", "rounded-xl", "overflow-hidden", "border-2", "transition-all", "duration-200", "active:scale-95", 3, "click"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "fas", "fa-star", "text-sm"], [1, "text-xl", "text-gray-500", "line-through"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "rounded-lg", "text-xs", "font-black", "text-white", 2, "background", "linear-gradient(135deg, #ef4444, #dc2626)"], [1, "text-[10px]", "text-gray-500", "font-semibold"]], template: function ProductDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275text(4, " Katalo\u011Fa D\xF6n ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, ProductDetailComponent_Conditional_5_Template, 13, 1, "div", 4)(6, ProductDetailComponent_Conditional_6_Template, 46, 26);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.product() === null ? 5 : 6);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, ProductReviewsComponent, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetailComponent, [{
    type: Component,
    args: [{ selector: "app-product-detail", standalone: true, imports: [CommonModule, RouterModule, ProductReviewsComponent], template: `<div class="min-h-screen" style="background: #0a0a0f;">
<div class="container mx-auto px-4 py-8 max-w-6xl">

  <!-- Geri Butonu -->
  <a routerLink="/catalog"
     class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 mb-8
            transition-colors group">
    <i class="fas fa-arrow-left group-hover:-translate-x-1 transition-transform duration-200"></i>
    Katalo\u011Fa D\xF6n
  </a>

  @if (product() === null) {
    <!-- Skeleton -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-pulse">
      <div class="space-y-4">
        <div class="rounded-2xl aspect-square w-full" style="background: rgba(255,255,255,0.04);"></div>
        <div class="flex gap-3">
          @for (i of [1,2,3,4]; track i) {
            <div class="w-20 h-20 rounded-xl flex-shrink-0" style="background: rgba(255,255,255,0.04);"></div>
          }
        </div>
      </div>
      <div class="flex flex-col space-y-5 pt-4">
        <div class="h-4 rounded-lg w-1/3" style="background: rgba(255,255,255,0.06);"></div>
        <div class="h-10 rounded-lg w-4/5" style="background: rgba(255,255,255,0.06);"></div>
        <div class="h-6 rounded-lg w-1/4" style="background: rgba(255,255,255,0.06);"></div>
        <div class="h-12 rounded-lg w-1/3" style="background: rgba(255,255,255,0.04);"></div>
        <div class="h-32 rounded-lg w-full" style="background: rgba(255,255,255,0.04);"></div>
        <div class="h-14 rounded-xl w-full mt-auto" style="background: rgba(255,255,255,0.06);"></div>
      </div>
    </div>

  } @else {
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

      <!-- \u2500\u2500 GALER\u0130 B\xD6L\xDCM\xDC \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="space-y-4">

        <!-- Ana G\xF6rsel -->
        <div class="relative rounded-2xl overflow-hidden flex items-center justify-center aspect-square
                    border border-white/5 transition-all duration-300 group"
             style="background: rgba(255,255,255,0.03);">
          <img [src]="activeImageUrl(product()!)"
               [alt]="activeAltText(product()!)"
               class="max-w-full max-h-full object-contain select-none
                      transition-all duration-500 group-hover:scale-105">
          <!-- Zoom hint -->
          <div class="absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200"
               style="background: rgba(0,0,0,0.5);">
            <i class="fas fa-expand-alt text-white text-xs"></i>
          </div>
        </div>

        <!-- Thumbnail \u015Eeridi -->
        @if (product()!.images && product()!.images!.length > 1) {
          <div class="flex gap-3 overflow-x-auto pb-1 scrollbar-thin">
            @for (img of product()!.images!; track img.id) {
              <button (click)="selectImage(img.imageUrl)"
                class="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2
                       transition-all duration-200 active:scale-95"
                [class]="thumbClass(img)">
                <img [src]="img.imageUrl" [alt]="img.altText || product()!.name"
                     class="w-full h-full object-cover">
              </button>
            }
          </div>
        }
      </div>

      <!-- \u2500\u2500 \xDCR\xDCN B\u0130LG\u0130LER\u0130 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="flex flex-col gap-5">

        <!-- Kategori + SKU -->
        <p class="text-xs text-gray-500 uppercase tracking-widest font-bold">
          {{ product()!.category }} &bull; SKU: {{ product()!.sku }}
        </p>

        <!-- \u0130sim -->
        <h1 class="text-3xl lg:text-4xl font-black text-white leading-tight">
          {{ product()!.name }}
        </h1>

        <!-- Rating -->
        <div class="flex items-center gap-3 pb-5 border-b border-white/5">
          <div class="flex items-center gap-1">
            @for (star of [1,2,3,4,5]; track star) {
              <i class="fas fa-star text-sm"
                 [class]="star <= (product()!.rating || 0) ? 'text-yellow-400' : 'text-gray-700'"></i>
            }
          </div>
          <span class="font-bold text-white text-sm">{{ product()!.rating | number:'1.1-1' }}</span>
          <span class="text-gray-700">\xB7</span>
          <span class="text-sm text-blue-400 hover:underline cursor-pointer">
            {{ product()!.reviewCount }} De\u011Ferlendirme
          </span>
        </div>

        <!-- Fiyat -->
        <div class="flex items-end gap-3">
          <span class="text-4xl font-black text-white">\${{ product()!.price | number:'1.2-2' }}</span>
          @if (product()!.originalPrice) {
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xl text-gray-500 line-through">\${{ product()!.originalPrice | number:'1.2-2' }}</span>
              <span class="inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-black text-white"
                    style="background: linear-gradient(135deg, #ef4444, #dc2626);">
                -{{ ((1 - product()!.price / product()!.originalPrice!) * 100) | number:'1.0-0' }}%
              </span>
            </div>
          }
        </div>

        <!-- A\xE7\u0131klama -->
        <p class="text-gray-400 leading-relaxed text-sm">
          Premium kalite yap\u0131, dayan\u0131kl\u0131l\u0131k ve g\xFCnl\xFCk kullan\u0131m i\xE7in tasarlanm\u0131\u015Ft\u0131r.
          Bu \xFCr\xFCn hayat\u0131n\u0131za sorunsuz entegre olur; titiz standart testlere dayanarak
          e\u015Fsiz g\xFCvenilirlik ve performans sunar.
        </p>

        <!-- Miktar + Sepet -->
        <div class="flex gap-3 mt-auto pt-2">
          <!-- Miktar -->
          <div class="flex items-center rounded-xl border border-white/10 overflow-hidden flex-shrink-0"
               style="background: rgba(255,255,255,0.03);">
            <button (click)="decreaseQty()"
              class="w-11 h-12 flex items-center justify-center text-gray-400
                     hover:text-white hover:bg-white/5 transition-all active:scale-90">
              <i class="fas fa-minus text-xs"></i>
            </button>
            <span class="w-10 text-center font-black text-white text-sm">{{ quantity() }}</span>
            <button (click)="increaseQty()"
              class="w-11 h-12 flex items-center justify-center text-gray-400
                     hover:text-white hover:bg-white/5 transition-all active:scale-90">
              <i class="fas fa-plus text-xs"></i>
            </button>
          </div>

          <!-- Sepete Ekle -->
          <button (click)="addToCart(product()!)"
            class="flex-1 flex items-center justify-center gap-2.5 py-3 px-6 rounded-xl
                   text-sm font-black text-white transition-all duration-200
                   hover:shadow-xl hover:shadow-blue-900/30 hover:-translate-y-0.5 active:scale-95"
            style="background: linear-gradient(135deg, #3b82f6, #6366f1);">
            <i class="fas fa-shopping-cart"></i>
            Sepete Ekle
          </button>
        </div>

        <!-- G\xFCven rozetleri -->
        <div class="grid grid-cols-3 gap-3 pt-2">
          @for (badge of [
            {icon: 'fa-shield-alt', label: 'G\xFCvenli \xD6deme'},
            {icon: 'fa-undo', label: '30 G\xFCn \u0130ade'},
            {icon: 'fa-truck', label: '\xDCcretsiz Kargo'}
          ]; track badge.icon) {
            <div class="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-white/5 text-center"
                 style="background: rgba(255,255,255,0.01);">
              <i class="fas {{ badge.icon }} text-blue-400 text-base"></i>
              <span class="text-[10px] text-gray-500 font-semibold">{{ badge.label }}</span>
            </div>
          }
        </div>
      </div>

    </div>

    <!-- Yorumlar -->
    <div class="mt-16">
      <app-product-reviews [productId]="product()!.id"></app-product-reviews>
    </div>
  }

</div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "app/features/catalog/pages/product-detail/product-detail.ts", lineNumber: 18 });
})();

// src/app/features/catalog/catalog-routing-module.ts
var routes = [
  // Matches the base '/catalog' URL and loads the grid
  {
    path: "",
    component: ProductListComponent
  },
  // Matches URLs like '/catalog/123' and loads the detail view
  // The ':id' is a dynamic parameter your component can read to fetch the right data
  {
    path: ":id",
    component: ProductDetailComponent
  }
];
var CatalogRoutingModule = class _CatalogRoutingModule {
  static \u0275fac = function CatalogRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CatalogRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CatalogRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/catalog/catalog-module.ts
var CatalogModule = class _CatalogModule {
  static \u0275fac = function CatalogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CatalogModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    CatalogRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CatalogModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        CatalogRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  CatalogModule
};
//# sourceMappingURL=chunk-GTR4Y342.js.map
