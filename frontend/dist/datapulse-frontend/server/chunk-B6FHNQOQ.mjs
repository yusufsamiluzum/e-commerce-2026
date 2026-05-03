import './polyfills.server.mjs';
import {
  CorporateService
} from "./chunk-DZWYPOOC.mjs";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ZZHQPMHV.mjs";
import {
  RouterModule
} from "./chunk-6SS2UPAN.mjs";
import "./chunk-P2EBPDNO.mjs";
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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-K2NYDLGG.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/corporate/catalog/catalog-list/catalog-list.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function CatalogList_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " \u0130ptal ");
  }
}
function CatalogList_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Yeni \xDCr\xFCn Ekle ");
  }
}
function CatalogList_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError());
  }
}
function CatalogList_Conditional_11_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", cat_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r3.name);
  }
}
function CatalogList_Conditional_11_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36);
    \u0275\u0275element(1, "circle", 37)(2, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Kaydediliyor... ");
  }
}
function CatalogList_Conditional_11_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Kaydet ");
  }
}
function CatalogList_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "h2", 18);
    \u0275\u0275text(2, "Yeni \xDCr\xFCn");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CatalogList_Conditional_11_Conditional_3_Template, 2, 1, "div", 19);
    \u0275\u0275elementStart(4, "div", 20)(5, "div")(6, "label", 21);
    \u0275\u0275text(7, "SKU *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogList_Conditional_11_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProduct.sku, $event) || (ctx_r1.newProduct.sku = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 21);
    \u0275\u0275text(11, "\xDCr\xFCn Ad\u0131 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogList_Conditional_11_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProduct.name, $event) || (ctx_r1.newProduct.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label", 21);
    \u0275\u0275text(15, "Kategori");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogList_Conditional_11_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProduct.categoryId, $event) || (ctx_r1.newProduct.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 25);
    \u0275\u0275text(18, "Se\xE7iniz");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, CatalogList_Conditional_11_For_20_Template, 2, 2, "option", 25, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "label", 21);
    \u0275\u0275text(23, "Birim Fiyat ($) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogList_Conditional_11_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProduct.unitPrice, $event) || (ctx_r1.newProduct.unitPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "label", 21);
    \u0275\u0275text(27, "Orijinal Fiyat ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogList_Conditional_11_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProduct.originalPrice, $event) || (ctx_r1.newProduct.originalPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "label", 21);
    \u0275\u0275text(31, "Stok Miktar\u0131 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogList_Conditional_11_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProduct.stockQuantity, $event) || (ctx_r1.newProduct.stockQuantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 29)(34, "label", 21);
    \u0275\u0275text(35, "A\xE7\u0131klama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogList_Conditional_11_Template_textarea_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProduct.description, $event) || (ctx_r1.newProduct.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 31)(38, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogList_Conditional_11_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProduct.isFeatured, $event) || (ctx_r1.newProduct.isFeatured = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label", 33);
    \u0275\u0275text(40, "\xD6ne \xC7\u0131kan \xDCr\xFCn");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 34)(42, "button", 35);
    \u0275\u0275listener("click", function CatalogList_Conditional_11_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitNewProduct());
    });
    \u0275\u0275conditionalCreate(43, CatalogList_Conditional_11_Conditional_43_Template, 4, 0)(44, CatalogList_Conditional_11_Conditional_44_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.formError() !== null ? 3 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProduct.sku);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProduct.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProduct.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProduct.unitPrice);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProduct.originalPrice);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProduct.stockQuantity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProduct.description);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProduct.isFeatured);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSaving() ? 43 : 44);
  }
}
function CatalogList_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275element(2, "div", 41);
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275element(4, "div", 42)(5, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 44);
    \u0275\u0275elementEnd()();
  }
}
function CatalogList_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, CatalogList_Conditional_22_For_2_Template, 7, 0, "div", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function CatalogList_Conditional_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(' "', ctx_r1.searchTerm(), '" aramas\u0131yla e\u015Fle\u015Fen \xFCr\xFCn yok. ');
  }
}
function CatalogList_Conditional_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, ' Hen\xFCz \xFCr\xFCn eklenmemi\u015F. "Yeni \xDCr\xFCn Ekle" butonuyla ba\u015Flay\u0131n. ');
  }
}
function CatalogList_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 47);
    \u0275\u0275text(4, "\xDCr\xFCn Bulunamad\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 48);
    \u0275\u0275conditionalCreate(6, CatalogList_Conditional_23_Conditional_6_Template, 1, 1)(7, CatalogList_Conditional_23_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.searchTerm() ? 6 : 7);
  }
}
function CatalogList_Conditional_24_For_21_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 61);
  }
  if (rf & 2) {
    const product_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", product_r5.imageUrl, \u0275\u0275sanitizeUrl)("alt", product_r5.name);
  }
}
function CatalogList_Conditional_24_For_21_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 62);
    \u0275\u0275element(1, "path", 81);
    \u0275\u0275elementEnd();
  }
}
function CatalogList_Conditional_24_For_21_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1, "\xD6NE \xC7IKAN");
    \u0275\u0275elementEnd();
  }
}
function CatalogList_Conditional_24_For_21_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u2B50 ", \u0275\u0275pipeBind2(2, 2, product_r5.averageRating, "1.1-1"), " (", product_r5.reviewCount, ")");
  }
}
function CatalogList_Conditional_24_For_21_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(2, 1, product_r5.originalPrice, "1.2-2"));
  }
}
function CatalogList_Conditional_24_For_21_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275element(1, "span", 82);
    \u0275\u0275text(2, " Aktif ");
    \u0275\u0275elementEnd();
  }
}
function CatalogList_Conditional_24_For_21_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275element(1, "span", 83);
    \u0275\u0275text(2, " Pasif ");
    \u0275\u0275elementEnd();
  }
}
function CatalogList_Conditional_24_For_21_Conditional_0_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 78);
    \u0275\u0275element(1, "path", 84);
    \u0275\u0275elementEnd();
  }
}
function CatalogList_Conditional_24_For_21_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 78);
    \u0275\u0275element(1, "path", 85);
    \u0275\u0275elementEnd();
  }
}
function CatalogList_Conditional_24_For_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 56)(1, "td", 58)(2, "div", 59)(3, "div", 60);
    \u0275\u0275conditionalCreate(4, CatalogList_Conditional_24_For_21_Conditional_0_Conditional_4_Template, 1, 2, "img", 61)(5, CatalogList_Conditional_24_For_21_Conditional_0_Conditional_5_Template, 2, 0, ":svg:svg", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "p", 63);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 64);
    \u0275\u0275conditionalCreate(10, CatalogList_Conditional_24_For_21_Conditional_0_Conditional_10_Template, 2, 0, "span", 65);
    \u0275\u0275conditionalCreate(11, CatalogList_Conditional_24_For_21_Conditional_0_Conditional_11_Template, 3, 5, "span", 66);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td", 67);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 68);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 69);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275conditionalCreate(19, CatalogList_Conditional_24_For_21_Conditional_0_Conditional_19_Template, 3, 4, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 71)(21, "span", 72);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 73);
    \u0275\u0275conditionalCreate(24, CatalogList_Conditional_24_For_21_Conditional_0_Conditional_24_Template, 3, 0, "span", 74)(25, CatalogList_Conditional_24_For_21_Conditional_0_Conditional_25_Template, 3, 0, "span", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 71)(27, "div", 76)(28, "button", 77);
    \u0275\u0275listener("click", function CatalogList_Conditional_24_For_21_Conditional_0_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const product_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit(product_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 78);
    \u0275\u0275element(30, "path", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "button", 80);
    \u0275\u0275listener("click", function CatalogList_Conditional_24_For_21_Conditional_0_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const product_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleActive(product_r5));
    });
    \u0275\u0275conditionalCreate(32, CatalogList_Conditional_24_For_21_Conditional_0_Conditional_32_Template, 2, 0, ":svg:svg", 78)(33, CatalogList_Conditional_24_For_21_Conditional_0_Conditional_33_Template, 2, 0, ":svg:svg", 78);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275conditional(product_r5.imageUrl ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(product_r5.isFeatured ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(product_r5.averageRating > 0 ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.categoryName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" $", \u0275\u0275pipeBind2(18, 16, product_r5.unitPrice, "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(product_r5.originalPrice && product_r5.originalPrice > product_r5.unitPrice ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(product_r5.stockQuantity < 10 ? "text-amber-400 font-semibold" : "text-gray-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r5.stockQuantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(product_r5.isActive ? 24 : 25);
    \u0275\u0275advance(7);
    \u0275\u0275classMap(product_r5.isActive ? "hover:text-red-400" : "hover:text-emerald-400");
    \u0275\u0275property("title", product_r5.isActive ? "Pasifle\u015Ftir" : "Aktifle\u015Ftir");
    \u0275\u0275advance();
    \u0275\u0275conditional(product_r5.isActive ? 32 : 33);
  }
}
function CatalogList_Conditional_24_For_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 57)(1, "td", 86)(2, "div", 87)(3, "div")(4, "label", 88);
    \u0275\u0275text(5, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogList_Conditional_24_For_21_Conditional_1_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editProduct.sku, $event) || (ctx_r1.editProduct.sku = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "label", 88);
    \u0275\u0275text(9, "\xDCr\xFCn Ad\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogList_Conditional_24_For_21_Conditional_1_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editProduct.name, $event) || (ctx_r1.editProduct.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 88);
    \u0275\u0275text(13, "Fiyat ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogList_Conditional_24_For_21_Conditional_1_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editProduct.unitPrice, $event) || (ctx_r1.editProduct.unitPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 88);
    \u0275\u0275text(17, "Stok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogList_Conditional_24_For_21_Conditional_1_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editProduct.stockQuantity, $event) || (ctx_r1.editProduct.stockQuantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 92)(20, "button", 93);
    \u0275\u0275listener("click", function CatalogList_Conditional_24_For_21_Conditional_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(21, "\u0130ptal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 94);
    \u0275\u0275listener("click", function CatalogList_Conditional_24_For_21_Conditional_1_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r6);
      const product_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitEdit(product_r5.id));
    });
    \u0275\u0275text(23, "Kaydet");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editProduct.sku);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editProduct.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editProduct.unitPrice);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editProduct.stockQuantity);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isSaving());
  }
}
function CatalogList_Conditional_24_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CatalogList_Conditional_24_For_21_Conditional_0_Template, 34, 19, "tr", 56)(1, CatalogList_Conditional_24_For_21_Conditional_1_Template, 24, 5, "tr", 57);
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.editingId() !== product_r5.id ? 0 : 1);
  }
}
function CatalogList_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 49)(2, "table", 50)(3, "thead")(4, "tr", 51)(5, "th", 52);
    \u0275\u0275text(6, "\xDCr\xFCn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 52);
    \u0275\u0275text(8, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 52);
    \u0275\u0275text(10, "Kategori");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 53);
    \u0275\u0275text(12, "Fiyat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 53);
    \u0275\u0275text(14, "Stok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 54);
    \u0275\u0275text(16, "Durum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 53);
    \u0275\u0275text(18, "\u0130\u015Flem");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, CatalogList_Conditional_24_For_21_Template, 2, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 55);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.filteredProducts);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Toplam ", ctx_r1.filteredProducts.length, " \xFCr\xFCn g\xF6steriliyor ");
  }
}
var CatalogList = class _CatalogList {
  corporateService = inject(CorporateService);
  products = signal([], ...ngDevMode ? [{ debugName: "products" }] : (
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
  filterStatus = signal("all", ...ngDevMode ? [{ debugName: "filterStatus" }] : (
    /* istanbul ignore next */
    []
  ));
  showAddForm = signal(false, ...ngDevMode ? [{ debugName: "showAddForm" }] : (
    /* istanbul ignore next */
    []
  ));
  // Add form
  newProduct = {
    sku: "",
    name: "",
    description: "",
    unitPrice: 0,
    originalPrice: 0,
    stockQuantity: 0,
    categoryId: void 0,
    isFeatured: false
  };
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : (
    /* istanbul ignore next */
    []
  ));
  isSaving = signal(false, ...ngDevMode ? [{ debugName: "isSaving" }] : (
    /* istanbul ignore next */
    []
  ));
  formError = signal(null, ...ngDevMode ? [{ debugName: "formError" }] : (
    /* istanbul ignore next */
    []
  ));
  // Edit
  editingId = signal(null, ...ngDevMode ? [{ debugName: "editingId" }] : (
    /* istanbul ignore next */
    []
  ));
  editProduct = {
    sku: "",
    name: "",
    description: "",
    unitPrice: 0,
    originalPrice: 0,
    stockQuantity: 0,
    categoryId: void 0,
    isFeatured: false
  };
  constructor() {
    this.loadProducts();
    this.loadCategories();
  }
  loadProducts() {
    this.isLoading.set(true);
    this.corporateService.getMyProducts().subscribe({
      next: (products) => {
        this.products.set(products);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  loadCategories() {
    this.corporateService.getCategories().subscribe({
      next: (cats) => this.categories.set(cats.map((c) => ({ id: c.id, name: c.name })))
    });
  }
  get filteredProducts() {
    let list = this.products();
    const term = this.searchTerm().toLowerCase();
    if (term) {
      list = list.filter((p) => p.name.toLowerCase().includes(term) || p.sku.toLowerCase().includes(term));
    }
    const status = this.filterStatus();
    if (status === "active")
      list = list.filter((p) => p.isActive);
    if (status === "inactive")
      list = list.filter((p) => !p.isActive);
    return list;
  }
  toggleAddForm() {
    this.showAddForm.update((v) => !v);
    this.formError.set(null);
    if (!this.showAddForm()) {
      this.resetNewProduct();
    }
  }
  resetNewProduct() {
    this.newProduct = {
      sku: "",
      name: "",
      description: "",
      unitPrice: 0,
      originalPrice: 0,
      stockQuantity: 0,
      categoryId: void 0,
      isFeatured: false
    };
  }
  submitNewProduct() {
    if (!this.newProduct.name || !this.newProduct.sku) {
      this.formError.set("SKU ve \xFCr\xFCn ad\u0131 zorunludur.");
      return;
    }
    this.isSaving.set(true);
    this.formError.set(null);
    this.corporateService.createProduct(this.newProduct).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.showAddForm.set(false);
        this.resetNewProduct();
        this.loadProducts();
      },
      error: (err) => {
        this.isSaving.set(false);
        this.formError.set(err.error?.message || "\xDCr\xFCn olu\u015Fturulurken bir hata olu\u015Ftu.");
      }
    });
  }
  startEdit(product) {
    this.editingId.set(product.id);
    this.editProduct = {
      sku: product.sku,
      name: product.name,
      description: product.description || "",
      unitPrice: product.unitPrice,
      originalPrice: product.originalPrice || 0,
      stockQuantity: product.stockQuantity,
      categoryId: product.categoryId || void 0,
      isFeatured: product.isFeatured
    };
  }
  cancelEdit() {
    this.editingId.set(null);
  }
  submitEdit(productId) {
    this.isSaving.set(true);
    this.corporateService.updateProduct(productId, this.editProduct).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.editingId.set(null);
        this.loadProducts();
      },
      error: () => this.isSaving.set(false)
    });
  }
  toggleActive(product) {
    if (product.isActive) {
      this.corporateService.deactivateProduct(product.id).subscribe({
        next: () => this.loadProducts()
      });
    } else {
      this.corporateService.reactivateProduct(product.id).subscribe({
        next: () => this.loadProducts()
      });
    }
  }
  static \u0275fac = function CatalogList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogList, selectors: [["app-catalog-list"]], decls: 25, vars: 10, consts: [[1, "min-h-screen", "bg-gray-950"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4", "mb-8"], [1, "text-3xl", "font-bold", "text-white"], [1, "text-gray-400", "text-sm", "mt-1"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-blue-600", "hover:bg-blue-700", "text-white", "font-medium", "rounded-xl", "transition-colors", "text-sm", 3, "click"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-6", "mb-8", "animate-in"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "mb-6"], [1, "flex-1"], ["type", "text", "placeholder", "\xDCr\xFCn ad\u0131 veya SKU ile ara...", 1, "w-full", "bg-gray-900/80", "border", "border-gray-800", "rounded-xl", "py-2.5", "px-4", "text-white", "text-sm", "focus:border-blue-500", "focus:ring-1", "focus:ring-blue-500/20", "outline-none", "transition-all", "placeholder-gray-500", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2"], [1, "px-4", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "grid", "gap-4"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-12", "text-center"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "overflow-hidden"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "text-lg", "font-semibold", "text-white", "mb-5"], [1, "mb-4", "p-3", "bg-red-500/10", "border", "border-red-500/30", "rounded-xl", "text-red-300", "text-sm"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-4"], [1, "block", "text-xs", "font-semibold", "text-gray-400", "mb-1.5"], ["type", "text", "placeholder", "\xF6r: SKU-001", 1, "w-full", "bg-gray-800/50", "border", "border-gray-700", "rounded-xl", "py-2.5", "px-3.5", "text-white", "text-sm", "focus:border-blue-500", "focus:ring-1", "focus:ring-blue-500/20", "outline-none", "transition-all", "placeholder-gray-500", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\xF6r: Kablosuz Kulakl\u0131k", 1, "w-full", "bg-gray-800/50", "border", "border-gray-700", "rounded-xl", "py-2.5", "px-3.5", "text-white", "text-sm", "focus:border-blue-500", "focus:ring-1", "focus:ring-blue-500/20", "outline-none", "transition-all", "placeholder-gray-500", 3, "ngModelChange", "ngModel"], [1, "w-full", "bg-gray-800/50", "border", "border-gray-700", "rounded-xl", "py-2.5", "px-3.5", "text-white", "text-sm", "focus:border-blue-500", "outline-none", "transition-all", "appearance-none", 3, "ngModelChange", "ngModel"], [1, "bg-gray-800", 3, "ngValue"], ["type", "number", "step", "0.01", "min", "0.01", 1, "w-full", "bg-gray-800/50", "border", "border-gray-700", "rounded-xl", "py-2.5", "px-3.5", "text-white", "text-sm", "focus:border-blue-500", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.01", "min", "0", 1, "w-full", "bg-gray-800/50", "border", "border-gray-700", "rounded-xl", "py-2.5", "px-3.5", "text-white", "text-sm", "focus:border-blue-500", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "w-full", "bg-gray-800/50", "border", "border-gray-700", "rounded-xl", "py-2.5", "px-3.5", "text-white", "text-sm", "focus:border-blue-500", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], [1, "md:col-span-2", "lg:col-span-3"], ["rows", "2", "placeholder", "\xDCr\xFCn a\xE7\u0131klamas\u0131...", 1, "w-full", "bg-gray-800/50", "border", "border-gray-700", "rounded-xl", "py-2.5", "px-3.5", "text-white", "text-sm", "focus:border-blue-500", "outline-none", "transition-all", "resize-none", "placeholder-gray-500", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-2"], ["type", "checkbox", "id", "isFeaturedNew", 1, "h-4", "w-4", "rounded", "bg-gray-800", "border-gray-600", "text-blue-600", "focus:ring-blue-500", 3, "ngModelChange", "ngModel"], ["for", "isFeaturedNew", 1, "text-sm", "text-gray-300"], [1, "flex", "justify-end", "mt-5"], [1, "px-6", "py-2.5", "bg-emerald-600", "hover:bg-emerald-700", "text-white", "font-medium", "rounded-xl", "transition-colors", "text-sm", "disabled:opacity-50", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-5", "animate-pulse"], [1, "flex", "items-center", "gap-4"], [1, "h-16", "w-16", "bg-gray-700", "rounded-xl"], [1, "h-5", "bg-gray-700", "rounded", "w-48", "mb-2"], [1, "h-3", "bg-gray-800", "rounded", "w-32"], [1, "h-8", "bg-gray-700", "rounded", "w-20"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-16", "w-16", "text-gray-600", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "text-xl", "font-semibold", "text-white", "mb-2"], [1, "text-gray-400", "text-sm"], [1, "overflow-x-auto"], [1, "w-full"], [1, "border-b", "border-gray-800"], [1, "text-left", "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "py-4", "px-5"], [1, "text-right", "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "py-4", "px-5"], [1, "text-center", "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "py-4", "px-5"], [1, "px-5", "py-3", "border-t", "border-gray-800", "text-xs", "text-gray-500"], [1, "border-b", "border-gray-800/50", "hover:bg-gray-800/30", "transition-colors"], [1, "border-b", "border-blue-800/30", "bg-blue-900/10"], [1, "py-4", "px-5"], [1, "flex", "items-center", "gap-3"], [1, "h-12", "w-12", "rounded-xl", "bg-gray-800", "flex", "items-center", "justify-center", "overflow-hidden", "flex-shrink-0"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-gray-600"], [1, "text-sm", "font-semibold", "text-white"], [1, "flex", "items-center", "gap-2", "mt-0.5"], [1, "text-[10px]", "bg-yellow-500/20", "text-yellow-400", "px-1.5", "py-0.5", "rounded", "font-medium"], [1, "text-[11px]", "text-gray-500"], [1, "py-4", "px-5", "text-sm", "text-gray-400", "font-mono"], [1, "py-4", "px-5", "text-sm", "text-gray-400"], [1, "py-4", "px-5", "text-sm", "text-right", "font-semibold", "text-white"], [1, "block", "text-xs", "text-gray-500", "line-through"], [1, "py-4", "px-5", "text-right"], [1, "text-sm"], [1, "py-4", "px-5", "text-center"], [1, "inline-flex", "items-center", "gap-1", "text-xs", "font-medium", "text-emerald-400", "bg-emerald-500/10", "px-2.5", "py-1", "rounded-lg"], [1, "inline-flex", "items-center", "gap-1", "text-xs", "font-medium", "text-red-400", "bg-red-500/10", "px-2.5", "py-1", "rounded-lg"], [1, "flex", "items-center", "justify-end", "gap-2"], ["title", "D\xFCzenle", 1, "p-2", "hover:bg-gray-700", "rounded-lg", "transition-colors", "text-gray-400", "hover:text-blue-400", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "p-2", "hover:bg-gray-700", "rounded-lg", "transition-colors", "text-gray-400", 3, "click", "title"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-emerald-400"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-red-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], ["colspan", "7", 1, "py-4", "px-5"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "lg:grid-cols-4", "gap-3"], [1, "block", "text-xs", "text-gray-400", "mb-1"], ["type", "text", 1, "w-full", "bg-gray-800/50", "border", "border-gray-700", "rounded-lg", "py-2", "px-3", "text-white", "text-sm", "focus:border-blue-500", "outline-none", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.01", 1, "w-full", "bg-gray-800/50", "border", "border-gray-700", "rounded-lg", "py-2", "px-3", "text-white", "text-sm", "focus:border-blue-500", "outline-none", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "w-full", "bg-gray-800/50", "border", "border-gray-700", "rounded-lg", "py-2", "px-3", "text-white", "text-sm", "focus:border-blue-500", "outline-none", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-2", "mt-3"], [1, "px-4", "py-2", "bg-gray-700", "hover:bg-gray-600", "text-gray-300", "text-sm", "rounded-lg", "transition-colors", 3, "click"], [1, "px-4", "py-2", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "rounded-lg", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"]], template: function CatalogList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "\xDCr\xFCn Katalo\u011Fu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Ma\u011Fazan\u0131zdaki \xFCr\xFCnleri y\xF6netin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function CatalogList_Template_button_click_8_listener() {
        return ctx.toggleAddForm();
      });
      \u0275\u0275conditionalCreate(9, CatalogList_Conditional_9_Template, 3, 0)(10, CatalogList_Conditional_10_Template, 3, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, CatalogList_Conditional_11_Template, 45, 12, "div", 6);
      \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function CatalogList_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CatalogList_Template_input_ngModelChange_14_listener($event) {
        return ctx.searchTerm.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
      \u0275\u0275listener("click", function CatalogList_Template_button_click_16_listener() {
        return ctx.filterStatus.set("all");
      });
      \u0275\u0275text(17, "T\xFCm\xFC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 11);
      \u0275\u0275listener("click", function CatalogList_Template_button_click_18_listener() {
        return ctx.filterStatus.set("active");
      });
      \u0275\u0275text(19, "Aktif");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 11);
      \u0275\u0275listener("click", function CatalogList_Template_button_click_20_listener() {
        return ctx.filterStatus.set("inactive");
      });
      \u0275\u0275text(21, "Pasif");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(22, CatalogList_Conditional_22_Template, 3, 1, "div", 12)(23, CatalogList_Conditional_23_Template, 8, 1, "div", 13)(24, CatalogList_Conditional_24_Template, 24, 1, "div", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.showAddForm() ? 9 : 10);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showAddForm() ? 11 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.filterStatus() === "all" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.filterStatus() === "active" ? "bg-emerald-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.filterStatus() === "inactive" ? "bg-red-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 22 : ctx.filteredProducts.length === 0 ? 23 : 24);
    }
  }, dependencies: [CommonModule, RouterModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CatalogList, [{
    type: Component,
    args: [{ selector: "app-catalog-list", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<div class="min-h-screen bg-gray-950">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 class="text-3xl font-bold text-white">\xDCr\xFCn Katalo\u011Fu</h1>
        <p class="text-gray-400 text-sm mt-1">Ma\u011Fazan\u0131zdaki \xFCr\xFCnleri y\xF6netin</p>
      </div>
      <button (click)="toggleAddForm()"
        class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors text-sm">
        @if (showAddForm()) {
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          \u0130ptal
        } @else {
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          Yeni \xDCr\xFCn Ekle
        }
      </button>
    </div>

    <!-- Add Product Form (Expandable) -->
    @if (showAddForm()) {
      <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 mb-8 animate-in">
        <h2 class="text-lg font-semibold text-white mb-5">Yeni \xDCr\xFCn</h2>
        
        @if (formError() !== null) {
          <div class="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300 text-sm">{{ formError() }}</div>
        }

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-semibold text-gray-400 mb-1.5">SKU *</label>
            <input [(ngModel)]="newProduct.sku" type="text" placeholder="\xF6r: SKU-001"
              class="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-2.5 px-3.5 text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all placeholder-gray-500">
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-400 mb-1.5">\xDCr\xFCn Ad\u0131 *</label>
            <input [(ngModel)]="newProduct.name" type="text" placeholder="\xF6r: Kablosuz Kulakl\u0131k"
              class="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-2.5 px-3.5 text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all placeholder-gray-500">
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-400 mb-1.5">Kategori</label>
            <select [(ngModel)]="newProduct.categoryId"
              class="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-2.5 px-3.5 text-white text-sm focus:border-blue-500 outline-none transition-all appearance-none">
              <option [ngValue]="undefined" class="bg-gray-800">Se\xE7iniz</option>
              @for (cat of categories(); track cat.id) {
                <option [ngValue]="cat.id" class="bg-gray-800">{{ cat.name }}</option>
              }
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-400 mb-1.5">Birim Fiyat ($) *</label>
            <input [(ngModel)]="newProduct.unitPrice" type="number" step="0.01" min="0.01"
              class="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-2.5 px-3.5 text-white text-sm focus:border-blue-500 outline-none transition-all">
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-400 mb-1.5">Orijinal Fiyat ($)</label>
            <input [(ngModel)]="newProduct.originalPrice" type="number" step="0.01" min="0"
              class="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-2.5 px-3.5 text-white text-sm focus:border-blue-500 outline-none transition-all">
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-400 mb-1.5">Stok Miktar\u0131 *</label>
            <input [(ngModel)]="newProduct.stockQuantity" type="number" min="0"
              class="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-2.5 px-3.5 text-white text-sm focus:border-blue-500 outline-none transition-all">
          </div>
          <div class="md:col-span-2 lg:col-span-3">
            <label class="block text-xs font-semibold text-gray-400 mb-1.5">A\xE7\u0131klama</label>
            <textarea [(ngModel)]="newProduct.description" rows="2" placeholder="\xDCr\xFCn a\xE7\u0131klamas\u0131..."
              class="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-2.5 px-3.5 text-white text-sm focus:border-blue-500 outline-none transition-all resize-none placeholder-gray-500"></textarea>
          </div>
          <div class="flex items-center gap-2">
            <input [(ngModel)]="newProduct.isFeatured" type="checkbox" id="isFeaturedNew"
              class="h-4 w-4 rounded bg-gray-800 border-gray-600 text-blue-600 focus:ring-blue-500">
            <label for="isFeaturedNew" class="text-sm text-gray-300">\xD6ne \xC7\u0131kan \xDCr\xFCn</label>
          </div>
        </div>

        <div class="flex justify-end mt-5">
          <button (click)="submitNewProduct()" [disabled]="isSaving()"
            class="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors text-sm disabled:opacity-50 flex items-center gap-2">
            @if (isSaving()) {
              <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
              Kaydediliyor...
            } @else {
              Kaydet
            }
          </button>
        </div>
      </div>
    }

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row gap-4 mb-6">
      <div class="flex-1">
        <input [(ngModel)]="searchTerm" type="text" placeholder="\xDCr\xFCn ad\u0131 veya SKU ile ara..."
          (ngModelChange)="searchTerm.set($event)"
          class="w-full bg-gray-900/80 border border-gray-800 rounded-xl py-2.5 px-4 text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all placeholder-gray-500">
      </div>
      <div class="flex gap-2">
        <button (click)="filterStatus.set('all')"
          [class]="filterStatus() === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'"
          class="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">T\xFCm\xFC</button>
        <button (click)="filterStatus.set('active')"
          [class]="filterStatus() === 'active' ? 'bg-emerald-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'"
          class="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">Aktif</button>
        <button (click)="filterStatus.set('inactive')"
          [class]="filterStatus() === 'inactive' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'"
          class="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">Pasif</button>
      </div>
    </div>

    <!-- Loading -->
    @if (isLoading()) {
      <div class="grid gap-4">
        @for (i of [1,2,3]; track i) {
          <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-5 animate-pulse">
            <div class="flex items-center gap-4">
              <div class="h-16 w-16 bg-gray-700 rounded-xl"></div>
              <div class="flex-1">
                <div class="h-5 bg-gray-700 rounded w-48 mb-2"></div>
                <div class="h-3 bg-gray-800 rounded w-32"></div>
              </div>
              <div class="h-8 bg-gray-700 rounded w-20"></div>
            </div>
          </div>
        }
      </div>
    } @else if (filteredProducts.length === 0) {
      <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-12 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <h3 class="text-xl font-semibold text-white mb-2">\xDCr\xFCn Bulunamad\u0131</h3>
        <p class="text-gray-400 text-sm">
          @if (searchTerm()) {
            "{{ searchTerm() }}" aramas\u0131yla e\u015Fle\u015Fen \xFCr\xFCn yok.
          } @else {
            Hen\xFCz \xFCr\xFCn eklenmemi\u015F. "Yeni \xDCr\xFCn Ekle" butonuyla ba\u015Flay\u0131n.
          }
        </p>
      </div>
    } @else {
      <!-- Product Table -->
      <div class="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-800">
                <th class="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">\xDCr\xFCn</th>
                <th class="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">SKU</th>
                <th class="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">Kategori</th>
                <th class="text-right text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">Fiyat</th>
                <th class="text-right text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">Stok</th>
                <th class="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">Durum</th>
                <th class="text-right text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-5">\u0130\u015Flem</th>
              </tr>
            </thead>
            <tbody>
              @for (product of filteredProducts; track product.id) {
                <!-- Normal View Row -->
                @if (editingId() !== product.id) {
                  <tr class="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                    <td class="py-4 px-5">
                      <div class="flex items-center gap-3">
                        <div class="h-12 w-12 rounded-xl bg-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                          @if (product.imageUrl) {
                            <img [src]="product.imageUrl" [alt]="product.name" class="h-full w-full object-cover">
                          } @else {
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                          }
                        </div>
                        <div>
                          <p class="text-sm font-semibold text-white">{{ product.name }}</p>
                          <div class="flex items-center gap-2 mt-0.5">
                            @if (product.isFeatured) {
                              <span class="text-[10px] bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded font-medium">\xD6NE \xC7IKAN</span>
                            }
                            @if (product.averageRating > 0) {
                              <span class="text-[11px] text-gray-500">\u2B50 {{ product.averageRating | number:'1.1-1' }} ({{ product.reviewCount }})</span>
                            }
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="py-4 px-5 text-sm text-gray-400 font-mono">{{ product.sku }}</td>
                    <td class="py-4 px-5 text-sm text-gray-400">{{ product.categoryName || '\u2014' }}</td>
                    <td class="py-4 px-5 text-sm text-right font-semibold text-white">
                      \${{ product.unitPrice | number:'1.2-2' }}
                      @if (product.originalPrice && product.originalPrice > product.unitPrice) {
                        <span class="block text-xs text-gray-500 line-through">\${{ product.originalPrice | number:'1.2-2' }}</span>
                      }
                    </td>
                    <td class="py-4 px-5 text-right">
                      <span [class]="product.stockQuantity < 10 ? 'text-amber-400 font-semibold' : 'text-gray-300'" class="text-sm">
                        {{ product.stockQuantity }}
                      </span>
                    </td>
                    <td class="py-4 px-5 text-center">
                      @if (product.isActive) {
                        <span class="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Aktif
                        </span>
                      } @else {
                        <span class="inline-flex items-center gap-1 text-xs font-medium text-red-400 bg-red-500/10 px-2.5 py-1 rounded-lg">
                          <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span> Pasif
                        </span>
                      }
                    </td>
                    <td class="py-4 px-5 text-right">
                      <div class="flex items-center justify-end gap-2">
                        <button (click)="startEdit(product)" title="D\xFCzenle"
                          class="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                        </button>
                        <button (click)="toggleActive(product)" [title]="product.isActive ? 'Pasifle\u015Ftir' : 'Aktifle\u015Ftir'"
                          [class]="product.isActive ? 'hover:text-red-400' : 'hover:text-emerald-400'"
                          class="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400">
                          @if (product.isActive) {
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
                          } @else {
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                          }
                        </button>
                      </div>
                    </td>
                  </tr>
                } @else {
                  <!-- Inline Edit Row -->
                  <tr class="border-b border-blue-800/30 bg-blue-900/10">
                    <td colspan="7" class="py-4 px-5">
                      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div>
                          <label class="block text-xs text-gray-400 mb-1">SKU</label>
                          <input [(ngModel)]="editProduct.sku" type="text"
                            class="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2 px-3 text-white text-sm focus:border-blue-500 outline-none">
                        </div>
                        <div>
                          <label class="block text-xs text-gray-400 mb-1">\xDCr\xFCn Ad\u0131</label>
                          <input [(ngModel)]="editProduct.name" type="text"
                            class="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2 px-3 text-white text-sm focus:border-blue-500 outline-none">
                        </div>
                        <div>
                          <label class="block text-xs text-gray-400 mb-1">Fiyat ($)</label>
                          <input [(ngModel)]="editProduct.unitPrice" type="number" step="0.01"
                            class="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2 px-3 text-white text-sm focus:border-blue-500 outline-none">
                        </div>
                        <div>
                          <label class="block text-xs text-gray-400 mb-1">Stok</label>
                          <input [(ngModel)]="editProduct.stockQuantity" type="number" min="0"
                            class="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2 px-3 text-white text-sm focus:border-blue-500 outline-none">
                        </div>
                      </div>
                      <div class="flex justify-end gap-2 mt-3">
                        <button (click)="cancelEdit()"
                          class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded-lg transition-colors">\u0130ptal</button>
                        <button (click)="submitEdit(product.id)" [disabled]="isSaving()"
                          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors disabled:opacity-50">Kaydet</button>
                      </div>
                    </td>
                  </tr>
                }
              }
            </tbody>
          </table>
        </div>

        <!-- Count Footer -->
        <div class="px-5 py-3 border-t border-gray-800 text-xs text-gray-500">
          Toplam {{ filteredProducts.length }} \xFCr\xFCn g\xF6steriliyor
        </div>
      </div>
    }

  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogList, { className: "CatalogList", filePath: "app/features/corporate/catalog/catalog-list/catalog-list.ts", lineNumber: 13 });
})();
export {
  CatalogList
};
//# sourceMappingURL=chunk-B6FHNQOQ.mjs.map
