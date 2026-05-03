import {
  AdminService
} from "./chunk-ZMDBUR24.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-MKAKFE2K.js";
import {
  toSignal
} from "./chunk-XHSYZCYO.js";
import {
  CommonModule,
  Component,
  Subject,
  catchError,
  inject,
  of,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OBD62CNA.js";
import "./chunk-H2SRQSE4.js";

// src/app/features/admin/categories/category-management.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.id;
function CategoryManagement_Conditional_15_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1.name);
  }
}
function CategoryManagement_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CategoryManagement_Conditional_15_For_1_Template, 2, 2, "option", 14, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.categories());
  }
}
function CategoryManagement_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
}
function CategoryManagement_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, CategoryManagement_Conditional_18_For_2_Template, 1, 0, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function CategoryManagement_Conditional_19_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 27);
    \u0275\u0275listener("input", function CategoryManagement_Conditional_19_For_5_Conditional_6_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editingName.set($event.target.value));
    })("keydown.enter", function CategoryManagement_Conditional_19_For_5_Conditional_6_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r3);
      const parent_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveEdit(parent_r4.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 28);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_19_For_5_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const parent_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveEdit(parent_r4.id));
    });
    \u0275\u0275text(2, "Kaydet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_19_For_5_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(4, "\u0130ptal");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r1.editingName());
  }
}
function CategoryManagement_Conditional_19_For_5_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parent_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", parent_r4.children.length, " alt kategori)");
  }
}
function CategoryManagement_Conditional_19_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, CategoryManagement_Conditional_19_For_5_Conditional_7_Conditional_2_Template, 2, 1, "span", 31);
  }
  if (rf & 2) {
    const parent_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(parent_r4.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(parent_r4.children.length > 0 ? 2 : -1);
  }
}
function CategoryManagement_Conditional_19_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 32);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_19_For_5_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const parent_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit(parent_r4));
    });
    \u0275\u0275text(2, "D\xFCzenle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 33);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_19_For_5_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const parent_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCategory(parent_r4.id));
    });
    \u0275\u0275text(4, "Sil");
    \u0275\u0275elementEnd()();
  }
}
function CategoryManagement_Conditional_19_For_5_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 27);
    \u0275\u0275listener("input", function CategoryManagement_Conditional_19_For_5_For_10_Conditional_4_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editingName.set($event.target.value));
    })("keydown.enter", function CategoryManagement_Conditional_19_For_5_For_10_Conditional_4_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r6);
      const child_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveEdit(child_r7.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 28);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_19_For_5_For_10_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const child_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveEdit(child_r7.id));
    });
    \u0275\u0275text(2, "Kaydet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_19_For_5_For_10_Conditional_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(4, "\u0130ptal");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", ctx_r1.editingName());
  }
}
function CategoryManagement_Conditional_19_For_5_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(child_r7.name);
  }
}
function CategoryManagement_Conditional_19_For_5_For_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 32);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_19_For_5_For_10_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const child_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEdit(child_r7));
    });
    \u0275\u0275text(2, "D\xFCzenle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 33);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_19_For_5_For_10_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const child_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteCategory(child_r7.id));
    });
    \u0275\u0275text(4, "Sil");
    \u0275\u0275elementEnd()();
  }
}
function CategoryManagement_Conditional_19_For_5_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CategoryManagement_Conditional_19_For_5_For_10_Conditional_4_Template, 5, 1)(5, CategoryManagement_Conditional_19_For_5_For_10_Conditional_5_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CategoryManagement_Conditional_19_For_5_For_10_Conditional_6_Template, 5, 0, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.editingId() === child_r7.id ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editingId() !== child_r7.id ? 6 : -1);
  }
}
function CategoryManagement_Conditional_19_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 20)(2, "div", 21)(3, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 23);
    \u0275\u0275element(5, "path", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, CategoryManagement_Conditional_19_For_5_Conditional_6_Template, 5, 1)(7, CategoryManagement_Conditional_19_For_5_Conditional_7_Template, 3, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CategoryManagement_Conditional_19_For_5_Conditional_8_Template, 5, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, CategoryManagement_Conditional_19_For_5_For_10_Template, 7, 2, "div", 26, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parent_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.editingId() === parent_r4.id ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editingId() !== parent_r4.id ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(parent_r4.children);
  }
}
function CategoryManagement_Conditional_19_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, " Hen\xFCz kategori eklenmemi\u015F. ");
    \u0275\u0275elementEnd();
  }
}
function CategoryManagement_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 16)(2, "h2", 17);
    \u0275\u0275text(3, "Kategori Hiyerar\u015Fisi");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, CategoryManagement_Conditional_19_For_5_Template, 11, 2, "div", 18, _forTrack0, false, CategoryManagement_Conditional_19_ForEmpty_6_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.categories());
  }
}
var CategoryManagement = class _CategoryManagement {
  adminService = inject(AdminService);
  newCategoryName = signal("", ...ngDevMode ? [{ debugName: "newCategoryName" }] : (
    /* istanbul ignore next */
    []
  ));
  newCategoryParentId = signal(void 0, ...ngDevMode ? [{ debugName: "newCategoryParentId" }] : (
    /* istanbul ignore next */
    []
  ));
  editingId = signal(null, ...ngDevMode ? [{ debugName: "editingId" }] : (
    /* istanbul ignore next */
    []
  ));
  editingName = signal("", ...ngDevMode ? [{ debugName: "editingName" }] : (
    /* istanbul ignore next */
    []
  ));
  actionInProgress = signal(false, ...ngDevMode ? [{ debugName: "actionInProgress" }] : (
    /* istanbul ignore next */
    []
  ));
  refresh$ = new Subject();
  categories = toSignal(this.refresh$.pipe(startWith(void 0), switchMap(() => this.adminService.getAllCategories().pipe(catchError(() => of(null))))), { initialValue: null });
  createCategory() {
    const name = this.newCategoryName().trim();
    if (!name)
      return;
    this.actionInProgress.set(true);
    this.adminService.createCategory(name, this.newCategoryParentId()).subscribe({
      next: () => {
        this.newCategoryName.set("");
        this.newCategoryParentId.set(void 0);
        this.actionInProgress.set(false);
        this.refresh$.next();
      },
      error: () => this.actionInProgress.set(false)
    });
  }
  startEdit(category) {
    this.editingId.set(category.id);
    this.editingName.set(category.name);
  }
  saveEdit(categoryId) {
    const name = this.editingName().trim();
    if (!name)
      return;
    this.actionInProgress.set(true);
    this.adminService.updateCategory(categoryId, name).subscribe({
      next: () => {
        this.editingId.set(null);
        this.actionInProgress.set(false);
        this.refresh$.next();
      },
      error: () => this.actionInProgress.set(false)
    });
  }
  cancelEdit() {
    this.editingId.set(null);
  }
  deleteCategory(categoryId) {
    this.actionInProgress.set(true);
    this.adminService.deleteCategory(categoryId).subscribe({
      next: () => {
        this.actionInProgress.set(false);
        this.refresh$.next();
      },
      error: () => this.actionInProgress.set(false)
    });
  }
  static \u0275fac = function CategoryManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryManagement, selectors: [["app-category-management"]], decls: 20, vars: 5, consts: [[1, "min-h-screen", "bg-gray-950", "text-white"], [1, "container", "mx-auto", "px-4", "py-8"], [1, "mb-8"], [1, "text-3xl", "font-bold", "tracking-tight"], [1, "text-gray-400", "mt-1"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-5", "mb-6"], [1, "text-sm", "font-semibold", "text-gray-300", "mb-3", "uppercase", "tracking-wider"], [1, "flex", "gap-3"], ["type", "text", "placeholder", "Kategori ad\u0131...", 1, "flex-1", "bg-gray-800", "border", "border-gray-700", "rounded-lg", "py-2.5", "px-4", "text-sm", "text-white", "placeholder-gray-500", "focus:border-blue-500", "focus:ring-2", "focus:ring-blue-500/20", "outline-none", "transition-all", 3, "input", "value"], [1, "bg-gray-800", "border", "border-gray-700", "rounded-lg", "py-2.5", "px-4", "text-sm", "text-white", "focus:border-blue-500", "outline-none", "transition-all", 3, "change"], ["value", ""], [1, "bg-blue-600", "hover:bg-blue-700", "disabled:opacity-50", "text-white", "px-5", "py-2.5", "rounded-lg", "text-sm", "font-medium", "transition-colors", 3, "click", "disabled"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-6", "animate-pulse", "space-y-4"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "overflow-hidden"], [3, "value"], [1, "h-10", "bg-gray-800", "rounded"], [1, "px-6", "py-4", "border-b", "border-gray-800"], [1, "text-sm", "font-semibold", "text-gray-300", "uppercase", "tracking-wider"], [1, "border-b", "border-gray-800/50"], [1, "px-6", "py-12", "text-center", "text-gray-500"], [1, "px-6", "py-3", "flex", "items-center", "justify-between", "hover:bg-gray-800/30", "transition-colors"], [1, "flex", "items-center", "gap-3"], [1, "h-8", "w-8", "rounded-lg", "bg-violet-500/10", "flex", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", "text-violet-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"], [1, "flex", "items-center", "gap-2"], [1, "pl-14", "pr-6", "py-2.5", "flex", "items-center", "justify-between", "hover:bg-gray-800/20", "transition-colors", "border-t", "border-gray-800/30"], ["type", "text", 1, "bg-gray-800", "border", "border-blue-500", "rounded", "px-3", "py-1", "text-sm", "text-white", "outline-none", 3, "input", "keydown.enter", "value"], [1, "text-xs", "text-green-400", "hover:text-green-300", 3, "click"], [1, "text-xs", "text-gray-500", "hover:text-gray-300", 3, "click"], [1, "font-medium", "text-white"], [1, "text-xs", "text-gray-500"], [1, "text-xs", "text-gray-500", "hover:text-blue-400", "transition-colors", 3, "click"], [1, "text-xs", "text-gray-500", "hover:text-red-400", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-3", "w-3", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "text-sm", "text-gray-300"]], template: function CategoryManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Kategori Y\xF6netimi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "\xDCr\xFCn taksonomisini d\xFCzenleyin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "h2", 6);
      \u0275\u0275text(9, "Yeni Kategori Ekle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "input", 8);
      \u0275\u0275listener("input", function CategoryManagement_Template_input_input_11_listener($event) {
        return ctx.newCategoryName.set($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "select", 9);
      \u0275\u0275listener("change", function CategoryManagement_Template_select_change_12_listener($event) {
        return ctx.newCategoryParentId.set($event.target.value ? +$event.target.value : void 0);
      });
      \u0275\u0275elementStart(13, "option", 10);
      \u0275\u0275text(14, "K\xF6k kategori");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, CategoryManagement_Conditional_15_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 11);
      \u0275\u0275listener("click", function CategoryManagement_Template_button_click_16_listener() {
        return ctx.createCategory();
      });
      \u0275\u0275text(17, " Ekle ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(18, CategoryManagement_Conditional_18_Template, 3, 1, "div", 12);
      \u0275\u0275conditionalCreate(19, CategoryManagement_Conditional_19_Template, 7, 1, "div", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("value", ctx.newCategoryName());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.categories() !== null ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.actionInProgress() || !ctx.newCategoryName().trim());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.categories() === null ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.categories() !== null ? 19 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryManagement, [{
    type: Component,
    args: [{ selector: "app-category-management", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="min-h-screen bg-gray-950 text-white">\n  <div class="container mx-auto px-4 py-8">\n\n    <div class="mb-8">\n      <h1 class="text-3xl font-bold tracking-tight">Kategori Y\xF6netimi</h1>\n      <p class="text-gray-400 mt-1">\xDCr\xFCn taksonomisini d\xFCzenleyin</p>\n    </div>\n\n    <!-- Yeni Kategori Ekleme -->\n    <div class="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6">\n      <h2 class="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Yeni Kategori Ekle</h2>\n      <div class="flex gap-3">\n        <input type="text" placeholder="Kategori ad\u0131..."\n               [value]="newCategoryName()"\n               (input)="newCategoryName.set($any($event.target).value)"\n               class="flex-1 bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-4 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all">\n        <select (change)="newCategoryParentId.set($any($event.target).value ? +$any($event.target).value : undefined)"\n                class="bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-4 text-sm text-white focus:border-blue-500 outline-none transition-all">\n          <option value="">K\xF6k kategori</option>\n          @if (categories() !== null) {\n            @for (cat of categories(); track cat.id) {\n              <option [value]="cat.id">{{ cat.name }}</option>\n            }\n          }\n        </select>\n        <button (click)="createCategory()"\n                [disabled]="actionInProgress() || !newCategoryName().trim()"\n                class="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">\n          Ekle\n        </button>\n      </div>\n    </div>\n\n    <!-- Skeleton -->\n    @if (categories() === null) {\n      <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 animate-pulse space-y-4">\n        @for (i of [1,2,3,4,5]; track i) {\n          <div class="h-10 bg-gray-800 rounded"></div>\n        }\n      </div>\n    }\n\n    <!-- Kategori A\u011Fac\u0131 -->\n    @if (categories() !== null) {\n      <div class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">\n        <div class="px-6 py-4 border-b border-gray-800">\n          <h2 class="text-sm font-semibold text-gray-300 uppercase tracking-wider">Kategori Hiyerar\u015Fisi</h2>\n        </div>\n\n        @for (parent of categories(); track parent.id) {\n          <div class="border-b border-gray-800/50">\n            <!-- Ana Kategori -->\n            <div class="px-6 py-3 flex items-center justify-between hover:bg-gray-800/30 transition-colors">\n              <div class="flex items-center gap-3">\n                <div class="h-8 w-8 rounded-lg bg-violet-500/10 flex items-center justify-center">\n                  <svg class="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>\n                  </svg>\n                </div>\n                @if (editingId() === parent.id) {\n                  <input type="text" [value]="editingName()" (input)="editingName.set($any($event.target).value)"\n                         (keydown.enter)="saveEdit(parent.id)"\n                         class="bg-gray-800 border border-blue-500 rounded px-3 py-1 text-sm text-white outline-none">\n                  <button (click)="saveEdit(parent.id)" class="text-xs text-green-400 hover:text-green-300">Kaydet</button>\n                  <button (click)="cancelEdit()" class="text-xs text-gray-500 hover:text-gray-300">\u0130ptal</button>\n                } @else {\n                  <span class="font-medium text-white">{{ parent.name }}</span>\n                  @if (parent.children.length > 0) {\n                    <span class="text-xs text-gray-500">({{ parent.children.length }} alt kategori)</span>\n                  }\n                }\n              </div>\n              @if (editingId() !== parent.id) {\n                <div class="flex items-center gap-2">\n                  <button (click)="startEdit(parent)" class="text-xs text-gray-500 hover:text-blue-400 transition-colors">D\xFCzenle</button>\n                  <button (click)="deleteCategory(parent.id)" class="text-xs text-gray-500 hover:text-red-400 transition-colors">Sil</button>\n                </div>\n              }\n            </div>\n\n            <!-- Alt Kategoriler -->\n            @for (child of parent.children; track child.id) {\n              <div class="pl-14 pr-6 py-2.5 flex items-center justify-between hover:bg-gray-800/20 transition-colors border-t border-gray-800/30">\n                <div class="flex items-center gap-2">\n                  <svg class="h-3 w-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>\n                  </svg>\n                  @if (editingId() === child.id) {\n                    <input type="text" [value]="editingName()" (input)="editingName.set($any($event.target).value)"\n                           (keydown.enter)="saveEdit(child.id)"\n                           class="bg-gray-800 border border-blue-500 rounded px-3 py-1 text-sm text-white outline-none">\n                    <button (click)="saveEdit(child.id)" class="text-xs text-green-400 hover:text-green-300">Kaydet</button>\n                    <button (click)="cancelEdit()" class="text-xs text-gray-500 hover:text-gray-300">\u0130ptal</button>\n                  } @else {\n                    <span class="text-sm text-gray-300">{{ child.name }}</span>\n                  }\n                </div>\n                @if (editingId() !== child.id) {\n                  <div class="flex items-center gap-2">\n                    <button (click)="startEdit(child)" class="text-xs text-gray-500 hover:text-blue-400 transition-colors">D\xFCzenle</button>\n                    <button (click)="deleteCategory(child.id)" class="text-xs text-gray-500 hover:text-red-400 transition-colors">Sil</button>\n                  </div>\n                }\n              </div>\n            }\n          </div>\n        } @empty {\n          <div class="px-6 py-12 text-center text-gray-500">\n            Hen\xFCz kategori eklenmemi\u015F.\n          </div>\n        }\n      </div>\n    }\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryManagement, { className: "CategoryManagement", filePath: "app/features/admin/categories/category-management.ts", lineNumber: 14 });
})();
export {
  CategoryManagement
};
//# sourceMappingURL=chunk-WYXMK2YB.js.map
