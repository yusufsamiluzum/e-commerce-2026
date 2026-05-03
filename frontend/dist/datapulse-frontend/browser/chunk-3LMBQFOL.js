import {
  CorporateService
} from "./chunk-XN2NLGPB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-MKAKFE2K.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OBD62CNA.js";
import "./chunk-H2SRQSE4.js";

// src/app/features/corporate/inventory/inventory.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.productId;
function Inventory_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 14)(2, "p", 15);
    \u0275\u0275text(3, "Toplam \xDCr\xFCn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "p", 17);
    \u0275\u0275text(8, "Yeterli Stok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 18);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14)(12, "p", 19);
    \u0275\u0275text(13, "D\xFC\u015F\xFCk Stok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 14)(17, "p", 21);
    \u0275\u0275text(18, "T\xFCkenen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 22);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.summaryStats.total);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.summaryStats.ok);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.summaryStats.low);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.summaryStats.outOfStock);
  }
}
function Inventory_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275element(2, "div", 25)(3, "div", 7)(4, "div", 26)(5, "div", 27);
    \u0275\u0275elementEnd()();
  }
}
function Inventory_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, Inventory_Conditional_20_For_2_Template, 6, 0, "div", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function Inventory_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 28);
    \u0275\u0275element(2, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 30);
    \u0275\u0275text(4, "Envanter \xD6\u011Fesi Bulunamad\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 31);
    \u0275\u0275text(6, "Filtreye uygun \xFCr\xFCn yok.");
    \u0275\u0275elementEnd()();
  }
}
function Inventory_Conditional_22_For_21_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function Inventory_Conditional_22_For_21_Conditional_11_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.editQuantity, $event) || (ctx_r0.editQuantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Inventory_Conditional_22_For_21_Conditional_11_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editQuantity.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editQuantity);
  }
}
function Inventory_Conditional_22_For_21_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(item_r3.stockStatus === "OK" ? "text-white" : item_r3.stockStatus === "LOW" ? "text-amber-400" : "text-red-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.stockQuantity, " ");
  }
}
function Inventory_Conditional_22_For_21_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "button", 54);
    \u0275\u0275listener("click", function Inventory_Conditional_22_For_21_Conditional_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275text(2, "\u0130ptal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 55);
    \u0275\u0275listener("click", function Inventory_Conditional_22_For_21_Conditional_18_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveStock(item_r3.productId));
    });
    \u0275\u0275text(4, "Kaydet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isSaving());
  }
}
function Inventory_Conditional_22_For_21_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function Inventory_Conditional_22_For_21_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startEdit(item_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 57);
    \u0275\u0275element(2, "path", 58);
    \u0275\u0275elementEnd()();
  }
}
function Inventory_Conditional_22_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 38)(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 43);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 44);
    \u0275\u0275conditionalCreate(11, Inventory_Conditional_22_For_21_Conditional_11_Template, 2, 1, "div", 45)(12, Inventory_Conditional_22_For_21_Conditional_12_Template, 2, 3, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 44)(14, "span", 47);
    \u0275\u0275element(15, "span", 48);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 49);
    \u0275\u0275conditionalCreate(18, Inventory_Conditional_22_For_21_Conditional_18_Template, 5, 1, "div", 50)(19, Inventory_Conditional_22_For_21_Conditional_19_Template, 3, 0, "button", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.categoryName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(9, 11, item_r3.unitPrice, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.editingId() === item_r3.productId ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.stockColors[item_r3.stockStatus]);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.stockDots[item_r3.stockStatus]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.stockLabels[item_r3.stockStatus], " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.editingId() === item_r3.productId ? 18 : 19);
  }
}
function Inventory_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 32)(2, "table", 33)(3, "thead")(4, "tr", 34)(5, "th", 35);
    \u0275\u0275text(6, "\xDCr\xFCn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 35);
    \u0275\u0275text(8, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 35);
    \u0275\u0275text(10, "Kategori");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 36);
    \u0275\u0275text(12, "Birim Fiyat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 37);
    \u0275\u0275text(14, "Stok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 37);
    \u0275\u0275text(16, "Durum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 36);
    \u0275\u0275text(18, "\u0130\u015Flem");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, Inventory_Conditional_22_For_21_Template, 20, 14, "tr", 38, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 39)(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r0.filteredItems);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.filteredItems.length, " \xFCr\xFCn g\xF6steriliyor");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Toplam Stok De\u011Feri: $", \u0275\u0275pipeBind2(27, 2, ctx_r0.summaryStats.totalValue, "1.2-2"));
  }
}
var Inventory = class _Inventory {
  corporateService = inject(CorporateService);
  items = signal([], ...ngDevMode ? [{ debugName: "items" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : (
    /* istanbul ignore next */
    []
  ));
  filterStock = signal("all", ...ngDevMode ? [{ debugName: "filterStock" }] : (
    /* istanbul ignore next */
    []
  ));
  editingId = signal(null, ...ngDevMode ? [{ debugName: "editingId" }] : (
    /* istanbul ignore next */
    []
  ));
  editQuantity = signal(0, ...ngDevMode ? [{ debugName: "editQuantity" }] : (
    /* istanbul ignore next */
    []
  ));
  isSaving = signal(false, ...ngDevMode ? [{ debugName: "isSaving" }] : (
    /* istanbul ignore next */
    []
  ));
  stockLabels = {
    "OK": "Yeterli",
    "LOW": "D\xFC\u015F\xFCk Stok",
    "OUT_OF_STOCK": "T\xFCkendi"
  };
  stockColors = {
    "OK": "text-emerald-400 bg-emerald-500/10",
    "LOW": "text-amber-400 bg-amber-500/10",
    "OUT_OF_STOCK": "text-red-400 bg-red-500/10"
  };
  stockDots = {
    "OK": "bg-emerald-400",
    "LOW": "bg-amber-400",
    "OUT_OF_STOCK": "bg-red-400"
  };
  constructor() {
    this.loadInventory();
  }
  loadInventory() {
    this.isLoading.set(true);
    this.corporateService.getInventory().subscribe({
      next: (items) => {
        this.items.set(items);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  get filteredItems() {
    let list = this.items();
    const term = this.searchTerm().toLowerCase();
    if (term) {
      list = list.filter((i) => i.productName.toLowerCase().includes(term) || i.sku.toLowerCase().includes(term));
    }
    const filter = this.filterStock();
    if (filter !== "all") {
      list = list.filter((i) => i.stockStatus === filter);
    }
    return list;
  }
  get summaryStats() {
    const all = this.items();
    return {
      total: all.length,
      ok: all.filter((i) => i.stockStatus === "OK").length,
      low: all.filter((i) => i.stockStatus === "LOW").length,
      outOfStock: all.filter((i) => i.stockStatus === "OUT_OF_STOCK").length,
      totalValue: all.reduce((sum, i) => sum + i.stockQuantity * i.unitPrice, 0)
    };
  }
  startEdit(item) {
    this.editingId.set(item.productId);
    this.editQuantity.set(item.stockQuantity);
  }
  cancelEdit() {
    this.editingId.set(null);
  }
  saveStock(productId) {
    this.isSaving.set(true);
    this.corporateService.updateStock(productId, this.editQuantity()).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.editingId.set(null);
        this.loadInventory();
      },
      error: () => this.isSaving.set(false)
    });
  }
  static \u0275fac = function Inventory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Inventory)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Inventory, selectors: [["app-inventory"]], decls: 23, vars: 11, consts: [[1, "min-h-screen", "bg-gray-950"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "mb-8"], [1, "text-3xl", "font-bold", "text-white"], [1, "text-gray-400", "text-sm", "mt-1"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-4", "mb-8"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "mb-6"], [1, "flex-1"], ["type", "text", "placeholder", "\xDCr\xFCn ad\u0131 veya SKU ile ara...", 1, "w-full", "bg-gray-900/80", "border", "border-gray-800", "rounded-xl", "py-2.5", "px-4", "text-white", "text-sm", "focus:border-blue-500", "outline-none", "transition-all", "placeholder-gray-500", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2"], [1, "px-4", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "space-y-3"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-12", "text-center"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "overflow-hidden"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-5"], [1, "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "mb-1"], [1, "text-2xl", "font-bold", "text-white"], [1, "text-xs", "font-semibold", "text-emerald-400", "uppercase", "tracking-wider", "mb-1"], [1, "text-2xl", "font-bold", "text-emerald-400"], [1, "text-xs", "font-semibold", "text-amber-400", "uppercase", "tracking-wider", "mb-1"], [1, "text-2xl", "font-bold", "text-amber-400"], [1, "text-xs", "font-semibold", "text-red-400", "uppercase", "tracking-wider", "mb-1"], [1, "text-2xl", "font-bold", "text-red-400"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-5", "animate-pulse"], [1, "flex", "items-center", "gap-4"], [1, "h-5", "bg-gray-700", "rounded", "w-40"], [1, "h-8", "bg-gray-700", "rounded", "w-20"], [1, "h-6", "bg-gray-700", "rounded", "w-24"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-16", "w-16", "text-gray-600", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "text-xl", "font-semibold", "text-white", "mb-2"], [1, "text-gray-400", "text-sm"], [1, "overflow-x-auto"], [1, "w-full"], [1, "border-b", "border-gray-800"], [1, "text-left", "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "py-4", "px-5"], [1, "text-right", "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "py-4", "px-5"], [1, "text-center", "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "py-4", "px-5"], [1, "border-b", "border-gray-800/50", "hover:bg-gray-800/30", "transition-colors"], [1, "px-5", "py-3", "border-t", "border-gray-800", "flex", "justify-between", "text-xs", "text-gray-500"], [1, "py-4", "px-5", "text-sm", "font-semibold", "text-white"], [1, "py-4", "px-5", "text-sm", "text-gray-400", "font-mono"], [1, "py-4", "px-5", "text-sm", "text-gray-400"], [1, "py-4", "px-5", "text-sm", "text-right", "text-white"], [1, "py-4", "px-5", "text-center"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "text-sm", "font-semibold", 3, "class"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-medium", "px-2.5", "py-1", "rounded-lg"], [1, "w-1.5", "h-1.5", "rounded-full"], [1, "py-4", "px-5", "text-right"], [1, "flex", "items-center", "justify-end", "gap-2"], ["title", "Stok G\xFCncelle", 1, "p-2", "hover:bg-gray-700", "rounded-lg", "transition-colors", "text-gray-400", "hover:text-blue-400"], ["type", "number", "min", "0", 1, "w-20", "bg-gray-800", "border", "border-blue-500", "rounded-lg", "py-1.5", "px-2", "text-white", "text-sm", "text-center", "focus:outline-none", 3, "ngModelChange", "ngModel"], [1, "text-sm", "font-semibold"], [1, "px-3", "py-1.5", "bg-gray-700", "text-gray-300", "text-xs", "rounded-lg", "hover:bg-gray-600", "transition-colors", 3, "click"], [1, "px-3", "py-1.5", "bg-blue-600", "text-white", "text-xs", "rounded-lg", "hover:bg-blue-700", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], ["title", "Stok G\xFCncelle", 1, "p-2", "hover:bg-gray-700", "rounded-lg", "transition-colors", "text-gray-400", "hover:text-blue-400", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"]], template: function Inventory_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Envanter Y\xF6netimi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Stok d\xFCzeylerini takip edin ve g\xFCncelleyin");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, Inventory_Conditional_7_Template, 21, 4, "div", 5);
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function Inventory_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function Inventory_Template_input_ngModelChange_10_listener($event) {
        return ctx.searchTerm.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
      \u0275\u0275listener("click", function Inventory_Template_button_click_12_listener() {
        return ctx.filterStock.set("all");
      });
      \u0275\u0275text(13, "T\xFCm\xFC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275listener("click", function Inventory_Template_button_click_14_listener() {
        return ctx.filterStock.set("OK");
      });
      \u0275\u0275text(15, "Yeterli");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275listener("click", function Inventory_Template_button_click_16_listener() {
        return ctx.filterStock.set("LOW");
      });
      \u0275\u0275text(17, "D\xFC\u015F\xFCk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 10);
      \u0275\u0275listener("click", function Inventory_Template_button_click_18_listener() {
        return ctx.filterStock.set("OUT_OF_STOCK");
      });
      \u0275\u0275text(19, "T\xFCkenen");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(20, Inventory_Conditional_20_Template, 3, 1, "div", 11)(21, Inventory_Conditional_21_Template, 7, 0, "div", 12)(22, Inventory_Conditional_22_Template, 28, 5, "div", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(!ctx.isLoading() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.filterStock() === "all" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.filterStock() === "OK" ? "bg-emerald-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.filterStock() === "LOW" ? "bg-amber-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.filterStock() === "OUT_OF_STOCK" ? "bg-red-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 20 : ctx.filteredItems.length === 0 ? 21 : 22);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Inventory, [{
    type: Component,
    args: [{ selector: "app-inventory", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="min-h-screen bg-gray-950">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-white">Envanter Y\xF6netimi</h1>
      <p class="text-gray-400 text-sm mt-1">Stok d\xFCzeylerini takip edin ve g\xFCncelleyin</p>
    </div>

    <!-- Summary Cards -->
    @if (!isLoading()) {
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-5">
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Toplam \xDCr\xFCn</p>
          <p class="text-2xl font-bold text-white">{{ summaryStats.total }}</p>
        </div>
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-5">
          <p class="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">Yeterli Stok</p>
          <p class="text-2xl font-bold text-emerald-400">{{ summaryStats.ok }}</p>
        </div>
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-5">
          <p class="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">D\xFC\u015F\xFCk Stok</p>
          <p class="text-2xl font-bold text-amber-400">{{ summaryStats.low }}</p>
        </div>
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-5">
          <p class="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">T\xFCkenen</p>
          <p class="text-2xl font-bold text-red-400">{{ summaryStats.outOfStock }}</p>
        </div>
      </div>
    }

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row gap-4 mb-6">
      <div class="flex-1">
        <input [(ngModel)]="searchTerm" type="text" placeholder="\xDCr\xFCn ad\u0131 veya SKU ile ara..."
          (ngModelChange)="searchTerm.set($event)"
          class="w-full bg-gray-900/80 border border-gray-800 rounded-xl py-2.5 px-4 text-white text-sm focus:border-blue-500 outline-none transition-all placeholder-gray-500">
      </div>
      <div class="flex gap-2">
        <button (click)="filterStock.set('all')"
          [class]="filterStock() === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'"
          class="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">T\xFCm\xFC</button>
        <button (click)="filterStock.set('OK')"
          [class]="filterStock() === 'OK' ? 'bg-emerald-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'"
          class="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">Yeterli</button>
        <button (click)="filterStock.set('LOW')"
          [class]="filterStock() === 'LOW' ? 'bg-amber-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'"
          class="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">D\xFC\u015F\xFCk</button>
        <button (click)="filterStock.set('OUT_OF_STOCK')"
          [class]="filterStock() === 'OUT_OF_STOCK' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'"
          class="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">T\xFCkenen</button>
      </div>
    </div>

    <!-- Loading -->
    @if (isLoading()) {
      <div class="space-y-3">
        @for (i of [1,2,3]; track i) {
          <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-5 animate-pulse">
            <div class="flex items-center gap-4">
              <div class="h-5 bg-gray-700 rounded w-40"></div>
              <div class="flex-1"></div>
              <div class="h-8 bg-gray-700 rounded w-20"></div>
              <div class="h-6 bg-gray-700 rounded w-24"></div>
            </div>
          </div>
        }
      </div>
    } @else if (filteredItems.length === 0) {
      <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-12 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <h3 class="text-xl font-semibold text-white mb-2">Envanter \xD6\u011Fesi Bulunamad\u0131</h3>
        <p class="text-gray-400 text-sm">Filtreye uygun \xFCr\xFCn yok.</p>
      </div>
    } @else {
      <!-- Inventory Table -->
      <div class="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-800">
                <th class="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">\xDCr\xFCn</th>
                <th class="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">SKU</th>
                <th class="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">Kategori</th>
                <th class="text-right text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">Birim Fiyat</th>
                <th class="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">Stok</th>
                <th class="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">Durum</th>
                <th class="text-right text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">\u0130\u015Flem</th>
              </tr>
            </thead>
            <tbody>
              @for (item of filteredItems; track item.productId) {
                <tr class="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                  <td class="py-4 px-5 text-sm font-semibold text-white">{{ item.productName }}</td>
                  <td class="py-4 px-5 text-sm text-gray-400 font-mono">{{ item.sku }}</td>
                  <td class="py-4 px-5 text-sm text-gray-400">{{ item.categoryName || '\u2014' }}</td>
                  <td class="py-4 px-5 text-sm text-right text-white">\${{ item.unitPrice | number:'1.2-2' }}</td>
                  <td class="py-4 px-5 text-center">
                    @if (editingId() === item.productId) {
                      <div class="flex items-center justify-center gap-2">
                        <input [(ngModel)]="editQuantity" type="number" min="0"
                          (ngModelChange)="editQuantity.set($event)"
                          class="w-20 bg-gray-800 border border-blue-500 rounded-lg py-1.5 px-2 text-white text-sm text-center focus:outline-none">
                      </div>
                    } @else {
                      <span class="text-sm font-semibold" 
                        [class]="item.stockStatus === 'OK' ? 'text-white' : item.stockStatus === 'LOW' ? 'text-amber-400' : 'text-red-400'">
                        {{ item.stockQuantity }}
                      </span>
                    }
                  </td>
                  <td class="py-4 px-5 text-center">
                    <span [class]="stockColors[item.stockStatus]" class="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg">
                      <span class="w-1.5 h-1.5 rounded-full" [class]="stockDots[item.stockStatus]"></span>
                      {{ stockLabels[item.stockStatus] }}
                    </span>
                  </td>
                  <td class="py-4 px-5 text-right">
                    @if (editingId() === item.productId) {
                      <div class="flex items-center justify-end gap-2">
                        <button (click)="cancelEdit()"
                          class="px-3 py-1.5 bg-gray-700 text-gray-300 text-xs rounded-lg hover:bg-gray-600 transition-colors">\u0130ptal</button>
                        <button (click)="saveStock(item.productId)" [disabled]="isSaving()"
                          class="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50">Kaydet</button>
                      </div>
                    } @else {
                      <button (click)="startEdit(item)"
                        class="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-blue-400" title="Stok G\xFCncelle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                        </svg>
                      </button>
                    }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        <div class="px-5 py-3 border-t border-gray-800 flex justify-between text-xs text-gray-500">
          <span>{{ filteredItems.length }} \xFCr\xFCn g\xF6steriliyor</span>
          <span>Toplam Stok De\u011Feri: \${{ summaryStats.totalValue | number:'1.2-2' }}</span>
        </div>
      </div>
    }
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Inventory, { className: "Inventory", filePath: "app/features/corporate/inventory/inventory.ts", lineNumber: 12 });
})();
export {
  Inventory
};
//# sourceMappingURL=chunk-3LMBQFOL.js.map
