import './polyfills.server.mjs';
import {
  ReviewService
} from "./chunk-BPA5IS7T.mjs";
import {
  AuthService
} from "./chunk-3Y3G2XM7.mjs";
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
} from "./chunk-ZZHQPMHV.mjs";
import {
  CartService
} from "./chunk-IVVED52F.mjs";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-6SS2UPAN.mjs";
import "./chunk-P2EBPDNO.mjs";
import {
  toSignal
} from "./chunk-MX5BFGVJ.mjs";
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
} from "./chunk-K2NYDLGG.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-T2KOBY73.mjs";

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
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-ember-500", ctx_r0.product.badge.type === "new")("bg-red-600", ctx_r0.product.badge.type === "discount");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.product.badge.text, " ");
  }
}
function ProductCardComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, decls: 26, vars: 13, consts: [[1, "bg-white", "rounded-xl", "border", "border-stone-200", "overflow-hidden", "hover:border-stone-300", "hover:shadow-md", "transition-all", "duration-200", "cursor-pointer", "group", 3, "routerLink"], [1, "absolute", "top-3", "left-3", "z-10", "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", "text-white", 3, "bg-ember-500", "bg-red-600"], [1, "relative", "h-48", "w-full", "overflow-hidden"], [1, "absolute", "inset-0", "bg-ember-50", "flex", "flex-col", "items-center", "justify-center", "gap-2"], [1, "w-10", "h-10", "rounded-lg", "bg-gradient-to-br", "from-orange-500", "to-red-600", "flex", "items-center", "justify-center", "opacity-20"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-white"], ["d", "M12.017 2C12.017 2 6 8 6 13.5a6.017 6.017 0 0 0 12 0C18 8 12.017 2 12.017 2zm-.017 15a2 2 0 0 1-2-2c0-1.5 1-3 2-4 1 1 2 2.5 2 4a2 2 0 0 1-2 2z"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.25", 1, "w-8", "h-8", "text-stone-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "absolute", "inset-0", "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-500", 3, "error", "src", "alt"], [1, "p-4"], [1, "text-xs", "text-stone-400", "mb-1"], [1, "text-sm", "font-medium", "text-stone-900", "mb-2", "truncate", 3, "title"], [1, "flex", "items-center", "gap-1", "mb-3"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3.5", "w-3.5", "text-amber-400"], ["d", "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"], [1, "text-xs", "text-stone-700", "font-medium"], [1, "text-xs", "text-stone-400"], [1, "flex", "items-center", "gap-2"], [1, "text-base", "font-semibold", "text-stone-900"], [1, "text-xs", "text-stone-400", "line-through"], [1, "absolute", "top-3", "left-3", "z-10", "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", "text-white"]], template: function ProductCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ProductCardComponent_Conditional_1_Template, 2, 5, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "svg", 7);
      \u0275\u0275element(8, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "img", 9);
      \u0275\u0275listener("error", function ProductCardComponent_Template_img_error_9_listener($event) {
        return $event.target.style.display = "none";
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 10)(11, "p", 11);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h3", 12);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 14);
      \u0275\u0275element(17, "path", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "span", 16);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 17);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 18)(23, "span", 19);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(25, ProductCardComponent_Conditional_25_Template, 2, 1, "span", 20);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, ctx.product.id));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.product.badge ? 1 : -1);
      \u0275\u0275advance(8);
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
      \u0275\u0275conditional(ctx.product.originalPrice ? 25 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCardComponent, [{
    type: Component,
    args: [{ selector: "app-product-card", standalone: true, imports: [CommonModule, RouterModule], template: `<div
  [routerLink]="['/catalog', product.id]"
  class="bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-stone-300 hover:shadow-md transition-all duration-200 cursor-pointer group"
>
  <!-- Badge -->
  @if (product.badge) {
    <div
      class="absolute top-3 left-3 z-10 text-xs font-semibold px-2 py-0.5 rounded-full text-white"
      [class.bg-ember-500]="product.badge.type === 'new'"
      [class.bg-red-600]="product.badge.type === 'discount'"
    >
      {{ product.badge.text }}
    </div>
  }

  <!-- G\xF6rsel -->
  <div class="relative h-48 w-full overflow-hidden">
    <!-- Fallback placeholder -->
    <div class="absolute inset-0 bg-ember-50 flex flex-col items-center justify-center gap-2">
      <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center opacity-20">
        <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 2C12.017 2 6 8 6 13.5a6.017 6.017 0 0 0 12 0C18 8 12.017 2 12.017 2zm-.017 15a2 2 0 0 1-2-2c0-1.5 1-3 2-4 1 1 2 2.5 2 4a2 2 0 0 1-2 2z"/>
        </svg>
      </div>
      <svg class="w-8 h-8 text-stone-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.25">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
      </svg>
    </div>
    <!-- Ger\xE7ek g\xF6rsel \u2014 y\xFCklenemezse gizlenir, placeholder g\xF6r\xFCn\xFCr -->
    <img
      [src]="product.imageUrl"
      [alt]="product.name"
      class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      (error)="$any($event.target).style.display='none'"
    />
  </div>

  <!-- Bilgi -->
  <div class="p-4">
    <p class="text-xs text-stone-400 mb-1">{{ product.category }}</p>
    <h3 class="text-sm font-medium text-stone-900 mb-2 truncate" [title]="product.name">
      {{ product.name }}
    </h3>

    <!-- Puan -->
    <div class="flex items-center gap-1 mb-3">
      <svg class="h-3.5 w-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      <span class="text-xs text-stone-700 font-medium">{{ product.rating }}</span>
      <span class="text-xs text-stone-400">({{ product.reviewCount }})</span>
    </div>

    <!-- Fiyat -->
    <div class="flex items-center gap-2">
      <span class="text-base font-semibold text-stone-900">\${{ product.price }}</span>
      @if (product.originalPrice) {
        <span class="text-xs text-stone-400 line-through">\${{ product.originalPrice }}</span>
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
var _c02 = (a0, a1) => ({ "bg-ember-50 text-ember-600 font-medium": a0, "text-stone-600 hover:bg-stone-50": a1 });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryComponent, selectors: [["app-category"]], inputs: { categories: "categories", selectedCategoryId: "selectedCategoryId" }, outputs: { categorySelected: "categorySelected" }, features: [\u0275\u0275NgOnChangesFeature], decls: 15, vars: 9, consts: [["categoryTree", ""], [1, "p-5"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-400", "mb-3"], [1, "relative", "mb-3"], [1, "absolute", "inset-y-0", "left-3", "flex", "items-center", "text-stone-400", "pointer-events-none"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-3.5", "w-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Kategori ara...", 1, "pl-8", "pr-3", "py-1.5", "border", "border-stone-200", "rounded-lg", "w-full", "text-xs", "bg-stone-50", "text-stone-700", "placeholder-stone-400", "focus:outline-none", "focus:ring-2", "focus:ring-ember-500/20", "focus:border-ember-500", "transition-colors", 3, "ngModelChange", "keyup", "ngModel"], [1, "space-y-0.5", "-mx-1"], ["type", "button", 1, "w-full", "text-left", "px-3", "py-2", "rounded-lg", "text-sm", "transition-colors", "focus:outline-none", 3, "click", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "items-center", "w-full", "px-3", "py-2", "rounded-lg", "text-sm", "transition-colors", "cursor-pointer", 3, "click", "ngClass"], ["class", "mr-1.5 focus:outline-none text-stone-300 hover:text-stone-500 flex items-center justify-center transition-colors flex-shrink-0", "style", "width:16px; height:16px;", 3, "click", 4, "ngIf"], ["class", "mr-1.5 flex-shrink-0", "style", "width:16px;", 4, "ngIf"], [1, "flex-1", "truncate"], ["class", "pl-4 space-y-0.5", 3, "hidden", 4, "ngIf"], [1, "mr-1.5", "focus:outline-none", "text-stone-300", "hover:text-stone-500", "flex", "items-center", "justify-center", "transition-colors", "flex-shrink-0", 2, "width", "16px", "height", "16px", 3, "click"], ["class", "h-3 w-3", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 4, "ngIf"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "h-3", "w-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 9l-7 7-7-7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 5l7 7-7 7"], [1, "mr-1.5", "flex-shrink-0", 2, "width", "16px"], [1, "pl-4", "space-y-0.5"]], template: function CategoryComponent_Template(rf, ctx) {
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
    args: [{ selector: "app-category", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="p-5">
  <h3 class="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">Kategoriler</h3>

  <!-- Kategori Ara -->
  <div class="relative mb-3">
    <span class="absolute inset-y-0 left-3 flex items-center text-stone-400 pointer-events-none">
      <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </span>
    <input
      type="text"
      [(ngModel)]="searchTerm"
      (keyup)="filterCategories()"
      placeholder="Kategori ara..."
      class="pl-8 pr-3 py-1.5 border border-stone-200 rounded-lg w-full text-xs bg-stone-50 text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-ember-500/20 focus:border-ember-500 transition-colors"
    />
  </div>

  <ul class="space-y-0.5 -mx-1">
    <li>
      <button
        (click)="selectCategory(null, $event)"
        type="button"
        class="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors focus:outline-none"
        [ngClass]="{
          'bg-ember-50 text-ember-600 font-medium': selectedCategoryId === null,
          'text-stone-600 hover:bg-stone-50': selectedCategoryId !== null
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
        class="flex items-center w-full px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer"
        [ngClass]="{
          'bg-ember-50 text-ember-600 font-medium': selectedCategoryId === category.id,
          'text-stone-600 hover:bg-stone-50': selectedCategoryId !== category.id
        }"
        (click)="selectCategory(category.id, $event)">

        <button
          *ngIf="category.children && category.children.length > 0"
          (click)="toggleExpand(category, $event)"
          class="mr-1.5 focus:outline-none text-stone-300 hover:text-stone-500 flex items-center justify-center transition-colors flex-shrink-0"
          style="width:16px; height:16px;">
          <svg *ngIf="expanded[category.id]" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
          <svg *ngIf="!expanded[category.id]" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        <span *ngIf="!category.children || category.children.length === 0" class="mr-1.5 flex-shrink-0" style="width:16px;"></span>

        <span class="flex-1 truncate">{{ category.name }}</span>
      </div>

      <ul *ngIf="category.children && category.children.length > 0" [class.hidden]="!expanded[category.id]" class="pl-4 space-y-0.5">
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilterComponent, selectors: [["app-filter"]], inputs: { searchQuery: "searchQuery", minPrice: "minPrice", maxPrice: "maxPrice", sortBy: "sortBy" }, outputs: { filterChanged: "filterChanged" }, decls: 37, vars: 4, consts: [[1, "p-5", "space-y-5"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-400", "mb-2.5"], [1, "relative"], [1, "absolute", "inset-y-0", "left-3", "flex", "items-center", "text-stone-400", "pointer-events-none"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-3.5", "w-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "\xDCr\xFCn ad\u0131...", 1, "pl-8", "pr-3", "py-1.5", "border", "border-stone-200", "rounded-lg", "w-full", "text-xs", "bg-stone-50", "text-stone-700", "placeholder-stone-400", "focus:outline-none", "focus:ring-2", "focus:ring-ember-500/20", "focus:border-ember-500", "transition-colors", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "flex", "items-center", "gap-2"], ["type", "number", "placeholder", "Min $", 1, "w-full", "px-3", "py-1.5", "border", "border-stone-200", "rounded-lg", "text-xs", "bg-stone-50", "text-stone-700", "placeholder-stone-400", "focus:outline-none", "focus:ring-2", "focus:ring-ember-500/20", "focus:border-ember-500", "transition-colors", 3, "ngModelChange", "change", "ngModel"], [1, "text-stone-300", "flex-shrink-0"], ["type", "number", "placeholder", "Max $", 1, "w-full", "px-3", "py-1.5", "border", "border-stone-200", "rounded-lg", "text-xs", "bg-stone-50", "text-stone-700", "placeholder-stone-400", "focus:outline-none", "focus:ring-2", "focus:ring-ember-500/20", "focus:border-ember-500", "transition-colors", 3, "ngModelChange", "change", "ngModel"], [1, "w-full", "pl-3", "pr-8", "py-1.5", "border", "border-stone-200", "rounded-lg", "text-xs", "text-stone-700", "bg-stone-50", "appearance-none", "focus:outline-none", "focus:ring-2", "focus:ring-ember-500/20", "focus:border-ember-500", "transition-colors", "cursor-pointer", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "newest"], ["value", "price_asc"], ["value", "price_desc"], ["value", "rating_desc"], [1, "pointer-events-none", "absolute", "inset-y-0", "right-2.5", "flex", "items-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-3.5", "h-3.5", "text-stone-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 9l-7 7-7-7"], [1, "w-full", "py-1.5", "text-xs", "font-medium", "text-stone-500", "hover:text-ember-500", "border", "border-stone-200", "hover:border-ember-200", "bg-white", "hover:bg-ember-50", "rounded-lg", "transition-colors", 3, "click"]], template: function FilterComponent_Template(rf, ctx) {
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
      \u0275\u0275text(15, "\u2014");
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
      \u0275\u0275text(19, "S\u0131ralama");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 2)(21, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function FilterComponent_Template_select_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
        return $event;
      });
      \u0275\u0275listener("change", function FilterComponent_Template_select_change_21_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(22, "option", 12);
      \u0275\u0275text(23, "\xD6nerilen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 13);
      \u0275\u0275text(25, "En Yeniler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 14);
      \u0275\u0275text(27, "Fiyat: Artan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 15);
      \u0275\u0275text(29, "Fiyat: Azalan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 16);
      \u0275\u0275text(31, "En Y\xFCksek Puanl\u0131");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(33, "svg", 18);
      \u0275\u0275element(34, "path", 19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "button", 20);
      \u0275\u0275listener("click", function FilterComponent_Template_button_click_35_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275text(36, " Filtreleri Temizle ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngModel", ctx.searchQuery);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.minPrice);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.maxPrice);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterComponent, [{
    type: Component,
    args: [{ selector: "app-filter", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="p-5 space-y-5">\n\n  <!-- Ara -->\n  <div>\n    <h3 class="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">Ara</h3>\n    <div class="relative">\n      <span class="absolute inset-y-0 left-3 flex items-center text-stone-400 pointer-events-none">\n        <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\n          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>\n        </svg>\n      </span>\n      <input\n        type="text"\n        [ngModel]="searchQuery"\n        (ngModelChange)="onSearchChange($event)"\n        (keyup.enter)="applyFilters()"\n        placeholder="\xDCr\xFCn ad\u0131..."\n        class="pl-8 pr-3 py-1.5 border border-stone-200 rounded-lg w-full text-xs bg-stone-50 text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-ember-500/20 focus:border-ember-500 transition-colors"\n      />\n    </div>\n  </div>\n\n  <!-- Fiyat Aral\u0131\u011F\u0131 -->\n  <div>\n    <h3 class="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">Fiyat Aral\u0131\u011F\u0131</h3>\n    <div class="flex items-center gap-2">\n      <input\n        type="number"\n        [(ngModel)]="minPrice"\n        (change)="applyFilters()"\n        placeholder="Min $"\n        class="w-full px-3 py-1.5 border border-stone-200 rounded-lg text-xs bg-stone-50 text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-ember-500/20 focus:border-ember-500 transition-colors"\n      />\n      <span class="text-stone-300 flex-shrink-0">\u2014</span>\n      <input\n        type="number"\n        [(ngModel)]="maxPrice"\n        (change)="applyFilters()"\n        placeholder="Max $"\n        class="w-full px-3 py-1.5 border border-stone-200 rounded-lg text-xs bg-stone-50 text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-ember-500/20 focus:border-ember-500 transition-colors"\n      />\n    </div>\n  </div>\n\n  <!-- S\u0131ralama -->\n  <div>\n    <h3 class="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">S\u0131ralama</h3>\n    <div class="relative">\n      <select\n        [(ngModel)]="sortBy"\n        (change)="applyFilters()"\n        class="w-full pl-3 pr-8 py-1.5 border border-stone-200 rounded-lg text-xs text-stone-700 bg-stone-50 appearance-none focus:outline-none focus:ring-2 focus:ring-ember-500/20 focus:border-ember-500 transition-colors cursor-pointer"\n      >\n        <option value="">\xD6nerilen</option>\n        <option value="newest">En Yeniler</option>\n        <option value="price_asc">Fiyat: Artan</option>\n        <option value="price_desc">Fiyat: Azalan</option>\n        <option value="rating_desc">En Y\xFCksek Puanl\u0131</option>\n      </select>\n      <div class="pointer-events-none absolute inset-y-0 right-2.5 flex items-center">\n        <svg class="w-3.5 h-3.5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">\n          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>\n        </svg>\n      </div>\n    </div>\n  </div>\n\n  <!-- Temizle -->\n  <button\n    (click)="clearFilters()"\n    class="w-full py-1.5 text-xs font-medium text-stone-500 hover:text-ember-500 border border-stone-200 hover:border-ember-200 bg-white hover:bg-ember-50 rounded-lg transition-colors"\n  >\n    Filtreleri Temizle\n  </button>\n\n</div>\n' }]
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
function ProductListComponent_Conditional_12_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 12);
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275property("product", product_r1);
  }
}
function ProductListComponent_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ProductListComponent_Conditional_12_Conditional_0_For_2_Template, 1, 1, "app-product-card", 12, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const products_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(products_r2);
  }
}
function ProductListComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 14);
    \u0275\u0275element(3, "path", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 16);
    \u0275\u0275text(5, "\xDCr\xFCn bulunamad\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 17);
    \u0275\u0275text(7, "Arama kriterlerinize uygun \xFCr\xFCn bulunamad\u0131. Filtreleri de\u011Fi\u015Ftirmeyi deneyin.");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProductListComponent_Conditional_12_Conditional_0_Template, 3, 0, "div", 10)(1, ProductListComponent_Conditional_12_Conditional_1_Template, 8, 0, "div", 11);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.length > 0 ? 0 : 1);
  }
}
function ProductListComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275element(3, "div", 21)(4, "div", 22)(5, "div", 23)(6, "div", 24);
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ProductListComponent_Conditional_14_For_2_Template, 7, 0, "div", 18, \u0275\u0275repeaterTrackByIdentity);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], decls: 15, vars: 12, consts: [[1, "container", "mx-auto", "px-4", "py-8", "max-w-7xl"], [1, "flex", "flex-col", "lg:flex-row", "gap-6"], [1, "w-full", "lg:w-64", "flex-shrink-0"], [1, "bg-white", "rounded-xl", "border", "border-stone-200", "overflow-hidden", "sticky", "top-28", "max-h-[calc(100vh-8rem)]", "overflow-y-auto"], [3, "categorySelected", "categories", "selectedCategoryId"], [1, "border-t", "border-stone-100", "mx-5"], [3, "filterChanged", "searchQuery", "minPrice", "maxPrice", "sortBy"], [1, "flex-1", "min-w-0"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-2xl", "font-medium", "text-stone-900"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-3", "gap-5"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "bg-white", "rounded-xl", "border", "border-stone-200", "text-center", "px-6"], [3, "product"], [1, "w-14", "h-14", "rounded-full", "bg-ember-50", "flex", "items-center", "justify-center", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-6", "h-6", "text-ember-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "text-base", "font-medium", "text-stone-900", "mb-1"], [1, "text-sm", "text-stone-500"], [1, "bg-white", "rounded-xl", "border", "border-stone-200", "overflow-hidden"], [1, "h-48", "bg-stone-100", "animate-pulse"], [1, "p-4", "space-y-3"], [1, "h-3", "bg-stone-100", "animate-pulse", "rounded", "w-1/3"], [1, "h-4", "bg-stone-100", "animate-pulse", "rounded", "w-3/4"], [1, "h-3", "bg-stone-100", "animate-pulse", "rounded", "w-1/2"], [1, "h-5", "bg-stone-100", "animate-pulse", "rounded", "w-1/4", "mt-2"]], template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "div", 3)(4, "app-category", 4);
      \u0275\u0275pipe(5, "async");
      \u0275\u0275listener("categorySelected", function ProductListComponent_Template_app_category_categorySelected_4_listener($event) {
        return ctx.onCategorySelect($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "div", 5);
      \u0275\u0275elementStart(7, "app-filter", 6);
      \u0275\u0275listener("filterChanged", function ProductListComponent_Template_app_filter_filterChanged_7_listener($event) {
        return ctx.onFiltersChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "main", 7)(9, "div", 8)(10, "h1", 9);
      \u0275\u0275text(11, "T\xFCm \xDCr\xFCnler");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, ProductListComponent_Conditional_12_Template, 2, 1);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275conditionalBranchCreate(14, ProductListComponent_Conditional_14_Template, 3, 1, "div", 10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275advance(4);
      \u0275\u0275property("categories", \u0275\u0275pipeBind1(5, 7, ctx.categories$) || \u0275\u0275pureFunction0(11, _c03))("selectedCategoryId", ctx.filters.categoryId);
      \u0275\u0275advance(3);
      \u0275\u0275property("searchQuery", ctx.filters.search)("minPrice", ctx.filters.minPrice)("maxPrice", ctx.filters.maxPrice)("sortBy", ctx.filters.sort);
      \u0275\u0275advance(5);
      \u0275\u0275conditional((tmp_6_0 = \u0275\u0275pipeBind1(13, 9, ctx.products$)) ? 12 : 14, tmp_6_0);
    }
  }, dependencies: [CommonModule, ProductCardComponent, CategoryComponent, FilterComponent, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductListComponent, [{
    type: Component,
    args: [{ selector: "app-product-list", standalone: true, imports: [CommonModule, ProductCardComponent, CategoryComponent, FilterComponent], template: '<div class="container mx-auto px-4 py-8 max-w-7xl">\n\n  <div class="flex flex-col lg:flex-row gap-6">\n\n    <!-- \u2500\u2500 Sol Filtre Paneli \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <aside class="w-full lg:w-64 flex-shrink-0">\n      <div class="bg-white rounded-xl border border-stone-200 overflow-hidden sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">\n\n        <app-category\n          [categories]="(categories$ | async) || []"\n          [selectedCategoryId]="filters.categoryId"\n          (categorySelected)="onCategorySelect($event)">\n        </app-category>\n\n        <div class="border-t border-stone-100 mx-5"></div>\n\n        <app-filter\n          [searchQuery]="filters.search"\n          [minPrice]="filters.minPrice"\n          [maxPrice]="filters.maxPrice"\n          [sortBy]="filters.sort"\n          (filterChanged)="onFiltersChange($event)">\n        </app-filter>\n\n      </div>\n    </aside>\n\n    <!-- \u2500\u2500 Ana \u0130\xE7erik \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <main class="flex-1 min-w-0">\n\n      <div class="flex items-center justify-between mb-6">\n        <h1 class="text-2xl font-medium text-stone-900">T\xFCm \xDCr\xFCnler</h1>\n      </div>\n\n      @if (products$ | async; as products) {\n\n        @if (products.length > 0) {\n          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">\n            @for (product of products; track product.id) {\n              <app-product-card [product]="product"></app-product-card>\n            }\n          </div>\n        } @else {\n          <div class="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-stone-200 text-center px-6">\n            <div class="w-14 h-14 rounded-full bg-ember-50 flex items-center justify-center mb-4">\n              <svg class="w-6 h-6 text-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">\n                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>\n              </svg>\n            </div>\n            <h3 class="text-base font-medium text-stone-900 mb-1">\xDCr\xFCn bulunamad\u0131</h3>\n            <p class="text-sm text-stone-500">Arama kriterlerinize uygun \xFCr\xFCn bulunamad\u0131. Filtreleri de\u011Fi\u015Ftirmeyi deneyin.</p>\n          </div>\n        }\n\n      } @else {\n        <!-- Skeleton y\xFCklenirken -->\n        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">\n          @for (i of [1, 2, 3, 4, 5, 6]; track i) {\n            <div class="bg-white rounded-xl border border-stone-200 overflow-hidden">\n              <div class="h-48 bg-stone-100 animate-pulse"></div>\n              <div class="p-4 space-y-3">\n                <div class="h-3 bg-stone-100 animate-pulse rounded w-1/3"></div>\n                <div class="h-4 bg-stone-100 animate-pulse rounded w-3/4"></div>\n                <div class="h-3 bg-stone-100 animate-pulse rounded w-1/2"></div>\n                <div class="h-5 bg-stone-100 animate-pulse rounded w-1/4 mt-2"></div>\n              </div>\n            </div>\n          }\n        </div>\n      }\n\n    </main>\n\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "app/features/catalog/pages/product-list/product-list.ts", lineNumber: 17 });
})();

// src/app/features/catalog/components/product-reviews/product-reviews.component.ts
var _c04 = () => [1, 2, 3, 4, 5];
var _c13 = () => [1, 2, 3];
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
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    const star_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("text-amber-400", ((tmp_11_0 = ctx_r1.reviewForm.get("starRating")) == null ? null : tmp_11_0.value) >= star_r4)("text-stone-200", ((tmp_12_0 = ctx_r1.reviewForm.get("starRating")) == null ? null : tmp_12_0.value) < star_r4);
  }
}
function ProductReviewsComponent_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "G\xF6nderiliyor...");
    \u0275\u0275elementEnd();
  }
}
function ProductReviewsComponent_Conditional_3_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Yorum G\xF6nder ");
  }
}
function ProductReviewsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h3", 6);
    \u0275\u0275text(2, "Yorum Yaz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 7);
    \u0275\u0275listener("ngSubmit", function ProductReviewsComponent_Conditional_3_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(4, "div", 8)(5, "label", 9);
    \u0275\u0275text(6, "Puan\u0131n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10);
    \u0275\u0275repeaterCreate(8, ProductReviewsComponent_Conditional_3_For_9_Template, 2, 4, "button", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12, "Yorumun");
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
    \u0275\u0275text(1, " Yorum yazmak i\xE7in ");
    \u0275\u0275elementStart(2, "a", 16);
    \u0275\u0275text(3, "giri\u015F yap");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ". ");
    \u0275\u0275elementEnd();
  }
}
function ProductReviewsComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, " Hen\xFCz yorum yok. \u0130lk yorumu sen yaz! ");
    \u0275\u0275elementEnd();
  }
}
function ProductReviewsComponent_Conditional_6_For_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r5 = ctx.$implicit;
    const review_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("text-amber-400", review_r6.starRating >= star_r5)("text-stone-200", review_r6.starRating < star_r5);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 3, review_r6.createdAt, "d MMM y"));
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
function ProductReviewsComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 27)(2, "div", 28)(3, "div", 29);
    \u0275\u0275elementEnd();
  }
}
function ProductReviewsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, ProductReviewsComponent_Conditional_8_For_2_Template, 4, 0, "div", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c13));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductReviewsComponent, selectors: [["app-product-reviews"]], inputs: { productId: "productId" }, decls: 9, vars: 4, consts: [[1, "mt-8", "bg-white", "rounded-xl", "border", "border-stone-200", "p-6"], [1, "text-xl", "font-medium", "text-stone-900", "mb-6"], [1, "mb-8", "bg-stone-50", "p-5", "rounded-xl", "border", "border-stone-200"], [1, "mb-8", "p-4", "bg-ember-50", "border", "border-stone-200", "rounded-lg", "text-sm", "text-stone-600"], [1, "space-y-5"], [1, "space-y-4"], [1, "text-sm", "font-semibold", "text-stone-800", "mb-4"], [3, "ngSubmit", "formGroup"], [1, "mb-4"], [1, "block", "text-xs", "font-medium", "text-stone-500", "uppercase", "tracking-wide", "mb-2"], [1, "flex", "gap-1"], ["type", "button", 1, "text-2xl", "leading-none", "focus:outline-none", "transition-colors", 3, "text-amber-400", "text-stone-200"], ["formControlName", "reviewText", "rows", "4", "placeholder", "\xDCr\xFCn hakk\u0131nda d\xFC\u015F\xFCncelerini payla\u015F...", 1, "w-full", "px-4", "py-3", "rounded-lg", "border", "border-stone-200", "bg-white", "text-sm", "text-stone-800", "placeholder-stone-400", "focus:outline-none", "focus:ring-2", "focus:ring-ember-500/20", "focus:border-ember-500", "transition-colors", "resize-none"], ["type", "submit", 1, "inline-flex", "items-center", "gap-2", "bg-ember-500", "hover:bg-ember-600", "text-white", "text-sm", "font-medium", "py-2", "px-5", "rounded-lg", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [1, "animate-pulse"], ["type", "button", 1, "text-2xl", "leading-none", "focus:outline-none", "transition-colors", 3, "click"], ["routerLink", "/auth/login", 1, "font-semibold", "text-ember-500", "hover:text-ember-600"], [1, "text-sm", "text-stone-400", "italic", "text-center", "py-8"], [1, "border-b", "border-stone-100", "pb-5", "last:border-0", "last:pb-0"], [1, "flex", "items-center", "justify-between", "mb-1.5"], [1, "text-sm", "font-semibold", "text-stone-900"], [1, "text-xs", "text-stone-400"], [1, "flex", "gap-0.5", "mb-2"], [1, "text-sm", "leading-none", 3, "text-amber-400", "text-stone-200"], [1, "text-sm", "text-stone-600", "leading-relaxed"], [1, "text-sm", "leading-none"], [1, "animate-pulse", "space-y-2"], [1, "h-3", "bg-stone-100", "rounded", "w-1/4"], [1, "h-3", "bg-stone-100", "rounded", "w-full"], [1, "h-3", "bg-stone-100", "rounded", "w-3/4"]], template: function ProductReviewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "De\u011Ferlendirmeler");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, ProductReviewsComponent_Conditional_3_Template, 17, 4, "div", 2)(4, ProductReviewsComponent_Conditional_4_Template, 5, 0, "div", 3);
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275conditionalCreate(6, ProductReviewsComponent_Conditional_6_Template, 3, 1);
      \u0275\u0275pipe(7, "async");
      \u0275\u0275conditionalBranchCreate(8, ProductReviewsComponent_Conditional_8_Template, 3, 1, "div", 5);
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
    args: [{ selector: "app-product-reviews", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="mt-8 bg-white rounded-xl border border-stone-200 p-6">
  <h2 class="text-xl font-medium text-stone-900 mb-6">De\u011Ferlendirmeler</h2>

  <!-- Yorum Formu \u2014 giri\u015F yapm\u0131\u015F kullan\u0131c\u0131 -->
  @if (isAuthenticated) {
    <div class="mb-8 bg-stone-50 p-5 rounded-xl border border-stone-200">
      <h3 class="text-sm font-semibold text-stone-800 mb-4">Yorum Yaz</h3>
      <form [formGroup]="reviewForm" (ngSubmit)="onSubmit()">

        <!-- Y\u0131ld\u0131z -->
        <div class="mb-4">
          <label class="block text-xs font-medium text-stone-500 uppercase tracking-wide mb-2">Puan\u0131n</label>
          <div class="flex gap-1">
            @for (star of [1, 2, 3, 4, 5]; track star) {
              <button
                type="button"
                (click)="setRating(star)"
                class="text-2xl leading-none focus:outline-none transition-colors"
                [class.text-amber-400]="reviewForm.get('starRating')?.value >= star"
                [class.text-stone-200]="reviewForm.get('starRating')?.value < star"
              >\u2605</button>
            }
          </div>
        </div>

        <!-- Yorum Metni -->
        <div class="mb-4">
          <label class="block text-xs font-medium text-stone-500 uppercase tracking-wide mb-2">Yorumun</label>
          <textarea
            formControlName="reviewText"
            rows="4"
            class="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-ember-500/20 focus:border-ember-500 transition-colors resize-none"
            placeholder="\xDCr\xFCn hakk\u0131nda d\xFC\u015F\xFCncelerini payla\u015F..."
          ></textarea>
        </div>

        <button
          type="submit"
          [disabled]="reviewForm.invalid || isSubmitting"
          class="inline-flex items-center gap-2 bg-ember-500 hover:bg-ember-600 text-white text-sm font-medium py-2 px-5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          @if (isSubmitting) {
            <span class="animate-pulse">G\xF6nderiliyor...</span>
          } @else {
            Yorum G\xF6nder
          }
        </button>

      </form>
    </div>
  } @else {
    <div class="mb-8 p-4 bg-ember-50 border border-stone-200 rounded-lg text-sm text-stone-600">
      Yorum yazmak i\xE7in <a routerLink="/auth/login" class="font-semibold text-ember-500 hover:text-ember-600">giri\u015F yap</a>.
    </div>
  }

  <!-- Yorum Listesi -->
  <div class="space-y-5">
    @if (reviews$ | async; as reviews) {
      @if (reviews.length === 0) {
        <p class="text-sm text-stone-400 italic text-center py-8">
          Hen\xFCz yorum yok. \u0130lk yorumu sen yaz!
        </p>
      }
      @for (review of reviews; track review.id) {
        <div class="border-b border-stone-100 pb-5 last:border-0 last:pb-0">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-sm font-semibold text-stone-900">{{ review.userName }}</span>
            <span class="text-xs text-stone-400">{{ review.createdAt | date:'d MMM y' }}</span>
          </div>
          <div class="flex gap-0.5 mb-2">
            @for (star of [1,2,3,4,5]; track star) {
              <span class="text-sm leading-none"
                [class.text-amber-400]="review.starRating >= star"
                [class.text-stone-200]="review.starRating < star">\u2605</span>
            }
          </div>
          <p class="text-sm text-stone-600 leading-relaxed">{{ review.reviewText }}</p>
        </div>
      }
    } @else {
      <div class="space-y-4">
        @for (i of [1,2,3]; track i) {
          <div class="animate-pulse space-y-2">
            <div class="h-3 bg-stone-100 rounded w-1/4"></div>
            <div class="h-3 bg-stone-100 rounded w-full"></div>
            <div class="h-3 bg-stone-100 rounded w-3/4"></div>
          </div>
        }
      </div>
    }
  </div>
</div>
` }]
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
var _c14 = () => [1, 2, 3, 4, 5];
var _forTrack04 = ($index, $item) => $item.id;
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
function ProductDetailComponent_Conditional_6_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_6_Conditional_10_For_2_Template_button_click_0_listener() {
      const img_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectImage(img_r3.imageUrl));
    });
    \u0275\u0275element(1, "img", 59);
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
function ProductDetailComponent_Conditional_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, ProductDetailComponent_Conditional_6_Conditional_10_For_2_Template, 2, 4, "button", 57, _forTrack04);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.product().images);
  }
}
function ProductDetailComponent_Conditional_6_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("text-amber-400", star_r5 <= (ctx_r3.product().rating || 0))("text-stone-200", star_r5 > (ctx_r3.product().rating || 0));
  }
}
function ProductDetailComponent_Conditional_6_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 61);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 62);
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
function ProductDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 21);
    \u0275\u0275element(6, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8, "G\xF6rsel Yok");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "img", 24);
    \u0275\u0275listener("error", function ProductDetailComponent_Conditional_6_Template_img_error_9_listener($event) {
      return $event.target.style.display = "none";
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, ProductDetailComponent_Conditional_6_Conditional_10_Template, 3, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 26)(12, "p", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h1", 28);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 29)(17, "div", 30);
    \u0275\u0275repeaterCreate(18, ProductDetailComponent_Conditional_6_For_19_Template, 2, 4, "span", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 32);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 33);
    \u0275\u0275text(24, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 34);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 35)(28, "span", 36);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(31, ProductDetailComponent_Conditional_6_Conditional_31_Template, 7, 8, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 38)(33, "div", 39)(34, "button", 40);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_6_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.decreaseQty());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 41);
    \u0275\u0275element(36, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "span", 43);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 40);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_6_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.increaseQty());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 41);
    \u0275\u0275element(41, "path", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "button", 45);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_6_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addToCart(ctx_r3.product()));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 46);
    \u0275\u0275element(44, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Sepete Ekle ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "div", 48)(47, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(48, "svg", 50);
    \u0275\u0275element(49, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "span", 52);
    \u0275\u0275text(51, "G\xFCvenli \xD6deme");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 50);
    \u0275\u0275element(54, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(55, "span", 52);
    \u0275\u0275text(56, "30 G\xFCn \u0130ade");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 50);
    \u0275\u0275element(59, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(60, "span", 52);
    \u0275\u0275text(61, "\xDCcretsiz Kargo");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(62, "div", 55);
    \u0275\u0275element(63, "app-product-reviews", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("src", ctx_r3.activeImageUrl(ctx_r3.product()), \u0275\u0275sanitizeUrl)("alt", ctx_r3.activeAltText(ctx_r3.product()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.product().images && ctx_r3.product().images.length > 1 ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r3.product().category, "\u2002\xB7\u2002SKU: ", ctx_r3.product().sku, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.product().name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(18, _c14));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 12, ctx_r3.product().rating, "1.1-1"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.product().reviewCount, " de\u011Ferlendirme");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(30, 15, ctx_r3.product().price, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.product().originalPrice ? 31 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.quantity());
    \u0275\u0275advance(25);
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
    return isSelected ? "border-ember-500 opacity-100 scale-105" : "border-transparent opacity-60 hover:opacity-90";
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], decls: 7, vars: 1, consts: [[1, "container", "mx-auto", "px-4", "py-8", "max-w-6xl"], ["routerLink", "/catalog", 1, "inline-flex", "items-center", "gap-1.5", "text-sm", "text-stone-500", "hover:text-ember-500", "mb-8", "transition-colors", "group"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "group-hover:-translate-x-0.5", "transition-transform"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19l-7-7 7-7"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-10", "animate-pulse"], [1, "space-y-4"], [1, "rounded-xl", "aspect-square", "w-full", "bg-stone-100"], [1, "flex", "gap-3"], [1, "w-20", "h-20", "rounded-lg", "flex-shrink-0", "bg-stone-100"], [1, "flex", "flex-col", "space-y-4", "pt-2"], [1, "h-3", "rounded", "w-1/3", "bg-stone-100"], [1, "h-8", "rounded", "w-4/5", "bg-stone-100"], [1, "h-4", "rounded", "w-1/4", "bg-stone-100"], [1, "h-10", "rounded", "w-1/3", "bg-stone-100"], [1, "h-24", "rounded", "w-full", "bg-stone-100"], [1, "h-12", "rounded-lg", "w-full", "bg-stone-100", "mt-4"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-10"], [1, "space-y-3"], [1, "relative", "rounded-xl", "overflow-hidden", "border", "border-stone-200", "aspect-square", "group"], [1, "absolute", "inset-0", "bg-ember-50", "flex", "flex-col", "items-center", "justify-center", "gap-3"], [1, "w-16", "h-16", "rounded-xl", "bg-gradient-to-br", "from-orange-500", "to-red-600", "flex", "items-center", "justify-center", "opacity-15"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-8", "h-8", "text-white"], ["d", "M12.017 2C12.017 2 6 8 6 13.5a6.017 6.017 0 0 0 12 0C18 8 12.017 2 12.017 2zm-.017 15a2 2 0 0 1-2-2c0-1.5 1-3 2-4 1 1 2 2.5 2 4a2 2 0 0 1-2 2z"], [1, "text-xs", "text-stone-300", "font-medium", "tracking-wide"], [1, "absolute", "inset-0", "w-full", "h-full", "object-contain", "transition-transform", "duration-500", "group-hover:scale-105", "select-none", 3, "error", "src", "alt"], [1, "flex", "gap-2.5", "overflow-x-auto", "pb-1"], [1, "flex", "flex-col", "gap-5"], [1, "text-xs", "font-medium", "text-stone-400", "uppercase", "tracking-wider"], [1, "text-2xl", "font-medium", "text-stone-900", "leading-snug"], [1, "flex", "items-center", "gap-2", "pb-5", "border-b", "border-stone-100"], [1, "flex", "items-center", "gap-0.5"], [1, "text-base", "leading-none", 3, "text-amber-400", "text-stone-200"], [1, "text-sm", "font-medium", "text-stone-700"], [1, "text-stone-300"], [1, "text-sm", "text-stone-500"], [1, "flex", "items-end", "gap-3"], [1, "text-3xl", "font-semibold", "text-stone-900"], [1, "flex", "items-center", "gap-2", "mb-0.5"], [1, "flex", "gap-3", "pt-1"], [1, "flex", "items-center", "border", "border-stone-200", "rounded-lg", "overflow-hidden", "flex-shrink-0", "bg-white"], [1, "w-10", "h-11", "flex", "items-center", "justify-center", "text-stone-400", "hover:text-stone-700", "hover:bg-stone-50", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 12H4"], [1, "w-10", "text-center", "text-sm", "font-semibold", "text-stone-900", "select-none"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16m8-8H4"], [1, "flex-1", "flex", "items-center", "justify-center", "gap-2", "py-2.5", "px-5", "rounded-lg", "bg-ember-500", "hover:bg-ember-600", "text-white", "text-sm", "font-medium", "transition-colors", "shadow-sm", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"], [1, "grid", "grid-cols-3", "gap-2.5", "pt-1"], [1, "flex", "flex-col", "items-center", "gap-1.5", "p-3", "rounded-lg", "border", "border-stone-200", "bg-stone-50", "text-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-5", "h-5", "text-ember-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "text-[10px]", "text-stone-500", "font-medium", "leading-tight"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"], [1, "mt-12"], [3, "productId"], [1, "flex-shrink-0", "w-20", "h-20", "rounded-lg", "overflow-hidden", "border-2", "transition-all", "duration-200", 3, "class"], [1, "flex-shrink-0", "w-20", "h-20", "rounded-lg", "overflow-hidden", "border-2", "transition-all", "duration-200", 3, "click"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "text-base", "leading-none"], [1, "text-base", "text-stone-400", "line-through"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "rounded-full", "text-xs", "font-semibold", "text-white", "bg-red-600"]], template: function ProductDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Katalo\u011Fa D\xF6n ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, ProductDetailComponent_Conditional_5_Template, 13, 1, "div", 4)(6, ProductDetailComponent_Conditional_6_Template, 64, 19);
      \u0275\u0275elementEnd();
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
    args: [{ selector: "app-product-detail", standalone: true, imports: [CommonModule, RouterModule, ProductReviewsComponent], template: `<div class="container mx-auto px-4 py-8 max-w-6xl">

  <!-- Geri -->
  <a routerLink="/catalog"
     class="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-ember-500 mb-8 transition-colors group">
    <svg class="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
    </svg>
    Katalo\u011Fa D\xF6n
  </a>

  @if (product() === null) {
    <!-- Skeleton -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-pulse">
      <div class="space-y-4">
        <div class="rounded-xl aspect-square w-full bg-stone-100"></div>
        <div class="flex gap-3">
          @for (i of [1,2,3,4]; track i) {
            <div class="w-20 h-20 rounded-lg flex-shrink-0 bg-stone-100"></div>
          }
        </div>
      </div>
      <div class="flex flex-col space-y-4 pt-2">
        <div class="h-3 rounded w-1/3 bg-stone-100"></div>
        <div class="h-8 rounded w-4/5 bg-stone-100"></div>
        <div class="h-4 rounded w-1/4 bg-stone-100"></div>
        <div class="h-10 rounded w-1/3 bg-stone-100"></div>
        <div class="h-24 rounded w-full bg-stone-100"></div>
        <div class="h-12 rounded-lg w-full bg-stone-100 mt-4"></div>
      </div>
    </div>

  } @else {
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

      <!-- \u2500\u2500 GALER\u0130 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="space-y-3">

        <!-- Ana G\xF6rsel -->
        <div class="relative rounded-xl overflow-hidden border border-stone-200 aspect-square group">
          <!-- Fallback placeholder -->
          <div class="absolute inset-0 bg-ember-50 flex flex-col items-center justify-center gap-3">
            <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center opacity-15">
              <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 2C12.017 2 6 8 6 13.5a6.017 6.017 0 0 0 12 0C18 8 12.017 2 12.017 2zm-.017 15a2 2 0 0 1-2-2c0-1.5 1-3 2-4 1 1 2 2.5 2 4a2 2 0 0 1-2 2z"/>
              </svg>
            </div>
            <span class="text-xs text-stone-300 font-medium tracking-wide">G\xF6rsel Yok</span>
          </div>
          <!-- Ger\xE7ek g\xF6rsel -->
          <img [src]="activeImageUrl(product()!)"
               [alt]="activeAltText(product()!)"
               class="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 select-none"
               (error)="$any($event.target).style.display='none'">
        </div>

        <!-- Thumbnail \u015Eeridi -->
        @if (product()!.images && product()!.images!.length > 1) {
          <div class="flex gap-2.5 overflow-x-auto pb-1">
            @for (img of product()!.images!; track img.id) {
              <button (click)="selectImage(img.imageUrl)"
                class="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200"
                [class]="thumbClass(img)">
                <img [src]="img.imageUrl" [alt]="img.altText || product()!.name"
                     class="w-full h-full object-cover">
              </button>
            }
          </div>
        }
      </div>

      <!-- \u2500\u2500 \xDCR\xDCN B\u0130LG\u0130LER\u0130 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="flex flex-col gap-5">

        <!-- Kategori + SKU -->
        <p class="text-xs font-medium text-stone-400 uppercase tracking-wider">
          {{ product()!.category }}&ensp;\xB7&ensp;SKU: {{ product()!.sku }}
        </p>

        <!-- \u0130sim -->
        <h1 class="text-2xl font-medium text-stone-900 leading-snug">
          {{ product()!.name }}
        </h1>

        <!-- Puan -->
        <div class="flex items-center gap-2 pb-5 border-b border-stone-100">
          <div class="flex items-center gap-0.5">
            @for (star of [1,2,3,4,5]; track star) {
              <span class="text-base leading-none"
                [class.text-amber-400]="star <= (product()!.rating || 0)"
                [class.text-stone-200]="star > (product()!.rating || 0)">\u2605</span>
            }
          </div>
          <span class="text-sm font-medium text-stone-700">{{ product()!.rating | number:'1.1-1' }}</span>
          <span class="text-stone-300">\xB7</span>
          <span class="text-sm text-stone-500">{{ product()!.reviewCount }} de\u011Ferlendirme</span>
        </div>

        <!-- Fiyat -->
        <div class="flex items-end gap-3">
          <span class="text-3xl font-semibold text-stone-900">\${{ product()!.price | number:'1.2-2' }}</span>
          @if (product()!.originalPrice) {
            <div class="flex items-center gap-2 mb-0.5">
              <span class="text-base text-stone-400 line-through">\${{ product()!.originalPrice | number:'1.2-2' }}</span>
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold text-white bg-red-600">
                -{{ ((1 - product()!.price / product()!.originalPrice!) * 100) | number:'1.0-0' }}%
              </span>
            </div>
          }
        </div>

        <!-- Miktar + Sepete Ekle -->
        <div class="flex gap-3 pt-1">
          <!-- Miktar se\xE7ici -->
          <div class="flex items-center border border-stone-200 rounded-lg overflow-hidden flex-shrink-0 bg-white">
            <button (click)="decreaseQty()"
              class="w-10 h-11 flex items-center justify-center text-stone-400 hover:text-stone-700 hover:bg-stone-50 transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"/>
              </svg>
            </button>
            <span class="w-10 text-center text-sm font-semibold text-stone-900 select-none">{{ quantity() }}</span>
            <button (click)="increaseQty()"
              class="w-10 h-11 flex items-center justify-center text-stone-400 hover:text-stone-700 hover:bg-stone-50 transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
              </svg>
            </button>
          </div>

          <!-- Sepete Ekle -->
          <button (click)="addToCart(product()!)"
            class="flex-1 flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg bg-ember-500 hover:bg-ember-600 text-white text-sm font-medium transition-colors shadow-sm">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            Sepete Ekle
          </button>
        </div>

        <!-- G\xFCven rozetleri -->
        <div class="grid grid-cols-3 gap-2.5 pt-1">
          <div class="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-stone-200 bg-stone-50 text-center">
            <svg class="w-5 h-5 text-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <span class="text-[10px] text-stone-500 font-medium leading-tight">G\xFCvenli \xD6deme</span>
          </div>
          <div class="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-stone-200 bg-stone-50 text-center">
            <svg class="w-5 h-5 text-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"/>
            </svg>
            <span class="text-[10px] text-stone-500 font-medium leading-tight">30 G\xFCn \u0130ade</span>
          </div>
          <div class="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-stone-200 bg-stone-50 text-center">
            <svg class="w-5 h-5 text-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
            </svg>
            <span class="text-[10px] text-stone-500 font-medium leading-tight">\xDCcretsiz Kargo</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Yorumlar -->
    <div class="mt-12">
      <app-product-reviews [productId]="product()!.id"></app-product-reviews>
    </div>
  }

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
//# sourceMappingURL=chunk-GUG3ODNR.mjs.map
